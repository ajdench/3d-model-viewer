# Working Context

## Current Project: 3D Model Viewer v3.2+ - Dual Transparency System Implementation

### Project Status: READY FOR DUAL TRANSPARENCY IMPLEMENTATION
- **Application**: Professional 3D Model Viewer (Three.js r179, Vite 7.0.6, ES6 modules)  
- **Memory System**: Complete claude-dementia v3.0 integration (10k token budget)
- **Current Version**: v3.1+ with complete clipboard functionality and cross-browser interface improvements
- **Branch**: Dev-4 (ready for Git commit, then dual transparency implementation)
- **Current Session**: Completed WebKit color picker fixes, researched dual transparency system
- **Next Implementation**: Dual Transparency System (Object + Surface) using Material Override approach
- **Current Status**: USER READY FOR GIT COMMIT - Implementation research complete ✅

## Key Learning and Evolution

### Architecture Maturity
- **Modular Structure**: HTML/CSS/JS cleanly separated with ES6 modules
- **Three.js Integration**: Advanced lighting system with Basic/Complex modes
- **State Management**: Comprehensive global state object managing all aspects
- **Error Handling**: Robust file validation, graceful fallbacks, timeout management
- **Performance**: Optimized render loop, responsive UI, 50MB file limits

### Major Feature Evolutions (v2.3-2.9.2)
1. **Camera Rotation Controls** (v2.3): Removed for UX simplification
2. **Zoom Controls** (v2.6+): Removed for interface cleanliness
3. **Example Models** (v2.9.1): Utah Teapot/Suzanne Monkey removed for streamlined interface
4. **UI Reorganization** (v2.8-2.9): Collapsible controls, upload area relocation, precise positioning
   - **Code Preservation**: All sunset features commented with "SUNSET" markers
   - **Migration**: Presets automatically ignore sunset data
   - **Enhancement**: Accessibility, animations, persistent state management

### Current Technical Excellence
- **Guide Line System**: Fully functional with responsive viewport units and pixel-perfect control alignment
- **Lighting Controls**: Compact vertical sliders with dual-mode positioning
- **Model Loading**: Support for OBJ, STL, GLTF, GLB with robust error handling
- **Material System**: PBR materials with comprehensive property controls and 5 transparency modes
- **Surface Extraction**: Hybrid system - ConvexGeometry + Ray Casting (preserves shape) + future WASM/MeshLabJS
- **Ray Casting**: JavaScript-only external surface extraction using Three.js Raycaster with configurable parameters
- **Upload System**: Callback-based with 30-second timeout and proper cleanup
- **CSS Recovery**: Proven disaster recovery from major file corruption using git restore

## Active Development Insights

### Proven Patterns
- **Utility Functions**: `safeSetValue()`, `safeAddEventListener()` prevent DOM errors
- **Material Updates**: Helper functions handle both single meshes and groups
- **Model Processing**: `centerAndScaleModel()` with transform reset prevents accumulation
- **Memory Management**: Automatic compression with token budget enforcement

### Quality Gates Established
- ES6 module loading eliminates CDN dependencies
- Top-level function organization prevents nesting issues
- Comprehensive error handling with try-catch blocks
- File validation before processing
- Transform resets prevent cumulative issues

## Major Session Achievements (v2.8-2.9.2)
1. **✅ Collapsible Controls** (v2.8): All 7 sections with smooth animations, persistence, accessibility
2. **✅ Upload Area Relocation** (v2.9): Moved to bottom-right with TORUS/LIBRARY buttons
3. **✅ Example Model Removal** (v2.9.1): Eliminated Utah Teapot/Suzanne functions for cleaner interface
4. **✅ Precise Positioning** (v2.9.1): Upload area aligned with INTERACTION and BASIC button
5. **✅ Dependency Modernization** (v2.9.2): Three.js r179, Vite 7.0.6, punycode resolution
6. **✅ Code Synchronization**: Gemini perfectly implemented all Claude Code changes

## PHASE 1 EXECUTION STATUS (2025-08-06)

### 🎯 IMMEDIATE PRIORITIES - Phase 1: Critical Stabilization
1. **System Verification**: Complete functional testing of current application state
2. **Environment Fixes**: Resolve iCloud sync interference with development server  
3. **Baseline Protection**: Create formal v2.9.2 release tag for stable rollback point

### ✅ PREVIOUS FIXES COMPLETED (2025-08-05)
1. **syncSliderNumber ReferenceError RESOLVED**: Removed 875+ lines of duplicate code that was causing scope conflicts and preventing application initialization
2. **Vite Syntax Error FIXED**: Removed extra closing brace that broke ControlSync class structure  
3. **Application Core Restored**: Main functionality should now work correctly with proper slider-number synchronization

### ⚠️ KNOWN ENVIRONMENT ISSUE
- **iCloud Sync Interference**: Vite dev server cannot start due to iCloud sync attributes (@ symbols in file listing)
- **Workaround Available**: Use simple HTTP server (python3 -m http.server) or move project temporarily out of iCloud folder

### ✅ MASTER GRID ARCHITECTURE STATUS (v2.10.0+)
- **Phase 1A**: Master `.right-ui-grid` container created (260px width)
- **Phase 1B**: Clean aesthetic - borders removed, subtle backgrounds added
- **Phase 1C**: Right slider alignment system implemented via grid calculations
- **Penpot Assets**: 8 HTML component files created with exact dimensions
- **Current Status**: READY FOR VISUAL DESIGN PHASE 🎨
- **Next Step**: User designs layout in Penpot.app, then Phase 1D implementation

### ⚠️ CRITICAL SYSTEM STATUS UPDATE (2025-08-13)
- **Tool State**: NOT IN WORKING STATE (user confirmed)
- **Critical Issue**: Model Attitude controls and VIEW display not functioning
- **Root Cause**: Quaternion vs Euler rotation system conflict
- **Technical Conflict**: Mouse drag (quaternion) overwrites UI controls (Euler), breaking synchronization
- **Investigation**: COMPLETE - comprehensive analysis documented
- **Solution Ready**: Hybrid system with quaternion-to-Euler bidirectional synchronization

## Memory System Integration Status
- **Full Installation**: ✅ Complete claude-dementia v3.0
- **Python Tools**: ✅ All 5 tools available and documented
- **Workflow Integration**: ✅ Start/end routines established
- **Token Management**: ✅ 4,348/10,000 tokens used (43.4%)
- **CLAUDE.md Limit**: ✅ 34,446/35,995 characters (95.7%) - Critical monitoring active
- **Automation Ready**: ✅ Ready for pattern detection and session logging
