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
./memory/update.sh "changes"     # Update with auto-compression
./memory/compress.sh             # Check usage and compress
./memory/weekly-maintenance.sh   # Auto-archive old content

# Quick access
grep -r "pattern" memory/        # Search all memory
cat memory/active/status.md      # Current status dashboard
```

### Python Automation Suite (`/scripts/`)

**🏆 Highest ROI**: `session-logger.py` - Auto-generates session summaries from git commits
```bash
python scripts/session-logger.py  # Creates memory/current-session.md
# Time saved: 5-10 minutes per session
```

**Pattern Detection**: `pattern-detector.py` - Discovers reusable code patterns automatically
```bash
python scripts/pattern-detector.py  # Finds error handling, validation, API patterns
# Value: Builds pattern library without manual effort
```

**Question Management**: `question-tracker.py` - Prevents important questions from being forgotten
```bash
python scripts/question-tracker.py  # Reports open questions, reminds about old ones
# Value: Never lose important clarifications
```

**Memory Search**: `memory-search.py` - Fast weighted search across all memory files
```bash
python scripts/memory-search.py "error handling"
python scripts/memory-search.py "timeout" --type fix
# Value: Find previous solutions in seconds
```

**Central Orchestration**: `memory-assistant.py` - Single interface to all tools
```bash
python scripts/memory-assistant.py start  # Session start routine
python scripts/memory-assistant.py end    # Session end routine
python scripts/memory-assistant.py search "topic"  # Quick search
```

### Daily Workflow Integration
```bash
# Morning routine
python scripts/memory-assistant.py start
# Shows: unanswered questions, last session summary

# During development
python scripts/memory-search.py "cors error"  # When hitting familiar problems

# End of session
python scripts/memory-assistant.py end
# Runs: session logger, pattern detector, question check, index rebuild
```

### Documentation Templates
**Fix Documentation**: `memory/fixes/YYYY-MM-DD-name.md`
```markdown
## Problem: [One line description]
## Cause: [Root cause analysis]  
## Fix: [Solution implemented]
## Prevention: [Test/check added]
```

**Question Tracking**: `memory/questions/YYYY-MM-DD-topic.md`
```markdown
## Status: OPEN|ANSWERED
## Q: [Specific question with context]
## Context: [Why this question matters]
## Options: [Considered approaches]
## Answer: [When received, with rationale]
```

**Pattern Documentation**: `memory/patterns/pattern-name.md`
```markdown
## Use When: [Specific scenario]
## Solution: [Approach and code example]
## Example: path/to/implementation
## Trade-offs: [Considerations and alternatives]
```

### ROI Analysis
**Time Investment**: 5min setup + 2-3min daily + 10min weekly = ~30min/week
**Time Saved**: 5-10min/day (documentation) + 10-30min/incident (search) + hours/month (patterns)
**Quality Improvements**: Consistent documentation, growing pattern library, no lost context

## Project Overview

Professional 3D Model Viewer built with Three.js r179. Single-page web app with interactive controls for camera, models, materials, lighting, and guide lines. Uses ES6 modules + Vite, deploys to GitHub Pages.

## Commands
```bash
npm run dev        # Development server with hot reload
npm run build      # Production build  
npm run preview    # Preview production build
npm run deploy     # Deploy to GitHub Pages
```

## Architecture

### Core Structure
- **Files**: `index.html`, `main.js`, `style.css` (separated)
- **State**: Global `state` object manages all scene components
- **Event-Driven**: UI controls with real-time 3D updates
- **ES6 Modules**: Vite development + bundling

### Key Systems

**Scene**: Transparent background, perspective camera (50° FOV), WebGL renderer with antialiasing
**Lighting**: Ambient + dual directional lights, compact vertical sliders, Basic/Complex modes
**Models**: Built-in torus model + file upload (OBJ/STL/GLTF/GLB)
**Controls**: Left-drag=rotate model, right-drag=pan camera, wheel=zoom
**Materials**: PBR with color/metalness/roughness/transparency (5 transparency modes including Unified Surface for high-poly models)
**Presets**: Save/load complete configurations to localStorage
**Capture**: PNG download with transparent backgrounds
**Guide Lines**: Overlay with customizable appearance and position

### Mouse Controls (v2.3+)
- **Left + Drag**: Rotate model
- **Right + Drag**: Pan camera  
- **Wheel**: Zoom
- **F Key**: Focus model
- **SUNSET**: Camera rotation controls, Ctrl+drag, control scheme differences

## Development Guidelines

### Code Organization
- **Functions**: Top-level scope, organized by feature (loading, controls, utilities)
- **Safety**: Use `safeSetValue()` and `safeAddEventListener()` for DOM operations
- **Modules**: ES6 imports for Three.js and loaders from examples
- **Material Updates**: Helper functions handle both single meshes and groups

### Requirements
- **Browser**: Chrome 88+, Firefox 84+, Safari 14+ (WebGL + ES6 modules)
- **Files**: 50MB upload limit, supports .obj/.stl/.gltf/.glb
- **Performance**: requestAnimationFrame, preserveDrawingBuffer for capture

### Quality Standards
- File endings with newlines, consistent slider-number patterns
- State synchronization between UI and internal values
- Viewport units (vh) for responsive thickness
- Proper CSS transform order to avoid conflicts

## Adding Features

**Model Formats**: Add to `validateFile()` → create loader function → add to `handleFileUpload()` → import Three.js loader
**Controls**: Add HTML → setup slider-number sync → event listeners → include in presets  
**Materials**: Modify creation in loaders → add UI controls → update helper functions → add to presets
**Capture**: Add formats to UI → modify `captureFrame()` → add post-processing/batch features

## Troubleshooting

### Control Migrations
**Camera Rotation (v2.3+)**: Sunset - use camera position controls or right-click + drag
**Zoom Controls (v2.6+)**: Sunset - use mouse wheel or camera Z position

### Common Issues
**Loading Stuck**: Check browser compatibility (Chrome 88+, Firefox 84+, Safari 14+), run `npm run dev`
**Material Controls Don't Work**: Use helper functions (`updateMaterialColor()`, `updateMaterialProperty()`, `updateMaterialTransparency()`)
**Code Errors**: Keep functions at top level, use try-catch, check object existence
**Model Loading Fails**: Check file format (.obj/.stl/.gltf/.glb), size (<50MB), file integrity
**Performance Issues**: Reduce model complexity, check file size, close browser tabs
**Upload Issues**: Wait 30s for timeout, ensure correct file types, file input clears after upload

### Resolved Issues
**Guide Lines (v2.2)** ✅: Fixed positioning, thickness units, event handlers, UI initialization
**Scaling (v2.1)** ✅: Fixed transform resets, bounding box validation  
**Drag & Drop (v2.1)** ✅: Fixed visual feedback, file validation

## Major Changes (v2.3+)

### Sunset Features
**Camera Rotation Controls (v2.3)**: Removed UI controls, simplified mouse interactions, focused on model manipulation
**Zoom Controls (v2.6)**: Removed UI controls, use mouse wheel or camera position instead

### UI Updates (v2.3+)
**Panel Renames**: VIEWER STATS → VIEW STATUS, streamlined display
**Layout**: INTERACTION (bottom-left), VIEW (top-right), LIGHTING (top-right with mode toggle)
**Guide Lines**: Gray color, semi-transparent, integer thickness (0-100), vertical position control

### UI Refinements (v2.7+)
**Boxless Design**: Removed backgrounds, borders, and shadows from VIEW, LIGHTING, and INTERACTION panels for cleaner appearance
**Text Standardization**: Unified all panel text to 12px for consistent typography across interface
**Spacing Optimization**: Standardized all control panel positioning to 10px from model pane edges, refined CONTROLS title spacing to 19px
**Layout Precision**: LIGHTING panel positioned at 16px from right edge for optimal visual balance

### Major UI Reorganization (v2.8-2.9+)
**Collapsible Controls (v2.8)**: All 7 CONTROLS sections now collapsible with smooth CSS animations, persistent state, full accessibility
**Upload Area Relocation (v2.9)**: Removed LIBRARY section, moved upload functionality to bottom-right of main pane with TORUS/LIBRARY buttons
**Example Model Removal (v2.9.1)**: Eliminated Utah Teapot and Suzanne Monkey models and functions for streamlined interface
**Precise Positioning (v2.9.1)**: Upload area aligned with INTERACTION box bottom and BASIC button right edge for pixel-perfect layout
**Dependency Updates (v2.9.2)**: Three.js r178→r179, Vite 7.0.5→7.0.6, resolved punycode deprecation warnings
**External Surface Extraction (v2.10.0)**: Hybrid architecture for extracting only external surfaces from high-poly models - Phase 1: Three.js ConvexGeometry for immediate convex hull extraction, Phase 2/3: Prepared integration for WASM alpha shapes and MeshLabJS advanced algorithms. Includes new transparency mode "External Surface Only" and comprehensive UI controls.
**Unified Surface Transparency (v2.9.5)**: Five transparency modes for high-poly models - Unified Surface (optimized blending for clean high-poly appearance), WBOIT (Alpha Test approach), Advanced (DoubleSide+adaptive blending), Standard, Dithered (Bayer pattern). Resolved transparency range issues for smooth 1.0→0.0 opacity control.

### Code Impact
- Functions preserved but commented out with "SUNSET" markers
- Presets automatically ignore sunset control data
- Enhanced responsive design with proper Z-index layering
- CSS cleanup from malformed styles and improved maintainability

## Critical Fixes (v2.0+)

### Core System Fixes
**Loading (v2.0)**: Fixed CDN timing issues → ES6 modules + Vite bundling
**Functions (v2.0)**: Fixed nested definitions → top-level scope organization  
**Materials (v2.0)**: Fixed geometry-only controls → helper functions traverse object hierarchies
**Model Loaders (v2.0)**: Rewrote OBJ/STL loaders with proper error handling
**Upload (v2.1)**: Added callback system with 30s timeout and cleanup
**Scaling (v2.1)**: Fixed cumulative transforms → proper resets and bounding box validation
**Guide Lines (v2.2)**: Fixed positioning, thickness units, event handlers, UI initialization

### UI/UX Improvements  
**Lighting Controls (v2.4)**: Compact design with vertical sliders, perfect alignment, boundary constraints
**Lighting Modes (v2.5)**: Dual Basic/Complex modes with color-coded buttons, icon rotation, light targeting
**UI Alignment (v2.6)**: Pixel-perfect flexbox gaps, CSS table layout, mathematical precision
**Boxless Interface (v2.7)**: Clean panel design with transparent backgrounds, consistent 12px typography, optimized spacing (10px standard, LIGHTING at 16px for balance)

## Key Functions Reference

### Utilities (~37-130)
`formatNumber()`, `radToDeg()`/`degToRad()`, `safeSetValue()`, `showUploadStatus()`, `safeAddEventListener()`

### Materials (~131-187)  
`updateMaterialColor()`, `updateMaterialProperty()`, `updateMaterialTransparency()`

### File Handling (~189-281)
`validateFile()`, `resetModelControls()`, `resetMaterialControlsToDefault()`, `handleFileUpload()`

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

## Best Practices

### Testing Checklist
1. Run `npm run dev` and verify default model loads
2. Test material controls on all model types  
3. Test file uploads (OBJ/STL/GLTF/GLB), drag & drop, edge cases
4. Verify scaling consistency, guide lines, lighting controls
5. Test build (`npm run build` → `npm run preview`) and deployment
6. Check console for errors, verify capture functionality

### Code Standards
- **Functions**: Top-level scope, never nested
- **DOM Safety**: Use `safeSetValue()` and `safeAddEventListener()`
- **Materials**: Use helper functions for single meshes and groups
- **File Handling**: Always use callbacks, 30s timeouts, cleanup URLs
- **Transforms**: Let `centerAndScaleModel()` handle resets
- **UI Sync**: Initialize controls to match state values

### AI Workflows
**GEMINI CLI**: Simple single-line replacements, guide line issues resolved
**Claude Code**: Systematic debugging, multi-file changes, comprehensive analysis

### Common Pitfalls
- Don't nest functions, assume single materials, skip error handling
- Don't bypass build system, ignore timeouts, forget cleanup
- Don't use positioning hacks, reduce widths without checking labels
- Don't assume zoom controls exist (sunset v2.6)
- Don't assume example model functions exist (removed v2.9.1)
- Don't leave malformed CSS (standalone declarations), always validate syntax
- Don't inconsistent text sizing - maintain 12px standard across panels

## Guide Line Configuration (v2.4+)

**HTML Controls**: Thickness (0-100, default 5), Position (-50 to 50, default 0), Transparency (0-1, default 0.5), Angle (-90 to 90, default 0)

**CSS Calculations**: 
- Thickness: `${thickness / 1000 * 100}vh` (responsive viewport units)
- Position: `top: ${50 - posY}%` (maps range to percentage)  
- Transform: `translateY(-50%) rotate(${angle}deg)` (center + rotate)

**Implementation**: Synchronized HTML/JS state, responsive scaling, centered rotation origin
