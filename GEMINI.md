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

### Branching Strategy
- **`main`**: The primary branch for production-ready code.
- **`gh-pages`**: The branch for production deployments via GitHub Pages.
- **`Dev-2`**: The primary development branch for new features and bug fixes.
- **`gh-pages-dev-2`**: The branch for development deployments, allowing for a separate, live staging environment.

### Git Workflow
When asked to "Update Git", I will follow this process:
1.  **Review Code:** Analyze the codebase for the latest changes.
2.  **Update Gemini Files:** Update `GEMINI.md` and `gemini-code-changes.md` with any new information or changes.
3.  **Read Claude Files:** Read `CLAUDE.md` and `claude-code-changes.md` for context and understanding, but do not modify them.
4.  **Update README:** Update `README.md` with any relevant changes.
5.  **Git Status:** Run `git status` to review all changes.
6.  **Commit:** Create a commit message, get user approval, and then run `git add .` and `git commit`.
7.  **Push to Dev:** Push the changes to the `Dev-2` branch with `git push origin Dev-2`.
8.  **Deploy to Staging:** Deploy the `Dev-2` branch to the `gh-pages-dev-2` branch.
9.  **Confirmation:** Announce when the process is complete.


### Key Architectural Points
- The application is built into a `dist` directory for production deployment.
- All dependencies, including Three.js and its loaders, are bundled. There are no external CDN calls.
- The code is structured with ES6 modules (`import`/`export`).
- Main application logic is in `main.js`.
- Styles are in `style.css`.
- The `index.html` file is the main entry point.

### Project Documentation
This project maintains a detailed history of changes and development decisions in the following files:

*   **`claude-code-changes.md`**: A log of manual code modifications.
*   **`gemini-code-changes.md`**: A log of changes made by the Gemini assistant.
*   **`CLAUDE.md` & `GEMINI.md`**: Comprehensive internal documentation and development guidelines.
*   **`audit.md`**: A comprehensive review of the project's code maturity, architecture, security, and dependencies.
*   **`install.md`**: Instructions for deploying the application on a private, offline web server.

### Features
- **Model Loading**: Supports `.obj`, `.stl`, `.gltf`, `.glb`, and now `.dae` file formats. Models can be loaded via a file input or drag-and-drop.
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
- **Drag-and-Drop Text**: Updated to "_Drag-and-drop_ your 3D model here" for improved clarity.

### Sunset Features
- **Zoom Control**: The dedicated "Zoom" slider and its corresponding display in the "VIEWER STATS" panel have been removed. The camera's Z-position, controlled by the mouse wheel, now serves as the primary zooming mechanism, providing a more intuitive and standard user experience. The underlying code has been commented out for potential future reference.
- **Control Scheme**: The legacy "Model-centric" control scheme has been removed to simplify the user experience. The application now exclusively uses the "Standard (Camera-centric)" control scheme.

### Known Issues
- The `handleResize` function was missing, causing an error during viewer initialization. This has been fixed by adding the function to `main.js`.
- The "Viewer Stats" and "Interaction Controls" dialogs were restyled for consistency.
- The mouse controls were updated to remove middle-click functionality and reassign right-click to panning.
- A right directional light was added to provide more control over model lighting.
- **CSS Deprecation Warning**: The `slider-vertical` appearance property is deprecated. This has been addressed in `style.css`.
- **Recurring Build Failures**: Persistent `TypeError: Identifier "..." has already been declared` errors during `npm run build` due to duplicate function definitions in `main.js`. This is currently being addressed programmatically.

### Web App Rendering Fault (August 7, 2025)
- **Problem**: The web application failed to render after an attempt to fix deployment issues by changing asset paths in `index.html` from absolute to relative.
- **Root Cause**: The change from `<link rel="stylesheet" href="style.css?v=..."` to `<script type="module" crossorigin src="./assets/index-DrNG4NvB.js"></script><link rel="stylesheet" crossorigin href="./assets/index-D3boxNoJ.css">` in `index.html` caused the web app to stop rendering correctly.
- **Resolution**: The problematic changes in `index.html` were immediately reverted to restore the web app's rendering functionality.

### Deployment Issues (gh-pages-dev)
- **Problem**: `npm run deploy-dev` (using `gh-pages`) reported success, but the `gh-pages-dev` branch on GitHub remained empty.
- **Root Cause**: 
    1. `npm run build` was failing due to incorrect asset paths in `index.html` (hardcoded absolute paths like `/3d-model-viewer/assets/...`).
    2. The `gh-pages` package itself seemed to have issues pushing to an existing remote branch reliably, even after clearing its cache.
- **Resolution**: 
    1. Corrected asset paths in `index.html` to be relative (`./assets/...`).
    2. Modified `vite.config.js` to use a relative base path (`./`).
    3. Implemented a robust manual Git push process using an orphan branch (`git checkout --orphan`, `git --work-tree`, `git push --force`) to directly push the `dist` folder's contents to `gh-pages-dev`.

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

## Evidence-Based Debugging Protocol

A fundamental shift in development methodology, prompted by the "syncSliderNumber Crisis," where a critical runtime error was missed during theoretical code analysis.

**Core Principle**: Prioritize real-time, observable evidence (browser console errors) over assumptions about code behavior.

### The Protocol
1.  **🚨 Runtime Verification First**: Always test the application's actual behavior in a browser before analyzing code structure. A successful build does not equal a functional application.
2.  **🔍 Browser Console Priority**: User-reported error messages and live console output are the most valuable sources of debugging information.
3.  **⚡ Function Accessibility Checks**: Before debugging complex logic, verify that the functions involved are accessible in the global scope and have not been inadvertently nested or duplicated.
4.  **🎯 Initialization Check**: Confirm that the application initializes completely without errors before investigating issues in specific features.
5.  **📊 Evidence Over Theory**: What the application *is actually doing* is more important than what the code *should be doing*.

## Current Status (August 9, 2025): Project Audit Complete

A full codebase audit has been completed, and the results have been documented in `audit.md`. The project is stable, and the next phase of development will focus on implementing a testing framework and refactoring the codebase into a more modular architecture, as outlined in the project's strategic roadmap.

## Comprehensive Remediation Plan (2025-08-06)

### Executive Summary
Based on comprehensive analysis of 24 distinct issues from memory files, codebase structure, and GitHub repository. Current system status: **STABLE** with syncSliderNumber crisis resolved and guide line system restored. **v2.9.2** confirmed as most stable baseline for remediation work.

### Critical Findings
- **Current System**: STABLE (no blocking issues for development)
- **Primary Baseline**: v2.9.2 (last stable before function duplication crisis)
- **High-Impact Technical Debt**: 2,499-line main.js with 66 global functions (300% maintainability improvement possible)

### Four-Phase Remediation Strategy

#### **PHASE 1: Critical Stabilization** (1-2 weeks) - IMMEDIATE Priority
1. **System Verification**: Complete functional testing of current application state
2. **Environment Fixes**: Resolve iCloud sync interference with development server  
3. **Baseline Protection**: Create formal v2.9.2 release tag for a stable rollback point

#### **PHASE 2: Quality Foundation** (3-4 weeks) - HIGH Priority  
4. **Testing Infrastructure**: Implement Jest/Vitest with browser console error detection
5. **Evidence-Based Debugging**: Mandate runtime verification over theoretical code analysis
6. **Function Boundary Audit**: Systematic review of all 66 global functions for proper placement

#### **PHASE 3: Core Architecture** (4-5 weeks) - MEDIUM Priority
7. **Modularization**: Break monolithic main.js into feature modules (StateManager, EventManager, ResourceManager)
8. **State Management**: Replace global state object with proper bounded state system
9. **Event System**: Implement event bus to reduce direct function call coupling

#### **PHASE 4: Performance & Optimization** (2-3 weeks) - LOW Priority
10. **Performance Optimization**: Code splitting, lazy loading, Web Workers for surface extraction
11. **Quality Gates**: Automated testing pipelines, performance monitoring, release validation  
12. **Documentation System**: Architectural patterns library and comprehensive developer guides

### ROI Analysis
- **Time Investment**: 10-14 weeks total
- **Expected Returns**: 300% maintenance improvement, 200% development speed improvement, 5min vs 2-4hr incident response
- **Transforms**: Mature but architecturally fragile application → professionally structured, maintainable, and scalable codebase

### Success Criteria
- **Phase 1**: Application loads without console errors, all UI functional, dev server operational, v2.9.2 baseline tagged
- **Phase 2**: >80% critical path test coverage, evidence-based debugging protocol adopted, function boundary violations identified
- **Phase 3**: main.js <1000 lines, state management with clear boundaries, 60%+ coupling reduction
- **Phase 4**: Bundle size optimized, performance monitoring operational, automated release pipeline

## Recent Major Achievements (2025-08-09)

### Critical UI Fixes Completed ✅
**Session Summary**: Addressed four critical issues from user screenshot feedback:

#### Completed Issues:
1. **CAPTURE Pane Bottom Spacing** ✅ - Fixed inconsistent bottom spacing vs other panes
2. **Minimize/Collapse Functionality** ✅ - Restored missing `setupCollapsibleSections()` call in initialization
3. **MATERIALS Button Size Consistency** ✅ - Fixed COMPLEX/BASIC button sizing with standard variables
4. **Parameterized Button Gaps** ✅ - Converted TORUS/LIBRARY buttons to use `--button-row-gap` variable

#### Collapse Icon Alignment - Partial Progress 🔄
**Status**: IN PROGRESS - Requires fine-tuning
**New Variable Created**: `--section-header-to-content-gap: 15px`
**Issues**: Complex alignment requirements for minus sign (−) vertical positioning and triangle (▼) horizontal consistency with global spacing system
**Documentation**: Detailed in `memory/fixes/2025-08-09-collapse-icon-alignment-partial.md`

### Guide Line Auto-Hide Animation Synchronization ✅ 
**Achievement**: Successfully synchronized guide line visibility with UNHIDE button pulse animation
**Implementation**: Callback-based architecture with coordinated flash effects during each pulse cycle
