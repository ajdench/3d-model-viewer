# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional 3D Model Viewer built with Three.js r178 that provides interactive control over camera positioning, model manipulation, material properties, lighting, and guide lines. The application is a modern single-page web application that runs entirely in the browser with no backend dependencies, using ES6 modules and Vite for development and build tooling. Features dual control schemes, advanced lighting controls, and GitHub Pages deployment support.

## Development Commands

The application now uses Vite for development with a modular structure:

- **Development Server**: 
  ```bash
  npm run dev
  # Starts Vite dev server with hot reload
  ```
- **Production Build**: 
  ```bash
  npm run build
  # Creates optimized production build
  ```
- **Preview Build**: 
  ```bash
  npm run preview
  # Preview the production build locally
  ```
- **GitHub Pages Deployment**:
  ```bash
  npm run predeploy  # Builds the project
  npm run deploy     # Deploys to GitHub Pages
  ```
- **Dependencies**: The project uses Three.js (r178) as a dependency, with Vite for development and build tooling
- **Module System**: ES6 modules with separated HTML/CSS/JS files for better organization
- **Deployment**: GitHub Pages support via gh-pages package

## Architecture

### Core Structure
- **Modular Application**: HTML (`index.html`), CSS (`style.css`), and JavaScript (`main.js`) separated for better organization
- **Three.js Integration**: Uses Three.js r178 for 3D rendering and scene management
- **State Management**: Global `state` object manages camera, scene, renderer, model, lights, presets, control schemes, and guide lines
- **Event-Driven**: Heavy use of event listeners for UI controls and user interactions
- **Module System**: Uses ES6 modules with Vite for development server support
- **Modular Code Structure**: Functions organized in numbered sections with clear separation of concerns

### Key Components

#### Scene Management (`initThreeJS()`)
- Scene with transparent background (null) for flexible capture options
- Perspective camera with 50° FOV, positioned at (0,0,5)
- WebGL renderer with antialiasing, alpha channel, preserveDrawingBuffer, and high pixel ratio support
- No explicit clear color set - uses natural transparency
- Advanced lighting setup: ambient (0.4 intensity) + dual directional lights (left 0.6, right 0.0 default)
- Interactive light positioning via draggable light pad interface

#### Model Loading System
- **Built-in Models**: Torus knot (default), cube, sphere, pyramid
- **Custom File Support**: 
  - OBJ files via Three.js `OBJLoader` from `three/examples/jsm/loaders/OBJLoader.js`
  - STL files via Three.js `STLLoader` from `three/examples/jsm/loaders/STLLoader.js`
  - GLTF/GLB files via Three.js `GLTFLoader` from `three/examples/jsm/loaders/GLTFLoader.js`
- **Model Processing**: Enhanced auto-centering and scaling via `centerAndScaleModel()` with transform reset
- **Material Application**: Standard PBR materials with customizable properties (applied to all meshes in complex models)
- **Upload System**: Robust callback-based system with timeout and error handling

#### Mouse Controls (`setupMouseControls()`)
**Unified Control Scheme (v2.3+)**:
- **Left Click + Drag**: Rotates the 3D model using camera-relative axes
- **Right Click + Drag**: Pans camera position
- **Mouse Wheel**: Zoom in/out by scaling camera distance

**SUNSET Features (v2.3+)**:
- ~~**Camera Orbit Controls**: Removed - camera no longer orbits via mouse~~
- ~~**Ctrl + Left Click + Drag**: Removed - left-click now always rotates model~~
- ~~**Control Scheme Differences**: Both Standard and Legacy modes now identical~~

**Legacy Documentation (pre-v2.3)**:
- **Context Menu**: Disabled to prevent interference
- **F Key**: Focus model on screen with automatic camera positioning

#### UI Control System
- **Slider-Number Sync**: Bidirectional sync between range sliders and number inputs
- **Real-time Updates**: All controls update 3D scene immediately
- **State Persistence**: Camera/model states saved to localStorage as presets
- **Capture System**: Screenshot capture to file download with transparent backgrounds (clipboard feature removed)
- **Guide Line System**: Overlay guide lines with customizable thickness, color, transparency, angle, and position
- **Control Schemes**: Dual interaction modes (Standard: camera-centric, Legacy: model-centric)
- **Advanced Lighting**: Dual directional lights with interactive positioning controls
- **Keyboard Shortcuts**: F key for focus model on screen, Ctrl+drag for model rotation

### File Structure
```
/
├── index.html         # HTML structure and UI elements with complete controls
├── main.js            # Main JavaScript application logic with ES6 modules (separated from HTML)
├── style.css          # CSS styles separated for better organization
├── package.json       # Dependencies (Three.js r178, Vite, gh-pages) with npm scripts
├── CLAUDE.md          # Development guidelines and documentation
├── README.md          # Comprehensive documentation
├── models/            # Empty directory for local model storage
└── node_modules/      # NPM dependencies
```

### Material System
- Uses Three.js `MeshStandardMaterial` for PBR rendering
- Supports color, metalness, roughness, and transparency controls
- Handles both single meshes and groups (for loaded models)
- Material updates traverse object hierarchies for complex models

### Preset Management
- Save/load complete viewer configurations to localStorage
- Includes camera position/rotation, model transform, material properties, lighting
- Dropdown selection and manual name entry
- Persistent across browser sessions

## Development Guidelines

### Code Organization
- JavaScript is properly separated into `main.js` using ES6 modules
- Functions are organized by feature: model loading, controls, utilities, etc.
- Heavy use of utility functions like `safeSetValue()` and `safeAddEventListener()` for DOM safety
- **CRITICAL**: All functions are at the top level scope with proper modular structure

### Initialization System
- **`initializeViewer()`**: Simplified initialization function using ES6 imports
- **Direct Import**: Three.js loaded directly via `import * as THREE from 'three'`
- **Module Loaders**: OBJLoader, STLLoader, and GLTFLoader imported from Three.js examples
- **Error Display**: `showLoadingError()` provides user-friendly error messages when initialization fails
- **No CDN Dependencies**: All dependencies managed through npm and bundled with Vite
- **Clean Architecture**: No retry logic needed - direct module imports are reliable

### Error Handling
- File validation for uploads (format and size limits)
- Graceful fallbacks for missing DOM elements
- Status display system for user feedback during operations
- **Module Loading**: Direct ES6 imports eliminate loading issues
- **Material Updates**: All material controls use helper functions (`updateMaterialColor()`, `updateMaterialProperty()`, `updateMaterialTransparency()`) to handle both single meshes and groups

### Browser Compatibility
- Requires WebGL support and ES6 modules compatibility
- Designed for Chrome 88+, Firefox 84+, Safari 14+
- Uses modern JavaScript features like async/await, const/let, arrow functions
- **Module Dependencies**: Application uses npm-managed dependencies bundled with Vite

### Performance Considerations
- 50MB file size limit for model uploads
- Efficient model loading with progress indicators
- Canvas resizing handled via resize event listeners
- Optimized render loop using requestAnimationFrame
- Transparent background rendering with no clear color for optimal performance
- PreserveDrawingBuffer enabled for capture functionality
- Guide line overlay rendering optimized for capture hiding

### Code Quality Notes
- **File Endings**: Ensure all files end with proper newlines for better git compatibility
- **HTML Structure**: Complete control panels with all supported file formats properly documented
- **File Input**: Accept attribute correctly set to `.obj,.stl,.gltf,.glb`
- **UI Consistency**: All control groups follow consistent slider-number input pattern
- **Drop Zone Display**: Visual indicator shows all supported formats to users
- **Button Groups**: Preset controls use consistent button-group styling
- **Guide Line CSS**: Separate positioning (top) and transformation (rotate) properties
- **Transform Order**: Apply CSS transforms in correct sequence to avoid conflicts
- **Responsive Units**: Use viewport units (vh) for thickness instead of fixed pixels
- **State Synchronization**: Always initialize UI controls to match state values

## Adding New Features

### New Model Formats
Extend the file upload system by:
1. Adding new format to `validateFile()` function
2. Creating new loader function following the pattern of OBJ/STL/GLTF loaders
3. Adding new loader case in `handleFileUpload()`
4. Importing required Three.js loader from examples directory

### New Control Types
Add new controls by:
1. Adding HTML elements to the controls panel
2. Setting up slider-number sync in `setupControls()`
3. Adding event listeners with proper state updates
4. Including new properties in preset save/load system

### Material Extensions
Extend material system by:
1. Modifying material creation in `createModel()` and model loaders
2. Adding new control elements for material properties
3. Updating `updateMaterialProperty()` and related functions
4. Including new properties in preset management

### Capture System Extensions
Extend the capture functionality by:
1. Adding new capture formats or options to the capture controls
2. Modifying `captureFrame()` function for different output formats
3. Adding post-processing options for captured images
4. Implementing batch capture or animation recording features
5. Adding clipboard API fallbacks for browsers that don't support it
6. Implementing custom background options for captures

## Troubleshooting & Known Issues

### Camera Control Migration (v2.3+)
**Symptom**: Looking for camera rotation controls or Ctrl+Left-click not working
**Solution**: These features were sunset in v2.3:
- Camera rotation controls removed from UI - use camera position controls instead
- Left-click + drag now always rotates the model (no Ctrl needed)
- For camera positioning, use the Position X/Y/Z sliders or right-click + drag to pan

### Loading Problems
**Symptom**: Application stuck at "Loading 3D Viewer..." screen with spinning wheel
**Causes & Solutions**:
1. **Module Loading Issues**: ES6 modules not supported or JavaScript disabled
   - Solution: Use Chrome 88+, Firefox 84+, or Safari 14+ with JavaScript enabled
2. **Build Issues**: Development server not running or build artifacts missing
   - Solution: Run `npm run dev` for development or `npm run build` then `npm run preview`
3. **Browser Compatibility**: Older browsers may not support required features
   - Solution: Use Chrome 88+, Firefox 84+, or Safari 14+

### Material Control Issues
**Symptom**: Material controls (color, metalness, roughness) don't affect loaded models
**Cause**: Directly accessing `state.model.material` fails for OBJ/STL models (which are groups)
**Solution**: Always use helper functions:
- `updateMaterialColor(colorValue)` for color changes
- `updateMaterialProperty(property, value)` for metalness/roughness
- `updateMaterialTransparency(opacity)` for transparency

### Code Structure Issues
**Symptom**: Functions not working, JavaScript errors in console
**Cause**: Nested function definitions or malformed code structure
**Prevention**: 
- Keep all functions at the top level (never nest function definitions)
- Use proper try-catch blocks around all Three.js operations
- Always check for object existence before accessing properties

### Model Loading Failures
**Symptom**: Custom models fail to load or display incorrectly
**Common Issues**:
1. **File Format**: OBJ, STL, GLTF, and GLB formats are supported
2. **File Size**: 50MB limit enforced
3. **File Corruption**: Invalid file structure
4. **Material Assignment**: Models may need material reapplication
5. **GLTF Dependencies**: Some GLTF files may have missing textures or dependencies

### Performance Issues
**Symptom**: Slow rendering, browser freezing
**Solutions**:
1. Reduce model complexity before upload
2. Check file size (should be under 50MB)
3. Close other browser tabs
4. Use models with lower polygon counts

### Upload System Issues (v2.1)
**Symptom**: File uploads fail, time out, or don't provide feedback
**Common Causes & Solutions**:
1. **Upload Timeouts**: Large files or slow connections
   - Solution: Wait up to 30 seconds - system has timeout protection
   - Files over 50MB will be rejected with clear error message
2. **Drag & Drop Not Working**: Files not recognized when dropped
   - Solution: Ensure you're dropping .obj, .stl, .gltf, or .glb files only
   - Added pre-validation before processing
3. **Same File Upload**: Can't upload the same file twice
   - Solution: File input now clears after each upload
4. **No Progress Feedback**: Upload appears to hang
   - Solution: Enhanced status display shows loading progress and clear error messages

### Capture System Changes
**Update**: Clipboard capture functionality has been removed
**Reason**: Simplified capture system focusing on reliable file download
**Current Behavior**: Only FILE button available for downloading PNG captures
**Benefits**: More reliable across all browsers and environments

### Guide Line System Issues (RESOLVED)
**Previous Issues**: Guide line positioning and control synchronization problems
**Root Causes Identified & Fixed**:
1. **Missing Vertical Position Control** ✅ FIXED
   - Problem: No `syncSliderNumber('linePosY', 'linePosYNum')` call
   - Solution: Added proper slider-number synchronization
2. **Missing Event Handler** ✅ FIXED
   - Problem: No event listener for `linePosY` slider changes
   - Solution: Added `safeAddEventListener('linePosY', 'input', callback)`
3. **Thickness Value Mismatch** ✅ FIXED
   - Problem: State had `thickness: 5` but HTML expected `0.05` (range 0.01-1)
   - Solution: Updated state initialization to `thickness: 0.05`
4. **Incorrect Thickness Units** ✅ FIXED
   - Problem: Using `px` units instead of responsive viewport units
   - Solution: Changed to `${state.guideLine.thickness * 100}vh`
5. **Missing UI Initialization** ✅ FIXED
   - Problem: Guide line controls not initialized to match state values
   - Solution: Added proper `safeSetValue()` calls in `initializeViewer()`

### GEMINI CLI Loop Issue (RESOLVED)
**Previous Problem**: GEMINI CLI stuck in endless loop trying to fix guide line functionality
**Root Cause**: Multiple interconnected issues in guide line system caused edit failures
**Resolution**: All guide line issues have been systematically identified and fixed

**What Was Fixed**:
```javascript
// 1. Added missing slider sync
syncSliderNumber('linePosY', 'linePosYNum');

// 2. Added missing event handler
safeAddEventListener('linePosY', 'input', (e) => {
    state.guideLine.posY = parseFloat(e.target.value);
    updateGuideLine();
});

// 3. Fixed thickness value and units
thickness: 0.05, // Changed from 5
guideLine.style.height = `${state.guideLine.thickness * 100}vh`;

// 4. Added proper UI initialization
safeSetValue('lineThickness', state.guideLine.thickness);
safeSetValue('linePosY', state.guideLine.posY);
```

**Prevention**: Guide line system now has comprehensive error handling and proper initialization

### Scaling System Issues (v2.1)
**Symptom**: Models appear incorrectly sized after reload or multiple uploads
**Root Cause**: Cumulative transformations not being reset
**Solutions**:
1. **Models Too Large/Small**: centerAndScaleModel now properly resets all transforms
2. **Inconsistent Sizing**: Enhanced bounding box validation prevents empty box errors
3. **Position Drift**: Final centering step ensures perfect positioning
4. **Scale Factor Logging**: Console shows scaling details for debugging

### Drag & Drop Issues (v2.1)
**Symptom**: Drag and drop visual feedback inconsistent or missing
**Fixed Issues**:
1. **Missing dragenter Event**: Added proper dragenter handling
2. **Visual Feedback**: Improved dragover/dragleave logic
3. **File Type Validation**: Pre-validates file types before processing
4. **Drop Effect**: Added proper dropEffect for better UX

## Major Changes and Sunset Features (v2.3)

### Camera Rotation Controls Sunset (v2.3)
- **Change**: Removed camera rotation controls from UI and simplified mouse interactions
- **Reason**: Streamlined user experience by focusing on model manipulation rather than camera control
- **Impact**: 
  - Left-click + drag now always rotates the model (was previously Ctrl+Left or Legacy mode only)
  - Camera orbit controls removed from mouse interactions
  - Camera rotation sliders/inputs removed from control panel
  - Camera rotation display removed from VIEW STATUS panel
  - Both "Standard" and "Legacy" control schemes now identical
  - Ctrl+Left-click functionality sunset
- **Code**: Functions preserved but commented out for potential future restoration
- **Migration**: Existing presets automatically ignore camera rotation data

### UI Panel Updates (v2.3)
- **VIEWER STATS** renamed to **VIEW STATUS** for clearer terminology
- **VIEW STATUS** now displays: Camera Position, Model Rotation, Zoom, Model (camera rotation removed)
- **Panel Layout**: Streamlined information display focusing on essential view parameters

### Interface Layout Updates (v2.3)
- **INTERACTION CONTROLS**: Repositioned to bottom-left of viewer area
- **LIGHTING POSITION**: Repositioned to top-right of viewer area
- **Responsive Design**: Both panels adapt to page width changes with breakpoints
- **Z-index**: Proper layering to ensure visibility over 3D content

### Guide Line Default Values (v2.3)
- **Color**: Changed from red (#FF0000) to light gray (#CCCCCC)
- **Thickness**: Reduced from 0.05 to 0.01 for subtler appearance
- **Transparency**: Changed from 1.0 (opaque) to 0.5 (semi-transparent)
- **Impact**: More professional, less intrusive guide lines by default

## Recent Critical Fixes (v2.0+)

### Fixed Loading System (v2.0)
- **Issue**: Application would hang at loading screen due to CDN timing issues
- **Fix**: Migrated to ES6 modules with npm-managed dependencies and Vite bundling
- **Impact**: Reliable loading with no network dependencies for core libraries

### Fixed Function Structure (v2.0)
- **Issue**: Malformed code with nested function definitions causing runtime errors
- **Fix**: Reorganized all functions to top-level scope with modular organization
- **Impact**: Proper code execution and maintainability

### Fixed Material Controls (v2.0)
- **Issue**: Material controls only worked for basic geometries, not loaded models
- **Fix**: Implemented proper material update functions that traverse object hierarchies
- **Impact**: Material controls now work for all model types

### Fixed Model Loaders (v2.0)
- **Issue**: OBJ/STL loaders had broken code and incorrect material application
- **Fix**: Completely rewrote loader functions with proper error handling
- **Impact**: Reliable custom model loading

### Fixed Upload System (v2.1)
- **Issue**: Unreliable file uploads, poor error handling, no timeout management
- **Fix**: Implemented callback-based system with 30-second timeout and proper cleanup
- **Impact**: Robust file upload system with comprehensive error recovery

### Fixed Scaling System (v2.1)
- **Issue**: Model scaling malfunctioned on reload due to cumulative transformations
- **Fix**: Added proper transform reset and enhanced bounding box validation
- **Impact**: Consistent model scaling regardless of reload frequency or model complexity

### Fixed Guide Line System (v2.2)
- **Issue**: Guide line positioning, thickness, and control synchronization failures
- **Root Causes**: Missing event handlers, value mismatches, incorrect units, no UI initialization
- **Fix**: Comprehensive guide line system overhaul with proper initialization and responsive units
- **Impact**: Fully functional guide line overlay with smooth positioning and capture integration

## Key Functions Reference

### Section 1: Basic Utility Functions (lines ~37-130)
- **`formatNumber(num)`** (line ~37): Number formatting for display
- **`radToDeg(rad)`** / **`degToRad(deg)`** (line ~41-46): Angle conversion
- **`safeSetValue(id, value)`** (line ~49): Safe DOM element value setter with warnings
- **`showUploadStatus(message, type)`** (line ~58): Enhanced upload status display with timing
- **`safeAddEventListener(id, event, handler)`** (line ~122): Safe event listener setup with warnings

### Section 2: Material Update Functions (lines ~131-187)
- **`updateMaterialColor(colorValue)`** (line ~134): Updates material color for all model types
- **`updateMaterialProperty(property, value)`** (line ~155): Updates metalness/roughness
- **`updateMaterialTransparency(opacity)`** (line ~173): Updates transparency

### Section 3: File Handling & Model Loading (lines ~189-281)
- **`validateFile(file)`** (line ~192): Enhanced file format and size validation supporting .obj, .stl, .gltf, .glb
- **`resetModelControls()`** (line ~219): Resets model rotation/scale controls
- **`resetMaterialControlsToDefault()`** (line ~228): Resets UI controls to default material values
- **`handleFileUpload(file)`** (line ~239): Enhanced file upload handler with timeout and callbacks for all formats

### Section 4: Mouse Event Handlers (lines ~284-387)
- **`handleMouseDown(e)`** (line ~286): Handles mouse down events with control scheme detection
- **`handleMouseMove(e)`** (line ~300): Advanced mouse movement handling with dual control schemes
- **`handleMouseUp()`** (line ~366): Mouse up event cleanup
- **`handleMouseWheel(e)`** (line ~373): Mouse wheel zoom functionality
- **`handleContextMenu(e)`** (line ~385): Context menu prevention

### Section 5: Core Model/Camera Functions (lines ~390-571)
- **`updateCameraInfo()`** (line ~392): Updates UI displays and camera controls with enhanced formatting
- **`centerAndScaleModel(object)`** (line ~452): Fixed auto-centering and scaling with transform reset
- **`focusModelOnScreen()`** (line ~492): Automatic camera positioning to focus on model
- **`captureFrame(callback)`** (line ~525): Simplified capture function with guide line hiding
- **`animate()`** (line ~540): Main render loop
- **`updateGuideLine()`** (line ~511): **FIXED** - Updates guide line overlay with proper positioning, responsive thickness, and transform handling

### Section 6: Model Creation Functions (lines ~574-575)
- **`createModel(modelType)`** (line ~576): Creates built-in geometric models
- **`loadOBJModel(url, filename, onSuccess, onError)`** (line ~620): Enhanced OBJ file loader with callbacks
- **`loadSTLModel(url, filename, onSuccess, onError)`** (line ~667): Enhanced STL file loader with callbacks
- **`loadGLTFModel(url, filename, onSuccess, onError)`** (line ~714): GLTF/GLB file loader with scene traversal
- **`createExampleTeapot()`** (line ~761): Creates procedural Utah Teapot example
- **`createExampleSuzanne()`** (line ~809): Creates procedural Suzanne Monkey example

### Section 7: UI Setup & Control Functions (lines ~577-1270)
- **`syncSliderNumber(sliderId, numberId)`** (line ~580): Bidirectional slider-number synchronization
- **`loadPresetsList()`** (line ~598): Loads saved presets into dropdown
- **`updateControlInstructions()`** (line ~612): Updates control instruction display based on scheme
- **`setupMouseControls()`** (line ~629): Mouse interaction handlers with scheme support
- **`setupControls()`** (line ~646): **ENHANCED** - Main UI control binding with comprehensive feature support including fixed guide line controls
- **`setupLightControls()`** (line ~1371): Interactive light positioning with draggable icons

### Section 8: Main Initialization Functions (lines ~1257-1375)
- **`handleResize()`** (line ~1275): Handles window resize events
- **`initThreeJS()`** (line ~1288): Three.js scene setup with dual lighting
- **`initializeViewer()`** (line ~1514): **ENHANCED** - Main initialization with all systems including proper guide line control initialization
- **`showLoadingError(message)`** (line ~1554): Error display system

## Development Best Practices

### When Making Changes
1. **Always test loading**: Run `npm run dev` and ensure the default model loads
2. **Check console**: Look for JavaScript errors during development
3. **Test material controls**: Verify color/metalness/roughness work on all model types
4. **Test file uploads**: Try OBJ, STL, GLTF, and GLB files, including large files and edge cases
5. **Verify example models**: Ensure Utah Teapot and Suzanne load correctly
6. **Test scaling consistency**: Upload same model multiple times to verify consistent sizing
7. **Verify drag & drop**: Test drag & drop with various file types (.obj, .stl, .gltf, .glb) and invalid files
8. **Test build process**: Run `npm run build` and `npm run preview` to verify production builds
9. **Test capture functionality**: Verify file download works in target browsers
10. **Test deployment**: Use `npm run deploy` to test GitHub Pages deployment
11. **Test control schemes**: Verify both Standard and Legacy interaction modes work correctly
12. **Test guide lines**: ✅ FIXED - Guide line overlay now works correctly with positioning and capture hiding
13. **Test lighting controls**: Verify interactive light positioning and dual light setup
14. **Validate guide line initialization**: Ensure all guide line controls sync properly with state values
15. **Test responsive thickness**: Verify guide line thickness scales properly with viewport

### AI Assistant Workflows
**When Using GEMINI CLI**:
- ✅ Guide line issues resolved - no longer causes infinite loops
- Still use simple, single-line replacements when possible
- Complex guide line debugging is now stable
- Multi-line edits work better with fixed foundation

**When Using Claude Code**:
- Excellent for systematic debugging like the recent guide line fixes
- Superior for multi-file architectural changes
- Best for comprehensive error analysis and resolution
- Ideal for documentation updates and function reference maintenance

### Upload System Best Practices (v2.1)
1. **Always use callbacks**: New loader functions require onSuccess/onError callbacks
2. **Implement timeouts**: Use the 30-second timeout system for reliability
3. **Validate early**: Pre-validate files before creating object URLs
4. **Provide feedback**: Use `showUploadStatus()` for consistent user feedback
5. **Clean up resources**: Ensure `URL.revokeObjectURL()` is called in all paths
6. **Handle file input reset**: Clear file inputs to allow re-uploading same file

### Scaling System Best Practices (v2.1)
1. **Always reset transforms**: `centerAndScaleModel()` now handles this automatically
2. **Validate bounding boxes**: Check for empty boxes before scaling operations
3. **Log scaling operations**: Use console.log for debugging scale factors
4. **Force matrix updates**: Call `updateMatrixWorld(true)` before bounding box calculations
5. **Test with various models**: Verify scaling works with different model complexities

### Common Pitfalls to Avoid
1. **Don't nest functions**: Keep all function definitions at the top level
2. **Don't assume single material**: Use helper functions for material updates
3. **Don't skip error handling**: Wrap Three.js operations in try-catch blocks
4. **Don't hardcode DOM access**: Use `safeSetValue()` and `safeAddEventListener()`
5. **Don't forget cleanup**: Always call `URL.revokeObjectURL()` after file loading
6. **Don't skip transform resets**: Let `centerAndScaleModel()` handle transform resets
7. **Don't ignore upload timeouts**: Use the callback system for proper timeout handling
8. **Don't forget material UI updates**: Call `resetMaterialControlsToDefault()` after loading
9. **Don't bypass the build system**: Always use `npm run dev` during development
10. **Test capture functionality**: Verify file download works in target browsers
11. **Maintain file quality**: Ensure proper newlines at end of files for git compatibility
12. **Validate HTML**: Check that file input accept attributes match supported formats
13. **Guide line system is now stable**: All major guide line issues have been resolved
14. **Test responsive units**: Verify viewport-based thickness scaling works across devices
15. **Validate state synchronization**: Ensure UI controls always match internal state values
