import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';

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
    }
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
            // BASIC selected - green
            basicButton.style.opacity = '1';
            basicButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            // COMPLEX unselected - grey
            complexButton.style.opacity = '0.6';
            complexButton.style.background = 'linear-gradient(45deg, #ccc, #999)';
            // Hide direction arrows in BASIC mode
            if (leftArrow) leftArrow.style.display = 'none';
            if (rightArrow) rightArrow.style.display = 'none';
        } else {
            // COMPLEX selected - red
            complexButton.style.opacity = '1';
            complexButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
            // BASIC unselected - grey
            basicButton.style.opacity = '0.6';
            basicButton.style.background = 'linear-gradient(45deg, #ccc, #999)';
            
            // Show direction arrows in COMPLEX mode (positioned dynamically by drag handler)
            if (leftArrow && rightArrow) {
                leftArrow.style.display = 'block';
                rightArrow.style.display = 'block';
                // Position and rotation will be set by updateArrowPosition function
            }
        }
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
        
        /*
        safeSetValue('rotX', Math.round(rotXDeg));
        safeSetValue('rotY', Math.round(rotYDeg));
        safeSetValue('rotZ', Math.round(rotZDeg));
        safeSetValue('rotXNum', Math.round(rotXDeg));
        safeSetValue('rotYNum', Math.round(rotYDeg));
        safeSetValue('rotZNum', Math.round(rotZDeg));
        */
        
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
    // Update Model Rotation display
    const modelRotationDisplay = document.getElementById('model-rotation-display');
    if (modelRotationDisplay) {
        modelRotationDisplay.textContent = `${Math.round(modelRotXDeg)}° ${Math.round(modelRotYDeg)}° ${Math.round(modelRotZDeg)}°`;
    }
    
    // Update Camera Position display
    const cameraPositionDisplay = document.getElementById('camera-position-display');
    if (cameraPositionDisplay) {
        cameraPositionDisplay.textContent = `${Math.round(pos.x)} ${Math.round(pos.y)} ${Math.round(pos.z)}`;
    }
    
    // Update Camera Rotation display (restored from SUNSET)
    const cameraRotationDisplay = document.getElementById('camera-rotation-display');
    if (cameraRotationDisplay) {
        cameraRotationDisplay.textContent = `${Math.round(camRotXDeg)}° ${Math.round(camRotYDeg)}° ${Math.round(camRotZDeg)}°`;
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
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: false
        });
        widget.renderer.setSize(80, 80);
        widget.renderer.setClearColor(0x000000, 0);
        
        // Create separate scene for widget
        widget.scene = new THREE.Scene();
        
        // Create orthographic camera for consistent widget appearance
        const aspect = 1; // Square canvas
        widget.camera = new THREE.OrthographicCamera(-2 * aspect, 2 * aspect, 2, -2, 0.1, 10);
        widget.camera.position.set(2, 2, 2);
        widget.camera.lookAt(0, 0, 0);
        
        console.log('Widget camera created:', widget.camera);

        // Add axes helper for orientation visualization
        widget.axesHelper = new THREE.AxesHelper(1.5);
        widget.scene.add(widget.axesHelper);
        console.log('Axes helper added');
        
        // Add subtle lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        widget.scene.add(ambientLight);
        
        // Add compass/orientation indicator
        createOrientationCompass();
        
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
        opacity: 0.7 
    });
    
    const compass = new THREE.Mesh(compassGeometry, compassMaterial);
    compass.rotation.x = -Math.PI / 2; // Lay flat
    
    widget.scene.add(compass);
    widget.compass = compass;
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
    
    if (rotChanged) {
        // Sync axes helper rotation with main model
        widget.axesHelper.rotation.copy(modelRotation);
        
        // Update compass rotation
        if (widget.compass) {
            widget.compass.rotation.x = -Math.PI / 2; // Keep compass flat
            widget.compass.rotation.z = modelRotation.y; // Rotate with Y-axis
        }
        
        // Store current rotation
        widget.lastModelRotation = {
            x: modelRotation.x,
            y: modelRotation.y,
            z: modelRotation.z
        };
    }
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

    // Re-create all guide lines from state
    state.guideLines.forEach(lineState => {
        const guideLine = document.createElement('div');
        guideLine.className = 'guide-line';
        guideLine.dataset.id = lineState.id;

        // EMERGENCY FIX: Add debug logging and ensure proper color
        const thickness = `${lineState.thickness / 1000 * 100}vh`;
        const color = lineState.colour || '#FFFF00'; // Default to yellow if no color
        const opacity = lineState.transparency || 0.5;
        const topPos = `${50 - lineState.posY}%`;
        const transform = `translateY(-50%) rotate(${lineState.angle}deg)`;

        guideLine.style.height = thickness;
        guideLine.style.backgroundColor = color;
        guideLine.style.opacity = opacity;
        guideLine.style.top = topPos;
        guideLine.style.transform = transform;

        console.log(`Creating guide line ${lineState.id}: color=${color}, thickness=${thickness}, opacity=${opacity}`);

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
    
    safeAddEventListener('directionalLight', 'input', (e) => {
        if (state.lights.directionalRight) {
            state.lights.directionalRight.intensity = parseFloat(e.target.value);
        }
    });

    safeAddEventListener('directionalLightRight', 'input', (e) => {
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
        state.lights.directional.target.position.set(0, 0, 0);
        state.lights.directionalRight.target.position.set(0, 0, 0);
    });

    // Complex mode button (MISSING EVENT LISTENER FIXED)
    safeAddEventListener('complexModeButton', 'click', () => {
        state.lightingMode = 'complex';
        updateLightingModeButtons();
        updateArrowPosition(); // Position arrows when switching to complex mode
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

    // TORUS Button Event Listener (MISSING EVENT LISTENER FIXED)  
    safeAddEventListener('torusButton', 'click', () => {
        createModel('default');
    });

    // CAPTURE FILE Button Event Listener (MISSING EVENT LISTENER FIXED)
    safeAddEventListener('saveToFile', 'click', () => {
        captureFrame((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = '3d-model-capture.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });
    });

    // Camera Position Controls Synchronization
    syncSliderNumber('posX', 'posXNum');
    syncSliderNumber('posY', 'posYNum'); 
    syncSliderNumber('posZ', 'posZNum');
    
    // Camera Rotation Controls Synchronization - REMOVED (Elements commented out in HTML by Gemini)
    
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

    // Camera Position Controls Event Listeners
    safeAddEventListener('posX', 'input', (e) => {
        if (state.camera) {
            state.camera.position.x = parseFloat(e.target.value);
        }
    });
    safeAddEventListener('posY', 'input', (e) => {
        if (state.camera) {
            state.camera.position.y = parseFloat(e.target.value);
        }
    });
    safeAddEventListener('posZ', 'input', (e) => {
        if (state.camera) {
            state.camera.position.z = parseFloat(e.target.value);
        }
    });

    // Camera Rotation Controls Event Listeners - REMOVED (Elements commented out in HTML by Gemini)

    // Model Rotation Controls Event Listeners
    safeAddEventListener('modelRotX', 'input', (e) => {
        if (state.model) {
            state.model.rotation.x = degToRad(parseFloat(e.target.value));
        }
    });
    safeAddEventListener('modelRotY', 'input', (e) => {
        if (state.model) {
            state.model.rotation.y = degToRad(parseFloat(e.target.value));
        }
    });
    safeAddEventListener('modelRotZ', 'input', (e) => {
        if (state.model) {
            state.model.rotation.z = degToRad(parseFloat(e.target.value));
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
        }
    });
    safeAddEventListener('modelPitch', 'input', (e) => {
        if (state.model) {
            const yaw = state.model.rotation.y;
            const pitch = degToRad(parseFloat(e.target.value));
            const roll = state.model.rotation.z;
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
        }
    });
    safeAddEventListener('modelRoll', 'input', (e) => {
        if (state.model) {
            const yaw = state.model.rotation.y;
            const pitch = state.model.rotation.x;
            const roll = degToRad(parseFloat(e.target.value));
            state.model.rotation.order = 'YXZ';
            state.model.rotation.set(pitch, yaw, roll);
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
        }
    });
    safeAddEventListener('posYNum', 'input', (e) => {
        if (state.camera) {
            state.camera.position.y = parseFloat(e.target.value);
        }
    });
    safeAddEventListener('posZNum', 'input', (e) => {
        if (state.camera) {
            state.camera.position.z = parseFloat(e.target.value);
        }
    });

    // Camera Rotation NUMBER INPUT Event Listeners - REMOVED (Elements commented out in HTML by Gemini)

    // Reset Camera Button
    safeAddEventListener('resetCamera', 'click', () => {
        if (state.camera) {
            // Reset to default camera position
            state.camera.position.set(0, 0, 5);
            state.camera.rotation.set(0, 0, 0);
            // Update UI to reflect reset values (position only - rotation controls removed by Gemini)
            safeSetValue('posX', 0);
            safeSetValue('posXNum', 0);
            safeSetValue('posY', 0);
            safeSetValue('posYNum', 0);
            safeSetValue('posZ', 5);
            safeSetValue('posZNum', 5);
        }
    });

    // Model Rotation NUMBER INPUT Event Listeners (MISSING!)
    safeAddEventListener('modelRotXNum', 'input', (e) => {
        if (state.model) {
            state.model.rotation.x = degToRad(parseFloat(e.target.value));
        }
    });
    safeAddEventListener('modelRotYNum', 'input', (e) => {
        if (state.model) {
            state.model.rotation.y = degToRad(parseFloat(e.target.value));
        }
    });
    safeAddEventListener('modelRotZNum', 'input', (e) => {
        if (state.model) {
            state.model.rotation.z = degToRad(parseFloat(e.target.value));
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

function setupLightControls() {
    const lightPad = document.querySelector('.light-pad');
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

        icon.addEventListener('mousedown', (e) => {
            isDragging = true;
            icon.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

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

            // Arrows remain at fixed positions - no longer follow sun icons

            const worldX = (x / lightPadRect.width) * 20 - 10;
            const worldY = (1 - (y / lightPadRect.height)) * 20 - 10;
            light.position.x = worldX;
            light.position.y = worldY;

            if (state.lightingMode === 'complex') {
                const verticalPercent = y / lightPadRect.height;
                let rotation = (iconSide === 'left') 
                    ? verticalPercent * 90  // Left icon: rotates 0 -> 90 deg (clockwise)
                    : verticalPercent * -90; // Right icon: rotates 0 -> -90 deg (anti-clockwise)

                icon.style.transform = `translate(-50%, -50%) ${icon.classList.contains('flipped') ? 'scaleX(-1)' : ''}`;

                // Update arrow positions to follow sun icons
                updateArrowPosition();

                const targetY = (0.5 - verticalPercent) * 10;
                light.target.position.y = targetY;
            } else {
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

    // Initialize arrow positions
    updateArrowPosition();
}

function updateArrowPosition() {
    if (state.lightingMode !== 'complex') return;

    const leftIcon = document.getElementById('left-light-icon');
    const rightIcon = document.getElementById('right-light-icon');
    const leftArrow = document.getElementById('left-direction-arrow');
    const rightArrow = document.getElementById('right-direction-arrow');
    const lightPad = document.querySelector('.light-pad');

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

    // Calculate arrow positions and rotations (swap logic to point inward)
    const leftRotation = getClockRotation(leftVerticalPercent, false);  // Left arrow uses right logic to point inward
    const rightRotation = getClockRotation(rightVerticalPercent, true); // Right arrow uses left logic to point inward

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
    
    // Hide loading
    document.getElementById('loading').style.display = 'none';
}

async function initializeViewer() {
    try {
        initThreeJS();
        setupControls();
        setupLightControls();
        setupGuideLineControls(); // Set up guide line controls after DOM is ready
        setupCollapsibleSections(); // FIXED: Initialize collapsible sections functionality
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

// Initialize when page loads
window.addEventListener('load', () => {
    initializeViewer();
});
