import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
    }]
};

let mouseControls = {
    isDragging: false,
    isLeftButton: false,
    isRightButton: false,
    isCtrlDrag: false,
    previousMousePosition: { x: 0, y: 0 }
};

// ----------------------------------------------------------------
// 1. Basic Utility Functions
// ----------------------------------------------------------------
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
    } else {
        console.warn(`Element with ID '${id}' not found for safeAddEventListener.`);
    }
}


// ----------------------------------------------------------------
// External Surface Extraction Functions (Hybrid Architecture)
// ----------------------------------------------------------------

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
    
    if (basicButton && complexButton) {
        if (state.lightingMode === 'basic') {
            // BASIC selected - green
            basicButton.style.opacity = '1';
            basicButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            // COMPLEX unselected - grey
            complexButton.style.opacity = '0.6';
            complexButton.style.background = 'linear-gradient(45deg, #ccc, #999)';
        } else {
            // COMPLEX selected - red
            complexButton.style.opacity = '1';
            complexButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
            // BASIC unselected - grey
            basicButton.style.opacity = '0.6';
            basicButton.style.background = 'linear-gradient(45deg, #ccc, #999)';
        }
    }
}

// ----------------------------------------------------------------
// 2. Material Update Functions
// ----------------------------------------------------------------
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
// ----------------------------------------------------------------
function validateFile(file) {
    if (!file) {
        throw new Error('No file provided');
    }
    
    const validExtensions = ['.obj', '.stl', '.gltf', '.glb'];
    const fileName = file.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileName.endsWith(ext));
    
    if (!isValid) {
        throw new Error(`Unsupported file format: "${file.name}". Currently supported: .obj, .stl`);
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
            default:
                clearTimeout(uploadTimeout);
                showUploadStatus('Currently only .obj, .stl, .gltf, and .glb files are supported', 'error');
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
        const infoEl = document.getElementById('info');
        if (infoEl) {
            infoEl.innerHTML = `
                <h4>VIEW</h4>
                <p><span class="info-label">Camera Position:</span><span class="info-values-container"><span class="info-value-box">${Math.round(pos.x)}</span><span class="info-value-box">${Math.round(pos.y)}</span><span class="info-value-box">${Math.round(pos.z)}</span></span></p>
                <p><span class="info-label">Model Rotation:</span><span class="info-values-container"><span class="info-value-box">${Math.round(modelRotXDeg)}°</span><span class="info-value-box">${Math.round(modelRotYDeg)}°</span><span class="info-value-box">${Math.round(modelRotZDeg)}°</span></span></p>
                <p><span class="info-label">Model:</span><span class="info-values-container"><span class="model-name-box">${state.currentModelType}</span></span></p>
            `;
        }
    }
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
    
    state.renderer.render(state.scene, state.camera);
    updateCameraInfo();
}

function updateWBOITUniforms() {
    // No longer needed since we're using enhanced standard materials
    // instead of custom shaders for WBOIT
}

function updateGuideLine() {
    const overlay = document.getElementById('guideLineOverlay');
    if (!overlay) return;

    // Remove all existing guide lines
    while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
    }

    // Re-create all guide lines from state
    state.guideLines.forEach(lineState => {
        const guideLine = document.createElement('div');
        guideLine.className = 'guide-line';
        guideLine.dataset.id = lineState.id;

        guideLine.style.height = `${lineState.thickness / 1000 * 100}vh`;
        guideLine.style.backgroundColor = lineState.colour;
        guideLine.style.opacity = lineState.transparency;
        guideLine.style.top = `${50 - lineState.posY}%`;
        guideLine.style.transform = `translateY(-50%) rotate(${lineState.angle}deg)`;

        overlay.appendChild(guideLine);
    });
}

function toggleGuideLineVisibility(lineId = null) {
    if (lineId === null) {
        // Main guide line toggle - toggles all guide lines
        const overlay = document.getElementById('guideLineOverlay');
        const button = document.getElementById('hideUnhideGuide');
        
        if (!overlay || !button) return;
        
        if (overlay.style.display === 'none') {
            overlay.style.display = 'block';
            button.textContent = 'HIDE';
            button.classList.remove('button-danger');
            button.classList.add('secondary');
        } else {
            overlay.style.display = 'none';
            button.textContent = 'UNHIDE';
            button.classList.remove('secondary');
            button.classList.add('button-danger');
        }
    } else {
        // Individual guide line toggle
        const lineElement = document.querySelector(`[data-id="${lineId}"]`);
        const button = document.querySelector(`[data-guideline-id="${lineId}"] .hide-unhide-guide`);
        
        if (!lineElement || !button) return;
        
        if (lineElement.style.display === 'none') {
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

function updateMaterialModeButtons() {
    const complexButton = document.getElementById('complexMaterialButton');
    if (!complexButton) return;
    
    if (state.materialMode === 'default') {
        complexButton.textContent = 'COMPLEX';
        complexButton.classList.remove('secondary');
        complexButton.classList.add('button-danger');
        hideAdvancedMaterialControls();
    } else {
        complexButton.textContent = 'BASIC';
        complexButton.classList.remove('button-danger');
        complexButton.classList.add('secondary');
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
// ----------------------------------------------------------------
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


// ----------------------------------------------------------------
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
    const canvas = state.renderer.domElement;

    // Remove existing event listeners to prevent duplicates
    canvas.removeEventListener('mousedown', handleMouseDown);
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseup', handleMouseUp);
    canvas.removeEventListener('wheel', handleMouseWheel);
    canvas.removeEventListener('contextmenu', handleContextMenu);

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleMouseWheel);
    canvas.addEventListener('contextmenu', handleContextMenu);
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

    // Slider-number sync function
    function syncSliderNumber(sliderId, numberId) {
        const slider = document.getElementById(sliderId);
        const number = document.getElementById(numberId);
        if (!slider || !number) return;
        
        slider.addEventListener('input', () => {
            number.value = slider.value;
        });
        
        number.addEventListener('input', () => {
            const value = parseFloat(number.value);
            if (value >= parseFloat(slider.min) && value <= parseFloat(slider.max)) {
                slider.value = value;
                slider.dispatchEvent(new Event('input'));
            }
        });
        
        // Add 'change' event listener for stepper buttons
        number.addEventListener('change', () => {
            const value = parseFloat(number.value);
            if (value >= parseFloat(slider.min) && value <= parseFloat(slider.max)) {
                slider.value = value;
                slider.dispatchEvent(new Event('input'));
            }
        });
    }

    // Helper function for syncing DOM elements (for dynamically created guide line controls)
    function syncSliderNumberElements(slider, numberInput) {
        if (!slider || !numberInput) return;
        
        slider.addEventListener('input', () => {
            numberInput.value = slider.value;
        });
        
        numberInput.addEventListener('input', () => {
            const value = parseFloat(numberInput.value);
            if (value >= parseFloat(slider.min) && value <= parseFloat(slider.max)) {
                slider.value = value;
                slider.dispatchEvent(new Event('input'));
            }
        });
        
        // Add 'change' event listener for stepper buttons
        numberInput.addEventListener('change', () => {
            const value = parseFloat(numberInput.value);
            if (value >= parseFloat(slider.min) && value <= parseFloat(slider.max)) {
                slider.value = value;
                slider.dispatchEvent(new Event('input'));
            }
        });
    }

    // Setup all slider-number pairs
    syncSliderNumber('posX', 'posXNum');
    syncSliderNumber('posY', 'posYNum');
    syncSliderNumber('posZ', 'posZNum');
    syncSliderNumber('modelRotX', 'modelRotXNum');
    syncSliderNumber('modelRotY', 'modelRotYNum');
    syncSliderNumber('modelRotZ', 'modelRotZNum');
    syncSliderNumber('modelYaw', 'modelYawNum');
    syncSliderNumber('modelPitch', 'modelPitchNum');
    syncSliderNumber('modelRoll', 'modelRollNum');
    syncSliderNumber('metalness', 'metalnessNum');
    syncSliderNumber('roughness', 'roughnessNum');
    syncSliderNumber('transparency', 'transparencyNum');
    syncSliderNumber('ambientLight', 'ambientLightNum');
    // Note: directionalLight and directionalLightRight sliders don't have corresponding number inputs in HTML

    // Camera controls
    safeAddEventListener('posX', 'input', (e) => {
        state.camera.position.x = parseFloat(e.target.value);
    });
    
    safeAddEventListener('posY', 'input', (e) => {
        state.camera.position.y = parseFloat(e.target.value);
    });
    
    safeAddEventListener('posZ', 'input', (e) => {
        state.camera.position.z = parseFloat(e.target.value);
    });
    
    // SUNSET: Camera rotation event listeners - commented out but functions preserved
    /*
    safeAddEventListener('rotX', 'input', (e) => {
        state.camera.rotation.x = degToRad(parseFloat(e.target.value));
    });
    
    safeAddEventListener('rotY', 'input', (e) => {
        state.camera.rotation.y = degToRad(parseFloat(e.target.value));
    });
    
    safeAddEventListener('rotZ', 'input', (e) => {
        state.camera.rotation.z = degToRad(parseFloat(e.target.value));
    });
    */
    
    safeAddEventListener('resetCamera', 'click', () => {
        state.camera.position.set(0, 0, 5);
        state.camera.rotation.set(0, 0, 0);
        
        // Reset camera controls (rotation controls sunset but kept in array for reference)
        ['posX', 'posY', 'posXNum', 'posYNum' /*'rotX', 'rotY', 'rotZ', 'rotXNum', 'rotYNum', 'rotZNum'*/].forEach(id => {
            if (id.includes('posZ') || id.includes('posZNum')) {
                safeSetValue(id, 5);
            } else {
                safeSetValue(id, 0);
            }
        });
        safeSetValue('posZ', 5);
        safeSetValue('posZNum', 5);
    });

    // Model controls
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
    
    // Pitch, Yaw, Roll event listeners (applied in order: Yaw→Pitch→Roll)
    safeAddEventListener('modelYaw', 'input', (e) => {
        state.modelYaw = parseFloat(e.target.value);
        applyPitchYawRoll();
    });
    
    safeAddEventListener('modelPitch', 'input', (e) => {
        state.modelPitch = parseFloat(e.target.value);
        applyPitchYawRoll();
    });
    
    safeAddEventListener('modelRoll', 'input', (e) => {
        state.modelRoll = parseFloat(e.target.value);
        applyPitchYawRoll();
    });
    
    // SUNSET: Zoom event listener removed
    /*
    safeAddEventListener('modelZoom', 'input', (e) => {
        if (state.model) {
            const zoom = parseFloat(e.target.value);
            state.model.scale.set(zoom, zoom, zoom);
        }
    });
    */

    // Reset model button
    safeAddEventListener('resetModel', 'click', () => {
        if (state.model) {
            // Recenter and scale the model, which also resets its rotation
            centerAndScaleModel(state.model);
            
            // Reset camera to default position as well for a complete reset
            state.camera.position.set(0, 0, 5);
            state.camera.rotation.set(0, 0, 0);
            
            // Reset model rotation controls in the UI
            ['modelRotX', 'modelRotY', 'modelRotZ', 'modelRotXNum', 'modelRotYNum', 'modelRotZNum'].forEach(id => {
                safeSetValue(id, 0);
            });

            // SUNSET: Zoom slider update removed
            /*
            const zoom = state.model.scale.x;
            safeSetValue('modelZoom', formatNumber(zoom));
            safeSetValue('modelZoomNum', formatNumber(zoom));
            */
        }
    });

    // Material controls
    safeAddEventListener('materialColor', 'input', (e) => {
        updateMaterialColour(e.target.value);
    });
    
    // Complex Material mode button
    safeAddEventListener('complexMaterialButton', 'click', () => {
        state.materialMode = state.materialMode === 'default' ? 'complex' : 'default';
        updateMaterialModeButtons();
    });
    
    safeAddEventListener('metalness', 'input', (e) => {
        updateMaterialProperty('metalness', parseFloat(e.target.value));
    });
    
    safeAddEventListener('roughness', 'input', (e) => {
        updateMaterialProperty('roughness', parseFloat(e.target.value));
    });
    
    safeAddEventListener('transparency', 'input', async (e) => {
        await updateMaterialTransparency(parseFloat(e.target.value));
    });

    // Transparency mode selector
    safeAddEventListener('transparencyMode', 'change', async (e) => {
        state.transparencyMode = e.target.value;
        // Re-apply current transparency with new mode
        const currentOpacity = parseFloat(document.getElementById('transparency')?.value || 1);
        await updateMaterialTransparency(currentOpacity);
    });

    // Surface extraction controls
    safeAddEventListener('surfaceExtractionEnabled', 'change', async (e) => {
        state.surfaceExtractionEnabled = e.target.checked;
        const modeSelect = document.getElementById('surfaceExtractionMode');
        if (modeSelect) {
            modeSelect.disabled = !e.target.checked;
            if (e.target.checked && state.surfaceExtractionMode === 'none') {
                state.surfaceExtractionMode = 'convex';
                modeSelect.value = 'convex';
            } else if (!e.target.checked) {
                state.surfaceExtractionMode = 'none';
            }
        }
        
        // Update alpha parameter visibility
        updateAlphaParameterVisibility();
        
        // Re-apply current transparency to trigger surface extraction
        const currentOpacity = parseFloat(document.getElementById('transparency')?.value || 1);
        await updateMaterialTransparency(currentOpacity);
    });

    safeAddEventListener('surfaceExtractionMode', 'change', async (e) => {
        state.surfaceExtractionMode = e.target.value;
        
        // Update alpha parameter visibility
        updateAlphaParameterVisibility();
        
        // Re-apply current transparency to trigger surface extraction with new mode
        const currentOpacity = parseFloat(document.getElementById('transparency')?.value || 1);
        await updateMaterialTransparency(currentOpacity);
    });

    // Alpha parameter for future alpha shapes
    syncSliderNumber('alphaValue', 'alphaValueNum');
    safeAddEventListener('alphaValue', 'input', async (e) => {
        state.alphaValue = parseFloat(e.target.value);
        
        // Only re-apply if alpha mode is selected
        if (state.surfaceExtractionEnabled && state.surfaceExtractionMode === 'alpha') {
            const currentOpacity = parseFloat(document.getElementById('transparency')?.value || 1);
            await updateMaterialTransparency(currentOpacity);
        }
    });

    // Ray casting parameters
    syncSliderNumber('raycastSamples', 'raycastSamplesNum');
    safeAddEventListener('raycastSamples', 'input', async (e) => {
        state.raycastSamples = parseInt(e.target.value);
        
        // Re-apply if ray casting mode is selected
        if (state.surfaceExtractionEnabled && state.surfaceExtractionMode === 'raycast') {
            const currentOpacity = parseFloat(document.getElementById('transparency')?.value || 1);
            await updateMaterialTransparency(currentOpacity);
        }
    });

    syncSliderNumber('visibilityThreshold', 'visibilityThresholdNum');
    safeAddEventListener('visibilityThreshold', 'input', async (e) => {
        state.visibilityThreshold = parseFloat(e.target.value);
        
        // Re-apply if ray casting mode is selected
        if (state.surfaceExtractionEnabled && state.surfaceExtractionMode === 'raycast') {
            const currentOpacity = parseFloat(document.getElementById('transparency')?.value || 1);
            await updateMaterialTransparency(currentOpacity);
        }
    });


    // Model selector

    // File upload with drag and drop
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileUpload');
    
    if (dropZone && fileInput) {
        // Click to browse
        dropZone.addEventListener('click', () => {
            fileInput.click();
        });
        
        // File input change
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileUpload(e.target.files[0]);
                // Clear the input so the same file can be uploaded again
                e.target.value = '';
            }
        });
        
        // Drag and drop events
        dropZone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
        
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            dropZone.classList.add('dragover');
        });
        
        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            // Only remove dragover if we're actually leaving the drop zone
            if (!dropZone.contains(e.relatedTarget)) {
                dropZone.classList.remove('dragover');
            }
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                // Validate file type before processing
                const file = files[0];
                const fileName = file.name.toLowerCase();
                if (fileName.endsWith('.obj') || fileName.endsWith('.stl') || fileName.endsWith('.gltf') || fileName.endsWith('.glb')) {
                    handleFileUpload(file);
                } else {
                    showUploadStatus('Please drop only .obj, .stl, .gltf, or .glb files', 'error');
                }
            } else {
                showUploadStatus('No files detected. Please try again.', 'error');
            }
        });
    }

    // Example model buttons

    // Preset controls
    safeAddEventListener('saveToFile', 'click', () => {
        captureFrame((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'model-capture.png';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });
    });

    safeAddEventListener('savePreset', 'click', () => {
        const nameEl = document.getElementById('presetName');
        if (!nameEl) return;
        
        const name = nameEl.value.trim();
        if (!name) {
            alert('Please enter a preset name');
            return;
        }
        
        const preset = {
            camera: {
                x: state.camera.position.x,
                y: state.camera.position.y,
                z: state.camera.position.z
                // SUNSET: Camera rotation no longer saved in presets
                // rotX: state.camera.rotation.x,
                // rotY: state.camera.rotation.y,
                // rotZ: state.camera.rotation.z
            },
            model: {
                rotX: state.model?.rotation.x,
                rotY: state.model?.rotation.y,
                rotZ: state.model?.rotation.z,
                // Pitch, Yaw, Roll values for aircraft-style controls
                yaw: state.modelYaw,
                pitch: state.modelPitch,
                roll: state.modelRoll
                // SUNSET: Zoom no longer saved in presets
                // zoom: state.model?.scale.x
            },
            material: {
                color: state.model?.material?.color?.getHex(),
                metalness: state.model?.material?.metalness,
                roughness: state.model?.material?.roughness,
                opacity: state.model?.material?.opacity,
                transparencyMode: state.transparencyMode,
                materialMode: state.materialMode
            },
            surfaceExtraction: {
                enabled: state.surfaceExtractionEnabled,
                mode: state.surfaceExtractionMode,
                alphaValue: state.alphaValue
            },
            lighting: {
                ambient: state.lights.ambient?.intensity,
                directional: state.lights.directional?.intensity,
                directionalRight: state.lights.directionalRight?.intensity
            }
        };
        
        state.presets[name] = preset;
        localStorage.setItem('viewerPresets', JSON.stringify(state.presets));
        loadPresetsList();
        alert(`Preset "${name}" saved!`);
    });
    
    safeAddEventListener('loadPreset', 'click', async () => {
        const nameEl = document.getElementById('presetName');
        if (!nameEl) return;
        
        const name = nameEl.value.trim();
        if (!name || !state.presets[name]) {
            alert('Please enter a valid preset name');
            return;
        }
        
        const preset = state.presets[name];
        
        // Apply camera settings
        if (preset.camera) {
            state.camera.position.set(preset.camera.x, preset.camera.y, preset.camera.z);
            // SUNSET: Camera rotation no longer loaded from presets
            // state.camera.rotation.set(preset.camera.rotX || 0, preset.camera.rotY || 0, preset.camera.rotZ || 0);
            
            // Update camera position controls
            safeSetValue('posX', preset.camera.x);
            safeSetValue('posY', preset.camera.y);
            safeSetValue('posZ', preset.camera.z);
            safeSetValue('posXNum', preset.camera.x);
            safeSetValue('posYNum', preset.camera.y);
            safeSetValue('posZNum', preset.camera.z);
            
            // SUNSET: Camera rotation UI updates removed
            /*
            safeSetValue('rotX', Math.round(radToDeg(preset.camera.rotX || 0)));
            safeSetValue('rotY', Math.round(radToDeg(preset.camera.rotY || 0)));
            safeSetValue('rotZ', Math.round(radToDeg(preset.camera.rotZ || 0)));
            safeSetValue('rotXNum', Math.round(radToDeg(preset.camera.rotX || 0)));
            safeSetValue('rotYNum', Math.round(radToDeg(preset.camera.rotY || 0)));
            safeSetValue('rotZNum', Math.round(radToDeg(preset.camera.rotZ || 0)));
            */
        }
        
        // Apply model settings
        if (preset.model && state.model) {
            const rotX = preset.model.rotX || 0;
            const rotY = preset.model.rotY || 0;
            const rotZ = preset.model.rotZ || 0;
            state.model.rotation.set(rotX, rotY, rotZ);
            
            // SUNSET: Zoom no longer loaded from presets
            /*
            const zoom = preset.model.zoom || 1;
            state.model.scale.set(zoom, zoom, zoom);
            */
            
            // Update model controls
            safeSetValue('modelRotX', Math.round(radToDeg(rotX)));
            safeSetValue('modelRotY', Math.round(radToDeg(rotY)));
            safeSetValue('modelRotZ', Math.round(radToDeg(rotZ)));
            safeSetValue('modelRotXNum', Math.round(radToDeg(rotX)));
            safeSetValue('modelRotYNum', Math.round(radToDeg(rotY)));
            safeSetValue('modelRotZNum', Math.round(radToDeg(rotZ)));
            safeSetValue('modelZoom', zoom);
            safeSetValue('modelZoomNum', zoom);
            
            // Restore Pitch, Yaw, Roll values from preset
            if (preset.model.yaw !== undefined) {
                state.modelYaw = preset.model.yaw;
                safeSetValue('modelYaw', preset.model.yaw);
                safeSetValue('modelYawNum', preset.model.yaw);
            }
            if (preset.model.pitch !== undefined) {
                state.modelPitch = preset.model.pitch;
                safeSetValue('modelPitch', preset.model.pitch);
                safeSetValue('modelPitchNum', preset.model.pitch);
            }
            if (preset.model.roll !== undefined) {
                state.modelRoll = preset.model.roll;
                safeSetValue('modelRoll', preset.model.roll);
                safeSetValue('modelRollNum', preset.model.roll);
            }
        }
        
        // Apply material settings
        if (preset.material && state.model) {
            state.model.material.color.setHex(preset.material.color);
            state.model.material.metalness = preset.material.metalness;
            state.model.material.roughness = preset.material.roughness;
            state.model.material.opacity = preset.material.opacity;
            state.model.material.transparent = preset.material.opacity < 1;
            
            safeSetValue('metalness', preset.material.metalness);
            safeSetValue('roughness', preset.material.roughness);
            safeSetValue('transparency', preset.material.opacity);
            safeSetValue('metalnessNum', preset.material.metalness);
            safeSetValue('roughnessNum', preset.material.roughness);
            safeSetValue('transparencyNum', preset.material.opacity);
            
            // Restore transparency mode if saved
            if (preset.material.transparencyMode) {
                state.transparencyMode = preset.material.transparencyMode;
                safeSetValue('transparencyMode', preset.material.transparencyMode);
                // Re-apply transparency with the correct mode
                await updateMaterialTransparency(preset.material.opacity);
            }
            
            // Restore material mode if saved
            if (preset.material.materialMode) {
                state.materialMode = preset.material.materialMode;
                updateMaterialModeButtons();
            }
        }
        
        // Apply surface extraction settings
        if (preset.surfaceExtraction) {
            state.surfaceExtractionEnabled = preset.surfaceExtraction.enabled || false;
            state.surfaceExtractionMode = preset.surfaceExtraction.mode || 'none';
            state.alphaValue = preset.surfaceExtraction.alphaValue || 0.1;
            
            safeSetValue('surfaceExtractionEnabled', state.surfaceExtractionEnabled);
            safeSetValue('surfaceExtractionMode', state.surfaceExtractionMode);
            safeSetValue('alphaValue', state.alphaValue);
            safeSetValue('alphaValueNum', state.alphaValue);
            
            // Update UI state
            const modeSelect = document.getElementById('surfaceExtractionMode');
            if (modeSelect) {
                modeSelect.disabled = !state.surfaceExtractionEnabled;
            }
            updateAlphaParameterVisibility();
        }
        
        // Apply lighting settings
        if (preset.lighting) {
            if (state.lights.ambient) {
                state.lights.ambient.intensity = preset.lighting.ambient || 0.4;
                safeSetValue('ambientLight', preset.lighting.ambient || 0.4);
                safeSetValue('ambientLightNum', preset.lighting.ambient || 0.4);
            }
            if (state.lights.directional) {
                state.lights.directional.intensity = preset.lighting.directional || 0.6;
                safeSetValue('directionalLight', preset.lighting.directional || 0.6);
                safeSetValue('directionalLightNum', preset.lighting.directional || 0.6);
            }
            if (state.lights.directionalRight) {
                state.lights.directionalRight.intensity = preset.lighting.directionalRight || 0.0;
                safeSetValue('directionalLightRight', preset.lighting.directionalRight || 0.0);
                safeSetValue('directionalLightRightNum', preset.lighting.directionalRight || 0.0);
            }
        }
        
        
    });
    
    safeAddEventListener('presetSelector', 'change', (e) => {
        if (e.target.value) {
            const presetNameEl = document.getElementById('presetName');
            if (presetNameEl) {
                presetNameEl.value = e.target.value;
            }
        }
    });

    // Lighting controls
    safeAddEventListener('ambientLight', 'input', (e) => {
        if (state.lights.ambient) {
            state.lights.ambient.intensity = parseFloat(e.target.value);
        }
    });
    
    safeAddEventListener('directionalLight', 'input', (e) => {
        if (state.lights.directional) {
            state.lights.directional.intensity = parseFloat(e.target.value);
        }
    });

    safeAddEventListener('directionalLightRight', 'input', (e) => {
        if (state.lights.directionalRight) {
            state.lights.directionalRight.intensity = parseFloat(e.target.value);
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

    // Complex mode button
    safeAddEventListener('complexModeButton', 'click', () => {
        state.lightingMode = 'complex';
        updateLightingModeButtons();
    });

    // Guide Line controls
    syncSliderNumber('lineThickness', 'lineThicknessNum');
    syncSliderNumber('lineTransparency', 'lineTransparencyNum');
    syncSliderNumber('lineAngle', 'lineAngleNum');
    syncSliderNumber('linePosY', 'linePosYNum');

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

    safeAddEventListener('addLine', 'click', addGuideLine);
    
    // Debug: Test if ADD LINE button exists
    console.log('ADD LINE button:', document.getElementById('addLine'));
    safeAddEventListener('hideUnhideGuide', 'click', toggleGuideLineVisibility);

    function addGuideLine() {
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
        addGuideLineControl(newLine);
        updateGuideLine();
        updateGuideLineTitles();
    }

    function deleteGuideLine(id) {
        state.guideLines = state.guideLines.filter(line => line.id !== id);
        const controlToRemove = document.querySelector(`.control-section[data-guideline-id='${id}']`);
        if (controlToRemove) {
            controlToRemove.remove();
        }
        updateGuideLine();
        updateGuideLineTitles();
    }

    function addGuideLineControl(lineState) {
        const template = document.getElementById('guideline-template');
        const clone = template.content.cloneNode(true);
        const section = clone.querySelector('.control-section');
        section.dataset.guidelineId = lineState.id;

        const header = section.querySelector('h3');
        header.textContent = `Guide Line ${state.guideLines.length}`;

        const removeButton = section.querySelector('.remove-line');
        console.log('removeButton found:', removeButton);
        console.log('section HTML:', section.innerHTML);
        if (removeButton) {
            removeButton.addEventListener('click', () => deleteGuideLine(lineState.id));
        } else {
            console.error('Remove button not found in template!');
        }

        const addLineBelowButton = section.querySelector('.add-line-below');
        console.log('addLineBelowButton found:', addLineBelowButton);
        if (addLineBelowButton) {
            addLineBelowButton.addEventListener('click', addGuideLine);
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
        syncSliderNumberElements(thicknessSlider, thicknessNum);
        thicknessSlider.addEventListener('input', (e) => {
            lineState.thickness = parseFloat(e.target.value);
            updateGuideLine();
        });

        const transparencySlider = section.querySelector('.line-transparency');
        const transparencyNum = section.querySelector('.line-transparency-num');
        transparencySlider.value = lineState.transparency;
        transparencyNum.value = lineState.transparency;
        syncSliderNumberElements(transparencySlider, transparencyNum);
        transparencySlider.addEventListener('input', (e) => {
            lineState.transparency = parseFloat(e.target.value);
            updateGuideLine();
        });

        const angleSlider = section.querySelector('.line-angle');
        const angleNum = section.querySelector('.line-angle-num');
        angleSlider.value = lineState.angle;
        angleNum.value = lineState.angle;
        syncSliderNumberElements(angleSlider, angleNum);
        angleSlider.addEventListener('input', (e) => {
            lineState.angle = parseFloat(e.target.value);
            updateGuideLine();
        });

        const posYSlider = section.querySelector('.line-pos-y');
        const posYNum = section.querySelector('.line-pos-y-num');
        posYSlider.value = lineState.posY;
        posYNum.value = lineState.posY;
        syncSliderNumberElements(posYSlider, posYNum);
        posYSlider.addEventListener('input', (e) => {
            lineState.posY = parseFloat(e.target.value);
            updateGuideLine();
        });

        const cameraSection = document.querySelector('[data-section="camera"]');
        cameraSection.parentNode.insertBefore(section, cameraSection);
        setupCollapsibleSections(); // Re-initialize collapsible sections
    }

    function updateGuideLineTitles() {
        const allGuidelineSections = document.querySelectorAll('[data-section="guideline"], [data-section="guideline-added"]');
        allGuidelineSections.forEach((section, index) => {
            const header = section.querySelector('h3');
            if (state.guideLines.length > 1) {
                header.textContent = `Guide Line ${index + 1}`;
            } else {
                header.textContent = 'Guide Line';
            }
        });
    }

    safeAddEventListener('angleFromLeft', 'click', () => {
        state.guideLine.angleFrom = 'left';
        updateGuideLine();
        document.getElementById('angleFromLeft').classList.add('active');
        document.getElementById('angleFromRight').classList.remove('active');
    });

    safeAddEventListener('angleFromRight', 'click', () => {
        state.guideLine.angleFrom = 'right';
        updateGuideLine();
        document.getElementById('angleFromRight').classList.add('active');
        document.getElementById('angleFromLeft').classList.remove('active');
    });

    // Setup collapsible sections
    setupCollapsibleSections();

    // Setup model buttons
    safeAddEventListener('torusButton', 'click', () => {
        createModel('default');
    });

    safeAddEventListener('libraryButton', 'click', () => {
        // Future: implement model library browsing
        alert('Library functionality will be implemented for compiled package');
    });
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

    const checkOverlap = (pos1, pos2, minDistance = 30) => {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy) < minDistance;
    };

    setIconPosition(leftLightIcon, mapToPad(state.lights.directional.position));
    setIconPosition(rightLightIcon, mapToPad(state.lights.directionalRight.position));

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

            const worldX = (x / lightPadRect.width) * 20 - 10;
            const worldY = (1 - (y / lightPadRect.height)) * 20 - 10;
            light.position.x = worldX;
            light.position.y = worldY;

            if (state.lightingMode === 'complex') {
                const verticalPercent = y / lightPadRect.height;
                let rotation = (iconSide === 'left') 
                    ? verticalPercent * 90  // Left icon: rotates 0 -> 90 deg (clockwise)
                    : verticalPercent * -90; // Right icon: rotates 0 -> -90 deg (anti-clockwise)

                icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) ${icon.classList.contains('flipped') ? 'scaleX(-1)' : ''}`;

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