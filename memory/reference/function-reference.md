# Function Reference Guide

## Key Functions by Category

### Utilities (~37-130)
`formatNumber()`, `radToDeg()`/`degToRad()`, `safeSetValue()`, `showUploadStatus()`, `safeAddEventListener()`

### Materials (~131-187)  
`updateMaterialColor()`, `updateMaterialProperty()`, `updateMaterialTransparency()`

### File Handling (~189-281)
`validateFile()`, `resetModelControls()`, `resetMaterialControlsToDefault()`, `handleFileUpload()`

### Save/Load System (~3665-3993)
`saveViewerState()`, `loadViewerState()` - Complete scene state persistence with `.3dview` format

### Mouse Events (~284-387)
`handleMouseDown()`, `handleMouseMove()`, `handleMouseUp()`, `handleMouseWheel()`, `handleContextMenu()`

### Core Model/Camera (~390-571)
`updateCameraInfo()`, `centerAndScaleModel()`, `focusModelOnScreen()`, `captureFrame()`, `animate()`, `updateGuideLine()`

### Model Creation (~574-575)
`createModel()`, `loadOBJModel()`, `loadSTLModel()`, `loadGLTFModel()`

### UI Setup (~577-1270)
`syncSliderNumber()`, `loadPresetsList()`, `updateControlInstructions()`, `setupMouseControls()`, `setupControls()`, `setupLightControls()`

### Initialization (~1257-1375)
`handleResize()`, `initThreeJS()`, `initializeViewer()`, `showLoadingError()`

## Testing Checklist
1. Run `npm run dev` and verify default model loads
2. Test material controls on all model types  
3. Test file uploads (OBJ/STL/GLTF/GLB), drag & drop, edge cases
4. Verify scaling consistency, guide lines, lighting controls
5. Test build (`npm run build` → `npm run preview`) and deployment
6. Check console for errors, verify capture functionality

## Code Standards
- **Functions**: Top-level scope, never nested
- **DOM Safety**: Use `safeSetValue()` and `safeAddEventListener()`
- **Materials**: Use helper functions for single meshes and groups
- **File Handling**: Always use callbacks, 30s timeouts, cleanup URLs
- **Transforms**: Let `centerAndScaleModel()` handle resets
- **UI Sync**: Initialize controls to match state values