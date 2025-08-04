## Gemini Development Guidelines

## Internal Automation and Memory Management

### Memory Management System

Claude-dementia v3.0 compressed memory system with 10,000 token budget optimized for Claude Code workflows.

#### Core Architecture
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

#### Session Protocol
**Every Session Start**: `cat memory/active/status.md memory/active/context.md`
**Load As Needed**: `cat memory/reference/[relevant-file].md memory/patterns/[pattern].md`

#### Memory Management Commands
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

This project is a self-contained 3D model viewer that has been refactored to run in an offline environment. It uses Vite for development and bundling.

### Core Technologies
- **JavaScript Framework**: None (Vanilla JS)
- **3D Library**: Three.js (managed as an npm dependency)
- **Build Tool**: Vite

### Development Commands
- **Run Development Server**: `npm run dev`
- **Create Production Build**: `npm run build`
- **Run Development Server and Open Browser**: `./start-dev.sh`

### Key Architectural Points
- The application is built into a `dist` directory for production deployment.
- All dependencies, including Three.js and its loaders, are bundled. There are no external CDN calls.
- The code is structured with ES6 modules (`import`/`export`).
- Main application logic is in `main.js`.
- Styles are in `style.css`.
- The `index.html` file is the main entry point.

### Features
- **Model Loading**: Supports `.obj`, `.stl`, `.gltf`, and `.glb` file formats. Models can be loaded via a file input or drag-and-drop.
- **Model Selection**: A dropdown menu allows users to switch between several built-in models (Torus Knot, Cube, Sphere, Pyramid).
- **Example Models**: Buttons to load example models like the Utah Teapot and Suzanne Monkey.
- **Camera Controls**: Sliders and number inputs for adjusting the camera's position (X, Y, Z) and rotation (X, Y, Z).
- **Model Controls**: Sliders and number inputs for adjusting the model's rotation (X, Y, Z) and advanced aircraft-style controls for Yaw, Pitch, and Roll.
- **Material Properties**: Controls for adjusting the model's material, including color, metalness, roughness, and transparency.
- **Lighting**: 
  - Sliders to control the intensity of ambient and directional lights.
  - An interactive 2D control pad to visually adjust the X/Y position of the directional lights.
- **Guide Line Overlay**: A configurable 2D overlay line with adjustable thickness, color, transparency, angle, and vertical position. It remains fixed in the viewer, independent of 3D scene movements, and is excluded from image captures.
- **Presets**: Users can save and load their own presets for camera, model, material, and lighting settings.
- **Reset Functionality**: Buttons to reset the camera and model to their default states.
- **Responsive Viewer**: The 3D viewer resizes to fit its container.
- **Image Capture**: Save a 2D PNG image of the current model view to a file with a transparent background. (Clipboard functionality is currently disabled due to technical issues.)

### UI/UX Enhancements
- **VIEW STATUS Panel**: The coordinate and model name displays have been redesigned into uniformly sized and aligned white boxes for a cleaner, more organized appearance.
- **Controls Panel**: The main title has been standardized, and redundant sub-headings have been removed for a more streamlined look.

### Sunset Features
- **Zoom Control**: The dedicated "Zoom" slider and its corresponding display in the "VIEWER STATS" panel have been removed. The camera's Z-position, controlled by the mouse wheel, now serves as the primary zooming mechanism, providing a more intuitive and standard user experience. The underlying code has been commented out for potential future reference.
- **Control Scheme**: The legacy "Model-centric" control scheme has been removed to simplify the user experience. The application now exclusively uses the "Standard (Camera-centric)" control scheme.

### Known Issues
- The `handleResize` function was missing, causing an error during viewer initialization. This has been fixed by adding the function to `main.js`.
- The "Viewer Stats" and "Interaction Controls" dialogs were restyled for consistency.
- The mouse controls were updated to remove middle-click functionality and reassign right-click to panning.
- A right directional light was added to provide more control over model lighting.
- **CSS Corruption Issue**: Recent attempts to modify `style.css` have resulted in file corruption and incorrect layouts. This issue appears to be specifically linked to interactions with the `gemini-2.5-flash` model. A recovery file (`css-recovery-file.md`) has been created to log the state and attempted changes.

## Major Changes (v2.4+)

### Lighting Controls Redesign (v2.4)
- **Compact Layout**: Redesigned LIGHTING CONTROLS panel with compact, integrated layout.
- **Vertical Sliders**: Left and Right directional light controls positioned as vertical sliders.
- **Integrated Ambient Controls**: Ambient light slider and value input positioned below main controls.
- **Dynamic Boundaries**: JavaScript recalculates positioning boundaries in real-time.

### Advanced Lighting Modes System (v2.5+)
- **Dual Modes**: Implemented dual-mode lighting system with "BASIC" and "COMPLEX" buttons.
- **Basic Mode**: Simple light positioning.
- **Complex Mode**: Advanced features including icon rotation and light targeting based on vertical position.
- **Light Targets**: Each directional light has a dedicated Three.js Object3D target for precise aiming.

### Guide Line Controls Configuration (v2.4+)
- **Updated Value Ranges**: New value ranges and calculations for thickness, vertical position, transparency, and angle.
- **Responsive Scaling**: Thickness uses viewport height units (vh) for responsive scaling.
- **Position Mapping**: Position uses percentage-based positioning for consistent placement.
- **Transform Origin**: Ensures rotation around the true center.

### UI Refinements (v2.7+)
- **Boxless Design**: Removed backgrounds, borders, and shadows from VIEW, LIGHTING, and INTERACTION panels for cleaner appearance.
- **Text Standardization**: Unified all panel text to 12px for consistent typography across interface.
- **Spacing Optimization**: Standardized all control panel positioning to 10px from model pane edges, refined CONTROLS title spacing to 19px.
- **Layout Precision**: LIGHTING panel positioned at 16px from right edge for optimal visual balance.
- **Control Panel Padding**: Adjusted bottom padding of control sections to ensure consistent 15px spacing from the last element to the pane border.
- **Material Panel Alignment**: Aligned the 'Complex' button and color picker in the Material panel to match the precise styling and spacing of the Guide Line panel.

### Unified Surface Transparency (v2.9.5)
- **Five Transparency Modes**: Implemented a comprehensive transparency system with five distinct modes to handle various rendering requirements, especially for high-poly models.
- **Modes**: Unified Surface (default, optimized for clean blending), WBOIT (alpha testing), Advanced (double-sided with adaptive blending), Standard, and Dithered.
- **Opacity Control**: Corrected the transparency slider to provide a smooth and accurate 1.0 to 0.0 opacity range.

### Dependency Updates (v2.9.2)
- **Three.js**: Upgraded from r178 to r179.
- **Vite**: Upgraded from 7.0.5 to 7.0.6.
- **Resolved Deprecation**: Fixed `punycode` module deprecation warning.

### UI Alignment (v2.6)
- **Pixel-perfect flexbox gaps**: Achieved precise spacing and alignment using flexbox.
- **CSS table layout**: Utilized CSS table properties for structured content.
- **Mathematical precision**: Ensured pixel-perfect alignment through precise calculations.

### Multiple Guide Lines (v2.10.1)
- **Dynamic Guide Lines**: Users can now add and remove multiple, independent guide lines.
- **Independent Controls**: Each guide line has its own collapsible control pane with independent settings for color, thickness, transparency, angle, and position.
- **Dynamic UI**: The UI dynamically adds and removes control panes as lines are created or deleted, with titles that update automatically.

### Control Synchronization (v2.11.0)
- **`ControlSync` Class**: A new modular and robust system for synchronizing UI controls (e.g., sliders and number inputs).
- **Centralized Management**: Replaces scattered `addEventListener` calls with a centralized registry, improving maintainability and reducing errors.
- **Advanced Features**: Supports bidirectional synchronization, value validation, and custom callbacks.

## Strategic Development Roadmap
- **`claude-todo.md`**: A new file outlining the strategic roadmap for the project.
- **Modularization**: The primary focus is on refactoring the monolithic `main.js` into smaller, reusable modules.
- **Core Architecture**: The next phase involves creating `StateManager`, `EventManager`, and `ResourceManager` classes to form a solid architectural foundation.

