import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
// Temporarily disable ViewHelper import to fix initialization
// import { ViewHelper } from 'three/examples/jsm/helpers/ViewHelper.js';

// Global state
let state = {
    camera: null,
    scene: null,
    renderer: null,
    model: null,
    lights: {},
    zoom: 1,
    currentModelType: 'Default Torus Knot',
    presets: JSON.parse(localStorage.getItem('viewerPresets') || '{}'),
    lightingMode: 'basic', // 'basic' or 'complex'
    materialMode: 'default', // 'default' or 'complex'
    transparencyMode: 'standard', // 'standard', 'threshold', 'wboit', 'advanced', 'dithered', 'convex'
    surfaceExtractionMode: 'none', // 'none', 'convex', 'raycast', 'alpha' (future WASM), 'meshlab' (future)
    surfaceExtractionEnabled: false, // Enable/disable surface extraction
    alphaValue: 0.1, // Alpha parameter for future alpha shape extraction
    raycastSamples: 16, // Ray samples per face for ray casting
    visibilityThreshold: 0.6, // Visibility threshold for external surface detection
    maxRayDistance: 10, // Maximum ray distance for visibility testing
    // Pitch, Yaw, Roll rotation values (in addition to X, Y, Z)
    modelYaw: 0,    // Rotation around Y-axis (turning left/right)
    modelPitch: 0,  // Rotation around X-axis (nodding up/down)  
    modelRoll: 0,   // Rotation around Z-axis (tilting left/right)
    guideLines: [{
        id: 0,
        thickness: 5,
        colour: '#FFFF00',
        transparency: 0.5,
        angle: 0,
        posY: 0
    }],
    // 3D Orientation Widget
    orientationWidget: {
        enabled: true,
        size: { width: 120, height: 120 },
        position: { x: 10, y: 50 },
        camera: null,
        scene: null,
        axesHelper: null,
        compass: null,
        lastModelRotation: { x: 0, y: 0, z: 0 }
    },
    // Light display mode: 'arrows' or 'fans'
    lightDisplayMode: 'arrows',
    // Light direction state for each light (true = inward, false = outward)
    leftLightDirectionIn: true,
    rightLightDirectionIn: true
};

let mouseControls = {
    isDragging: false,
    isLeftButton: false,
    isRightButton: false,
    isCtrlDrag: false,
    previousMousePosition: { x: 0, y: 0 }
};

// ----------------------------------------------------------------
// 10. Initialization
function formatNumber(num) {
    return parseFloat(num).toFixed(2);
}


function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

function degToRad(deg) {
    return deg * (Math.PI / 180);
}

function safeSetValue(id, value) {
    const el = document.getElementById(id);
    if (el) {
        el.value = value;
    } else {
        console.warn(`Element with ID '${id}' not found for safeSetValue.`);
    }
}

function showUploadStatus(message, type = 'info') {
    const statusEl = document.getElementById('uploadStatus');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.className = `upload-status ${type}`;
        
        // Clear status after appropriate time based on type
        const clearTime = type === 'loading' ? 0 : (type === 'error' ? 5000 : 3000);
        if (clearTime > 0) {
            setTimeout(() => {
                // Only clear if the message hasn't changed (avoid clearing newer messages)
                if (statusEl.textContent === message) {
                    statusEl.textContent = '';
                    statusEl.className = 'upload-status';
                }
            }, clearTime);
        }
    }
}

function safeAddEventListener(id, event, handler) {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener(event, handler);
        console.log(`Event listener added: ${id} -> ${event}`);
    } else {
        console.warn(`Element with ID '${id}' not found for safeAddEventListener.`);
    }
}

// ----------------------------------------------------------------
// ControlSync - Global UI Control Synchronization System

/**
 * ControlSync - Modular synchronization system for UI controls
 * 
 * Features:
 * - Registry system tracks all synchronized control pairs
 * - Error handling for missing elements
 * - Debug/logging capabilities
 * - Support for different value types (float, int, string)
 * - Custom validation and callbacks
 * - Backward compatibility with existing sync functions
 * 
 * Usage Examples:
 * - controlSync.register('slider1', 'input1') // Basic sync
 * - syncIntegerControls('samples', 'samplesNum') // Integer values
 * - syncControls(element1, element2, { customValidator: fn }) // Advanced
 * - window.testControlSync() // Debug in browser console
 */
class ControlSync {
    constructor(options = {}) {
        this.registry = new Map(); // Track all synchronized control pairs
        this.debug = options.debug || false;
        this.errorHandler = options.errorHandler || this.defaultErrorHandler;
        
        if (this.debug) {
            console.log('ControlSync initialized with debug mode');
        }
    }
    
    /**
     * Register and synchronize two controls
     * @param {string|HTMLElement} primary - Primary control (ID or element)
     * @param {string|HTMLElement} secondary - Secondary control (ID or element)  
     * @param {Object} options - Configuration options
     */
    register(primary, secondary, options = {}) {
        try {
            // Resolve elements
            const primaryEl = typeof primary === 'string' ? document.getElementById(primary) : primary;
            const secondaryEl = typeof secondary === 'string' ? document.getElementById(secondary) : secondary;
            
            if (!primaryEl || !secondaryEl) {
                return this.errorHandler('Missing element(s)', { 
                    primary: typeof primary === 'string' ? primary : primary?.id,
                    secondary: typeof secondary === 'string' ? secondary : secondary?.id,
                    primaryFound: !!primaryEl,
                    secondaryFound: !!secondaryEl
                });
            }
            
            // Configuration
            const config = {
                type: options.type || 'slider-number',
                valueType: options.valueType || 'float',
                customValidator: options.customValidator || null,
                beforeSync: options.beforeSync || null,
                afterSync: options.afterSync || null,
                ...options
            };
            
            // Create unique pair ID
            const pairId = `${primaryEl.id || 'el1'}_${secondaryEl.id || 'el2'}`;
            
            // Setup synchronization
            const listeners = [];
            
            // Primary → Secondary sync
            const primaryListener = (e) => this.sync(primaryEl, secondaryEl, config, 'primary-to-secondary');
            primaryEl.addEventListener('input', primaryListener);
            listeners.push({ element: primaryEl, event: 'input', listener: primaryListener });
            
            // Secondary → Primary sync  
            const secondaryListener = (e) => this.sync(secondaryEl, primaryEl, config, 'secondary-to-primary');
            secondaryEl.addEventListener('input', secondaryListener);
            listeners.push({ element: secondaryEl, event: 'input', listener: secondaryListener });
            
            // Store in registry
            this.registry.set(pairId, {
                primary: primaryEl,
                secondary: secondaryEl,
                config,
                listeners
            });
            
            if (this.debug) {
                console.log(`ControlSync: Registered pair '${pairId}'`, { config });
            }
            
            return true;
            
        } catch (error) {
            return this.errorHandler('Registration failed', { error, primary, secondary, options });
        }
    }
    
    /**
     * Get registry for debugging
     */
    getRegistry() {
        const registry = {};
        this.registry.forEach((syncPair, pairId) => {
            registry[pairId] = {
                primary: syncPair.primary.id || syncPair.primary.tagName,
                secondary: syncPair.secondary.id || syncPair.secondary.tagName,
                type: syncPair.config.type,
                valueType: syncPair.config.valueType
            };
        });
        return registry;
    }
    
    /**
     * Synchronize values between controls
     */
    sync(source, target, config, direction) {
        try {
            let value = source.value;
            
            // Custom validation
            if (config.customValidator) {
                const validationResult = config.customValidator(value, source, target);
                if (validationResult === false) return; // Skip sync
                if (typeof validationResult !== 'boolean') {
                    value = validationResult; // Use transformed value
                }
            }
            
            // Before sync callback
            if (config.beforeSync) {
                config.beforeSync(value, source, target, direction);
            }
            
            // Parse and format value
            const parsedValue = this.parseValue(value, config.valueType);
            const formattedValue = this.formatValue(parsedValue, config.valueType);
            
            // Update target if value changed
            if (target.value !== formattedValue) {
                target.value = formattedValue;
                
                // After sync callback
                if (config.afterSync) {
                    config.afterSync(parsedValue, source, target, direction);
                }
                
                if (this.debug) {
                    console.log('ControlSync sync:', {
                        direction,
                        value,
                        source: source.id || source.tagName,
                        target: target.id || target.tagName
                    });
                }
            }
                
        } catch (error) {
            this.errorHandler('Sync error', { error, source, target, direction });
        }
    }
    
    /**
     * Parse value based on type
     */
    parseValue(value, type) {
        switch (type) {
            case 'int': return parseInt(value, 10);
            case 'float': return parseFloat(value);
            case 'string': return String(value);
            default: return parseFloat(value);
        }
    }
    
    /**
     * Format value for display
     */
    formatValue(value, type) {
        if (isNaN(value)) return '';
        
        switch (type) {
            case 'int': return Math.round(value).toString();
            case 'float': return value.toString();
            case 'string': return String(value);
            default: return value.toString();
        }
    }
    
    /**
     * Default error handler
     */
    defaultErrorHandler(message, details) {
        console.error(`ControlSync Error: ${message}`, details);
        return false;
    }
    
    /**
     * Destroy all registered pairs
     */
    destroy() {
        this.registry.forEach((syncPair, pairId) => {
            syncPair.listeners.forEach(({ element, event, listener }) => {
                element.removeEventListener(event, listener);
            });
        });
        this.registry.clear();
        
        if (this.debug) {
            console.log('ControlSync: All pairs destroyed');
        }
    }
}

// Create global ControlSync instance
const controlSync = new ControlSync({ debug: false });

// Debug function for testing ControlSync (can be called from browser console)
window.testControlSync = function() {
    console.log('=== ControlSync Registry ===');
    const registry = controlSync.getRegistry();
    console.table(registry);
    console.log(`Total synchronized pairs: ${Object.keys(registry).length}`);
    
    // Test debug mode toggle
    console.log('\n=== Enabling Debug Mode ===');
    setControlSyncDebug(true);
    setTimeout(() => {
        console.log('\n=== Disabling Debug Mode ===');
        setControlSyncDebug(false);
    }, 2000);
};

// Backward-compatible wrapper functions using ControlSync

/**
 * Synchronize a slider with a number input using IDs
 * @param {string} sliderId - ID of the slider element
 * @param {string} numberId - ID of the number input element
 */
function syncSliderNumber(sliderId, numberId) {
    return controlSync.register(sliderId, numberId, {
        type: 'slider-number',
        valueType: 'float'
    });
}

/**
 * Synchronize slider and number input elements directly (for dynamic controls)
 * @param {HTMLElement} slider - Slider element
 * @param {HTMLElement} numberInput - Number input element
 */
function syncSliderNumberElements(slider, numberInput) {
    return controlSync.register(slider, numberInput, {
        type: 'slider-number',
        valueType: 'float'
    });
}

/**
 * Synchronize controls with custom configuration
 * @param {string|HTMLElement} primary - Primary control ID or element
 * @param {string|HTMLElement} secondary - Secondary control ID or element
 * @param {Object} options - Configuration options
 */
function syncControls(primary, secondary, options = {}) {
    return controlSync.register(primary, secondary, options);
}

/**
 * Synchronize integer controls (like samples, iterations)
 * @param {string} sliderId - ID of the slider element
 * @param {string} numberId - ID of the number input element
 */
function syncIntegerControls(sliderId, numberId) {
    return controlSync.register(sliderId, numberId, {
        type: 'slider-number',
        valueType: 'int'
    });
}

/**
 * Enable/disable debug mode for ControlSync
 * @param {boolean} enabled - Whether to enable debug mode
 */
function setControlSyncDebug(enabled) {
    controlSync.debug = enabled;
    if (enabled) {
        console.log('ControlSync debug mode enabled. Registry:', controlSync.getRegistry());
    }
}

// ----------------------------------------------------------------
// External Surface Extraction Functions (Hybrid Architecture)

/**
 * PHASE 1: Extract external surface using Three.js ConvexGeometry
 * This provides immediate convex hull extraction with zero dependencies
 * @param {THREE.BufferGeometry} geometry - Input geometry
 * @returns {THREE.BufferGeometry} - Convex hull geometry
 */
function extractConvexHull(geometry) {
    try {
        const points = [];
        const position = geometry.attributes.position;
        
        if (!position) {
            console.warn('Geometry has no position attribute for convex hull extraction');
            return geometry; // Return original if no position data
        }
        
        // Extract all vertices as Vector3 points
        for (let i = 0; i < position.count; i++) {
            points.push(new THREE.Vector3(
                position.getX(i),
                position.getY(i), 
                position.getZ(i)
            ));
        }
        
        // Generate convex hull
        const convexGeometry = new ConvexGeometry(points);
        console.log(`✅ Convex hull extracted: ${position.count} → ${convexGeometry.attributes.position.count} vertices`);
        
        return convexGeometry;
    } catch (error) {
        console.error('❌ Error extracting convex hull:', error);
        return geometry; // Return original geometry on error
    }
}

/**
 * PHASE 2: Extract external surface using alpha shapes (Future WASM Implementation)
 * Placeholder for advanced surface extraction via WebAssembly
 * @param {THREE.BufferGeometry} geometry - Input geometry  
 * @param {number} alpha - Alpha parameter for shape complexity
 * @returns {Promise<THREE.BufferGeometry>} - Alpha shape geometry
 */
async function extractAlphaShape(geometry, alpha = 0.1) {
    // FUTURE IMPLEMENTATION: WASM-based alpha shape extraction
    // This will provide more sophisticated external surface extraction
    // than simple convex hulls, preserving concavities while removing interior
    
    try {
        // TODO: Load and initialize WASM module
        // const wasmModule = await loadAlphaShapeWASM();
        // const result = wasmModule.extractAlphaShape(geometry, alpha);
        // return result;
        
        console.warn('⚠️ Alpha shape extraction not yet implemented - falling back to convex hull');
        return extractConvexHull(geometry);
    } catch (error) {
        console.error('❌ Error in alpha shape extraction:', error);
        return extractConvexHull(geometry); // Fallback to convex hull
    }
}

/**
 * PHASE 3: Extract external surface using MeshLabJS (Future Integration)
 * Placeholder for MeshLab-based surface reconstruction and simplification
 * @param {THREE.BufferGeometry} geometry - Input geometry
 * @param {Object} options - MeshLab processing options
 * @returns {Promise<THREE.BufferGeometry>} - Processed geometry
 */
async function extractMeshLabSurface(geometry, options = {}) {
    // FUTURE IMPLEMENTATION: MeshLabJS integration
    // This will provide access to industry-standard mesh processing algorithms:
    // - Quadric mesh simplification
    // - Poisson surface reconstruction  
    // - Ball-pivoting algorithm
    // - Advanced remeshing techniques
    
    try {
        // TODO: Initialize MeshLabJS WASM module
        // const meshlab = await initMeshLabJS();
        // const mesh = convertThreeGeometryToMeshLab(geometry);
        // const processed = meshlab.processExternalSurface(mesh, options);
        // return convertMeshLabToThreeGeometry(processed);
        
        console.warn('⚠️ MeshLabJS integration not yet implemented - falling back to convex hull');
        return extractConvexHull(geometry);
    } catch (error) {
        console.error('❌ Error in MeshLab surface extraction:', error);
        return extractConvexHull(geometry);
    }
}

/**
 * PHASE 1.5: Extract external surface using ray casting visibility analysis
 * JavaScript-only implementation using Three.js Raycaster
 * Preserves model shape while removing interior geometry
 * @param {THREE.BufferGeometry} geometry - Input geometry
 * @param {Object} options - Ray casting options
 * @returns {Promise<THREE.BufferGeometry>} - External surface geometry
 */
async function extractExternalSurfaceRaycast(geometry, options = {}) {
    console.log('🔧 Extracting external surface using ray casting...');
    
    const {
        samplesPerFace = 16,
        visibilityThreshold = 0.6,
        maxRayDistance = 10,
        chunkSize = 1000
    } = options;
    
    try {
        if (!geometry.attributes.position || !geometry.index) {
            console.warn('Geometry missing position or index data for ray casting');
            return geometry;
        }
        
        const position = geometry.attributes.position;
        const normal = geometry.attributes.normal || computeVertexNormals(geometry);
        const index = geometry.index;
        const faceCount = index.count / 3;
        
        console.log(`🔍 Analyzing ${faceCount} faces for external visibility...`);
        
        // Create temporary mesh for ray intersection testing
        const tempMaterial = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
        const tempMesh = new THREE.Mesh(geometry, tempMaterial);
        
        const externalFaces = [];
        const raycaster = new THREE.Raycaster();
        raycaster.far = maxRayDistance;
        
        // Process faces in chunks to maintain responsiveness
        for (let chunkStart = 0; chunkStart < faceCount; chunkStart += chunkSize) {
            const chunkEnd = Math.min(chunkStart + chunkSize, faceCount);
            
            for (let faceIndex = chunkStart; faceIndex < chunkEnd; faceIndex++) {
                const i = faceIndex * 3;
                
                // Get face vertices
                const a = index.getX(i);
                const b = index.getX(i + 1);
                const c = index.getX(i + 2);
                
                // Calculate face centroid and normal
                const centroid = new THREE.Vector3();
                const faceNormal = new THREE.Vector3();
                
                const va = new THREE.Vector3().fromBufferAttribute(position, a);
                const vb = new THREE.Vector3().fromBufferAttribute(position, b);
                const vc = new THREE.Vector3().fromBufferAttribute(position, c);
                
                centroid.add(va).add(vb).add(vc).divideScalar(3);
                
                // Calculate face normal
                const ab = new THREE.Vector3().subVectors(vb, va);
                const ac = new THREE.Vector3().subVectors(vc, va);
                faceNormal.crossVectors(ab, ac).normalize();
                
                // Test visibility by casting rays in hemisphere around face normal
                let visibleSamples = 0;
                
                for (let sample = 0; sample < samplesPerFace; sample++) {
                    // Generate random direction in hemisphere around face normal
                    const rayDirection = generateHemisphereDirection(faceNormal);
                    
                    // Offset ray origin slightly along normal to avoid self-intersection
                    const rayOrigin = centroid.clone().add(faceNormal.clone().multiplyScalar(0.001));
                    
                    raycaster.set(rayOrigin, rayDirection);
                    const intersections = raycaster.intersectObject(tempMesh);
                    
                    // If no intersection or distant intersection, face is exposed
                    if (intersections.length === 0 || intersections[0].distance > maxRayDistance * 0.8) {
                        visibleSamples++;
                    }
                }
                
                // Face is external if visibility score exceeds threshold
                const visibilityScore = visibleSamples / samplesPerFace;
                if (visibilityScore >= visibilityThreshold) {
                    externalFaces.push(faceIndex);
                }
            }
            
            // Yield control to prevent UI blocking
            if (chunkStart + chunkSize < faceCount) {
                await new Promise(resolve => setTimeout(resolve, 1));
            }
        }
        
        console.log(`✅ External surface analysis complete: ${externalFaces.length}/${faceCount} faces retained`);
        
        // Create new geometry with only external faces
        const result = createGeometryFromFaces(geometry, externalFaces);
        
        // Cleanup
        tempMesh.geometry.dispose();
        tempMaterial.dispose();
        
        return result;
        
    } catch (error) {
        console.error('❌ Error in ray casting surface extraction:', error);
        return extractConvexHull(geometry); // Fallback to convex hull
    }
}

/**
 * Generate random direction in hemisphere around a normal vector
 * @param {THREE.Vector3} normal - Surface normal
 * @returns {THREE.Vector3} - Random hemisphere direction
 */
function generateHemisphereDirection(normal) {
    // Generate random point on unit sphere
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    
    const direction = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
    );
    
    // Ensure direction is in hemisphere around normal
    if (direction.dot(normal) < 0) {
        direction.negate();
    }
    
    return direction;
}

/**
 * Create new geometry containing only specified faces
 * @param {THREE.BufferGeometry} geometry - Source geometry
 * @param {number[]} faceIndices - Array of face indices to include
 * @returns {THREE.BufferGeometry} - New geometry with subset of faces
 */
function createGeometryFromFaces(geometry, faceIndices) {
    const position = geometry.attributes.position;
    const normal = geometry.attributes.normal;
    const uv = geometry.attributes.uv;
    const index = geometry.index;
    
    const newVertices = [];
    const newNormals = [];
    const newUVs = [];
    const newIndices = [];
    const vertexMap = new Map();
    
    let newVertexIndex = 0;
    
    for (const faceIndex of faceIndices) {
        const i = faceIndex * 3;
        
        for (let j = 0; j < 3; j++) {
            const vertexIndex = index.getX(i + j);
            
            if (!vertexMap.has(vertexIndex)) {
                // Add new vertex
                newVertices.push(
                    position.getX(vertexIndex),
                    position.getY(vertexIndex),
                    position.getZ(vertexIndex)
                );
                
                if (normal) {
                    newNormals.push(
                        normal.getX(vertexIndex),
                        normal.getY(vertexIndex),
                        normal.getZ(vertexIndex)
                    );
                }
                
                if (uv) {
                    newUVs.push(
                        uv.getX(vertexIndex),
                        uv.getY(vertexIndex)
                    );
                }
                
                vertexMap.set(vertexIndex, newVertexIndex);
                newVertexIndex++;
            }
            
            newIndices.push(vertexMap.get(vertexIndex));
        }
    }
    
    // Create new geometry
    const newGeometry = new THREE.BufferGeometry();
    newGeometry.setAttribute('position', new THREE.Float32BufferAttribute(newVertices, 3));
    
    if (newNormals.length > 0) {
        newGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(newNormals, 3));
    } else {
        newGeometry.computeVertexNormals();
    }
    
    if (newUVs.length > 0) {
        newGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(newUVs, 2));
    }
    
    newGeometry.setIndex(newIndices);
    
    return newGeometry;
}

/**
 * Compute vertex normals for geometry without normal attributes
 * @param {THREE.BufferGeometry} geometry - Input geometry
 * @returns {THREE.BufferAttribute} - Computed normals
 */
function computeVertexNormals(geometry) {
    const clone = geometry.clone();
    clone.computeVertexNormals();
    return clone.attributes.normal;
}

/**
 * Main external surface extraction dispatcher
 * Routes to appropriate extraction method based on current mode
 * @param {THREE.BufferGeometry} geometry - Input geometry
 * @returns {Promise<THREE.BufferGeometry>} - External surface geometry
 */
async function extractExternalSurface(geometry) {
    if (!state.surfaceExtractionEnabled) {
        return geometry; // Return original if extraction disabled
    }
    
    console.log(`🔍 Extracting external surface using mode: ${state.surfaceExtractionMode}`);
    
    switch (state.surfaceExtractionMode) {
        case 'convex':
            return extractConvexHull(geometry);
            
        case 'raycast':
            return await extractExternalSurfaceRaycast(geometry, {
                samplesPerFace: state.raycastSamples || 16,
                visibilityThreshold: state.visibilityThreshold || 0.6,
                maxRayDistance: state.maxRayDistance || 10
            });
            
        case 'alpha':
            return await extractAlphaShape(geometry, state.alphaValue);
            
        case 'meshlab':
            return await extractMeshLabSurface(geometry);
            
        case 'none':
        default:
            return geometry; // No extraction
    }
}

/**
 * Apply external surface extraction to transparency workflow
 * Integrates surface extraction with existing transparency modes
 * @param {THREE.Mesh} mesh - Target mesh
 * @param {number} opacity - Transparency value
 */
async function applyExternalSurfaceTransparency(mesh, opacity) {
    try {
        // Step 1: Extract external surface if enabled
        if (state.surfaceExtractionEnabled && state.surfaceExtractionMode !== 'none') {
            console.log('🔄 Processing external surface extraction...');
            
            // Extract external surface geometry
            const externalSurface = await extractExternalSurface(mesh.geometry);
            
            // Replace geometry with external surface
            if (externalSurface !== mesh.geometry) {
                mesh.geometry.dispose(); // Clean up original geometry
                mesh.geometry = externalSurface;
                console.log('✅ Geometry replaced with external surface');
            }
        }
        
        // Step 2: Apply transparency using existing system
        applyThresholdTransparency(mesh.material, opacity);
        
    } catch (error) {
        console.error('❌ Error in external surface transparency:', error);
        // Fallback to standard transparency on error
        applyThresholdTransparency(mesh.material, opacity);
    }
}

// Helper function to show/hide parameter controls based on extraction mode
function updateAlphaParameterVisibility() {
    const alphaGroup = document.getElementById('alphaValueGroup');
    const raycastGroup = document.getElementById('raycastParametersGroup');
    const visibilityGroup = document.getElementById('visibilityThresholdGroup');
    
    if (alphaGroup) {
        const showAlpha = state.surfaceExtractionEnabled && state.surfaceExtractionMode === 'alpha';
        alphaGroup.style.display = showAlpha ? 'block' : 'none';
    }
    
    if (raycastGroup) {
        const showRaycast = state.surfaceExtractionEnabled && state.surfaceExtractionMode === 'raycast';
        raycastGroup.style.display = showRaycast ? 'block' : 'none';
    }
    
    if (visibilityGroup) {
        const showVisibility = state.surfaceExtractionEnabled && state.surfaceExtractionMode === 'raycast';
        visibilityGroup.style.display = showVisibility ? 'block' : 'none';
    }
}

function updateLightingModeButtons() {
    const basicButton = document.getElementById('basicModeButton');
    const complexButton = document.getElementById('complexModeButton');
    const leftArrow = document.getElementById('left-direction-arrow');
    const rightArrow = document.getElementById('right-direction-arrow');
    const lightPad = document.getElementById('lightPad');
    
    if (basicButton && complexButton) {
        if (state.lightingMode === 'basic') {
            // BASIC selected - use CSS active class
            basicButton.classList.add('active');
            complexButton.classList.remove('active');
        } else {
            // COMPLEX selected - use CSS active class  
            complexButton.classList.add('active');
            basicButton.classList.remove('active');
        }
        
        // Update light display elements based on current display mode (arrows vs fans)
        updateLightDisplayElements();
    }
}

// ----------------------------------------------------------------
// 2. Material Update Functions
function updateMaterialColour(colorValue) {
    console.log('Updating material color to:', colorValue);
    
    if (state.model) {
        // Handle both single mesh and group objects
        if (state.model.material) {
            // Single mesh
            updateMaterialColorForMesh(state.model, colorValue);
        } else if (state.model.children) {
            // Group of meshes (like loaded OBJ)
            state.model.traverse((child) => {
                if (child.isMesh && child.material) {
                    updateMaterialColorForMesh(child, colorValue);
                }
            });
        }
    }
}

function updateMaterialColorForMesh(mesh, colorValue) {
    if (mesh.material._isWBOIT || mesh.material._isThreshold) {
        // Update enhanced material color (WBOIT or Threshold)
        mesh.material.color.setStyle(colorValue);
        console.log('Color set on enhanced mesh:', mesh.material.color);
    } else {
        // Standard material
        mesh.material.color.setStyle(colorValue);
        console.log('Color set on standard mesh:', mesh.material.color);
    }
}

function updateMaterialProperty(property, value) {
    console.log(`Updating material ${property} to:`, value);
    
    if (state.model) {
        if (state.model.material) {
            // Single mesh
            updateMaterialPropertyForMesh(state.model, property, value);
        } else if (state.model.children) {
            // Group of meshes
            state.model.traverse((child) => {
                if (child.isMesh && child.material) {
                    updateMaterialPropertyForMesh(child, property, value);
                }
            });
        }
    }
}

function updateMaterialPropertyForMesh(mesh, property, value) {
    if (mesh.material._isWBOIT || mesh.material._isThreshold) {
        // Update enhanced material properties (WBOIT or Threshold)
        mesh.material[property] = value;
        // Also update original material for consistency
        if (mesh.material._originalMaterial) {
            mesh.material._originalMaterial[property] = value;
        }
    } else {
        // Standard material
        mesh.material[property] = value;
    }
}

async function updateMaterialTransparency(opacity) {
    console.log('Updating material transparency to:', opacity);
    
    if (state.model) {
        if (state.model.material) {
            // Single mesh
            await applyAdvancedTransparency(state.model, opacity);
        } else if (state.model.children) {
            // Group of meshes
            const promises = [];
            state.model.traverse((child) => {
                if (child.isMesh && child.material) {
                    promises.push(applyAdvancedTransparency(child, opacity));
                }
            });
            await Promise.all(promises);
        }
    }
}

async function applyAdvancedTransparency(mesh, opacity) {
    if (!mesh.material) return;
    
    if (opacity >= 1.0) {
        // Fully opaque - use standard rendering
        mesh.material.transparent = false;
        mesh.material.opacity = 1.0;
        mesh.material.side = THREE.FrontSide;
        mesh.material.depthWrite = true;
        mesh.material.alphaTest = 0;
        mesh.material.blending = THREE.NormalBlending;
    } else if (opacity <= 0.05) {
        // Nearly invisible - optimize performance
        mesh.material.opacity = 0;
        mesh.material.transparent = true;
        mesh.material.depthWrite = false;
    } else {
        // Apply transparency based on selected mode
        const transparencyMode = state.transparencyMode || 'advanced';
        
        switch (transparencyMode) {
            case 'external-surface':
                await applyExternalSurfaceTransparency(mesh, opacity);
                break;
            case 'threshold':
                applyThresholdTransparency(mesh, opacity);
                break;
            case 'wboit':
                applyWBOITTransparency(mesh, opacity);
                break;
            case 'standard':
                applyStandardTransparency(mesh, opacity);
                break;
            case 'advanced':
                applyAdvancedTransparencyMode(mesh, opacity);
                break;
            case 'dithered':
                applyDitheredTransparency(mesh, opacity);
                break;
            default:
                applyThresholdTransparency(mesh, opacity); // Default to threshold for cleanest results
        }
    }
    
    mesh.material.needsUpdate = true;
}

function applyThresholdTransparency(mesh, opacity) {
    // UNIFIED SURFACE: Optimized transparency for clean high-poly appearance
    // Uses proper transparency with enhanced settings for unified surface look
    mesh.material.transparent = true;
    mesh.material.opacity = opacity;
    
    // Key settings for unified surface appearance:
    mesh.material.side = THREE.FrontSide; // Only front faces for clean silhouette
    mesh.material.depthWrite = false; // Required for proper transparency blending
    mesh.material.depthTest = true; // Proper occlusion
    
    // Enhanced blending for cleaner appearance
    if (opacity < 0.1) {
        // Very transparent - use additive for ethereal effect
        mesh.material.blending = THREE.AdditiveBlending;
        mesh.material.opacity = opacity * 0.5; // Reduce intensity for additive
    } else {
        // Normal transparency with optimized settings
        mesh.material.blending = THREE.NormalBlending;
        mesh.material.premultipliedAlpha = true; // Better color accuracy
    }
    
    // Clear any alpha test artifacts
    mesh.material.alphaTest = 0;
    
    // Mark as threshold mode for unified transparency
    mesh.material._isThreshold = true;
    if (!mesh.material._originalMaterial) {
        mesh.material._originalMaterial = mesh.material.clone();
    }
    
    mesh.material.needsUpdate = true;
}

function applyStandardTransparency(mesh, opacity) {
    // Original method - simple opacity with potential sorting issues
    mesh.material.transparent = true;
    mesh.material.opacity = opacity;
    mesh.material.side = THREE.FrontSide;
    mesh.material.depthWrite = true;
    mesh.material.blending = THREE.NormalBlending;
    mesh.material.alphaTest = 0;
    mesh.material.premultipliedAlpha = false;
}

function applyWBOITTransparency(mesh, opacity) {
    // WBOIT transparency - treats entire surface as unified entity
    mesh.material.transparent = true;
    mesh.material.opacity = opacity;
    mesh.material.side = THREE.DoubleSide;
    mesh.material.depthWrite = false;
    
    // Apply Weighted Blended OIT technique for unified surface treatment
    applyWBOITMaterial(mesh, opacity);
}

function applyAdvancedTransparencyMode(mesh, opacity) {
    // Advanced transparency optimized for high-poly models (non-WBOIT)
    mesh.material.transparent = true;
    mesh.material.opacity = opacity;
    mesh.material.side = THREE.DoubleSide; // Render both sides for uniform appearance
    mesh.material.depthWrite = false; // Critical for proper blending
    
    // Adaptive blending based on opacity level
    if (opacity < 0.3) {
        // Very transparent - additive blending for ethereal effect
        mesh.material.blending = THREE.AdditiveBlending;
        mesh.material.opacity = opacity * 0.7; // Tone down for additive
    } else if (opacity < 0.7) {
        // Medium transparency - enhanced normal blending
        mesh.material.blending = THREE.NormalBlending;
        mesh.material.premultipliedAlpha = true; // Better color accuracy
    } else {
        // Slightly transparent - alpha test for crisp edges
        mesh.material.blending = THREE.NormalBlending;
        mesh.material.alphaTest = 0.05; // Clean up edge artifacts
    }
}

function applyWBOITMaterial(mesh, opacity) {
    // If already WBOIT material, just update opacity and alpha test
    if (mesh.material._isWBOIT) {
        // Update alpha test threshold based on opacity
        mesh.material.alphaTest = Math.max(0.01, 1.0 - opacity);
        mesh.material.needsUpdate = true;
        return;
    }
    
    // UNIFIED SURFACE APPROACH: Use alpha test for clean silhouette
    // This eliminates individual face artifacts by treating the model as a solid shape
    const originalMaterial = mesh.material;
    
    // Configure for unified surface appearance
    mesh.material.transparent = false; // Use alpha test instead of blending
    mesh.material.alphaTest = Math.max(0.01, 1.0 - opacity); // Convert opacity to threshold
    
    // Critical settings for clean appearance:
    mesh.material.side = THREE.FrontSide; // Only front faces for clean silhouette
    mesh.material.depthWrite = true; // Proper depth testing
    mesh.material.depthTest = true; // Proper occlusion
    
    // Reset any blending artifacts
    mesh.material.blending = THREE.NormalBlending;
    mesh.material.premultipliedAlpha = false;
    
    mesh.material.needsUpdate = true;
    
    // Mark as enhanced for unified transparency
    mesh.material._isWBOIT = true;
    mesh.material._originalMaterial = originalMaterial;
}

function applyDitheredTransparency(mesh, opacity) {
    // Dithered transparency - good for uniform appearance on complex models
    mesh.material.transparent = false; // Use alpha test instead
    mesh.material.alphaTest = 1.0 - opacity; // Convert opacity to alpha threshold
    mesh.material.side = THREE.FrontSide;
    mesh.material.depthWrite = true; // Maintain depth for correct occlusion
    mesh.material.blending = THREE.NormalBlending;
    
    // Add dithering pattern via shader modification
    if (!mesh.material._originalOnBeforeCompile) {
        mesh.material._originalOnBeforeCompile = mesh.material.onBeforeCompile;
        
        mesh.material.onBeforeCompile = function(shader) {
            // Call original if it exists
            if (mesh.material._originalOnBeforeCompile) {
                mesh.material._originalOnBeforeCompile(shader);
            }
            
            // Add dithering to fragment shader
            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <alphatest_fragment>',
                `
                #ifdef USE_ALPHATEST
                    // Dithered alpha test for smoother transparency
                    vec2 screenPos = gl_FragCoord.xy;
                    float dither = fract(sin(dot(screenPos, vec2(12.9898, 78.233))) * 43758.5453);
                    
                    // Create 4x4 Bayer matrix pattern
                    vec2 bayerCoord = mod(screenPos, 4.0);
                    float bayerValue = 0.0;
                    if (bayerCoord.x < 1.0) {
                        if (bayerCoord.y < 1.0) bayerValue = 0.0/16.0;
                        else if (bayerCoord.y < 2.0) bayerValue = 8.0/16.0;
                        else if (bayerCoord.y < 3.0) bayerValue = 2.0/16.0;
                        else bayerValue = 10.0/16.0;
                    } else if (bayerCoord.x < 2.0) {
                        if (bayerCoord.y < 1.0) bayerValue = 12.0/16.0;
                        else if (bayerCoord.y < 2.0) bayerValue = 4.0/16.0;
                        else if (bayerCoord.y < 3.0) bayerValue = 14.0/16.0;
                        else bayerValue = 6.0/16.0;
                    } else if (bayerCoord.x < 3.0) {
                        if (bayerCoord.y < 1.0) bayerValue = 3.0/16.0;
                        else if (bayerCoord.y < 2.0) bayerValue = 11.0/16.0;
                        else if (bayerCoord.y < 3.0) bayerValue = 1.0/16.0;
                        else bayerValue = 9.0/16.0;
                    } else {
                        if (bayerCoord.y < 1.0) bayerValue = 15.0/16.0;
                        else if (bayerCoord.y < 2.0) bayerValue = 7.0/16.0;
                        else if (bayerCoord.y < 3.0) bayerValue = 13.0/16.0;
                        else bayerValue = 5.0/16.0;
                    }
                    
                    float alpha = diffuseColor.a;
                    if (alpha < alphaTest + (bayerValue - 0.5) * 0.2) discard;
                #endif
                `
            );
        };
    }
}

// ----------------------------------------------------------------
// 3. File Handling & Model Loading Helpers
function validateFile(file) {
    if (!file) {
        throw new Error('No file provided');
    }
    
    const validExtensions = ['.obj', '.stl', '.gltf', '.glb', '.dae'];
    const fileName = file.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileName.endsWith(ext));
    
    if (!isValid) {
        throw new Error(`Unsupported file format: "${file.name}". Currently supported: .obj, .stl, .gltf, .glb, .dae`);
    }
    
    // File size checks
    
    
    
    
    console.log(`File validated: ${file.name}, size: ${(file.size / 1024).toFixed(2)}KB`);
    return fileName.split('.').pop();
}

function resetModelControls() {
    ['modelRotX', 'modelRotY', 'modelRotZ', 'modelRotXNum', 'modelRotYNum', 'modelRotZNum',
     'modelYaw', 'modelPitch', 'modelRoll', 'modelYawNum', 'modelPitchNum', 'modelRollNum'].forEach(id => {
        safeSetValue(id, 0);
    });
    
    // Reset state values for Pitch, Yaw, Roll
    state.modelYaw = 0;
    state.modelPitch = 0;
    state.modelRoll = 0;
    // SUNSET: Zoom reset removed
    /*
    ['modelZoom', 'modelZoomNum'].forEach(id => {
        safeSetValue(id, 1);
    });
    */
}

function resetMaterialControlsToDefault() {
    // Reset UI controls to match default material
    safeSetValue('materialColor', '#4CAF50');
    safeSetValue('metalness', 0.1);
    safeSetValue('metalnessNum', 0.1);
    safeSetValue('roughness', 0.8);
    safeSetValue('roughnessNum', 0.8);
    safeSetValue('transparency', 1.0);
    safeSetValue('transparencyNum', 1.0);
}

function handleFileUpload(file) {
    try {
        const extension = validateFile(file);
        const url = URL.createObjectURL(file);
        
        // Set up upload timeout
        const uploadTimeout = setTimeout(() => {
            showUploadStatus('Upload timed out. Please try again.', 'error');
            URL.revokeObjectURL(url);
        }, 30000); // 30 second timeout
        
        const cleanupAndSuccess = (filename) => {
            clearTimeout(uploadTimeout);
            resetMaterialControlsToDefault();
            showUploadStatus(`✅ ${filename} loaded successfully!`, 'success');
        };
        
        const cleanupAndError = (message) => {
            clearTimeout(uploadTimeout);
            showUploadStatus(message, 'error');
            URL.revokeObjectURL(url);
        };
        
        switch (extension) {
            case 'obj':
                loadOBJModel(url, file.name, cleanupAndSuccess, cleanupAndError);
                break;
            case 'stl':
                loadSTLModel(url, file.name, cleanupAndSuccess, cleanupAndError);
                break;
            case 'gltf':
            case 'glb':
                loadGLTFModel(url, file.name, cleanupAndSuccess, cleanupAndError);
                break;
            case 'dae':
                loadDAEModel(url, file.name, cleanupAndSuccess, cleanupAndError);
                break;
            default:
                clearTimeout(uploadTimeout);
                showUploadStatus('Currently only .obj, .stl, .gltf, .glb, and .dae files are supported', 'error');
                URL.revokeObjectURL(url);
        }
    } catch (error) {
        showUploadStatus(error.message, 'error');
    }
}

// ----------------------------------------------------------------
// 4. Mouse Event Handlers
// ----------------------------------------------------------------
function handleMouseDown(e) {
    mouseControls.isDragging = true;
    // SUNSET: isCtrlDrag removed - no longer needed since Ctrl+Click functionality sunset
    // mouseControls.isCtrlDrag = e.ctrlKey;
    mouseControls.previousMousePosition = { x: e.clientX, y: e.clientY };

    // SUNSET: Control schemes now identical - both use Left=Model Rotate, Right=Pan Camera
    mouseControls.isLeftButton = e.button === 0; // Left for Model Rotate
    mouseControls.isRightButton = e.button === 2; // Right for Pan Camera
    
    /* SUNSET: Previous control scheme differences
    if (state.controlScheme === 'standard') {
        mouseControls.isLeftButton = e.button === 0; // Left for Orbit or Model Rotate
        mouseControls.isRightButton = e.button === 2; // Right for Pan
    } else { // legacy
        mouseControls.isLeftButton = e.button === 0; // Left for Model Rotate
        mouseControls.isRightButton = e.button === 2; // Right for Camera Orbit
    }
    */
}

function handleMouseMove(e) {
    if (!mouseControls.isDragging) return;

    const deltaMove = {
        x: e.clientX - mouseControls.previousMousePosition.x,
        y: e.clientY - mouseControls.previousMousePosition.y
    };

    // SUNSET: Ctrl+Drag functionality removed - now left-click always rotates model
    // Both control schemes now use the same simplified behavior
    if (mouseControls.isLeftButton && state.model) {
        // Left click: Rotate model (was previously Ctrl+Left or Legacy Left)
        const rotSpeed = 0.005;

        // Get camera's local right and up vectors in world space
        const cameraRight = new THREE.Vector3().setFromMatrixColumn(state.camera.matrixWorld, 0);
        const cameraUp = new THREE.Vector3().setFromMatrixColumn(state.camera.matrixWorld, 1);

        // Quaternion for horizontal rotation (around camera's UP vector)
        const horizontalRot = new THREE.Quaternion().setFromAxisAngle(cameraUp, deltaMove.x * rotSpeed);

        // Quaternion for vertical rotation (around camera's RIGHT vector)
        const verticalRot = new THREE.Quaternion().setFromAxisAngle(cameraRight, deltaMove.y * rotSpeed);

        // Apply the rotations to the model's quaternion
        state.model.quaternion.premultiply(horizontalRot);
        state.model.quaternion.premultiply(verticalRot);

    } else if (mouseControls.isRightButton) {
        // Right click: Pan camera (same for both control schemes)
        const panSpeed = 0.01;
        const vector = new THREE.Vector3(deltaMove.x * panSpeed, -deltaMove.y * panSpeed, 0);
        vector.applyQuaternion(state.camera.quaternion);
        state.camera.position.add(vector);
    }
    
    /* SUNSET: Camera orbit functionality removed
    // Previous standard mode camera orbit:
    const spherical = new THREE.Spherical();
    spherical.setFromVector3(state.camera.position);
    spherical.theta -= deltaMove.x * 0.01;
    spherical.phi += deltaMove.y * 0.01;
    spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
    state.camera.position.setFromSpherical(spherical);
    state.camera.lookAt(0, 0, 0);
    */
    
    mouseControls.previousMousePosition = { x: e.clientX, y: e.clientY };
    updateCameraInfo();
}

function handleMouseUp() {
    mouseControls.isDragging = false;
    mouseControls.isLeftButton = false;
    mouseControls.isRightButton = false;
    mouseControls.isCtrlDrag = false;
}

function handleMouseWheel(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1.1 : 0.9;
    state.camera.position.multiplyScalar(delta);
    
    const distance = state.camera.position.length();
    if (distance < 1) state.camera.position.normalize().multiplyScalar(1);
    if (distance > 50) state.camera.position.normalize().multiplyScalar(50);
    
    updateCameraInfo();
}

function handleContextMenu(e) {
    e.preventDefault();
}

// ----------------------------------------------------------------
// 5. Core Model/Camera Interaction Functions
// ----------------------------------------------------------------
function updateCameraInfo() {
    if (state.camera && state.model) {
        const pos = state.camera.position;
        const rot = state.camera.rotation;
        const modelRot = state.model.rotation;
        const distance = state.camera.position.length();
        state.zoom = 5 / distance;
        
        // Update camera position controls
        safeSetValue('posX', formatNumber(pos.x));
        safeSetValue('posY', formatNumber(pos.y));
        safeSetValue('posZ', formatNumber(pos.z));
        safeSetValue('posXNum', formatNumber(pos.x));
        safeSetValue('posYNum', formatNumber(pos.y));
        safeSetValue('posZNum', formatNumber(pos.z));
        
        // SUNSET: Camera rotation controls - commented out but calculations preserved
        const rotXDeg = radToDeg(rot.x);
        const rotYDeg = radToDeg(rot.y);
        const rotZDeg = radToDeg(rot.z);
        
        // Update camera rotation controls
        safeSetValue('rotX', Math.round(rotXDeg));
        safeSetValue('rotY', Math.round(rotYDeg));
        safeSetValue('rotZ', Math.round(rotZDeg));
        safeSetValue('rotXNum', Math.round(rotXDeg));
        safeSetValue('rotYNum', Math.round(rotYDeg));
        safeSetValue('rotZNum', Math.round(rotZDeg));
        
        // Update model rotation controls
        const modelRotXDeg = radToDeg(modelRot.x);
        const modelRotYDeg = radToDeg(modelRot.y);
        const modelRotZDeg = radToDeg(modelRot.z);
        
        safeSetValue('modelRotX', Math.round(modelRotXDeg));
        safeSetValue('modelRotY', Math.round(modelRotYDeg));
        safeSetValue('modelRotZ', Math.round(modelRotZDeg));
        safeSetValue('modelRotXNum', Math.round(modelRotXDeg));
        safeSetValue('modelRotYNum', Math.round(modelRotYDeg));
        safeSetValue('modelRotZNum', Math.round(modelRotZDeg));
        
        // SUNSET: Zoom control update removed
        /*
        const zoom = state.model.scale.x;
        safeSetValue('modelZoom', formatNumber(zoom));
        safeSetValue('modelZoomNum', formatNumber(zoom));
        */
        
        // SUNSET: Zoom display removed from VIEW STATUS
        /*
        const infoEl = document.getElementById('info');
        if (infoEl) {
            infoEl.innerHTML = `
                <h4>VIEW</h4>
                <p><b>Camera Position:</b> (${formatNumber(pos.x)}, ${formatNumber(pos.y)}, ${formatNumber(pos.z)})</p>
                <p><b>Model Rotation:</b> (${formatNumber(modelRotXDeg)}°, ${formatNumber(modelRotYDeg)}°, ${formatNumber(modelRotZDeg)}°)</p>
                <p><b>Zoom:</b> ${formatNumber(zoom)}</p>
                <p><b>Model:</b> ${state.currentModelType}</p>
            `;
            // SUNSET: Camera Rotation display removed from VIEW STATUS
            // <p><b>Camera Rotation:</b> (${formatNumber(rotXDeg)}°, ${formatNumber(rotYDeg)}°, ${formatNumber(rotZDeg)}°)</p>
        }
        */
        // Update original VIEW panel (hidden but preserved for compatibility)
        const infoEl = document.getElementById('info');
        if (infoEl) {
            infoEl.innerHTML = `
                <h4>VIEW</h4>
                <p><span class="info-label">Camera Position:</span><span class="info-values-container"><span class="info-value-box">${Math.round(pos.x)}</span><span class="info-value-box">${Math.round(pos.y)}</span><span class="info-value-box">${Math.round(pos.z)}</span></span></p>
                <p><span class="info-label">Model Rotation:</span><span class="info-values-container"><span class="info-value-box">${Math.round(modelRotXDeg)}°</span><span class="info-value-box">${Math.round(modelRotYDeg)}°</span><span class="info-value-box">${Math.round(modelRotZDeg)}°</span></span></p>
                <p><span class="info-label">Model:</span><span class="info-values-container"><span class="model-name-box">${state.currentModelType}</span></span></p>
            `;
        }
        
        // Update new horizontal data display
        updateHorizontalDataDisplay(pos, modelRot, modelRotXDeg, modelRotYDeg, modelRotZDeg, rot, rotXDeg, rotYDeg, rotZDeg);
    }
}

function updateHorizontalDataDisplay(pos, modelRot, modelRotXDeg, modelRotYDeg, modelRotZDeg, camRot, camRotXDeg, camRotYDeg, camRotZDeg) {
    // Update Model Rotation display with three-column layout
    const modelRotationDisplay = document.getElementById('model-rotation-display');
    if (modelRotationDisplay) {
        modelRotationDisplay.innerHTML = `<span>${Math.round(modelRotXDeg)}°</span><span>${Math.round(modelRotYDeg)}°</span><span>${Math.round(modelRotZDeg)}°</span>`;
    }
    
    // Update Camera Position display with three-column layout
    const cameraPositionDisplay = document.getElementById('camera-position-display');
    if (cameraPositionDisplay) {
        cameraPositionDisplay.innerHTML = `<span>${Math.round(pos.x)}</span><span>${Math.round(pos.y)}</span><span>${Math.round(pos.z)}</span>`;
    }
    
    // Update Camera Rotation display with three-column layout (restored from SUNSET)
    const cameraRotationDisplay = document.getElementById('camera-rotation-display');
    if (cameraRotationDisplay) {
        cameraRotationDisplay.innerHTML = `<span>${Math.round(camRotXDeg)}°</span><span>${Math.round(camRotYDeg)}°</span><span>${Math.round(camRotZDeg)}°</span>`;
    }
    
    // Update Model Attitude display with three-column layout (Yaw/Pitch/Roll)
    const modelAttitudeDisplay = document.getElementById('model-attitude-display');
    if (modelAttitudeDisplay) {
        const yaw = state.modelYaw || 0;
        const pitch = state.modelPitch || 0;
        const roll = state.modelRoll || 0;
        modelAttitudeDisplay.innerHTML = `<span>${Math.round(yaw)}°</span><span>${Math.round(pitch)}°</span><span>${Math.round(roll)}°</span>`;
    }
    
    // SUNSET: Model Name display removed
    // const modelNameDisplay = document.getElementById('model-name-display');
    // if (modelNameDisplay) {
    //     modelNameDisplay.textContent = state.currentModelType;
    // }
}

function centerAndScaleModel(object) {
    // Reset any previous transformations first
    object.position.set(0, 0, 0);
    object.rotation.set(0, 0, 0);
    object.scale.set(1, 1, 1);
    
    // Force update to ensure accurate bounding box calculation
    object.updateMatrixWorld(true);
    
    // Calculate bounding box after reset
    const box = new THREE.Box3().setFromObject(object);
    
    // Check if box is valid
    if (box.isEmpty()) {
        console.warn('Model has empty bounding box, using default scaling');
        return;
    }
    
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    // Center the object at origin by adjusting position
    object.position.copy(center).negate();
    
    // Scale to fit nicely in view
    const maxDimension = Math.max(size.x, size.y, size.z);
    if (maxDimension > 0) {
        const targetSize = 2.5; // Optimal size for visibility
        const scale = targetSize / maxDimension;
        object.scale.setScalar(scale);
        console.log(`Model scaled by factor: ${scale.toFixed(3)}, original size: ${maxDimension.toFixed(3)}`);
    }
    
    // Final position adjustment to ensure perfect centering
    object.updateMatrixWorld(true);
    const finalBox = new THREE.Box3().setFromObject(object);
    const finalCenter = finalBox.getCenter(new THREE.Vector3());
    object.position.sub(finalCenter);
}

function applyPitchYawRoll() {
    if (!state.model) return;
    
    // Create a new Euler rotation in the order Yaw→Pitch→Roll (Y→X→Z)
    // This creates combined rotations that behave like aircraft controls
    const euler = new THREE.Euler(
        degToRad(state.modelPitch), // X-axis (pitch - nodding up/down)
        degToRad(state.modelYaw),   // Y-axis (yaw - turning left/right)
        degToRad(state.modelRoll),  // Z-axis (roll - tilting left/right)
        'YXZ'  // Apply in order: Yaw→Pitch→Roll
    );
    
    // Apply the compound rotation to the model
    // Note: This will override any individual X,Y,Z rotations when used
    state.model.setRotationFromEuler(euler);
}

function focusModelOnScreen() {
    if (!state.model || !state.camera) return;

    const box = new THREE.Box3().setFromObject(state.model);
    if (box.isEmpty()) {
        console.warn('Model has empty bounding box, cannot focus.');
        return;
    }

    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = state.camera.fov * (Math.PI / 180); // convert fov to radians
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    // Adjust cameraZ based on aspect ratio to ensure model fits horizontally too
    const aspect = state.camera.aspect;
    const horizontalFov = 2 * Math.atan(Math.tan(fov / 2) * aspect);
    const horizontalCameraZ = Math.abs(size.x / 2 / Math.tan(horizontalFov / 2));
    cameraZ = Math.max(cameraZ, horizontalCameraZ);

    // Add some padding
    cameraZ *= 1.2; 

    // Set camera position to look at the center of the model
    state.camera.position.copy(center);
    state.camera.position.z += cameraZ; // Move camera back along its local Z axis
    state.camera.lookAt(center);

    updateCameraInfo();
}

function promptForFilename(defaultName, extension = '') {
    const filename = prompt(`Enter filename (without extension):`, defaultName);
    if (filename === null) return null; // User cancelled
    if (filename.trim() === '') return defaultName + extension;
    return filename.trim() + extension;
}

async function saveFileWithDialog(blob, defaultFilename, mimeType) {
    console.log('saveFileWithDialog called with:', { defaultFilename, mimeType });
    console.log('File System Access API available:', 'showSaveFilePicker' in window);
    
    // Try File System Access API first (Chrome 86+, Edge 86+)
    if ('showSaveFilePicker' in window) {
        try {
            console.log('Attempting to use File System Access API...');
            
            // Configure file picker options
            const filePickerOptions = {
                suggestedName: defaultFilename,
                types: [{
                    description: mimeType === 'image/png' ? 'PNG Image' : 'JSON File',
                    accept: mimeType === 'image/png' ? 
                        { 'image/png': ['.png'] } : 
                        { 'application/json': ['.json'] }
                }]
            };
            
            // Show save file picker
            const fileHandle = await window.showSaveFilePicker(filePickerOptions);
            
            // Create writable stream and write the blob
            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();
            
            console.log('File saved successfully using File System Access API');
            return; // Success - exit early
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('User cancelled the save operation');
                return;
            }
            console.error('File System Access API failed:', error);
            // Continue to fallback methods
        }
    }
    
    // Fallback 1: Prompt for filename (better UX than direct download)
    console.log('Falling back to filename prompt...');
    try {
        const extension = defaultFilename.includes('.') ? '.' + defaultFilename.split('.').pop() : '';
        const baseName = defaultFilename.replace(extension, '');
        const userFilename = promptForFilename(baseName, extension);
        
        if (userFilename === null) {
            console.log('User cancelled filename prompt');
            return;
        }
        
        // Use user's chosen filename
        fallbackDownload(blob, userFilename);
    } catch (error) {
        console.error('Filename prompt failed:', error);
        // Final fallback: direct download
        console.log('Using direct download fallback');
        fallbackDownload(blob, defaultFilename);
    }
}

function fallbackDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function captureHighQualityFrame(callback) {
    try {
        console.log('Starting high-quality capture...');
        
        // Hide guide lines for clean capture
        const guideLineOverlay = document.getElementById('guideLineOverlay');
        if (guideLineOverlay) {
            guideLineOverlay.style.display = 'none';
        }

        // Calculate model bounding box to determine optimal capture size
        if (!state.model) {
            console.error('No model to capture');
            if (guideLineOverlay) guideLineOverlay.style.display = 'block';
            return;
        }

    // Get model bounding box
    const boundingBox = new THREE.Box3().setFromObject(state.model);
    const boundingBoxSize = boundingBox.getSize(new THREE.Vector3());
    const boundingBoxCenter = boundingBox.getCenter(new THREE.Vector3());

    // Calculate optimal camera distance and frame size
    const maxDimension = Math.max(boundingBoxSize.x, boundingBoxSize.y, boundingBoxSize.z);
    
    // Create high-quality render dimensions (4K quality)
    const baseSize = Math.max(2048, maxDimension * 200); // Minimum 2K, scale with model
    const renderWidth = Math.min(baseSize, 4096); // Cap at 4K to avoid memory issues
    const renderHeight = Math.min(baseSize, 4096);
    
    // Create temporary high-resolution renderer
    const tempRenderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true, 
        preserveDrawingBuffer: true 
    });
    tempRenderer.setSize(renderWidth, renderHeight);
    tempRenderer.setClearColor(0x000000, 0); // Transparent background
    
    // Create temporary camera positioned to optimally frame the model
    const tempCamera = state.camera.clone();
    tempCamera.aspect = renderWidth / renderHeight;
    
    // Calculate optimal camera position to fill the frame with the model
    const fov = tempCamera.fov * (Math.PI / 180);
    
    // Calculate distance needed to fill the frame, accounting for aspect ratio
    const horizontalFOV = 2 * Math.atan(Math.tan(fov / 2) * tempCamera.aspect);
    const distanceForVertical = (maxDimension / 2) / Math.tan(fov / 2);
    const distanceForHorizontal = (maxDimension / 2) / Math.tan(horizontalFOV / 2);
    const cameraDistance = Math.max(distanceForVertical, distanceForHorizontal) * 1.2; // 20% padding
    
    // Position camera to maintain current viewing angle but at optimal distance
    // Get the current camera direction vector
    const cameraDirection = new THREE.Vector3();
    state.camera.getWorldDirection(cameraDirection);
    
    // Position camera at optimal distance from model center in current viewing direction
    tempCamera.position.copy(boundingBoxCenter);
    tempCamera.position.addScaledVector(cameraDirection, -cameraDistance);
    tempCamera.lookAt(boundingBoxCenter);
    tempCamera.updateProjectionMatrix();
    
    // Render at high quality with optimal framing
    tempRenderer.render(state.scene, tempCamera);
    
    // Convert to blob with 20px transparent border
    const canvas = tempRenderer.domElement;
    const ctx = canvas.getContext('2d');
    
    // Create final canvas with 10px border
    const finalCanvas = document.createElement('canvas');
    const borderSize = 10;
    finalCanvas.width = renderWidth + (borderSize * 2);
    finalCanvas.height = renderHeight + (borderSize * 2);
    const finalCtx = finalCanvas.getContext('2d');
    
    // Draw original render with 10px offset
    finalCtx.drawImage(canvas, borderSize, borderSize);
    
        // Convert final canvas to blob
        finalCanvas.toBlob((blob) => {
            callback(blob);
            
            // Restore guide lines
            if (guideLineOverlay) {
                guideLineOverlay.style.display = 'block';
            }
            
            // Cleanup
            tempRenderer.dispose();
            console.log('High-quality capture completed successfully');
        }, 'image/png');
        
    } catch (error) {
        console.error('Error in captureHighQualityFrame:', error);
        
        // Restore guide lines on error
        const guideLineOverlay = document.getElementById('guideLineOverlay');
        if (guideLineOverlay) {
            guideLineOverlay.style.display = 'block';
        }
        
        // Fallback to regular capture
        console.log('Falling back to regular capture...');
        captureFrame(callback);
    }
}

function captureFrame(callback) {
    const guideLineOverlay = document.getElementById('guideLineOverlay');
    if (guideLineOverlay) {
        guideLineOverlay.style.display = 'none';
    }

    state.renderer.render(state.scene, state.camera);
    state.renderer.domElement.toBlob((blob) => {
        callback(blob);
        if (guideLineOverlay) {
            guideLineOverlay.style.display = 'block';
        }
    }, 'image/png');
}

function animate() {
    requestAnimationFrame(animate);
    
    // Update WBOIT shader uniforms that need per-frame updates
    updateWBOITUniforms();
    
    // Update orientation widget with current model rotation
    updateOrientationWidget();
    
    // Disable auto-clear for multiple viewports
    state.renderer.autoClear = false;
    
    // Clear and render main scene
    state.renderer.clear();
    state.renderer.render(state.scene, state.camera);
    
    // Render orientation widget overlay
    renderOrientationWidget();
    
    updateCameraInfo();
}

function updateWBOITUniforms() {
    // No longer needed since we're using enhanced standard materials
    // instead of custom shaders for WBOIT
}

// ==================== 3D ORIENTATION WIDGET ====================

function initOrientationWidget() {
    console.log('initOrientationWidget called, enabled:', state.orientationWidget.enabled);
    
    if (!state.orientationWidget.enabled) return;
    
    try {
        const widget = state.orientationWidget;
        const canvas = document.getElementById('orientationWidget');
        
        if (!canvas) {
            console.warn('Orientation widget canvas not found, disabling widget');
            state.orientationWidget.enabled = false;
            return;
        }
        
        // Create dedicated renderer for widget
        widget.renderer = new THREE.WebGLRenderer({ 
            canvas: canvas,
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: false
        });
        widget.renderer.setSize(120, 120);
        widget.renderer.setClearColor(0x000000, 0);
        
        // Create dedicated camera for widget
        widget.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
        widget.camera.position.set(0, 0, 5);
        
        // Create dedicated scene for widget
        widget.scene = new THREE.Scene();
        
        // Create axes helper with shorter lines (2/3 of original length)
        const axesHelper = new THREE.AxesHelper(1.33); // Shortened from 2 to 1.33 (2/3)
        
        // Make axes lines much thicker
        if (axesHelper.material) {
            axesHelper.material.linewidth = 8; // Even thicker for better visibility
        }
        
        widget.scene.add(axesHelper);
        widget.axesHelper = axesHelper;
        
        // Create group for labels that will rotate with axes
        widget.labelGroup = new THREE.Group();
        widget.scene.add(widget.labelGroup);
        
        // Add axis labels (X, Y, Z) that stay upright
        createAxisLabels(widget);
        
        // Create compass
        createOrientationCompass();
        
        // Add mouse interaction to widget
        setupWidgetInteraction(widget, canvas);
        
        console.log('Orientation widget initialized successfully, scene children:', widget.scene.children.length);
    } catch (error) {
        console.warn('Orientation widget disabled due to error:', error);
        state.orientationWidget.enabled = false;
    }
}


function createOrientationCompass() {
    const widget = state.orientationWidget;
    
    // Create optimized compass geometry (low-poly ring)
    const compassGeometry = new THREE.RingGeometry(1.2, 1.4, 16);
    const compassMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x666666, 
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide 
    });
    const compass = new THREE.Mesh(compassGeometry, compassMaterial);
    compass.rotation.x = -Math.PI / 2; // Lay flat
    
    widget.scene.add(compass);
    widget.compass = compass;
}

function createAxisLabels(widget) {
    const labels = ['X', 'Y', 'Z'];
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // Red, Green, Blue (matching Three.js AxesHelper)
    const positions = [
        new THREE.Vector3(1.7, 0, 0), // X axis end (just beyond axis with small gap) - RED
        new THREE.Vector3(0, 1.7, 0), // Y axis end (just beyond axis with small gap) - GREEN
        new THREE.Vector3(0, 0, 1.7)  // Z axis end (just beyond axis with small gap) - BLUE
    ];
    
    widget.axisLabels = [];
    
    labels.forEach((label, index) => {
        // Create separate canvas for each label
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 64;
        canvas.height = 64;
        
        // Clear canvas and draw this specific label
        context.clearRect(0, 0, 64, 64);
        context.fillStyle = colors[index];
        context.font = 'bold 48px Arial'; // Same size for all labels
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(label, 32, 32);
        
        // Create texture from this label's canvas
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        
        // Create sprite material that stays upright
        const spriteMaterial = new THREE.SpriteMaterial({ 
            map: texture,
            transparent: true,
            alphaTest: 0.1
        });
        
        // Create sprite
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(positions[index]);
        sprite.scale.set(0.5, 0.5, 1); // Back to original scale
        
        // Debug: Add name to identify labels
        sprite.name = `${label}_label`;
        console.log(`Created ${label} label at position:`, positions[index].clone());
        
        widget.labelGroup.add(sprite);
        widget.axisLabels.push(sprite);
    });
}

function updateOrientationWidget() {
    if (!state.model || !state.orientationWidget.enabled) return;
    
    const widget = state.orientationWidget;
    const modelRotation = state.model.rotation;
    
    // Check if model rotation has changed (with small threshold for performance)
    const rotChanged = 
        Math.abs(modelRotation.x - widget.lastModelRotation.x) > 0.01 ||
        Math.abs(modelRotation.y - widget.lastModelRotation.y) > 0.01 ||
        Math.abs(modelRotation.z - widget.lastModelRotation.z) > 0.01;
    
    if (rotChanged && widget.axesHelper) {
        // Mirror model rotation in widget (opposite to show relative orientation)
        widget.axesHelper.rotation.copy(modelRotation);
        
        // Also rotate the label group to keep labels at axis ends
        if (widget.labelGroup) {
            widget.labelGroup.rotation.copy(modelRotation);
        }
        
        // Update axis label visibility based on orientation
        if (widget.axisLabels && widget.camera) {
            updateAxisLabelVisibility(widget);
        }
        
        // Update last rotation for comparison
        widget.lastModelRotation = {
            x: modelRotation.x,
            y: modelRotation.y,
            z: modelRotation.z
        };
    }
}

function updateAxisLabelVisibility(widget) {
    if (!widget.axisLabels || !widget.camera) return;
    
    // Get camera direction (looking towards negative Z in widget camera)
    const cameraDirection = new THREE.Vector3(0, 0, -1);
    cameraDirection.applyQuaternion(widget.camera.quaternion);
    
    // Define axis directions in world space after rotation
    const axisDirections = [
        new THREE.Vector3(1, 0, 0), // X axis
        new THREE.Vector3(0, 1, 0), // Y axis  
        new THREE.Vector3(0, 0, 1)  // Z axis
    ];
    
    // Apply the same rotation as the axes helper
    axisDirections.forEach(dir => {
        dir.applyEuler(widget.axesHelper.rotation);
    });
    
    // Only hide labels when axis is nearly parallel to camera direction (pointing directly at or away from camera)
    widget.axisLabels.forEach((label, index) => {
        const dotProduct = Math.abs(axisDirections[index].dot(cameraDirection));
        
        // Hide only when axis is nearly parallel to camera view (within 5 degrees of pointing directly towards/away)
        const parallelThreshold = 0.996; // cos(5°) ≈ 0.996
        label.visible = dotProduct < parallelThreshold;
    });
}

function setupWidgetInteraction(widget, canvas) {
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };
    let rotationSpeed = 0.01;
    
    // Double-click to reset model rotation
    canvas.addEventListener('dblclick', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        if (state.model) {
            // Reset model rotation to (0, 0, 0)
            state.model.rotation.set(0, 0, 0);
            
            // Update UI controls to match
            safeSetValue('modelRotX', 0);
            safeSetValue('modelRotXNum', 0);
            safeSetValue('modelRotY', 0);
            safeSetValue('modelRotYNum', 0);
            safeSetValue('modelRotZ', 0);
            safeSetValue('modelRotZNum', 0);
            
            // Update camera info display
            updateCameraInfo();
            
            console.log('Model rotation reset to (0, 0, 0)');
        }
    });
    
    // Mouse down - start dragging
    canvas.addEventListener('mousedown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        isDragging = true;
        const rect = canvas.getBoundingClientRect();
        previousMouse = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
        
        canvas.style.cursor = 'grabbing';
    });
    
    // Mouse move - rotate model
    canvas.addEventListener('mousemove', (event) => {
        if (!isDragging || !state.model) return;
        
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const currentMouse = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
        
        // Calculate mouse delta
        const deltaX = currentMouse.x - previousMouse.x;
        const deltaY = currentMouse.y - previousMouse.y;
        
        // Convert to rotation (trackball style)
        const rotationY = deltaX * rotationSpeed; // Horizontal movement = Y rotation
        const rotationX = deltaY * rotationSpeed; // Vertical movement = X rotation
        
        // Apply rotation to model
        state.model.rotation.y += rotationY;
        state.model.rotation.x += rotationX;
        
        // Update UI controls to match
        const rotX = state.model.rotation.x * 180 / Math.PI;
        const rotY = state.model.rotation.y * 180 / Math.PI;
        const rotZ = state.model.rotation.z * 180 / Math.PI;
        
        safeSetValue('modelRotX', Math.round(rotX));
        safeSetValue('modelRotXNum', Math.round(rotX));
        safeSetValue('modelRotY', Math.round(rotY));
        safeSetValue('modelRotYNum', Math.round(rotY));
        safeSetValue('modelRotZ', Math.round(rotZ));
        safeSetValue('modelRotZNum', Math.round(rotZ));
        
        // Update camera info display
        updateCameraInfo();
        
        previousMouse = currentMouse;
    });
    
    // Mouse up - stop dragging
    const stopDragging = () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    };
    
    canvas.addEventListener('mouseup', stopDragging);
    canvas.addEventListener('mouseleave', stopDragging);
    
    // Set initial cursor
    canvas.style.cursor = 'grab';
}

function renderOrientationWidget() {
    if (!state.orientationWidget.enabled || !state.orientationWidget.scene || !state.orientationWidget.renderer) {
        return;
    }
    
    const widget = state.orientationWidget;
    
    // Render widget scene using dedicated renderer
    widget.renderer.render(widget.scene, widget.camera);
}

function updateGuideLine() {
    const overlay = document.getElementById('guideLineOverlay');
    if (!overlay) {
        console.error('EMERGENCY FIX: guideLineOverlay element not found');
        return;
    }

    console.log('Updating guide lines, current state:', state.guideLines);

    // Remove all existing guide lines
    while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
    }

    // Get overlay container dimensions (which already accounts for 10px margins)
    const overlayRect = overlay.getBoundingClientRect();
    const viewerWidth = overlayRect.width;
    const viewerHeight = overlayRect.height;

    // Re-create all guide lines from state
    state.guideLines.forEach(lineState => {
        const guideLine = document.createElement('div');
        guideLine.className = 'guide-line';
        guideLine.dataset.id = lineState.id;

        // Create a very long line that extends far beyond the clipped overlay area
        const absAngle = Math.abs(lineState.angle);
        
        // Calculate the maximum possible line length needed for any viewport size and angle
        // Use a generous multiplier to ensure the line extends well beyond the overlay area
        const maxViewportDiagonal = Math.sqrt(viewerWidth * viewerWidth + viewerHeight * viewerHeight);
        const dynamicWidth = maxViewportDiagonal * 4; // Very long line that extends far beyond overlay

        // EMERGENCY FIX: Add debug logging and ensure proper color
        const thickness = `${lineState.thickness / 1000 * 100}vh`;
        const color = lineState.colour || '#FFFF00'; // Default to yellow if no color
        const opacity = lineState.transparency || 0.5;
        
        // Advanced positioning system - position moves the line perpendicular to its angle
        const angleRad = (lineState.angle * Math.PI) / 180;
        const cosAngle = Math.cos(angleRad);
        const sinAngle = Math.sin(angleRad);
        
        // Calculate the perpendicular direction to the line
        // For a line at angle θ, the perpendicular direction is at angle (θ + 90°)
        const perpCos = -sinAngle; // cos(θ + 90°) = -sin(θ)
        const perpSin = cosAngle;  // sin(θ + 90°) = cos(θ)
        
        // Scale position value to use full screen dimension
        // Use the diagonal to allow full traversal across the entire screen at any angle
        const diagonal = Math.sqrt(viewerWidth * viewerWidth + viewerHeight * viewerHeight);
        const positionScale = lineState.posY / 360; // Normalize -360 to +360 to -1 to +1
        const positionOffset = positionScale * (diagonal * 0.8); // Scale to 80% of diagonal for true edge-to-edge coverage
        
        // Calculate position by moving perpendicular to the line direction
        const centerX = viewerWidth / 2;
        const centerY = viewerHeight / 2;
        
        const offsetX = perpCos * positionOffset;
        const offsetY = perpSin * positionOffset;
        
        const leftPixels = centerX + offsetX;
        const topPixels = centerY + offsetY;
        
        // Convert to percentages relative to the overlay container
        const leftPos = `${(leftPixels / viewerWidth) * 100}%`;
        const topPos = `${(topPixels / viewerHeight) * 100}%`;
        
        const transform = `translate(-50%, -50%) rotate(${lineState.angle}deg)`;

        // Apply dynamic sizing and rounded caps
        guideLine.style.width = `${dynamicWidth}px`;
        guideLine.style.height = thickness;
        guideLine.style.backgroundColor = color;
        guideLine.style.opacity = opacity;
        guideLine.style.top = topPos;
        guideLine.style.left = leftPos;
        guideLine.style.transform = transform;
        guideLine.style.borderRadius = `${lineState.thickness / 2}px`; // Rounded ends based on thickness

        console.log(`Creating guide line ${lineState.id}: angle=${lineState.angle}°, width=${dynamicWidth.toFixed(1)}px, top=${topPos}, left=${leftPos}`);

        overlay.appendChild(guideLine);
    });
    
    console.log('Guide line update complete');
}

function toggleGuideLineVisibility(lineId = null) {
    if (lineId === null) {
        // Main guide line toggle - only toggles the default guide line (id 0)
        const defaultLineElement = document.querySelector('[data-id="0"]');
        const button = document.getElementById('hideUnhideGuide');
        
        if (!defaultLineElement || !button) return;
        
        // FIXED: Check both style.display and computed style for proper visibility detection
        const isHidden = defaultLineElement.style.display === 'none' || 
                        getComputedStyle(defaultLineElement).display === 'none';
        
        if (isHidden) {
            defaultLineElement.style.display = 'block';
            button.textContent = 'HIDE';
            button.classList.remove('button-danger');
            button.classList.add('secondary');
            // CRITICAL FIX: Restore all guide line properties after unhiding
            updateGuideLine();
        } else {
            defaultLineElement.style.display = 'none';
            button.textContent = 'UNHIDE';
            button.classList.remove('secondary');
            button.classList.add('button-danger');
        }
    } else {
        // Individual guide line toggle
        const lineElement = document.querySelector(`[data-id="${lineId}"]`);
        const button = document.querySelector(`[data-guideline-id="${lineId}"] .hide-unhide-guide`);
        
        if (!lineElement || !button) return;
        
        // FIXED: Check both style.display and computed style for proper visibility detection
        const isHidden = lineElement.style.display === 'none' || 
                         getComputedStyle(lineElement).display === 'none';
        
        if (isHidden) {
            lineElement.style.display = 'block';
            button.textContent = 'HIDE';
            button.classList.remove('button-danger');
            button.classList.add('secondary');
            // CRITICAL FIX: Restore all guide line properties after unhiding
            updateGuideLine();
        } else {
            lineElement.style.display = 'none';
            button.textContent = 'UNHIDE';
            button.classList.remove('secondary');
            button.classList.add('button-danger');
        }
    }
}

function autoHideDefaultGuideLineOnFirstLoad() {
    console.log('autoHideDefaultGuideLineOnFirstLoad called');
    
    // Only execute on fresh page loads (not user interactions)
    const hasUserInteracted = sessionStorage.getItem('guideLineUserInteracted');
    console.log('hasUserInteracted:', hasUserInteracted);
    if (hasUserInteracted) {
        console.log('User has interacted before, skipping auto-hide');
        return;
    }
    
    // Mark that auto-hide has occurred to prevent future auto-hides
    sessionStorage.setItem('guideLineAutoHideOccurred', 'true');
    
    // Get elements - now targeting the default guide line specifically
    const defaultLineElement = document.querySelector('[data-id="0"]');
    const button = document.getElementById('hideUnhideGuide');
    
    console.log('Elements found - defaultLine:', !!defaultLineElement, 'button:', !!button);
    
    if (defaultLineElement && button) {
        // Hide the default guide line and update button to UNHIDE state
        defaultLineElement.style.display = 'none';
        button.textContent = 'UNHIDE';
        button.classList.remove('secondary');
        button.classList.add('button-danger');
        
        console.log('Auto-hide applied to default guide line, starting pulse animation');
        // Add pulsing effect to notify user with synchronized guide line
        pulseUnhideButtonWithSyncedGuideLine(button, defaultLineElement, 3);
    } else {
        console.error('Elements not found for auto-hide');
    }
}

function pulseUnhideButtonWithSyncedGuideLine(button, guideLineElement, pulseCount) {
    // This function now correctly calls the global pulseUnhideButton function
    // while synchronizing the individual guide line's visibility.
    console.log('Starting button pulse with synchronized guide line');

    // Hide guide line initially (already done in autoHide but ensuring state)
    guideLineElement.style.display = 'none';
    guideLineElement.style.transition = 'opacity 0.2s ease';

    // Call the main pulse function
    pulseUnhideButton(button, pulseCount, (animationState) => {
        // Synchronize the guide line with the pulse animation
        if (animationState === 'pulse-up') {
            // Show guide line when button scales up
            guideLineElement.style.display = 'block';
            guideLineElement.style.opacity = '1';
        } else if (animationState === 'pulse-down') {
            // Hide guide line when button scales down (creates flash effect)
            guideLineElement.style.opacity = '0';
        } else if (animationState === 'end') {
            // Permanently hide it when the animation is over
            guideLineElement.style.display = 'none';
            guideLineElement.style.opacity = '1'; // Reset for future use
            console.log('Default guide line auto-hidden as pulse overlay ends');
        }
    });
}

function pulseUnhideButton(button, pulseCount, onStateChange = null) {
    // Capture styling
    const computedStyle = getComputedStyle(button);
    
    // Create full-viewport overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        pointer-events: none;
    `;
    document.body.appendChild(overlay);
    
    // Clone button with identical appearance
    const clonedButton = button.cloneNode(true);
    clonedButton.style.cssText = `
        position: absolute;
        margin: 0;
        transform-origin: center center;
        transition: transform 0.2s ease;
        z-index: 1;
        box-sizing: border-box;
    `;
    
    // Ensure standard button classes are preserved for proper styling
    if (button.classList.contains('secondary')) {
        clonedButton.classList.add('secondary');
    }
    if (button.classList.contains('button-danger')) {
        clonedButton.classList.add('button-danger');
    }
    
    // Copy all computed styles to ensure identical appearance
    clonedButton.style.background = computedStyle.background;
    clonedButton.style.border = computedStyle.border;
    clonedButton.style.borderRadius = computedStyle.borderRadius;
    clonedButton.style.color = computedStyle.color;
    clonedButton.style.fontSize = computedStyle.fontSize;
    clonedButton.style.fontWeight = computedStyle.fontWeight;
    clonedButton.style.fontFamily = computedStyle.fontFamily;
    clonedButton.style.textTransform = computedStyle.textTransform;
    clonedButton.style.letterSpacing = computedStyle.letterSpacing;
    clonedButton.style.lineHeight = computedStyle.lineHeight;
    clonedButton.style.boxShadow = computedStyle.boxShadow;
    
    // Ensure correct UNHIDE styling is applied based on universal system classes
    if (button.classList.contains('button-danger')) {
        clonedButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
    } else if (button.classList.contains('button-danger')) {
        clonedButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
    } else if (button.classList.contains('secondary')) {
        clonedButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';   // Green background for secondary state
    }
    
    overlay.appendChild(clonedButton);
    
    // Track current scale for smooth position updates
    let currentScale = 1;
    
    // Function to update position while preserving scale
    const updatePosition = () => {
        const rect = button.getBoundingClientRect();
        clonedButton.style.left = `${rect.left}px`;
        clonedButton.style.top = `${rect.top}px`;
        clonedButton.style.width = `${rect.width}px`;
        clonedButton.style.height = `${rect.height}px`;
        clonedButton.style.transform = `scale(${currentScale})`;
        clonedButton.style.transformOrigin = 'center center';
    };
    
    // Continuous position tracking
    let animationId;
    const trackPosition = () => {
        updatePosition();
        animationId = requestAnimationFrame(trackPosition);
    };
    trackPosition(); // Start tracking immediately
    
    // Pulse animation
    let pulses = 0;
    const pulseInterval = setInterval(() => {
        // Scale up
        currentScale = 1.15;
        clonedButton.style.transform = `scale(${currentScale})`;
        
        // Trigger pulse-up callback
        if (onStateChange) {
            onStateChange('pulse-up');
        }
        
        setTimeout(() => {
            // Scale back down
            currentScale = 1;
            clonedButton.style.transform = `scale(${currentScale})`;
            
            // Trigger pulse-down callback
            if (onStateChange) {
                onStateChange('pulse-down');
            }
            
            // Check if this was the last pulse's scale-down
            if (pulses >= pulseCount) {
                // Trigger end callback
                if (onStateChange) {
                    onStateChange('end');
                }
                
                // Keep position tracking running for much longer after the last scale-down
                setTimeout(() => {
                    cancelAnimationFrame(animationId);
                }, 500); // Wait 500ms after scale-down before stopping tracking
                
                // Clean up overlay even later
                setTimeout(() => {
                    if (document.body.contains(overlay)) {
                        document.body.removeChild(overlay);
                    }
                }, 800); // 800ms total delay for cleanup
            }
        }, 200);
        
        pulses++;
        if (pulses >= pulseCount) {
            clearInterval(pulseInterval);
            // Don't stop tracking here - let it continue until the last scale-down completes
        }
    }, 600); // 600ms between pulses
}

// Track user interactions with guide lines to prevent auto-hide after user engagement
function markGuideLineUserInteraction() {
    sessionStorage.setItem('guideLineUserInteracted', 'true');
}

function updateMaterialModeButtons() {
    const complexButton = document.getElementById('complexMaterialButton');
    if (!complexButton) return;
    
    if (state.materialMode === 'default') {
        complexButton.textContent = 'COMPLEX';
        complexButton.classList.remove('state-secondary');
        complexButton.classList.add('state-primary');
        hideAdvancedMaterialControls();
    } else {
        complexButton.textContent = 'BASIC';
        complexButton.classList.remove('state-primary');
        complexButton.classList.add('state-secondary');
        showAdvancedMaterialControls();
    }
}

function hideAdvancedMaterialControls() {
    const transparencyModeGroup = document.querySelector('#transparencyMode')?.closest('.control-group');
    
    // Find and hide the entire Surface Extraction section by looking for the label
    const surfaceExtractionLabels = document.querySelectorAll('label');
    let surfaceExtractionGroup = null;
    for (const label of surfaceExtractionLabels) {
        if (label.textContent.trim() === 'Surface Extraction') {
            surfaceExtractionGroup = label.closest('.control-group');
            break;
        }
    }
    
    if (transparencyModeGroup) transparencyModeGroup.style.display = 'none';
    if (surfaceExtractionGroup) surfaceExtractionGroup.style.display = 'none';
    
    // Also hide the parameter groups that might be visible
    const alphaGroup = document.getElementById('alphaValueGroup');
    const raycastGroup = document.getElementById('raycastParametersGroup');
    const visibilityGroup = document.getElementById('visibilityThresholdGroup');
    
    if (alphaGroup) alphaGroup.style.display = 'none';
    if (raycastGroup) raycastGroup.style.display = 'none';
    if (visibilityGroup) visibilityGroup.style.display = 'none';
}

function showAdvancedMaterialControls() {
    const transparencyModeGroup = document.querySelector('#transparencyMode')?.closest('.control-group');
    
    // Find and show the entire Surface Extraction section by looking for the label
    const surfaceExtractionLabels = document.querySelectorAll('label');
    let surfaceExtractionGroup = null;
    for (const label of surfaceExtractionLabels) {
        if (label.textContent.trim() === 'Surface Extraction') {
            surfaceExtractionGroup = label.closest('.control-group');
            break;
        }
    }
    
    if (transparencyModeGroup) transparencyModeGroup.style.display = 'block';
    if (surfaceExtractionGroup) surfaceExtractionGroup.style.display = 'block';
    
    // Re-trigger visibility updates for parameter groups based on current settings
    updateAlphaParameterVisibility();
}

// ----------------------------------------------------------------
// 6. Model Creation Functions
function createModel(modelType) {
    // Remove existing model
    if (state.model) {
        state.scene.remove(state.model);
    }
    
    let geometry;
    let modelName;
    
    switch (modelType) {
        case 'cube':
            geometry = new THREE.BoxGeometry(2, 2, 2);
            modelName = 'Cube';
            break;
        case 'sphere':
            geometry = new THREE.SphereGeometry(1.5, 32, 32);
            modelName = 'Sphere';
            break;
        case 'pyramid':
            geometry = new THREE.ConeGeometry(1.5, 2.5, 4);
            modelName = 'Pyramid';
            break;
        default:
            geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16);
            modelName = 'Default Torus Knot';
    }
    
    const material = new THREE.MeshStandardMaterial({
        color: 0x4CAF50,
        metalness: 0.1,
        roughness: 0.8,
        transparent: false,
        opacity: 1.0,
        side: THREE.FrontSide
    });
    
    state.model = new THREE.Mesh(geometry, material);
    
    // Position at world center
    state.model.position.set(0, 0, 0);
    state.model.scale.set(1, 1, 1);
    state.model.rotation.set(0, 0, 0);
    
    state.scene.add(state.model);
    
    // Update model type
    state.currentModelType = modelName;
    
    // Reset UI controls to match default material
    safeSetValue('materialColor', '#4CAF50');
    safeSetValue('metalness', 0.1);
    safeSetValue('metalnessNum', 0.1);
    safeSetValue('roughness', 0.8);
    safeSetValue('roughnessNum', 0.8);
    safeSetValue('transparency', 1.0);
    safeSetValue('transparencyNum', 1.0);
    
    // Reset model controls
    resetModelControls();
    
    console.log('Model created:', modelName, 'Material:', material);
}

function loadOBJModel(url, filename, onSuccess, onError) {
    const loader = new OBJLoader();
    showUploadStatus('Loading OBJ model...', 'loading');
    
    loader.load(url, (object) => {
        try {
            if (state.model) {
                state.scene.remove(state.model);
            }
            
            // Apply default material to OBJ
            object.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x4CAF50,
                        metalness: 0.1,
                        roughness: 0.8,
                        transparent: false,
                        opacity: 1.0,
                        side: THREE.FrontSide
                    });
                }
            });
            
            state.model = object;
            centerAndScaleModel(state.model);
            state.scene.add(state.model);
            state.currentModelType = filename;
            
            resetModelControls();
            URL.revokeObjectURL(url);
            onSuccess(filename);
        } catch (error) {
            console.error('Error processing OBJ model:', error);
            onError('Error processing OBJ model: ' + error.message);
        }
    }, (progress) => {
        if (progress && progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            showUploadStatus(`Loading... ${percent}%`, 'loading');
        }
    }, (error) => {
        console.error('Error loading OBJ:', error);
        onError('Error loading OBJ: ' + error.message);
    });
}

function loadSTLModel(url, filename, onSuccess, onError) {
    const loader = new STLLoader();
    showUploadStatus('Loading STL model...', 'loading');
    
    loader.load(url, (geometry) => {
        try {
            if (state.model) {
                state.scene.remove(state.model);
            }
            
            // Create material for STL
            const material = new THREE.MeshStandardMaterial({
                color: 0x4CAF50,
                metalness: 0.1,
                roughness: 0.8,
                transparent: false,
                opacity: 1.0,
                side: THREE.FrontSide
            });
            
            state.model = new THREE.Mesh(geometry, material);
            centerAndScaleModel(state.model);
            state.scene.add(state.model);
            state.currentModelType = filename;
            
            resetModelControls();
            URL.revokeObjectURL(url);
            onSuccess(filename);
        } catch (error) {
            console.error('Error processing STL model:', error);
            onError('Error processing STL model: ' + error.message);
        }
    }, (progress) => {
        if (progress && progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            showUploadStatus(`Loading... ${percent}%`, 'loading');
        }
    }, (error) => {
        console.error('Error loading STL:', error);
        onError('Error loading STL: ' + error.message);
    });
}

function loadGLTFModel(url, filename, onSuccess, onError) {
    const loader = new GLTFLoader();
    showUploadStatus('Loading GLTF/GLB model...', 'loading');

    loader.load(url, (gltf) => {
        try {
            if (state.model) {
                state.scene.remove(state.model);
            }

            // Apply default material to all meshes in the GLTF scene
            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x4CAF50,
                        metalness: 0.1,
                        roughness: 0.8,
                        transparent: false,
                        opacity: 1.0,
                        side: THREE.FrontSide
                    });
                }
            });

            state.model = gltf.scene;
            centerAndScaleModel(state.model);
            state.scene.add(state.model);
            state.currentModelType = filename;

            resetModelControls();
            URL.revokeObjectURL(url);
            onSuccess(filename);
        } catch (error) {
            console.error('Error processing GLTF/GLB model:', error);
            onError('Error processing GLTF/GLB model: ' + error.message);
        }
    }, (progress) => {
        if (progress && progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            showUploadStatus(`Loading... ${percent}%`, 'loading');
        }
    }, (error) => {
        console.error('Error loading GLTF/GLB:', error);
        onError('Error loading GLTF/GLB: ' + error.message);
    });
}

function loadDAEModel(url, filename, onSuccess, onError) {
    const loader = new ColladaLoader();
    showUploadStatus('Loading DAE model...', 'loading');

    loader.load(url, (collada) => {
        try {
            if (state.model) {
                state.scene.remove(state.model);
            }

            // Apply default material to meshes and remove line objects for consistency
            collada.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x4CAF50,
                        metalness: 0.1,
                        roughness: 0.8,
                        transparent: false,
                        opacity: 1.0,
                        side: THREE.FrontSide
                    });
                } else if (child.isLine || child.isLineSegments) {
                    // Remove line objects to match other formats (OBJ/STL/GLTF appearance)
                    if (child.parent) {
                        child.parent.remove(child);
                    }
                }
            });

            state.model = collada.scene;
            centerAndScaleModel(state.model);
            state.scene.add(state.model);
            state.currentModelType = filename;

            resetModelControls();
            URL.revokeObjectURL(url);
            onSuccess(filename);
        } catch (error) {
            console.error('Error processing DAE model:', error);
            onError('Error processing DAE model: ' + error.message);
        }
    }, (progress) => {
        if (progress && progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            showUploadStatus(`Loading... ${percent}%`, 'loading');
        }
    }, (error) => {
        console.error('Error loading DAE:', error);
        onError('Error loading DAE: ' + error.message);
    });
}


// 7. UI Setup & Control Functions
// ----------------------------------------------------------------

function loadPresetsList() {
    const selector = document.getElementById('presetSelector');
    if (!selector) return;
    
    selector.innerHTML = '<option value="">Select a preset...</option>';
    
    Object.keys(state.presets).forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        selector.appendChild(option);
    });
}

function setupMouseControls() {
    // EMERGENCY FIX: Add safety checks for renderer and canvas
    if (!state.renderer || !state.renderer.domElement) {
        console.error('CRITICAL ERROR: Renderer or canvas not available for mouse controls');
        return;
    }
    
    const canvas = state.renderer.domElement;
    console.log('Setting up mouse controls on canvas:', canvas);

    // Remove existing event listeners to prevent duplicates
    canvas.removeEventListener('mousedown', handleMouseDown);
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseup', handleMouseUp);
    canvas.removeEventListener('wheel', handleMouseWheel);
    canvas.removeEventListener('contextmenu', handleContextMenu);

    // Add mouse event listeners with verification
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleMouseWheel);
    canvas.addEventListener('contextmenu', handleContextMenu);
    
    console.log('Mouse controls setup complete');
}

function setupControls() {
    // Add depress animation to all buttons
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('mousedown', () => {
            button.classList.add('button-depressed');
        });
        button.addEventListener('mouseup', () => {
            button.classList.remove('button-depressed');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('button-depressed');
        });
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
        if (e.key === 'f' || e.key === 'F') {
            focusModelOnScreen();
        }
    });


    // Lighting controls
    safeAddEventListener('ambientLight', 'input', (e) => {
        if (state.lights.ambient) {
            state.lights.ambient.intensity = parseFloat(e.target.value);
        }
    });

    safeAddEventListener('ambientLightNum', 'input', (e) => {
        if (state.lights.ambient) {
            state.lights.ambient.intensity = parseFloat(e.target.value);
        }
    });
    
    safeAddEventListener('directionalLight', 'input', (e) => {
        if (state.lights.directionalRight) {
            state.lights.directionalRight.intensity = parseFloat(e.target.value);
        }
    });

    safeAddEventListener('directionalLightNum', 'input', (e) => {
        if (state.lights.directionalRight) {
            state.lights.directionalRight.intensity = parseFloat(e.target.value);
        }
    });

    safeAddEventListener('directionalLightRight', 'input', (e) => {
        if (state.lights.directional) {
            state.lights.directional.intensity = parseFloat(e.target.value);
        }
    });

    safeAddEventListener('directionalRightNum', 'input', (e) => {
        if (state.lights.directional) {
            state.lights.directional.intensity = parseFloat(e.target.value);
        }
    });

    // Basic mode button
    safeAddEventListener('basicModeButton', 'click', () => {
        state.lightingMode = 'basic';
        updateLightingModeButtons();
        // Reset icon rotations and light targets
        const leftLightIcon = document.getElementById('left-light-icon');
        const rightLightIcon = document.getElementById('right-light-icon');
        leftLightIcon.style.transform = 'translate(-50%, -50%)';
        rightLightIcon.style.transform = 'translate(-50%, -50%) scaleX(-1)';
        
        // Position icons horizontally in BASIC mode
        const lightPad = document.querySelector('.sun-control');
        if (lightPad) {
            const padRect = lightPad.getBoundingClientRect();
            const centerY = padRect.height / 2;
            const leftX = padRect.width * 0.25;  // 25% from left
            const rightX = padRect.width * 0.75; // 75% from left
            
            leftLightIcon.style.left = `${leftX}px`;
            leftLightIcon.style.top = `${centerY}px`;
            rightLightIcon.style.left = `${rightX}px`;
            rightLightIcon.style.top = `${centerY}px`;
            
            // Update 3D light positions to horizontal
            state.lights.directional.position.x = -5;
            state.lights.directional.position.y = 0;
            state.lights.directionalRight.position.x = 5;
            state.lights.directionalRight.position.y = 0;
        }
        
        state.lights.directional.target.position.set(0, 0, 0);
        state.lights.directionalRight.target.position.set(0, 0, 0);
        updateLightDisplayElements(); // Update display elements when switching to basic mode
    });

    // Complex mode button (MISSING EVENT LISTENER FIXED)
    safeAddEventListener('complexModeButton', 'click', () => {
        state.lightingMode = 'complex';
        updateLightingModeButtons();
        updateLightDisplayElements(); // Update display elements when switching to complex mode
    });

    const dropZone = document.getElementById('dropZone');
    const fileUpload = document.getElementById('fileUpload');

    if (dropZone && fileUpload) {
        dropZone.addEventListener('click', () => {
            fileUpload.click();
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                handleFileUpload(e.dataTransfer.files[0]);
            }
        });

        fileUpload.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
            }
        });
    }

    // SUNSET: TORUS Button Event Listener (removed from UI)  
    // safeAddEventListener('torusButton', 'click', () => {
    //     createModel('default');
    // });

    // CAPTURE FILE Button Event Listener (MISSING EVENT LISTENER FIXED)
    safeAddEventListener('saveToFile', 'click', async () => {
        console.log('Starting capture process...');
        
        // Generate default filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
        const defaultFilename = `3d-model-capture-${timestamp}.png`;
        
        // Add timeout safety mechanism
        let captureComplete = false;
        setTimeout(() => {
            if (!captureComplete) {
                console.error('Capture timed out, falling back to regular capture');
                captureFrame((blob) => {
                    saveFileWithDialog(blob, defaultFilename, 'image/png');
                });
            }
        }, 10000); // 10 second timeout
        
        captureHighQualityFrame((blob) => {
            captureComplete = true;
            saveFileWithDialog(blob, defaultFilename, 'image/png');
        });
    });

    // SAVE SCENE Button Event Listener
    safeAddEventListener('saveSceneButton', 'click', async () => {
        // Generate default filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
        const defaultFilename = `3d-model-scene-${timestamp}.json`;
        
        try {
            const sceneState = createSceneState();
            const jsonString = JSON.stringify(sceneState, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            
            await saveFileWithDialog(blob, defaultFilename, 'application/json');
        } catch (error) {
            console.error('Error saving scene:', error);
            // Fallback to old method
            saveViewerState(defaultFilename);
        }
    });

    // LOAD SCENE Button Event Listener
    safeAddEventListener('loadSceneButton', 'click', () => {
        loadViewerState();
    });

    // Camera Position Controls Synchronization
    syncSliderNumber('posX', 'posXNum');
    syncSliderNumber('posY', 'posYNum'); 
    syncSliderNumber('posZ', 'posZNum');
    
    // Camera Rotation Controls Synchronization
    syncSliderNumber('rotX', 'rotXNum');
    syncSliderNumber('rotY', 'rotYNum');
    syncSliderNumber('rotZ', 'rotZNum');
    
    // Model Rotation Controls Synchronization
    syncSliderNumber('modelRotX', 'modelRotXNum');
    syncSliderNumber('modelRotY', 'modelRotYNum');
    syncSliderNumber('modelRotZ', 'modelRotZNum');
    
    // Model Yaw/Pitch/Roll Controls Synchronization
    syncSliderNumber('modelYaw', 'modelYawNum');
    syncSliderNumber('modelPitch', 'modelPitchNum');
    syncSliderNumber('modelRoll', 'modelRollNum');
    
    // Model Scale Controls Synchronization
    syncSliderNumber('modelZoom', 'modelZoomNum');
    
    // Material Properties Controls Synchronization
    syncSliderNumber('metalness', 'metalnessNum');
    syncSliderNumber('roughness', 'roughnessNum');
    syncSliderNumber('transparency', 'transparencyNum');
    
    // Advanced Material Controls Synchronization
    syncSliderNumber('alphaValue', 'alphaValueNum');
    syncSliderNumber('raycastSamples', 'raycastSamplesNum');
    syncSliderNumber('visibilityThreshold', 'visibilityThresholdNum');

    // Lighting Controls Synchronization (MISSING - CRITICAL FIX)
    syncSliderNumber('directionalLight', 'directionalLightNum');
    syncSliderNumber('directionalLightRight', 'directionalRightNum'); 
    syncSliderNumber('ambientLight', 'ambientLightNum');

    // Camera Position Controls Event Listeners
    safeAddEventListener('posX', 'input', (e) => {
        if (state.camera) {
            state.camera.position.x = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('posY', 'input', (e) => {
        if (state.camera) {
            state.camera.position.y = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('posZ', 'input', (e) => {
        if (state.camera) {
            state.camera.position.z = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });

    // Camera Rotation Controls Event Listeners
    safeAddEventListener('rotX', 'input', (e) => {
        if (state.camera) {
            state.camera.rotation.x = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('rotY', 'input', (e) => {
        if (state.camera) {
            state.camera.rotation.y = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('rotZ', 'input', (e) => {
        if (state.camera) {
            state.camera.rotation.z = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });

    // Model Rotation Controls Event Listeners
    safeAddEventListener('modelRotX', 'input', (e) => {
        if (state.model) {
            state.model.rotation.x = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelRotY', 'input', (e) => {
        if (state.model) {
            state.model.rotation.y = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelRotZ', 'input', (e) => {
        if (state.model) {
            state.model.rotation.z = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });

    // Model Yaw/Pitch/Roll Controls Event Listeners (Euler order XYZ)
    safeAddEventListener('modelYaw', 'input', (e) => {
        if (state.model) {
            const yaw = degToRad(parseFloat(e.target.value));
            const pitch = state.model.rotation.x;
            const roll = state.model.rotation.z;
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
            state.modelYaw = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelPitch', 'input', (e) => {
        if (state.model) {
            const yaw = state.model.rotation.y;
            const pitch = degToRad(parseFloat(e.target.value));
            const roll = state.model.rotation.z;
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
            state.modelPitch = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelRoll', 'input', (e) => {
        if (state.model) {
            const yaw = state.model.rotation.y;
            const pitch = state.model.rotation.x;
            const roll = degToRad(parseFloat(e.target.value));
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
            state.modelRoll = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });

    // Model Scale Controls Event Listeners
    safeAddEventListener('modelZoom', 'input', (e) => {
        if (state.model) {
            const scale = parseFloat(e.target.value);
            state.model.scale.set(scale, scale, scale);
        }
    });

    // Material Properties Controls Event Listeners
    safeAddEventListener('materialColor', 'input', (e) => {
        updateMaterialColour(e.target.value);
    });
    safeAddEventListener('metalness', 'input', (e) => {
        updateMaterialProperty('metalness', parseFloat(e.target.value));
    });
    safeAddEventListener('roughness', 'input', (e) => {
        updateMaterialProperty('roughness', parseFloat(e.target.value));
    });
    safeAddEventListener('transparency', 'input', (e) => {
        updateMaterialTransparency(parseFloat(e.target.value));
    });

    // Advanced Material Controls Event Listeners
    safeAddEventListener('alphaValue', 'input', (e) => {
        updateMaterialProperty('alphaValue', parseFloat(e.target.value));
    });
    safeAddEventListener('raycastSamples', 'input', (e) => {
        updateMaterialProperty('raycastSamples', parseInt(e.target.value));
    });
    safeAddEventListener('visibilityThreshold', 'input', (e) => {
        updateMaterialProperty('visibilityThreshold', parseFloat(e.target.value));
    });

    // Camera NUMBER INPUT Event Listeners (MISSING!)
    safeAddEventListener('posXNum', 'input', (e) => {
        if (state.camera) {
            state.camera.position.x = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('posYNum', 'input', (e) => {
        if (state.camera) {
            state.camera.position.y = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('posZNum', 'input', (e) => {
        if (state.camera) {
            state.camera.position.z = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });

    // Camera Rotation NUMBER INPUT Event Listeners
    safeAddEventListener('rotXNum', 'input', (e) => {
        if (state.camera) {
            state.camera.rotation.x = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('rotYNum', 'input', (e) => {
        if (state.camera) {
            state.camera.rotation.y = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('rotZNum', 'input', (e) => {
        if (state.camera) {
            state.camera.rotation.z = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });

    // Reset Camera Button
    safeAddEventListener('resetCamera', 'click', () => {
        if (state.camera) {
            // Reset to default camera position and rotation
            state.camera.position.set(0, 0, 5);
            state.camera.rotation.set(0, 0, 0);
            // Update UI to reflect reset values
            safeSetValue('posX', 0);
            safeSetValue('posXNum', 0);
            safeSetValue('posY', 0);
            safeSetValue('posYNum', 0);
            safeSetValue('posZ', 5);
            safeSetValue('posZNum', 5);
            safeSetValue('rotX', 0);
            safeSetValue('rotXNum', 0);
            safeSetValue('rotY', 0);
            safeSetValue('rotYNum', 0);
            safeSetValue('rotZ', 0);
            safeSetValue('rotZNum', 0);
            updateCameraInfo();
        }
    });

    // Model Rotation NUMBER INPUT Event Listeners
    safeAddEventListener('modelRotXNum', 'input', (e) => {
        if (state.model) {
            state.model.rotation.x = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelRotYNum', 'input', (e) => {
        if (state.model) {
            state.model.rotation.y = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelRotZNum', 'input', (e) => {
        if (state.model) {
            state.model.rotation.z = degToRad(parseFloat(e.target.value));
            updateCameraInfo();
        }
    });

    // Model Yaw/Pitch/Roll NUMBER INPUT Event Listeners (MISSING!)
    safeAddEventListener('modelYawNum', 'input', (e) => {
        if (state.model) {
            const yaw = degToRad(parseFloat(e.target.value));
            const pitch = state.model.rotation.x;
            const roll = state.model.rotation.z;
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
            state.modelYaw = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelPitchNum', 'input', (e) => {
        if (state.model) {
            const yaw = state.model.rotation.y;
            const pitch = degToRad(parseFloat(e.target.value));
            const roll = state.model.rotation.z;
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
            state.modelPitch = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });
    safeAddEventListener('modelRollNum', 'input', (e) => {
        if (state.model) {
            const yaw = state.model.rotation.y;
            const pitch = state.model.rotation.x;
            const roll = degToRad(parseFloat(e.target.value));
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
            state.modelRoll = parseFloat(e.target.value);
            updateCameraInfo();
        }
    });

    // Reset Model Button (MISSING!)
    safeAddEventListener('resetModel', 'click', () => {
        if (state.model) {
            // Reset model rotation to 0,0,0
            state.model.rotation.set(0, 0, 0);
            state.model.rotation.order = 'XYZ';
            // Reset model scale to 1,1,1
            state.model.scale.set(1, 1, 1);
            // Reset state values
            state.modelYaw = 0;
            state.modelPitch = 0;  
            state.modelRoll = 0;
            
            // Update all UI controls to reflect reset values
            safeSetValue('modelRotX', 0);
            safeSetValue('modelRotXNum', 0);
            safeSetValue('modelRotY', 0);
            safeSetValue('modelRotYNum', 0);
            safeSetValue('modelRotZ', 0);
            safeSetValue('modelRotZNum', 0);
            safeSetValue('modelYaw', 0);
            safeSetValue('modelYawNum', 0);
            safeSetValue('modelPitch', 0);
            safeSetValue('modelPitchNum', 0);
            safeSetValue('modelRoll', 0);
            safeSetValue('modelRollNum', 0);
            safeSetValue('modelZoom', 1);
            safeSetValue('modelZoomNum', 1);
            
            // Update display
            updateCameraInfo();
        }
    });

    // Material Properties NUMBER INPUT Event Listeners (MISSING!)
    safeAddEventListener('metalnessNum', 'input', (e) => {
        updateMaterialProperty('metalness', parseFloat(e.target.value));
    });
    safeAddEventListener('roughnessNum', 'input', (e) => {
        updateMaterialProperty('roughness', parseFloat(e.target.value));
    });
    safeAddEventListener('transparencyNum', 'input', (e) => {
        updateMaterialTransparency(parseFloat(e.target.value));
    });

    // Material COMPLEX/BASIC Button Event Listener (MISSING!)
    safeAddEventListener('complexMaterialButton', 'click', () => {
        // Toggle between 'default' and 'complex' material modes
        state.materialMode = (state.materialMode === 'default') ? 'complex' : 'default';
        updateMaterialModeButtons();
    });

    // Guide Line controls moved to setupGuideLineControls() function
}

// Collapsible sections functionality
function setupCollapsibleSections() {
    const sections = document.querySelectorAll('.control-section[data-section]');
    
    sections.forEach(section => {
        const header = section.querySelector('.section-header');
        const sectionId = section.dataset.section;
        
        if (header && sectionId) {
            // Click event
            header.addEventListener('click', () => {
                toggleSection(section, sectionId);
            });
            
            // Keyboard event (Enter/Space)
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSection(section, sectionId);
                }
            });
        }
    });
    
    // Load saved states
    loadCollapsedStates();
}

function toggleSection(sectionElement, sectionId) {
    const isCollapsed = sectionElement.classList.contains('collapsed');
    const header = sectionElement.querySelector('.section-header');
    
    if (isCollapsed) {
        expandSection(sectionElement, header);
    } else {
        collapseSection(sectionElement, header);
    }
    
    saveCollapsedState(sectionId, !isCollapsed);
}

function collapseSection(sectionElement, header) {
    sectionElement.classList.add('collapsed');
    header.setAttribute('aria-expanded', 'false');
    
    // Change icon to downward triangle when collapsed
    const icon = header.querySelector('.collapse-icon');
    if (icon) {
        icon.textContent = '▼';
    }
}

function expandSection(sectionElement, header) {
    sectionElement.classList.remove('collapsed');
    header.setAttribute('aria-expanded', 'true');
    
    // Change icon to minus when expanded
    const icon = header.querySelector('.collapse-icon');
    if (icon) {
        icon.textContent = '−';
    }
}

function saveCollapsedState(sectionId, isCollapsed) {
    try {
        const states = JSON.parse(localStorage.getItem('collapsedSections') || '{}');
        states[sectionId] = isCollapsed;
        localStorage.setItem('collapsedSections', JSON.stringify(states));
    } catch (error) {
        console.warn('Failed to save collapsed state:', error);
    }
}

function loadCollapsedStates() {
    try {
        const states = JSON.parse(localStorage.getItem('collapsedSections') || '{}');
        Object.entries(states).forEach(([sectionId, isCollapsed]) => {
            const section = document.querySelector(`[data-section="${sectionId}"]`);
            const header = section?.querySelector('.section-header');
            
            if (section && header) {
                if (isCollapsed) {
                    collapseSection(section, header);
                } else {
                    // Ensure expanded sections have minus icon
                    const icon = header.querySelector('.collapse-icon');
                    if (icon) {
                        icon.textContent = '−';
                    }
                }
            }
        });
    } catch (error) {
        console.warn('Failed to load collapsed states:', error);
    }
}

function setupInstructionsToggle() {
    const instructionsPanel = document.getElementById('instructions');
    const titleHint = instructionsPanel.querySelector('.title-hint');
    
    if (!instructionsPanel || !titleHint) return;
    
    // Double-click to toggle
    instructionsPanel.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isCollapsed = instructionsPanel.classList.contains('collapsed');
        
        if (isCollapsed) {
            // Expand
            instructionsPanel.classList.remove('collapsed');
            titleHint.textContent = '(Double-click to hide)';
        } else {
            // Collapse
            instructionsPanel.classList.add('collapsed');
            titleHint.textContent = '(Double-click to open)';
        }
    });
}

function setupLoadSaveToggle() {
    const loadSavePanel = document.getElementById('loadSavePanel');
    const titleHint = loadSavePanel.querySelector('.title-hint');
    
    if (!loadSavePanel || !titleHint) return;
    
    // Double-click to toggle
    loadSavePanel.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isCollapsed = loadSavePanel.classList.contains('collapsed');
        
        if (isCollapsed) {
            // Expand
            loadSavePanel.classList.remove('collapsed');
            titleHint.textContent = '(Double-click to hide)';
        } else {
            // Collapse
            loadSavePanel.classList.add('collapsed');
            titleHint.textContent = '(Double-click to open)';
        }
    });
}

function setupLightControls() {
    const lightPad = document.querySelector('.sun-control');
    const leftLightIcon = document.getElementById('left-light-icon');
    const rightLightIcon = document.getElementById('right-light-icon');

    if (!lightPad || !leftLightIcon || !rightLightIcon) return;

    const getLightPadRect = () => lightPad.getBoundingClientRect();

    const mapToPad = (lightPos) => {
        const rect = getLightPadRect();
        const x = (lightPos.x + 10) / 20;
        const y = (lightPos.y + 10) / 20;
        return {
            x: x * rect.width,
            y: (1 - y) * rect.height
        };
    };

    const setIconPosition = (icon, pos) => {
        icon.style.left = `${pos.x}px`;
        icon.style.top = `${pos.y}px`;
    };

    // setArrowPosition removed - arrows now have fixed positions set by updateLightingModeButtons()

    const checkOverlap = (pos1, pos2, minDistance = 30) => {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy) < minDistance;
    };

    // Get arrow elements
    const leftArrow = document.getElementById('left-direction-arrow');
    const rightArrow = document.getElementById('right-direction-arrow');

    setIconPosition(leftLightIcon, mapToPad(state.lights.directional.position));
    setIconPosition(rightLightIcon, mapToPad(state.lights.directionalRight.position));
    
    // Arrows are positioned dynamically to follow sun icons in COMPLEX mode

    function makeDraggable(icon, light, otherIcon, iconSide) {
        let isDragging = false;
        let mouseStartPos = { x: 0, y: 0 };
        let hasMovedMouse = false;
        const dragThreshold = 5; // pixels

        icon.addEventListener('mousedown', (e) => {
            isDragging = true;
            hasMovedMouse = false;
            mouseStartPos = { x: e.clientX, y: e.clientY };
            icon.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            // Check if mouse has moved beyond threshold
            const mouseDelta = Math.sqrt(
                Math.pow(e.clientX - mouseStartPos.x, 2) + 
                Math.pow(e.clientY - mouseStartPos.y, 2)
            );
            if (mouseDelta > dragThreshold) {
                hasMovedMouse = true;
            }

            const lightPadRect = getLightPadRect();
            let x = e.clientX - lightPadRect.left;
            let y = e.clientY - lightPadRect.top;

            const iconSize = 20;
            const margin = iconSize / 2;
            x = Math.max(margin, Math.min(lightPadRect.width - margin, x));
            y = Math.max(margin, Math.min(lightPadRect.height - margin, y));

            const otherIconRect = otherIcon.getBoundingClientRect();
            const otherIconPadPos = {
                x: otherIconRect.left - lightPadRect.left + iconSize / 2,
                y: otherIconRect.top - lightPadRect.top + iconSize / 2
            };

            if (checkOverlap({ x, y }, otherIconPadPos)) {
                const dx = x - otherIconPadPos.x;
                const dy = y - otherIconPadPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 0) {
                    const scale = 30 / distance;
                    x = otherIconPadPos.x + dx * scale;
                    y = otherIconPadPos.y + dy * scale;
                    x = Math.max(margin, Math.min(lightPadRect.width - margin, x));
                    y = Math.max(margin, Math.min(lightPadRect.height - margin, y));
                }
            }

            setIconPosition(icon, { x, y });

            // Update 3D light position based on drag coordinates
            const worldX = (x / lightPadRect.width) * 20 - 10;
            const worldY = (1 - (y / lightPadRect.height)) * 20 - 10;
            light.position.x = worldX;
            light.position.y = worldY;

            // Update light direction based on new position
            updateLightDirection(light, iconSide);

            // Always update arrow positions to follow sun icons (both BASIC and COMPLEX modes)
            updateArrowPosition();
            
            // Also update fan positions if in fan mode
            if (state.lightDisplayMode === 'fans') {
                updateFanPosition();
            }

            if (state.lightingMode === 'complex') {
                const verticalPercent = y / lightPadRect.height;
                let rotation = (iconSide === 'left') 
                    ? verticalPercent * 90  // Left icon: rotates 0 -> 90 deg (clockwise)
                    : verticalPercent * -90; // Right icon: rotates 0 -> -90 deg (anti-clockwise)

                icon.style.transform = `translate(-50%, -50%) ${icon.classList.contains('flipped') ? 'scaleX(-1)' : ''}`;

                const targetY = (0.5 - verticalPercent) * 10;
                light.target.position.y = targetY;
            } else {
                // BASIC mode: keep standard icon transforms and reset light targets
                icon.style.transform = `translate(-50%, -50%) ${icon.classList.contains('flipped') ? 'scaleX(-1)' : ''}`;
                light.target.position.set(0, 0, 0);
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            icon.style.cursor = 'grab';
        });
    }

    makeDraggable(leftLightIcon, state.lights.directional, rightLightIcon, 'left');
    makeDraggable(rightLightIcon, state.lights.directionalRight, leftLightIcon, 'right');

    // Add specific click and double-click handlers to sun emojis to prevent bubbling
    function addEmojiClickHandlers(icon, iconSide) {
        if (!icon) return;
        
        let mouseDownPos = null;
        let hasDragged = false;
        const dragThreshold = 5; // pixels
        
        // Mouse down - record position
        icon.addEventListener('mousedown', (e) => {
            mouseDownPos = { x: e.clientX, y: e.clientY };
            hasDragged = false;
        });
        
        // Mouse move - detect drag
        icon.addEventListener('mousemove', (e) => {
            if (mouseDownPos) {
                const distance = Math.sqrt(
                    Math.pow(e.clientX - mouseDownPos.x, 2) + 
                    Math.pow(e.clientY - mouseDownPos.y, 2)
                );
                if (distance > dragThreshold) {
                    hasDragged = true;
                }
            }
        });
        
        // Mouse up - reset tracking
        icon.addEventListener('mouseup', (e) => {
            mouseDownPos = null;
        });
        
        // Click handler - only toggle direction if no drag occurred
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Only toggle direction if this was a true click (no drag)
            if (!hasDragged) {
                // Toggle light direction
                if (iconSide === 'left') {
                    state.leftLightDirectionIn = !state.leftLightDirectionIn;
                } else {
                    state.rightLightDirectionIn = !state.rightLightDirectionIn;
                }
                
                // Update visual indicators immediately
                updateArrowPosition();
                if (state.lightDisplayMode === 'fans') {
                    updateFanPosition();
                }
                
                // Update Three.js light direction
                const light = (iconSide === 'left') ? state.lights.directional : state.lights.directionalRight;
                updateLightDirection(light, iconSide);
                
                console.log(`${iconSide} light direction clicked (no drag):`, iconSide === 'left' ? state.leftLightDirectionIn : state.rightLightDirectionIn);
            } else {
                console.log(`${iconSide} icon drag detected - maintaining current direction`);
            }
            
            // Reset drag flag
            hasDragged = false;
        });
        
        // Double-click handler - prevent bubbling to avoid triggering arrow/fan toggle
        icon.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Only toggle if no drag (same logic as single click)
            if (!hasDragged) {
                // Toggle light direction (same as single click for consistency)
                if (iconSide === 'left') {
                    state.leftLightDirectionIn = !state.leftLightDirectionIn;
                } else {
                    state.rightLightDirectionIn = !state.rightLightDirectionIn;
                }
                
                // Update visual indicators immediately
                updateArrowPosition();
                if (state.lightDisplayMode === 'fans') {
                    updateFanPosition();
                }
                
                // Update Three.js light direction
                const light = (iconSide === 'left') ? state.lights.directional : state.lights.directionalRight;
                updateLightDirection(light, iconSide);
                
                console.log(`${iconSide} light direction double-clicked (no drag):`, iconSide === 'left' ? state.leftLightDirectionIn : state.rightLightDirectionIn);
            }
        });
    }
    
    // Add emoji click handlers to both sun icons
    addEmojiClickHandlers(leftLightIcon, 'left');
    addEmojiClickHandlers(rightLightIcon, 'right');

    // Add double-click event listeners to sun control area for light display toggle
    const sunControl = document.querySelector('.sun-control');
    if (sunControl) {
        sunControl.addEventListener('dblclick', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleLightDisplayMode();
        });
    }

    // Initialize display mode and positions
    updateLightDisplayElements();
    
    // Initialize light directions based on default state
    updateLightDirection(state.lights.directional, 'left');
    updateLightDirection(state.lights.directionalRight, 'right');
}

function updateLightDirection(light, iconSide) {
    // Update Three.js light direction based on toggle state
    // This function updates the actual 3D light behavior
    const isDirectionIn = (iconSide === 'left') ? state.leftLightDirectionIn : state.rightLightDirectionIn;
    
    if (isDirectionIn) {
        // Light points toward model center (default behavior)
        light.target.position.set(0, 0, 0);
    } else {
        // Light points away from model center (reverse direction)
        const lightPos = light.position;
        // Calculate outward direction - opposite of light position
        const outwardTarget = new THREE.Vector3(
            -lightPos.x * 2,
            -lightPos.y * 2,
            -lightPos.z * 2
        );
        light.target.position.copy(outwardTarget);
    }
}

function updateArrowPosition() {
    // Position directional arrows relative to sun icons in both BASIC and COMPLEX modes
    // Arrows point based on direction state (inward or outward)

    const leftIcon = document.getElementById('left-light-icon');
    const rightIcon = document.getElementById('right-light-icon');
    const leftArrow = document.getElementById('left-direction-arrow');
    const rightArrow = document.getElementById('right-direction-arrow');
    const lightPad = document.querySelector('.sun-control');

    if (!leftIcon || !rightIcon || !leftArrow || !rightArrow || !lightPad) return;

    // Get sun icon positions and sizes
    const leftIconRect = leftIcon.getBoundingClientRect();
    const rightIconRect = rightIcon.getBoundingClientRect();
    const padRect = lightPad.getBoundingClientRect();

    // Calculate sun emoji radius (approximate - sun emoji is roughly 24px)
    const sunRadius = 12; // Half of approximate sun emoji size
    const arrowOffset = 10; // Additional 10px beyond sun radius
    const totalOffset = sunRadius + arrowOffset;

    // Get icon centers relative to lightPad
    const leftIconCenterX = leftIconRect.left + leftIconRect.width/2 - padRect.left;
    const leftIconCenterY = leftIconRect.top + leftIconRect.height/2 - padRect.top;
    const rightIconCenterX = rightIconRect.left + rightIconRect.width/2 - padRect.left;
    const rightIconCenterY = rightIconRect.top + rightIconRect.height/2 - padRect.top;

    // Calculate vertical positions as percentages (0 = top, 1 = bottom)
    const leftVerticalPercent = leftIconCenterY / padRect.height;
    const rightVerticalPercent = rightIconCenterY / padRect.height;

    // Clock-based rotation system
    function getClockRotation(verticalPercent, isLeft) {
        if (isLeft) {
            // Left arrows: Top=4:30 (135°), Middle=3:00 (90°), Bottom=1:30 (45°)
            if (verticalPercent <= 0.5) {
                // Top to middle: 4:30 to 3:00 (135° to 90°)
                return 135 - (verticalPercent * 2) * 45; // 135° to 90°
            } else {
                // Middle to bottom: 3:00 to 1:30 (90° to 45°)
                const progress = (verticalPercent - 0.5) * 2; // 0 to 1
                return 90 - progress * 45; // 90° to 45°
            }
        } else {
            // Right arrows: Top=7:30 (225°), Middle=9:00 (270°), Bottom=10:30 (315°)
            if (verticalPercent <= 0.5) {
                // Top to middle: 7:30 to 9:00 (225° to 270°)
                return 225 + (verticalPercent * 2) * 45; // 225° to 270°
            } else {
                // Middle to bottom: 9:00 to 10:30 (270° to 315°)
                const progress = (verticalPercent - 0.5) * 2; // 0 to 1
                return 270 + progress * 45; // 270° to 315°
            }
        }
    }

    // Calculate arrow rotations based on lighting mode and direction state
    let leftRotation, rightRotation;
    
    if (state.lightingMode === 'basic') {
        // BASIC mode: arrows point horizontally based on direction state
        leftRotation = state.leftLightDirectionIn ? 90 : 270;   // Inward: right, Outward: left
        rightRotation = state.rightLightDirectionIn ? 270 : 90; // Inward: left, Outward: right
    } else {
        // COMPLEX mode: arrows point based on position and direction state
        if (state.leftLightDirectionIn) {
            leftRotation = getClockRotation(leftVerticalPercent, true);  // Point inward (corrected)
        } else {
            leftRotation = getClockRotation(leftVerticalPercent, true) + 180;  // Point outward (flip 180°)
        }
        
        if (state.rightLightDirectionIn) {
            rightRotation = getClockRotation(rightVerticalPercent, false);  // Point inward (corrected)
        } else {
            rightRotation = getClockRotation(rightVerticalPercent, false) + 180;  // Point outward (flip 180°)
        }
    }

    // Convert rotation to radians for position calculation
    const leftRadians = (leftRotation - 90) * Math.PI / 180; // -90 to point from center outward
    const rightRadians = (rightRotation - 90) * Math.PI / 180;

    // Calculate arrow positions
    const leftArrowX = leftIconCenterX + Math.cos(leftRadians) * totalOffset;
    const leftArrowY = leftIconCenterY + Math.sin(leftRadians) * totalOffset;
    const rightArrowX = rightIconCenterX + Math.cos(rightRadians) * totalOffset;
    const rightArrowY = rightIconCenterY + Math.sin(rightRadians) * totalOffset;

    // Apply positions and rotations
    leftArrow.style.left = `${leftArrowX}px`;
    leftArrow.style.top = `${leftArrowY}px`;
    leftArrow.style.transform = `translate(-50%, -50%) rotate(${leftRotation}deg)`;

    rightArrow.style.left = `${rightArrowX}px`;
    rightArrow.style.top = `${rightArrowY}px`;
    rightArrow.style.transform = `translate(-50%, -50%) rotate(${rightRotation}deg)`;
}

function toggleLightDisplayMode() {
    state.lightDisplayMode = (state.lightDisplayMode === 'arrows') ? 'fans' : 'arrows';
    updateLightDisplayElements();
}

function updateLightDisplayElements() {
    const leftArrow = document.getElementById('left-direction-arrow');
    const rightArrow = document.getElementById('right-direction-arrow');
    const leftFan = document.getElementById('left-light-fan');
    const rightFan = document.getElementById('right-light-fan');

    if (state.lightDisplayMode === 'arrows') {
        // Show arrows, hide fans
        if (leftArrow) leftArrow.style.display = 'block';
        if (rightArrow) rightArrow.style.display = 'block';
        if (leftFan) leftFan.style.display = 'none';
        if (rightFan) rightFan.style.display = 'none';
        // Update arrow positions
        updateArrowPosition();
    } else {
        // Show fans, hide arrows
        if (leftArrow) leftArrow.style.display = 'none';
        if (rightArrow) rightArrow.style.display = 'none';
        if (leftFan) leftFan.style.display = 'block';
        if (rightFan) rightFan.style.display = 'block';
        // Update fan positions
        updateFanPosition();
    }
}

function updateFanPosition() {
    const leftIcon = document.getElementById('left-light-icon');
    const rightIcon = document.getElementById('right-light-icon');
    const leftFan = document.getElementById('left-light-fan');
    const rightFan = document.getElementById('right-light-fan');
    const lightPad = document.querySelector('.sun-control');

    if (!leftIcon || !rightIcon || !leftFan || !rightFan || !lightPad) return;

    // Get sun icon positions
    const leftIconRect = leftIcon.getBoundingClientRect();
    const rightIconRect = rightIcon.getBoundingClientRect();
    const padRect = lightPad.getBoundingClientRect();

    // Get icon centers relative to lightPad
    const leftIconCenterX = leftIconRect.left + leftIconRect.width/2 - padRect.left;
    const leftIconCenterY = leftIconRect.top + leftIconRect.height/2 - padRect.top;
    const rightIconCenterX = rightIconRect.left + rightIconRect.width/2 - padRect.left;
    const rightIconCenterY = rightIconRect.top + rightIconRect.height/2 - padRect.top;

    // Calculate vertical positions as percentages (0 = top, 1 = bottom)
    const leftVerticalPercent = leftIconCenterY / padRect.height;
    const rightVerticalPercent = rightIconCenterY / padRect.height;

    // Use same clock-based rotation system as arrows
    function getClockRotation(verticalPercent, isLeft) {
        if (isLeft) {
            // Left fans: Top=4:30 (135°), Middle=3:00 (90°), Bottom=1:30 (45°)
            if (verticalPercent <= 0.5) {
                // Top to middle: 4:30 to 3:00 (135° to 90°)
                return 135 - (verticalPercent * 2) * 45; // 135° to 90°
            } else {
                // Middle to bottom: 3:00 to 1:30 (90° to 45°)
                const progress = (verticalPercent - 0.5) * 2; // 0 to 1
                return 90 - progress * 45; // 90° to 45°
            }
        } else {
            // Right fans: Top=7:30 (225°), Middle=9:00 (270°), Bottom=10:30 (315°)
            if (verticalPercent <= 0.5) {
                // Top to middle: 7:30 to 9:00 (225° to 270°)
                return 225 + (verticalPercent * 2) * 45; // 225° to 270°
            } else {
                // Middle to bottom: 9:00 to 10:30 (270° to 315°)
                const progress = (verticalPercent - 0.5) * 2; // 0 to 1
                return 270 + progress * 45; // 270° to 315°
            }
        }
    }

    // Calculate fan rotations based on lighting mode and direction state (same as arrows)
    let leftRotation, rightRotation;
    
    if (state.lightingMode === 'basic') {
        // BASIC mode: fans point horizontally based on direction state
        leftRotation = state.leftLightDirectionIn ? 90 : 270;   // Inward: right, Outward: left
        rightRotation = state.rightLightDirectionIn ? 270 : 90; // Inward: left, Outward: right
    } else {
        // COMPLEX mode: fans point based on position and direction state
        if (state.leftLightDirectionIn) {
            leftRotation = getClockRotation(leftVerticalPercent, true);  // Point inward (corrected)
        } else {
            leftRotation = getClockRotation(leftVerticalPercent, true) + 180;  // Point outward (flip 180°)
        }
        
        if (state.rightLightDirectionIn) {
            rightRotation = getClockRotation(rightVerticalPercent, false);  // Point inward (corrected)
        } else {
            rightRotation = getClockRotation(rightVerticalPercent, false) + 180;  // Point outward (flip 180°)
        }
    }

    // Position fans so apex (center of SVG) is at sun emoji center  
    // The triangle apex is at (40,40) in the 80x80 SVG, so translate(-50%, -50%) centers it
    leftFan.style.left = `${leftIconCenterX}px`;
    leftFan.style.top = `${leftIconCenterY}px`;
    leftFan.style.transform = `translate(-50%, -50%) rotate(${leftRotation}deg)`;

    rightFan.style.left = `${rightIconCenterX}px`;
    rightFan.style.top = `${rightIconCenterY}px`;
    rightFan.style.transform = `translate(-50%, -50%) rotate(${rightRotation}deg)`;
}

// ----------------------------------------------------------------
// 7. Guide Line Setup Functions
// ----------------------------------------------------------------
function setupGuideLineControls() {
    console.log('Setting up guide line controls...');
    
    // Guide Line controls synchronization
    syncSliderNumber('lineThickness', 'lineThicknessNum');
    syncSliderNumber('lineTransparency', 'lineTransparencyNum');
    syncSliderNumber('lineAngle', 'lineAngleNum');
    syncSliderNumber('linePosY', 'linePosYNum');

    // Guide Line event listeners
    safeAddEventListener('lineThickness', 'input', (e) => {
        state.guideLines[0].thickness = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('lineColour', 'input', (e) => {
        state.guideLines[0].colour = e.target.value;
        updateGuideLine();
    });

    safeAddEventListener('lineTransparency', 'input', (e) => {
        state.guideLines[0].transparency = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('lineAngle', 'input', (e) => {
        state.guideLines[0].angle = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('linePosY', 'input', (e) => {
        state.guideLines[0].posY = parseFloat(e.target.value);
        updateGuideLine();
    });

    // Guide Line NUMBER INPUT Event Listeners (MISSING!)
    safeAddEventListener('lineThicknessNum', 'input', (e) => {
        state.guideLines[0].thickness = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('lineTransparencyNum', 'input', (e) => {
        state.guideLines[0].transparency = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('lineAngleNum', 'input', (e) => {
        state.guideLines[0].angle = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('linePosYNum', 'input', (e) => {
        state.guideLines[0].posY = parseFloat(e.target.value);
        updateGuideLine();
    });

    // CRITICAL FIX: Define window functions FIRST before event listeners bind to them
    window.addGuideLine = function() {
        console.log('Adding new guide line...');
        const newId = state.guideLines.length > 0 ? Math.max(...state.guideLines.map(l => l.id)) + 1 : 0;

        const newLine = {
            id: newId,
            thickness: 5,
            colour: '#FFFF00',
            transparency: 0.5,
            angle: 0,
            posY: 0
        };

        state.guideLines.push(newLine);
        window.addGuideLineControl(newLine);
        updateGuideLine();
        
        // FIXED: Ensure new guide lines are always visible when created
        setTimeout(() => {
            const newLineElement = document.querySelector(`[data-id="${newId}"]`);
            if (newLineElement) {
                newLineElement.style.display = 'block';
                console.log(`New guide line ${newId} set to visible`);
            }
        }, 50); // Small delay to ensure DOM update
        
        window.updateGuideLineTitles();
    };
    
    window.deleteGuideLine = function(id) {
        console.log('Deleting guide line with id:', id);
        state.guideLines = state.guideLines.filter(line => line.id !== id);
        const controlToRemove = document.querySelector(`.control-section[data-guideline-id='${id}']`);
        if (controlToRemove) {
            controlToRemove.remove();
        }
        updateGuideLine();
        window.updateGuideLineTitles();
    };

    // EMERGENCY FIX: Event listeners now bind to already-defined functions
    safeAddEventListener('addLine', 'click', window.addGuideLine);
    
    // CRITICAL FIX: Use wrapper function to prevent event object being passed as lineId
    safeAddEventListener('hideUnhideGuide', 'click', function(event) {
        event.preventDefault();
        markGuideLineUserInteraction(); // Track user interaction to prevent future auto-hide
        toggleGuideLineVisibility(); // Call without parameters for main guide line toggle
    });
    
    // FEATURE: Auto-hide default guide line on first load only
    console.log('Setting up auto-hide timer...');
    console.log('Current sessionStorage guideLineUserInteracted:', sessionStorage.getItem('guideLineUserInteracted'));
    
    // TEMPORARY: Clear sessionStorage for testing
    sessionStorage.removeItem('guideLineUserInteracted');
    console.log('Cleared sessionStorage for testing');
    
    setTimeout(() => {
        console.log('Auto-hide timer fired!');
        autoHideDefaultGuideLineOnFirstLoad();
    }, 2000);
    
    window.addGuideLineControl = function(lineState) {
        const template = document.getElementById('guideline-template');
        const clone = template.content.cloneNode(true);
        const section = clone.querySelector('.control-section');
        section.dataset.guidelineId = lineState.id;

        const header = section.querySelector('h3');
        header.textContent = `Guide Line ${state.guideLines.length}`;

        const removeButton = section.querySelector('.remove-line');
        if (removeButton) {
            removeButton.addEventListener('click', () => window.deleteGuideLine(lineState.id));
        } else {
            console.error('Remove button not found in template!');
        }

        const addLineBelowButton = section.querySelector('.add-line-below');
        if (addLineBelowButton) {
            addLineBelowButton.addEventListener('click', window.addGuideLine);
        } else {
            console.error('Add line below button not found in template!');
        }

        // Setup HIDE/UNHIDE button for additional panes
        const hideUnhideButton = section.querySelector('.hide-unhide-guide');
        if (hideUnhideButton) {
            hideUnhideButton.addEventListener('click', () => toggleGuideLineVisibility(lineState.id));
        } else {
            console.error('Hide/Unhide button not found in additional pane template!');
        }

        const colourInput = section.querySelector('.line-colour');
        colourInput.value = lineState.colour;
        colourInput.addEventListener('input', (e) => {
            lineState.colour = e.target.value;
            updateGuideLine();
        });

        const thicknessSlider = section.querySelector('.line-thickness');
        const thicknessNum = section.querySelector('.line-thickness-num');
        thicknessSlider.value = lineState.thickness;
        thicknessNum.value = lineState.thickness;
        thicknessSlider.addEventListener('input', (e) => {
            lineState.thickness = parseFloat(e.target.value);
            updateGuideLine();
        });
        thicknessNum.addEventListener('input', (e) => {
            lineState.thickness = parseFloat(e.target.value);
            updateGuideLine();
        });

        const transparencySlider = section.querySelector('.line-transparency');
        const transparencyNum = section.querySelector('.line-transparency-num');
        transparencySlider.value = lineState.transparency;
        transparencyNum.value = lineState.transparency;
        transparencySlider.addEventListener('input', (e) => {
            lineState.transparency = parseFloat(e.target.value);
            updateGuideLine();
        });
        transparencyNum.addEventListener('input', (e) => {
            lineState.transparency = parseFloat(e.target.value);
            updateGuideLine();
        });

        const angleSlider = section.querySelector('.line-angle');
        const angleNum = section.querySelector('.line-angle-num');
        angleSlider.value = lineState.angle;
        angleNum.value = lineState.angle;
        angleSlider.addEventListener('input', (e) => {
            lineState.angle = parseFloat(e.target.value);
            updateGuideLine();
        });
        angleNum.addEventListener('input', (e) => {
            lineState.angle = parseFloat(e.target.value);
            updateGuideLine();
        });

        const posYSlider = section.querySelector('.line-pos-y');
        const posYNum = section.querySelector('.line-pos-y-num');
        posYSlider.value = lineState.posY;
        posYNum.value = lineState.posY;
        posYSlider.addEventListener('input', (e) => {
            lineState.posY = parseFloat(e.target.value);
            updateGuideLine();
        });
        posYNum.addEventListener('input', (e) => {
            lineState.posY = parseFloat(e.target.value);
            updateGuideLine();
        });

        const cameraSection = document.querySelector('[data-section="camera"]');
        cameraSection.parentNode.insertBefore(section, cameraSection);
        setupCollapsibleSections(); // Re-initialize collapsible sections
        
        // Setup synchronization AFTER DOM insertion to ensure elements are fully accessible
        syncSliderNumberElements(thicknessSlider, thicknessNum);
        syncSliderNumberElements(transparencySlider, transparencyNum);
        syncSliderNumberElements(angleSlider, angleNum);
        syncSliderNumberElements(posYSlider, posYNum);
    };
    
    window.updateGuideLineTitles = function() {
        const allGuidelineSections = document.querySelectorAll('[data-section="guideline"], [data-section="guideline-added"]');
        allGuidelineSections.forEach((section, index) => {
            const header = section.querySelector('h3');
            if (state.guideLines.length > 1) {
                header.textContent = `Guide Line ${index + 1}`;
            } else {
                header.textContent = 'Guide Line';
            }
        });
    };
    
    console.log('Guide line controls setup complete.');
}

// ----------------------------------------------------------------
// 8. Main Initialization Functions
// ----------------------------------------------------------------
function handleResize() {
    const container = document.querySelector('.viewer-container');
    if (state.camera && state.renderer && container) {
        const width = container.clientWidth;
        const height = container.clientHeight;

        state.camera.aspect = width / height;
        state.camera.updateProjectionMatrix();

        state.renderer.setSize(width, height);
        
        // Update guide lines to match new window dimensions
        updateGuideLine();
    }
}

function initThreeJS() {
    const container = document.querySelector('.viewer-container');
    
    // Scene
    state.scene = new THREE.Scene();
    state.scene.background = null;
    
    // Camera - adjust field of view and position for better model display
    state.camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    state.camera.position.set(0, 0, 5);
    
    // Renderer - ensure it fills the entire container
    state.renderer = new THREE.WebGLRenderer({
        antialias: true, 
        alpha: true,
        preserveDrawingBuffer: true 
    });
    state.renderer.setSize(container.clientWidth, container.clientHeight);
    state.renderer.setPixelRatio(window.devicePixelRatio);
    
    container.appendChild(state.renderer.domElement);
    
    // Lights
    state.lights.ambient = new THREE.AmbientLight(0xffffff, 0.4);
    state.scene.add(state.lights.ambient);
    
    state.lights.directional = new THREE.DirectionalLight(0xffffff, 0.6);
    state.lights.directional.position.set(5, 5, 5);
    state.lights.directional.castShadow = false;
    state.scene.add(state.lights.directional);

    // Create a target for the left light
    state.lights.directional.target = new THREE.Object3D();
    state.scene.add(state.lights.directional.target);

    state.lights.directionalRight = new THREE.DirectionalLight(0xffffff, 0.0);
    state.lights.directionalRight.position.set(-5, 5, 5);
    state.lights.directionalRight.castShadow = false;
    state.scene.add(state.lights.directionalRight);

    // Create a target for the right light
    state.lights.directionalRight.target = new THREE.Object3D();
    state.scene.add(state.lights.directionalRight.target);
    
    // Create initial model
    createModel('default');
    
    // Initialize 3D orientation widget
    initOrientationWidget();
    
    // Handle window resize
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start render loop
    animate();
    
    // Hide loading screen
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
        loadingEl.style.display = 'none';
        console.log('✅ Loading screen hidden successfully');
    } else {
        console.warn('⚠️ Loading element not found');
    }
}
function initializeBasicModePositioning() {
    // Initialize light icons in horizontal BASIC mode positions
    const leftLightIcon = document.getElementById('left-light-icon');
    const rightLightIcon = document.getElementById('right-light-icon');
    const lightPad = document.querySelector('.sun-control');
    
    if (leftLightIcon && rightLightIcon && lightPad) {
        const padRect = lightPad.getBoundingClientRect();
        const centerY = padRect.height / 2;
        const leftX = padRect.width * 0.25;  // 25% from left
        const rightX = padRect.width * 0.75; // 75% from left
        
        leftLightIcon.style.left = `${leftX}px`;
        leftLightIcon.style.top = `${centerY}px`;
        rightLightIcon.style.left = `${rightX}px`;
        rightLightIcon.style.top = `${centerY}px`;
        
        // Initialize transforms
        leftLightIcon.style.transform = 'translate(-50%, -50%)';
        rightLightIcon.style.transform = 'translate(-50%, -50%) scaleX(-1)';
        
        // Update 3D light positions to horizontal
        if (state.lights.directional && state.lights.directionalRight) {
            state.lights.directional.position.x = -5;
            state.lights.directional.position.y = 0;
            state.lights.directionalRight.position.x = 5;
            state.lights.directionalRight.position.y = 0;
            
            // Set targets to center
            state.lights.directional.target.position.set(0, 0, 0);
            state.lights.directionalRight.target.position.set(0, 0, 0);
        }
        
        // Update display elements
        updateLightDisplayElements();
    }
}

async function initializeViewer() {
    try {
        initThreeJS();
        setupControls();
        setupLightControls();
        
        // Initialize BASIC mode positioning (since app starts in BASIC mode)
        initializeBasicModePositioning();
        
        setupGuideLineControls(); // Set up guide line controls after DOM is ready
        setupCollapsibleSections(); // FIXED: Initialize collapsible sections functionality
        setupInstructionsToggle(); // Initialize instructions panel toggle
        setupLoadSaveToggle(); // Initialize load and save panel toggle
        loadPresetsList();
        updateLightingModeButtons(); // Initialize button states
        setupMouseControls(); // Call here after DOM is ready
        
        // Initialize guide line controls to match state
        safeSetValue('lineThickness', state.guideLines[0].thickness);
        safeSetValue('lineThicknessNum', state.guideLines[0].thickness);
        safeSetValue('lineColour', state.guideLines[0].colour);
        safeSetValue('lineTransparency', state.guideLines[0].transparency);
        safeSetValue('lineTransparencyNum', state.guideLines[0].transparency);
        safeSetValue('lineAngle', state.guideLines[0].angle);
        safeSetValue('lineAngleNum', state.guideLines[0].angle);
        safeSetValue('linePosY', state.guideLines[0].posY);
        safeSetValue('linePosYNum', state.guideLines[0].posY);
        
        updateGuideLine(); // Initialize guide line
        updateMaterialModeButtons(); // Initialize material mode
        console.log('✅ 3D Model Viewer initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing viewer:', error);
        showLoadingError('Failed to initialize 3D viewer');
    }
}

function showLoadingError(message) {
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
        loadingEl.innerHTML = `
            <div style="color: #ff6b6b; text-align: center;">
                <div style="font-size: 18px; margin-bottom: 10px;">⚠️ ${message}</div>
                <div style="font-size: 14px; color: #666;">Please refresh the page to try again</div>
            </div>
        `;
    }
}

function createSceneState() {
    return {
        version: "2.0",
        timestamp: new Date().toISOString(),
        camera: {
            position: {
                x: state.camera.position.x,
                y: state.camera.position.y,
                z: state.camera.position.z
            },
            rotation: {
                x: state.camera.rotation.x,
                y: state.camera.rotation.y,
                z: state.camera.rotation.z
            }
        },
        model: {
            type: state.currentModelType,
            rotation: {
                x: state.model ? state.model.rotation.x : 0,
                y: state.model ? state.model.rotation.y : 0,
                z: state.model ? state.model.rotation.z : 0
            },
            yaw: state.modelYaw,
            pitch: state.modelPitch,
            roll: state.modelRoll
        },
        lighting: {
            mode: state.lightingMode,
            ambient: state.lights.ambient ? state.lights.ambient.intensity : 0.4,
            directional: {
                left: state.lights.directional ? state.lights.directional.intensity : 0.6,
                right: state.lights.directionalRight ? state.lights.directionalRight.intensity : 0.0
            }
        },
        materials: {
            mode: state.materialMode,
            color: document.getElementById('materialColor') ? document.getElementById('materialColor').value : '#4CAF50',
            metalness: parseFloat(document.getElementById('metalness') ? document.getElementById('metalness').value : '0.1'),
            roughness: parseFloat(document.getElementById('roughness') ? document.getElementById('roughness').value : '0.8'),
            transparency: parseFloat(document.getElementById('transparency') ? document.getElementById('transparency').value : '1'),
            transparencyMode: state.transparencyMode
        },
        guideLines: state.guideLines.map(line => {
            // Check current visibility state of each guide line
            const lineElement = document.querySelector(`[data-id="${line.id}"]`);
            const isVisible = lineElement && 
                            lineElement.style.display !== 'none' && 
                            getComputedStyle(lineElement).display !== 'none';
            
            return {
                id: line.id,
                thickness: line.thickness,
                colour: line.colour,
                transparency: line.transparency,
                angle: line.angle,
                posY: line.posY,
                visible: isVisible
            };
        })
    };
}

// Save viewer state to JSON file
function saveViewerState(filename = null) {
    try {
        const sceneState = {
            version: "2.0",
            timestamp: new Date().toISOString(),
            camera: {
                position: {
                    x: state.camera.position.x,
                    y: state.camera.position.y,
                    z: state.camera.position.z
                },
                rotation: {
                    x: state.camera.rotation.x,
                    y: state.camera.rotation.y,
                    z: state.camera.rotation.z
                }
            },
            model: {
                type: state.currentModelType,
                rotation: {
                    x: state.model ? state.model.rotation.x : 0,
                    y: state.model ? state.model.rotation.y : 0,
                    z: state.model ? state.model.rotation.z : 0
                },
                yaw: state.modelYaw,
                pitch: state.modelPitch,
                roll: state.modelRoll
            },
            lighting: {
                mode: state.lightingMode,
                ambient: state.lights.ambient ? state.lights.ambient.intensity : 0.4,
                directional: {
                    left: state.lights.directional ? state.lights.directional.intensity : 0.6,
                    right: state.lights.directionalRight ? state.lights.directionalRight.intensity : 0.0
                }
            },
            materials: {
                mode: state.materialMode,
                color: document.getElementById('materialColor') ? document.getElementById('materialColor').value : '#4CAF50',
                metalness: parseFloat(document.getElementById('metalness') ? document.getElementById('metalness').value : '0.1'),
                roughness: parseFloat(document.getElementById('roughness') ? document.getElementById('roughness').value : '0.8'),
                transparency: parseFloat(document.getElementById('transparency') ? document.getElementById('transparency').value : '1'),
                transparencyMode: state.transparencyMode
            },
            guideLines: state.guideLines.map(line => {
                // Check current visibility state of each guide line
                const lineElement = document.querySelector(`[data-id="${line.id}"]`);
                const isVisible = lineElement && 
                                lineElement.style.display !== 'none' && 
                                getComputedStyle(lineElement).display !== 'none';
                
                return {
                    id: line.id,
                    thickness: line.thickness,
                    colour: line.colour,
                    transparency: line.transparency,
                    angle: line.angle,
                    posY: line.posY,
                    visible: isVisible
                };
            })
        };

        // Use provided filename or prompt user
        let finalFileName;
        if (filename) {
            finalFileName = filename;
        } else {
            // Prompt user for filename
            const defaultFileName = `3d-viewer-scene-${new Date().toISOString().split('T')[0]}`;
            const userFileName = prompt('Enter filename for your scene:', defaultFileName);
            
            // If user cancels, don't save
            if (userFileName === null) {
                console.log('Save cancelled by user');
                return;
            }
            
            finalFileName = userFileName.trim();
            if (!finalFileName) {
                finalFileName = defaultFileName; // Use default if empty
            }
        }
        
        // Add .3dview extension if not present
        if (!finalFileName.toLowerCase().endsWith('.3dview')) {
            finalFileName += '.3dview';
        }
        
        // Remove any invalid characters for filenames
        finalFileName = finalFileName.replace(/[<>:"/\\|?*]/g, '-');
        
        const dataStr = JSON.stringify(sceneState, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = finalFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        console.log('Scene saved successfully');
    } catch (error) {
        console.error('Error saving scene:', error);
        alert('Error saving scene. Please try again.');
    }
}

// Load viewer state from JSON file
function loadViewerState() {
    try {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.3dview,.json,application/json,text/plain';
        input.onchange = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            // Validate file extension
            const fileName = file.name.toLowerCase();
            const validExtensions = ['.3dview', '.json'];
            const hasValidExtension = validExtensions.some(ext => fileName.endsWith(ext));
            
            if (!hasValidExtension) {
                alert('Please select a .3dview or .json file.');
                return;
            }

            console.log('Loading scene file:', file.name, 'Size:', file.size, 'bytes');
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const savedState = JSON.parse(e.target.result);
                    
                    // Restore camera
                    if (savedState.camera) {
                        if (savedState.camera.position) {
                            state.camera.position.set(
                                savedState.camera.position.x,
                                savedState.camera.position.y,
                                savedState.camera.position.z
                            );
                            safeSetValue('posX', savedState.camera.position.x);
                            safeSetValue('posXNum', savedState.camera.position.x);
                            safeSetValue('posY', savedState.camera.position.y);
                            safeSetValue('posYNum', savedState.camera.position.y);
                            safeSetValue('posZ', savedState.camera.position.z);
                            safeSetValue('posZNum', savedState.camera.position.z);
                        }
                        if (savedState.camera.rotation) {
                            state.camera.rotation.set(
                                savedState.camera.rotation.x,
                                savedState.camera.rotation.y,
                                savedState.camera.rotation.z
                            );
                            safeSetValue('rotX', radToDeg(savedState.camera.rotation.x));
                            safeSetValue('rotXNum', radToDeg(savedState.camera.rotation.x));
                            safeSetValue('rotY', radToDeg(savedState.camera.rotation.y));
                            safeSetValue('rotYNum', radToDeg(savedState.camera.rotation.y));
                            safeSetValue('rotZ', radToDeg(savedState.camera.rotation.z));
                            safeSetValue('rotZNum', radToDeg(savedState.camera.rotation.z));
                        }
                    }

                    // Restore lighting
                    if (savedState.lighting) {
                        if (savedState.lighting.ambient !== undefined) {
                            state.lights.ambient.intensity = savedState.lighting.ambient;
                            safeSetValue('ambientLight', savedState.lighting.ambient);
                            safeSetValue('ambientLightNum', savedState.lighting.ambient);
                        }
                        if (savedState.lighting.directional) {
                            if (savedState.lighting.directional.left !== undefined) {
                                state.lights.directional.intensity = savedState.lighting.directional.left;
                                safeSetValue('directionalLight', savedState.lighting.directional.left);
                                safeSetValue('directionalLightNum', savedState.lighting.directional.left);
                            }
                            if (savedState.lighting.directional.right !== undefined) {
                                state.lights.directionalRight.intensity = savedState.lighting.directional.right;
                                safeSetValue('directionalLightRight', savedState.lighting.directional.right);
                                safeSetValue('directionalRightNum', savedState.lighting.directional.right);
                            }
                        }
                    }

                    // Restore materials
                    if (savedState.materials) {
                        if (savedState.materials.color) {
                            safeSetValue('materialColor', savedState.materials.color);
                            updateMaterialColour(savedState.materials.color);
                        }
                        if (savedState.materials.metalness !== undefined) {
                            safeSetValue('metalness', savedState.materials.metalness);
                            safeSetValue('metalnessNum', savedState.materials.metalness);
                            updateMaterialProperty('metalness', savedState.materials.metalness);
                        }
                        if (savedState.materials.roughness !== undefined) {
                            safeSetValue('roughness', savedState.materials.roughness);
                            safeSetValue('roughnessNum', savedState.materials.roughness);
                            updateMaterialProperty('roughness', savedState.materials.roughness);
                        }
                        if (savedState.materials.transparency !== undefined) {
                            safeSetValue('transparency', savedState.materials.transparency);
                            safeSetValue('transparencyNum', savedState.materials.transparency);
                            updateMaterialTransparency(savedState.materials.transparency);
                        }
                        if (savedState.materials.transparencyMode) {
                            safeSetValue('transparencyMode', savedState.materials.transparencyMode);
                            state.transparencyMode = savedState.materials.transparencyMode;
                        }
                    }

                    // Restore model rotation
                    if (savedState.model) {
                        if (savedState.model.rotation && state.model) {
                            state.model.rotation.set(
                                savedState.model.rotation.x,
                                savedState.model.rotation.y,
                                savedState.model.rotation.z
                            );
                            safeSetValue('modelRotX', radToDeg(savedState.model.rotation.x));
                            safeSetValue('modelRotXNum', radToDeg(savedState.model.rotation.x));
                            safeSetValue('modelRotY', radToDeg(savedState.model.rotation.y));
                            safeSetValue('modelRotYNum', radToDeg(savedState.model.rotation.y));
                            safeSetValue('modelRotZ', radToDeg(savedState.model.rotation.z));
                            safeSetValue('modelRotZNum', radToDeg(savedState.model.rotation.z));
                        }
                        if (savedState.model.yaw !== undefined) {
                            state.modelYaw = savedState.model.yaw;
                            safeSetValue('modelYaw', savedState.model.yaw);
                            safeSetValue('modelYawNum', savedState.model.yaw);
                        }
                        if (savedState.model.pitch !== undefined) {
                            state.modelPitch = savedState.model.pitch;
                            safeSetValue('modelPitch', savedState.model.pitch);
                            safeSetValue('modelPitchNum', savedState.model.pitch);
                        }
                        if (savedState.model.roll !== undefined) {
                            state.modelRoll = savedState.model.roll;
                            safeSetValue('modelRoll', savedState.model.roll);
                            safeSetValue('modelRollNum', savedState.model.roll);
                        }
                    }

                    // Restore guide lines
                    if (savedState.guideLines && Array.isArray(savedState.guideLines)) {
                        // Clear existing guide lines except the first one (keep it for controls)
                        const currentFirstLine = state.guideLines[0];
                        
                        // Clear all additional guide line controls
                        const additionalControls = document.querySelectorAll('.control-section[data-guideline-id]');
                        additionalControls.forEach(control => control.remove());
                        
                        // Reset guide lines array to empty
                        state.guideLines = [];
                        
                        // Restore all guide lines from saved data
                        savedState.guideLines.forEach((savedLine, index) => {
                            // Add line to state
                            const restoredLine = { ...savedLine };
                            state.guideLines.push(restoredLine);
                            
                            if (index === 0) {
                                // Update first guide line controls (main controls)
                                safeSetValue('lineThickness', savedLine.thickness);
                                safeSetValue('lineThicknessNum', savedLine.thickness);
                                safeSetValue('lineColour', savedLine.colour);
                                safeSetValue('lineTransparency', savedLine.transparency);
                                safeSetValue('lineTransparencyNum', savedLine.transparency);
                                safeSetValue('lineAngle', savedLine.angle);
                                safeSetValue('lineAngleNum', savedLine.angle);
                                safeSetValue('linePosY', savedLine.posY);
                                safeSetValue('linePosYNum', savedLine.posY);
                            } else {
                                // Create additional guide line controls for extra lines
                                window.addGuideLineControl(restoredLine);
                            }
                        });
                        
                        // Update guide line titles and render
                        window.updateGuideLineTitles();
                        updateGuideLine();
                        
                        // Restore visibility state for all guide lines
                        savedState.guideLines.forEach((savedLine, index) => {
                            const lineElement = document.querySelector(`[data-id="${savedLine.id}"]`);
                            if (lineElement && savedLine.hasOwnProperty('visible')) {
                                if (savedLine.visible) {
                                    lineElement.style.display = 'block';
                                } else {
                                    lineElement.style.display = 'none';
                                }
                                
                                // Update the corresponding HIDE/UNHIDE button state
                                let button;
                                if (index === 0) {
                                    // Main guide line button
                                    button = document.getElementById('hideUnhideGuide');
                                } else {
                                    // Additional guide line button
                                    const section = document.querySelector(`[data-guideline-id="${savedLine.id}"]`);
                                    button = section ? section.querySelector('.hide-unhide-guide') : null;
                                }
                                
                                if (button) {
                                    if (savedLine.visible) {
                                        button.textContent = 'HIDE';
                                        button.classList.remove('button-danger');
                                        button.classList.add('secondary');
                                    } else {
                                        button.textContent = 'UNHIDE';
                                        button.classList.remove('secondary');
                                        button.classList.add('button-danger');
                                    }
                                }
                            }
                        });
                    }

                    updateCameraInfo();
                    console.log('Scene loaded successfully from:', file.name);
                    alert('Scene loaded successfully!');
                    
                } catch (parseError) {
                    console.error('Error parsing scene file:', parseError);
                    console.error('File content preview:', e.target.result?.substring(0, 200));
                    alert(`Error loading scene file: ${parseError.message}\n\nPlease ensure the file is a valid .3dview or JSON file created by the Save Scene function.`);
                }
            };
            reader.readAsText(file);
        };
        input.click();
    } catch (error) {
        console.error('Error loading scene:', error);
        alert('Error loading scene. Please try again.');
    }
}

// Initialize when page loads
window.addEventListener('load', () => {
    initializeViewer();
});
