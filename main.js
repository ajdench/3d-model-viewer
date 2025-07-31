import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
    controlScheme: 'standard', // 'standard' or 'legacy'
    guideLine: {
        thickness: 0.05,
        color: '#FF0000',
        transparency: 1.0,
        angle: 0,
        posY: 50 // New: Vertical position (0-100%)
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
// 2. Material Update Functions
// ----------------------------------------------------------------
function updateMaterialColor(colorValue) {
    console.log('Updating material color to:', colorValue);
    
    if (state.model) {
        // Handle both single mesh and group objects
        if (state.model.material) {
            // Single mesh
            state.model.material.color.setStyle(colorValue);
            console.log('Color set on single mesh:', state.model.material.color);
        } else if (state.model.children) {
            // Group of meshes (like loaded OBJ)
            state.model.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.color.setStyle(colorValue);
                    console.log('Color set on child mesh:', child.material.color);
                }
            });
        }
    }
}

function updateMaterialProperty(property, value) {
    console.log(`Updating material ${property} to:`, value);
    
    if (state.model) {
        if (state.model.material) {
            // Single mesh
            state.model.material[property] = value;
        } else if (state.model.children) {
            // Group of meshes
            state.model.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material[property] = value;
                }
            });
        }
    }
}

function updateMaterialTransparency(opacity) {
    console.log('Updating material transparency to:', opacity);
    
    if (state.model) {
        if (state.model.material) {
            // Single mesh
            state.model.material.opacity = opacity;
            state.model.material.transparent = opacity < 1;
            state.model.material.needsUpdate = true;
        } else if (state.model.children) {
            // Group of meshes
            state.model.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.opacity = opacity;
                    child.material.transparent = opacity < 1;
                    child.material.needsUpdate = true;
                }
            });
        }
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
    const maxSize = 50 * 1024 * 1024; // 50MB
    const minSize = 10; // 10 bytes minimum
    
    if (file.size > maxSize) {
        const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
        throw new Error(`File too large: ${sizeMB}MB. Maximum size is 50MB.`);
    }
    
    if (file.size < minSize) {
        throw new Error(`File appears to be empty or corrupted: ${file.size} bytes`);
    }
    
    console.log(`File validated: ${file.name}, size: ${(file.size / 1024).toFixed(2)}KB`);
    return fileName.split('.').pop();
}

function resetModelControls() {
    ['modelRotX', 'modelRotY', 'modelRotZ', 'modelRotXNum', 'modelRotYNum', 'modelRotZNum'].forEach(id => {
        safeSetValue(id, 0);
    });
    ['modelZoom', 'modelZoomNum'].forEach(id => {
        safeSetValue(id, 1);
    });
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
    mouseControls.isCtrlDrag = e.ctrlKey;
    mouseControls.previousMousePosition = { x: e.clientX, y: e.clientY };

    if (state.controlScheme === 'standard') {
        mouseControls.isLeftButton = e.button === 0; // Left for Orbit or Model Rotate
        mouseControls.isRightButton = e.button === 2; // Right for Pan
    } else { // legacy
        mouseControls.isLeftButton = e.button === 0; // Left for Model Rotate
        mouseControls.isRightButton = e.button === 2; // Right for Camera Orbit
    }
}

function handleMouseMove(e) {
    if (!mouseControls.isDragging) return;

    const deltaMove = {
        x: e.clientX - mouseControls.previousMousePosition.x,
        y: e.clientY - mouseControls.previousMousePosition.y
    };

    // Ctrl+Drag for model rotation
    if (mouseControls.isCtrlDrag && mouseControls.isLeftButton && state.model) {
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

    } else if (state.controlScheme === 'standard') {
        if (mouseControls.isLeftButton) {
            // Left click: Orbit camera
            const spherical = new THREE.Spherical();
            spherical.setFromVector3(state.camera.position);
            spherical.theta -= deltaMove.x * 0.01;
            spherical.phi += deltaMove.y * 0.01;
            spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
            state.camera.position.setFromSpherical(spherical);
            state.camera.lookAt(0, 0, 0);
        } else if (mouseControls.isRightButton) {
            // Right click: Pan camera
            const panSpeed = 0.01;
            const vector = new THREE.Vector3(deltaMove.x * panSpeed, -deltaMove.y * panSpeed, 0);
            vector.applyQuaternion(state.camera.quaternion);
            state.camera.position.add(vector);
        }
    } else { // legacy
        if (mouseControls.isLeftButton) {
            // Left click: Rotate model
            if (state.model) {
                state.model.rotation.y += deltaMove.x * 0.01;
                state.model.rotation.x += deltaMove.y * 0.01;
            }
        } else if (mouseControls.isRightButton) {
            // Right click: Orbit camera
            const spherical = new THREE.Spherical();
            spherical.setFromVector3(state.camera.position);
            spherical.theta -= deltaMove.x * 0.01;
            spherical.phi += deltaMove.y * 0.01;
            spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
            state.camera.position.setFromSpherical(spherical);
            state.camera.lookAt(0, 0, 0);
        }
    }
    
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
        
        // Update camera rotation controls
        const rotXDeg = radToDeg(rot.x);
        const rotYDeg = radToDeg(rot.y);
        const rotZDeg = radToDeg(rot.z);
        
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
        
        // Update zoom control
        const zoom = state.model.scale.x;
        safeSetValue('modelZoom', formatNumber(zoom));
        safeSetValue('modelZoomNum', formatNumber(zoom));
        
        // Update info display with current model type
        const infoEl = document.getElementById('info');
        if (infoEl) {
            infoEl.innerHTML = `
                <h4>VIEWER STATS</h4>
                <p><b>Camera Position:</b> (${formatNumber(pos.x)}, ${formatNumber(pos.y)}, ${formatNumber(pos.z)})</p>
                <p><b>Camera Rotation:</b> (${formatNumber(rotXDeg)}°, ${formatNumber(rotYDeg)}°, ${formatNumber(rotZDeg)}°)</p>
                <p><b>Model Rotation:</b> (${formatNumber(modelRotXDeg)}°, ${formatNumber(modelRotYDeg)}°, ${formatNumber(modelRotZDeg)}°)</p>
                <p><b>Zoom:</b> ${formatNumber(zoom)}</p>
                <p><b>Model:</b> ${state.currentModelType}</p>
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
    state.renderer.render(state.scene, state.camera);
    updateCameraInfo();
}

function updateGuideLine() {
    const guideLine = document.getElementById('guideLine');
    if (!guideLine) return;

    // Set static properties that define its full width and initial vertical centering
    guideLine.style.width = '100%';
    guideLine.style.left = '0';

    // Apply thickness (convert percentage to viewport height)
    guideLine.style.height = `${state.guideLine.thickness * 100}vh`;

    // Apply color
    guideLine.style.backgroundColor = state.guideLine.color;

    // Apply transparency
    guideLine.style.opacity = state.guideLine.transparency;

    // Apply angle
    let angle = state.guideLine.angle;

    // Apply vertical position
    guideLine.style.top = `${state.guideLine.posY}%`;

    // Apply rotation
    guideLine.style.transform = `rotate(${angle}deg)`;
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

function createExampleTeapot() {
    showUploadStatus('Loading Utah Teapot...', 'loading');
    
    // Create a simple teapot-like shape using sphere and cylinder
    const group = new THREE.Group();
    
    // Body (sphere)
    const bodyGeometry = new THREE.SphereGeometry(0.8, 16, 12);
    bodyGeometry.scale(1, 0.7, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);
    
    // Spout (cylinder)
    const spoutGeometry = new THREE.CylinderGeometry(0.1, 0.15, 0.6, 8);
    spoutGeometry.rotateZ(Math.PI / 2);
    const spout = new THREE.Mesh(spoutGeometry, bodyMaterial);
    spout.position.set(0.7, 0, 0);
    group.add(spout);
    
    // Handle (torus)
    const handleGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16);
    handleGeometry.rotateY(Math.PI / 2);
    const handle = new THREE.Mesh(handleGeometry, bodyMaterial);
    handle.position.set(-0.6, 0, 0);
    group.add(handle);
    
    // Lid (cylinder)
    const lidGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 16);
    const lid = new THREE.Mesh(lidGeometry, bodyMaterial);
    lid.position.set(0, 0.6, 0);
    group.add(lid);
    
    if (state.model) state.scene.remove(state.model);
    state.model = group;
    state.scene.add(state.model);
    state.currentModelType = 'Utah Teapot (Example)';
    
    resetModelControls();
    showUploadStatus('✅ Utah Teapot loaded!', 'success');
}

function createExampleSuzanne() {
    showUploadStatus('Loading Suzanne Monkey...', 'loading');
    
    // Create a monkey-like head using spheres
    const group = new THREE.Group();
    
    // Head (sphere)
    const headGeometry = new THREE.SphereGeometry(0.8, 16, 12);
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0xFFA500 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    group.add(head);
    
    // Eyes (spheres)
    const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 6);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 0.2, 0.6);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 0.2, 0.6);
    group.add(rightEye);
    
    // Nose (sphere)
    const noseGeometry = new THREE.SphereGeometry(0.1, 8, 6);
    const nose = new THREE.Mesh(noseGeometry, new THREE.MeshStandardMaterial({ color: 0xFF6347 }));
    nose.position.set(0, 0, 0.8);
    group.add(nose);
    
    // Ears (spheres)
    const earGeometry = new THREE.SphereGeometry(0.2, 8, 6);
    
    const leftEar = new THREE.Mesh(earGeometry, headMaterial);
    leftEar.position.set(-0.8, 0.4, 0);
    group.add(leftEar);
    
    const rightEar = new THREE.Mesh(earGeometry, headMaterial);
    rightEar.position.set(0.8, 0.4, 0);
    group.add(rightEar);
    
    if (state.model) state.scene.remove(state.model);
    state.model = group;
    state.scene.add(state.model);
    state.currentModelType = 'Suzanne Monkey (Example)';
    
    resetModelControls();
    showUploadStatus('✅ Suzanne loaded!', 'success');
}

// ----------------------------------------------------------------
// 7. UI Setup & Control Functions
// ----------------------------------------------------------------
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
}

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

function updateControlInstructions() {
    const standardInstructions = document.getElementById('standard-instructions');
    const legacyInstructions = document.getElementById('legacy-instructions');

    if (standardInstructions && legacyInstructions) {
        if (state.controlScheme === 'standard') {
            standardInstructions.style.display = 'block';
            legacyInstructions.style.display = 'none';
        } else {
            standardInstructions.style.display = 'none';
            legacyInstructions.style.display = 'block';
        }
    } else {
        console.warn('Instruction elements not found for updateControlInstructions.');
    }
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

    // Control scheme selector
    safeAddEventListener('controlSchemeSelector', 'change', (e) => {
        state.controlScheme = e.target.value;
        setupMouseControls(); // Re-apply controls based on new scheme
        updateControlInstructions(); // Update instructions display
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
    }

    // Setup all slider-number pairs
    syncSliderNumber('posX', 'posXNum');
    syncSliderNumber('posY', 'posYNum');
    syncSliderNumber('posZ', 'posZNum');
    syncSliderNumber('rotX', 'rotXNum');
    syncSliderNumber('rotY', 'rotYNum');
    syncSliderNumber('rotZ', 'rotZNum');
    syncSliderNumber('modelRotX', 'modelRotXNum');
    syncSliderNumber('modelRotY', 'modelRotYNum');
    syncSliderNumber('modelRotZ', 'modelRotZNum');
    syncSliderNumber('modelZoom', 'modelZoomNum');
    syncSliderNumber('metalness', 'metalnessNum');
    syncSliderNumber('roughness', 'roughnessNum');
    syncSliderNumber('transparency', 'transparencyNum');
    syncSliderNumber('ambientLight', 'ambientLightNum');
    syncSliderNumber('directionalLight', 'directionalLightNum');
    syncSliderNumber('directionalLightRight', 'directionalLightRightNum');

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
    
    safeAddEventListener('rotX', 'input', (e) => {
        state.camera.rotation.x = degToRad(parseFloat(e.target.value));
    });
    
    safeAddEventListener('rotY', 'input', (e) => {
        state.camera.rotation.y = degToRad(parseFloat(e.target.value));
    });
    
    safeAddEventListener('rotZ', 'input', (e) => {
        state.camera.rotation.z = degToRad(parseFloat(e.target.value));
    });
    
    safeAddEventListener('resetCamera', 'click', () => {
        state.camera.position.set(0, 0, 5);
        state.camera.rotation.set(0, 0, 0);
        
        // Reset camera controls
        ['posX', 'posY', 'posXNum', 'posYNum', 'rotX', 'rotY', 'rotZ', 'rotXNum', 'rotYNum', 'rotZNum'].forEach(id => {
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
    
    safeAddEventListener('modelZoom', 'input', (e) => {
        if (state.model) {
            const zoom = parseFloat(e.target.value);
            state.model.scale.set(zoom, zoom, zoom);
        }
    });

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

            // Update the zoom slider to reflect the new scale from centerAndScaleModel
            const zoom = state.model.scale.x;
            safeSetValue('modelZoom', formatNumber(zoom));
            safeSetValue('modelZoomNum', formatNumber(zoom));
        }
    });

    // Material controls
    safeAddEventListener('materialColor', 'input', (e) => {
        updateMaterialColor(e.target.value);
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

    // Model selector
    safeAddEventListener('modelSelector', 'change', (e) => {
        createModel(e.target.value);
    });

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
    safeAddEventListener('loadTeapot', 'click', createExampleTeapot);
    safeAddEventListener('loadSuzanne', 'click', createExampleSuzanne);

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
                z: state.camera.position.z,
                rotX: state.camera.rotation.x,
                rotY: state.camera.rotation.y,
                rotZ: state.camera.rotation.z
            },
            model: {
                rotX: state.model?.rotation.x,
                rotY: state.model?.rotation.y,
                rotZ: state.model?.rotation.z,
                zoom: state.model?.scale.x
            },
            material: {
                color: state.model?.material?.color?.getHex(),
                metalness: state.model?.material?.metalness,
                roughness: state.model?.material?.roughness,
                opacity: state.model?.material?.opacity
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
    
    safeAddEventListener('loadPreset', 'click', () => {
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
            state.camera.rotation.set(preset.camera.rotX || 0, preset.camera.rotY || 0, preset.camera.rotZ || 0);
            
            // Update camera controls
            safeSetValue('posX', preset.camera.x);
            safeSetValue('posY', preset.camera.y);
            safeSetValue('posZ', preset.camera.z);
            safeSetValue('posXNum', preset.camera.x);
            safeSetValue('posYNum', preset.camera.y);
            safeSetValue('posZNum', preset.camera.z);
            safeSetValue('rotX', Math.round(radToDeg(preset.camera.rotX || 0)));
            safeSetValue('rotY', Math.round(radToDeg(preset.camera.rotY || 0)));
            safeSetValue('rotZ', Math.round(radToDeg(preset.camera.rotZ || 0)));
            safeSetValue('rotXNum', Math.round(radToDeg(preset.camera.rotX || 0)));
            safeSetValue('rotYNum', Math.round(radToDeg(preset.camera.rotY || 0)));
            safeSetValue('rotZNum', Math.round(radToDeg(preset.camera.rotZ || 0)));
        }
        
        // Apply model settings
        if (preset.model && state.model) {
            const rotX = preset.model.rotX || 0;
            const rotY = preset.model.rotY || 0;
            const rotZ = preset.model.rotZ || 0;
            state.model.rotation.set(rotX, rotY, rotZ);
            
            const zoom = preset.model.zoom || 1;
            state.model.scale.set(zoom, zoom, zoom);
            
            // Update model controls
            safeSetValue('modelRotX', Math.round(radToDeg(rotX)));
            safeSetValue('modelRotY', Math.round(radToDeg(rotY)));
            safeSetValue('modelRotZ', Math.round(radToDeg(rotZ)));
            safeSetValue('modelRotXNum', Math.round(radToDeg(rotX)));
            safeSetValue('modelRotYNum', Math.round(radToDeg(rotY)));
            safeSetValue('modelRotZNum', Math.round(radToDeg(rotZ)));
            safeSetValue('modelZoom', zoom);
            safeSetValue('modelZoomNum', zoom);
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

    // Guide Line controls
    syncSliderNumber('lineThickness', 'lineThicknessNum');
    syncSliderNumber('lineTransparency', 'lineTransparencyNum');
    syncSliderNumber('lineAngle', 'lineAngleNum');
    syncSliderNumber('linePosY', 'linePosYNum');

    safeAddEventListener('lineThickness', 'input', (e) => {
        state.guideLine.thickness = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('lineColor', 'input', (e) => {
        state.guideLine.color = e.target.value;
        updateGuideLine();
    });

    safeAddEventListener('lineTransparency', 'input', (e) => {
        state.guideLine.transparency = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('lineAngle', 'input', (e) => {
        state.guideLine.angle = parseFloat(e.target.value);
        updateGuideLine();
    });

    safeAddEventListener('linePosY', 'input', (e) => {
        state.guideLine.posY = parseFloat(e.target.value);
        updateGuideLine();
    });

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
}

function setupLightControls() {
    const lightPad = document.querySelector('.light-pad');
    const leftLightIcon = document.getElementById('left-light-icon');
    const rightLightIcon = document.getElementById('right-light-icon');

    if (!lightPad || !leftLightIcon || !rightLightIcon) return;

    const lightPadRect = lightPad.getBoundingClientRect();

    // Initial positions (set from default light positions)
    // Map 3D world coordinates to 2D pad coordinates
    const mapToPad = (lightPos) => {
        // Normalize world coordinates (e.g., from -10 to 10) to a 0-1 range
        const x = (lightPos.x + 10) / 20;
        const y = (lightPos.y + 10) / 20;
        // Convert to pad coordinates
        return {
            x: x * lightPadRect.width,
            y: (1 - y) * lightPadRect.height // Invert Y-axis for screen coordinates
        };
    };

    const setIconPosition = (icon, pos) => {
        icon.style.left = `${pos.x}px`;
        icon.style.top = `${pos.y}px`;
    };

    setIconPosition(leftLightIcon, mapToPad(state.lights.directional.position));
    setIconPosition(rightLightIcon, mapToPad(state.lights.directionalRight.position));

    function makeDraggable(icon, light) {
        let isDragging = false;

        icon.addEventListener('mousedown', (e) => {
            isDragging = true;
            icon.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            // Get mouse position relative to the light pad
            let x = e.clientX - lightPadRect.left;
            let y = e.clientY - lightPadRect.top;

            // Clamp position within the pad boundaries
            x = Math.max(0, Math.min(lightPadRect.width, x));
            y = Math.max(0, Math.min(lightPadRect.height, y));

            // Update icon position
            setIconPosition(icon, { x, y });

            // Map 2D pad coordinates back to 3D world coordinates
            const worldX = (x / lightPadRect.width) * 20 - 10;
            const worldY = (1 - (y / lightPadRect.height)) * 20 - 10;

            // Update the light's position
            light.position.x = worldX;
            light.position.y = worldY;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            icon.style.cursor = 'grab';
        });
    }

    makeDraggable(leftLightIcon, state.lights.directional);
    makeDraggable(rightLightIcon, state.lights.directionalRight);
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

    state.lights.directionalRight = new THREE.DirectionalLight(0xffffff, 0.0);
    state.lights.directionalRight.position.set(-5, 5, 5);
    state.lights.directionalRight.castShadow = false;
    state.scene.add(state.lights.directionalRight);
    
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
        updateControlInstructions(); // Call initially to set correct instructions
        setupMouseControls(); // Call here after DOM is ready
        
        // Initialize guide line controls to match state
        safeSetValue('lineThickness', state.guideLine.thickness);
        safeSetValue('lineThicknessNum', state.guideLine.thickness);
        safeSetValue('lineColor', state.guideLine.color);
        safeSetValue('lineTransparency', state.guideLine.transparency);
        safeSetValue('lineTransparencyNum', state.guideLine.transparency);
        safeSetValue('lineAngle', state.guideLine.angle);
        safeSetValue('lineAngleNum', state.guideLine.angle);
        safeSetValue('linePosY', state.guideLine.posY);
        safeSetValue('linePosYNum', state.guideLine.posY);
        
        updateGuideLine(); // Initialize guide line
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