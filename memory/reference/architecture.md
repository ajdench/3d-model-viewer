# 3D Model Viewer Architecture Reference

## System Architecture

### Core Stack
| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | HTML5/CSS3/ES6 | UI and interactions |
| 3D Engine | Three.js r179 | WebGL rendering |
| Status | v2.9.3-stable | Phase 1 Complete |
| Build | Vite | Development/bundling |
| Memory | Claude-dementia v3.0 | Context persistence |
| Deploy | GitHub Pages | Static hosting |

### State Management
**Global State Pattern**: Single object managing all application state
- `scene`, `renderer`, `camera` - Three.js core
- `model`, `lights` - Scene objects  
- `currentModelType`, `lightingMode` - Configuration
- `guideLine`, `presets` - Feature state

### Key Architectural Patterns

#### 1. Safe DOM Pattern
```javascript
safeSetValue(id, value) // Prevents runtime errors
safeAddEventListener(id, event, handler) // Safe event binding
```

#### 2. Material Update Pattern  
```javascript
updateMaterialProperty(property, value) // Handles single mesh + groups
updateMaterialColor(colorValue) // Unified color updates
updateMaterialTransparency(opacity) // Transparency management
```

#### 3. Model Loading Pattern
- File validation → Progress tracking → Timeout (30s) → Cleanup → Callback
- Supports: OBJ, STL, GLTF, GLB formats
- Error handling with user feedback

#### 4. Transform Reset Pattern
```javascript
centerAndScaleModel(object) // Prevents cumulative transform issues
// 1. Reset position/rotation/scale 2. Update matrix 3. Calculate bounds 4. Apply
```

## Technical Decisions

### Framework Choice: Vanilla JS
**Pros**: Direct Three.js control, smaller bundle, easier debugging
**Cons**: More verbose, manual state sync
**Result**: Optimal for 3D-focused application

### Feature Sunset Strategy  
**v2.3**: Camera rotation controls removed
**v2.6**: Zoom controls removed
**Rationale**: UI simplification, focus on essential features
**Preservation**: All sunset code commented with "SUNSET" markers

### Memory System Integration
**Budget**: 10,000 tokens (3k active + 5k reference + 2k buffer)
**Automation**: Python tools for pattern detection, session logging
**Workflow**: Start/end routines, automated documentation

## Anti-Patterns Avoided
- Function nesting (causes runtime errors)
- Direct material access (fails for groups) 
- Cumulative transforms (size drift on reload)
- Missing resource cleanup (memory leaks)
- Missing event listeners (controller non-functionality)
- Assumption-based debugging (vs evidence-based verification)

## Phase 1 Stabilization Achievements (v2.9.3-stable)
**Controller System Restoration**: All UI elements now functional
- **Event Listeners Added**: 20+ missing handlers for number inputs and buttons
- **Reset Functionality**: Complete Model and Camera reset with UI synchronization
- **Material Controls**: COMPLEX/BASIC toggle and all property inputs working
- **Evidence-Based Testing**: Runtime verification methodology established
- **Baseline Protection**: v2.9.3-stable tag created for stable development foundation

## Performance Optimizations
- RequestAnimationFrame render loop
- Material helper functions with traversal
- Canvas resize event handling
- 50MB file limits + timeout protection
- Responsive viewport units
