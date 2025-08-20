# CLAUDE.md

Development guidance for Claude Code when working with this repository.

## Memory Management System

Claude-dementia v3.0 compressed memory system with 10,000 token budget optimized for Claude Code workflows.

### Core Architecture
```yaml
Token Budget: 10,000 (Hard Limit)
├── CLAUDE.md: 1,000 tokens (Core guide)
├── Active Memory: 3,000 tokens (Current work)
│   ├── status.md (Session updates & progress)
│   └── context.md (Task context & priorities)
├── Reference Memory: 5,000 tokens (Stable patterns)
│   ├── architecture.md (System design)
│   ├── patterns.md (Code patterns)
│   └── decisions.md (Technical decisions)
└── Buffer: 1,000 tokens (Overflow space)
```

### Session Protocol
**Every Session Start**: `cat memory/active/status.md memory/active/context.md`
**Load As Needed**: `cat memory/reference/[relevant-file].md memory/patterns/[pattern].md`

### Memory Management Commands
```bash
# Core operations
./memory/update.sh "changes"     # Update with auto-compression + CLAUDE.md limit check
./memory/compress.sh             # Check usage and compress
./memory/weekly-maintenance.sh   # Auto-archive old content

# Quick access
grep -r "pattern" memory/        # Search all memory
cat memory/active/status.md      # Current status dashboard
```

### CLAUDE.md GitHub Limit Management
**Limit**: 35,995 characters | **Monitoring**: Auto-check with memory updates
**Protocol**: Prioritize conciseness - bullets over prose, references over examples
- Archive details to memory/reference/ when space needed

### Python Automation Suite (`/scripts/`)
- **session-logger.py**: Auto-generates session summaries (5-10min saved/session)
- **pattern-detector.py**: Discovers reusable code patterns automatically  
- **question-tracker.py**: Prevents important questions from being forgotten
- **memory-search.py**: Fast weighted search across all memory files
- **memory-assistant.py**: Single interface to all tools

### Daily Workflow
```bash
python scripts/memory-assistant.py start   # Morning routine
python scripts/memory-search.py "topic"    # During development  
python scripts/memory-assistant.py end     # Session end
```

### Documentation Templates
- **Fixes**: `memory/fixes/YYYY-MM-DD-name.md` - Problem/Cause/Fix/Prevention
- **Questions**: `memory/questions/YYYY-MM-DD-topic.md` - Status/Q/Context/Options/Answer  
- **Patterns**: `memory/patterns/pattern-name.md` - Use When/Solution/Example/Trade-offs

### ROI: ~30min/week investment saves 5-10min/day + hours/month in context recovery

## Gemini CLI Integration Guide

**For Gemini CLI**: This section provides essential context for understanding the implemented solutions and codebase architecture.

### Current System Status (v3.2 - August 2025)
- **✅ FULLY OPERATIONAL**: All systems stable, complete function restoration achieved
- **✅ PROFESSIONAL CLIPBOARD SYSTEM**: Modern API with cross-browser fallback + macOS context menu
- **✅ PROFESSIONAL CAPTURE SYSTEM**: High-quality model rendering with OS-level file dialogs
- **✅ ORIENTATION WIDGET**: Thick gradient axis lines with 7 overlapping AxesHelper implementation
- **✅ CROSS-BROWSER UI**: Borderless status messages, Y-axis hover fixes, anti-aliasing optimization
- **✅ CONTROLS SCROLLING SYSTEM**: Complete gradient fades, scrollbar positioning, auto-scroll functionality

### Key Architectural Solutions Implemented

#### **Professional Clipboard System (v3.1)**
**Location**: `main.js:safeAddEventListener('saveToClipboard')` (~line 2970)
- **Modern Clipboard API**: `navigator.clipboard.write()` with `ClipboardItem` for direct copy
- **Three-Tier Fallback**: Direct copy → Professional overlay → Manual download
- **Cross-Browser Compatibility**: Safari/Chrome/Edge with `!important` CSS enforcement
- **macOS Context Menu**: Right-click copy/save integration with proper pointer events

**Pattern**: `navigator.clipboard.write(ClipboardItem)` → overlay fallback → manual download

#### **Orientation Widget Axis Thickness (v3.1)**
**Location**: `main.js:initOrientationWidget()` (~line 1824)
- **7 Overlapping AxesHelper**: 1 original + 6 offset copies for uniform thickness
- **Circular Offset Pattern**: 0.035 offset with 0.35 opacity for gradient effect
- **Group Container**: Coordinated rotation of all axes via `THREE.Group()`

**Pattern**: 6 copies in circular pattern, 0.035 offset, 0.35 opacity

#### **CONTROLS Scrolling System (v3.2)**
**Location**: `main.js:updateScrollFade()` (~line 3788), `style.css:128-150`
- **Dynamic Height Calculation**: JavaScript measures containers, calculates exact scrollable space
- **Gradient Fade Indicators**: CSS masks show when content extends beyond visible bounds
- **Event-Driven Updates**: Fade effect is updated on initial load, on scroll, and after any collapsible section is toggled, ensuring state is always accurate.
- **Scrollbar Positioning**: Extended 15px right into controls-panel padding for clean appearance
- **Auto-scroll Integration**: PRESETS section auto-scrolls to bottom on expand with 100ms delay
- **Content-Based Detection**: Gradients appear based on content extension, not just scroll position.

**Pattern**: Event (load, scroll, toggle) → `updateScrollFade()` → CSS mask application
```javascript
// The core logic, now in its own function, is triggered by multiple events
function updateScrollFade() {
    // ... logic to check scrollHeight vs clientHeight ...
    const hasContentBelow = scrollTop + clientHeight < scrollHeight - 1;
    controlsPanel.classList.toggle('content-below', hasContentBelow);
}
```

#### **Professional Guide Line System (v3.0)**
**Location**: `main.js:updateGuideLine()` function (~line 570)
- **Dynamic Line Extension**: Lines extend edge-to-edge at all angles (-90° to +90°)
- **Mathematical Algorithm**: Perpendicular positioning with 80% diagonal scaling
- **Container Clipping**: 10px margins via CSS overflow:hidden in `.guide-line-overlay`
- **Advanced Controls**: Decimal precision (±360 range), "Position" labeling

**Key Implementation Pattern**:
```javascript
// Perpendicular movement mathematics
const angleRad = (lineState.angle * Math.PI) / 180;
const perpCos = -sinAngle; // cos(θ + 90°) = -sin(θ)
const perpSin = cosAngle;  // sin(θ + 90°) = cos(θ)
const positionOffset = positionScale * (diagonal * 0.8);
```

#### **High-Quality Capture System (v3.0)**
**Location**: `main.js:captureHighQualityFrame()` function (~line 600)
- **Adaptive Resolution**: 2K-4K based on model dimensions
- **Model-Focused Framing**: Automatic camera positioning using bounding box calculations
- **Three-Tier Save System**: OS dialog → filename prompt → download fallback
- **Professional Borders**: 10px transparent spacing around captured models

**File System Integration**:
```javascript
// Modern File System Access API with fallbacks
if ('showSaveFilePicker' in window) {
    // Native OS dialog (Chrome 86+/Edge 86+)
} else {
    // Graceful degradation to filename prompt
}
```

#### **Comprehensive Controller System**
**Location**: `main.js:setupControls()` function (~line 1100)
- **ControlSync Architecture**: Bidirectional slider-number input synchronization
- **Event-Driven Updates**: Real-time 3D scene updates via state management
- **Cross-System Integration**: Controllers update VIEW display, orientation widget, and scene state

### Critical Problem-Solving Patterns

#### **Evidence-Based Debugging Protocol**
**When facing issues, prioritize**:
1. **User-reported browser console errors** over theoretical analysis
2. **Runtime behavior verification** before code structure analysis
3. **Function accessibility testing** vs assuming functions exist
4. **Actual error messages** as primary debugging data

**Anti-Pattern**: Assumption-based debugging leads to elaborate solutions for non-existent problems

#### **Trigonometric Positioning Solutions**
**Guide Line Challenge**: Lines must extend to viewport edges at any angle
**Solution**: Perpendicular vector mathematics with diagonal scaling
- Use perpendicular vectors: `cos(θ+90°) = -sin(θ)`, `sin(θ+90°) = cos(θ)`
- Scale by viewport diagonal × 0.8 for true edge-to-edge coverage
- Container clipping provides clean 10px margins

#### **Cross-Browser UI Compatibility (v3.1)**
**Challenge**: Status messages and hover effects inconsistent across Safari/Chrome/Edge
**Solutions Implemented**:
- **CSS Enforcement**: `border: none !important` for Edge compatibility
- **Empty State Handling**: `.upload-status:empty { display: none }` prevents lingering boxes
- **Y-Axis Hover Fix**: `[data-section="capture"] .section-content { overflow: visible }`
- **Font Anti-Aliasing**: `webkitFontSmoothing`, `mozOsxFontSmoothing`, `textRendering` optimization

#### **Cross-Browser File System Integration**
**Challenge**: OS-level file dialogs not universally supported
**Solution**: Three-tier fallback architecture
1. **File System Access API** (modern browsers)
2. **Filename prompt + download** (broad compatibility)
3. **Direct download** (guaranteed fallback)

### File Structure Guidance for Gemini CLI

#### **Primary Files**
- **`index.html`**: UI structure, guide line controls (lines 268-280), capture buttons
- **`main.js`**: Core logic (2,500+ lines), key functions documented in CLAUDE.md
- **`style.css`**: Styling, guide line container (`.guide-line-overlay`), responsive design

#### **Memory System**
- **`memory/active/status.md`**: Current session progress and achievements
- **`memory/active/context.md`**: Task priorities and focus areas
- **Pattern Files**: Reusable solutions in `memory/patterns/`

#### **Development Commands**
```bash
npm run dev        # Development server (Vite)
npm run build      # Production build
npm run preview    # Preview build
npm run deploy     # GitHub Pages deployment
```

### Gemini CLI Workflow Integration
1. **Start**: Check `memory/active/status.md` for current session state
2. **Search**: Use `grep -r "pattern" memory/` for previous solutions
3. **Implement**: Follow established patterns from `memory/patterns/`
4. **Update**: Use `./memory/update.sh "changes"` for session tracking
5. **Quality**: Test with `npm run dev`, verify UI functionality

### Success Metrics Achieved
- **Guide Lines**: Edge-to-edge extension at all angles with professional margins
- **Capture System**: High-resolution output with native OS file dialogs
- **UI Excellence**: Collapsible panels, pixel-perfect alignment, responsive design
- **Development Velocity**: 5-minute fixes with evidence-based debugging vs hours of theoretical analysis

## Project Overview
Professional 3D Model Viewer (Three.js r179, ES6 modules + Vite, GitHub Pages).

## Commands
```bash
npm run dev/build/preview/deploy  # Standard Vite workflow
```

## Architecture

### Core Structure
- **Files**: `index.html`, `main.js`, `style.css` | **State**: Global object | **Build**: ES6 + Vite
- **Scene**: 50° FOV camera, WebGL + antialiasing | **Lighting**: Ambient + dual directional
- **Models**: OBJ/STL/GLTF/GLB upload | **Controls**: Drag rotate, right-drag pan, wheel zoom
- **Materials**: PBR + 5 transparency modes | **Presets**: localStorage | **Capture**: PNG + guide lines

### Controls: Left-drag rotate, right-drag pan, wheel zoom, F focus

## Development Guidelines

### Code Organization
- **Functions**: Top-level scope | **Safety**: `safeSetValue()`, `safeAddEventListener()`
- **ES6 Modules**: Three.js imports | **Materials**: Helper functions for meshes/groups

### Requirements
- **Browser**: Chrome 88+, Firefox 84+, Safari 14+ | **Files**: 50MB, .obj/.stl/.gltf/.glb
- **Standards**: Newlines, slider-number sync, viewport units, CSS transform order

## Adding Features
**Model Formats**: `validateFile()` → loader function → `handleFileUpload()` → Three.js import
**Controls**: HTML → slider sync → events → presets | **Materials**: Loaders → UI → helpers → presets

## Troubleshooting
**See**: `memory/reference/troubleshooting-guide.md` for complete guide

## Version History & Major Changes
**See**: `memory/reference/version-history.md` for complete changelog

### Current Notable Features
- **Collapsible Controls**: All 7 sections with animations
- **Upload Area**: Bottom-right positioning with TORUS/LIBRARY buttons  
- **Save/Load System**: Complete `.3dview` scene state persistence
- **Transparency Modes**: 5 modes including Unified Surface for high-poly models
- **Dual Transparency System**: Object + Surface transparency (Material Override approach)

## Key Functions Reference

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

## Best Practices & Configuration
**See**: `memory/reference/function-reference.md` for complete testing checklist and code standards

### Guide Lines
- **Controls**: Thickness (0-100), Position (-50 to 50), Transparency (0-1), Angle (-90 to 90)  
- **CSS**: Viewport units, percentage positioning, centered rotation origin

## Strategic Development Roadmap

### Phase 1: Critical Stabilization - ✅ COMPLETED (v2.12.0+)
- ✅ **Complete Controller Restoration**: 23 synchronization fixes applied
- ✅ **Evidence-Based Debugging**: Runtime verification methodology established
- ✅ **Professional UI**: Collapsible instructions panel with perfect alignment
- ✅ **System Synchronization**: All controls synchronized with VIEW display
- ✅ **Memory Integration**: Full claude-dementia v3.0 system operational

### Roadmap (Phases 2-4)
1. **Quality Foundation** (3-4 weeks): Testing infrastructure, automated validation
2. **Core Architecture** (4-5 weeks): Modular refactoring (StateManager, EventManager, ResourceManager)  
3. **Performance & Optimization** (2-3 weeks): Code splitting, advanced surface extraction

**Expected ROI**: 300% maintenance improvement, 200% development speed improvement

### Evidence-Based Debugging Protocol
**See**: `memory/reference/debugging-methodology.md` for complete methodology guide

**Key Principle**: User-reported runtime errors > Theoretical code analysis

## Recent Major Achievements
**See**: `memory/reference/recent-achievements.md` for complete achievement history
