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
- **Preview Production Build**: `npm run preview`
- **Deploy to GitHub Pages**: `npm run deploy`
- **Deploy to Staging**: `npm run deploy-dev`
- **Run Development Server and Open Browser**: `./start-dev.sh`

### Branching Strategy
- **`main`**: The primary branch for production-ready code.
- **`gh-pages`**: The branch for production deployments via GitHub Pages.
- **`Dev-Git-Action-Pages`**: The primary development branch for new features and bug fixes.
- **`gh-pages-dev-action`**: The branch for development deployments, allowing for a separate, live staging environment.

### Git Workflow
When asked to "Update Git", I will follow this process:
1.  **Review Code:** Analyze the codebase for the latest changes.
2.  **Update Gemini Files:** Update `GEMINI.md` and `gemini-code-changes.md` with any new information or changes.
3.  **Read Claude Files:** Read `CLAUDE.md` and `claude-code-changes.md` for context and understanding, but do not modify them.
4.  **Update README:** Update `README.md` with any relevant changes.
5.  **Git Status:** Run `git status` to review all changes.
6.  **Commit:** Create a commit message, get user approval, and then run `git add .` and `git commit`.
7.  **Push to Dev:** Push the changes to the `Dev-Git-Action` branch with `git push origin Dev-Git-Action`.
8.  **Automated Deployment:** A GitHub Action will automatically deploy the `Dev-Git-Action` branch to the `gh-pages-dev-action` branch.
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
- **Model Loading**: Supports `.obj`, `.stl`, `.gltf`, `.glb`, and `.dae` file formats. Models can be loaded via a file input or drag-and-drop.
- **Camera Controls**: Sliders and number inputs for adjusting the camera's position (X, Y, Z) and rotation (X, Y, Z).
- **Model Controls**: Sliders and number inputs for adjusting the model's rotation (X, Y, Z) and advanced aircraft-style controls for Yaw, Pitch, and Roll.
- **Material Properties**: Controls for adjusting the model's material, including color, metalness, roughness, and transparency.
- **Lighting**: 
  - Sliders to control the intensity of ambient and directional lights.
  - An interactive 2D control pad to visually adjust the X/Y position of the directional lights.
- **Multiple Guide Lines**: Users can now add and remove multiple, independent guide lines. Each guide line has its own collapsible control pane with independent settings for color, thickness, transparency, angle, and position.
- **Presets**: Users can save and load their own presets for camera, model, material, and lighting settings.
- **Reset Functionality**: Buttons to reset the camera and model to their default states.
- **Responsive Viewer**: The 3D viewer resizes to fit its container.
- **Image Capture**: Save a 2D PNG image of the current model view to a file with a transparent background. (Clipboard functionality is currently disabled due to technical issues.)
- **Enhanced VIEW Panel**: Redesigned with a horizontal layout, including a 3D orientation widget and dedicated data columns for model rotation, camera position, and camera rotation.
- **Comprehensive Save/Load System**: Complete scene state persistence with `.3dview` file format supporting camera position, model transforms, lighting settings, materials, and guide lines. JSON-based structure with version compatibility and error recovery.

### UI/UX Enhancements
- **VIEW Panel Redesign**: The main "VIEW" panel has been redesigned into a horizontal layout, featuring a 3D orientation widget and dedicated data columns for Model Rotation, Model Attitude (Yaw, Pitch, Roll), Camera Position, and Camera Rotation.
- **Coordinated Padding System**: A new CSS variable-based system (`--coordinated-bottom-margin`) ensures visually balanced and consistent spacing across all control panes.
- **Button Standardization**: All buttons now use standardized height, padding, and font size variables for a uniform appearance.
- **Lighting Grid Layout**: The lighting control panel has been refactored to use a precise CSS Grid layout for better alignment and maintainability.
- **Sunset of Hover Glow**: The glow effect on button hovers in the main controls panel has been removed for a cleaner look.

### Sunset Features
- **Zoom Control**: The dedicated "Zoom" slider and its corresponding display in the "VIEWER STATS" panel have been removed. The camera's Z-position, controlled by the mouse wheel, now serves as the primary zooming mechanism.
- **Control Scheme**: The legacy "Model-centric" control scheme has been removed to simplify the user experience. The application now exclusively uses the "Standard (Camera-centric)" control scheme.

### Known Issues
- **Recurring Build Failures**: Persistent `TypeError: Identifier "..." has already been declared` errors during `npm run build` due to duplicate function definitions in `main.js`. This is currently being addressed programmatically.

### Security
- **CVE Scanning**: The project's dependencies are regularly scanned for vulnerabilities using `npm audit`, `Snyk`, and `audit-ci`. As of the latest scan, there are no known vulnerabilities.

## Major Changes (v2.4+)

### Multiple Guide Lines (v2.10.1)
- **Dynamic Guide Lines**: Users can now add and remove multiple, independent guide lines.
- **Independent Controls**: Each guide line has its own collapsible control pane with independent settings for color, thickness, transparency, angle, and position.
- **Dynamic UI**: The UI dynamically adds and removes control panes as lines are created or deleted, with titles that update automatically.

### Control Synchronization (v2.11.0)
- **`ControlSync` Class**: A new modular and robust system for synchronizing UI controls (e.g., sliders and number inputs).
- **Centralized Management**: Replaces scattered `addEventListener` calls with a centralized registry, improving maintainability and reducing errors.
- **Advanced Features**: Supports bidirectional synchronization, value validation, and custom callbacks.

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
- **Vite**: Upgraded from 7.0.6 to 7.1.2.
- **Resolved Deprecation**: Fixed `punycode` module deprecation warning.

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

## Current Status (August 11, 2025): Codebase Review Complete

A full codebase review has been completed. The project is stable, with significant recent enhancements to the UI, feature set, and underlying architecture. The next phase of development will focus on implementing a testing framework and refactoring the codebase into a more modular architecture, as outlined in the project's strategic roadmap (`claude-todo.md`).

## Comprehensive Remediation Plan (2025-08-07)

### Executive Summary
Based on comprehensive analysis of 24 distinct issues from memory files, codebase structure, and GitHub repository. **Phase 1 Complete**: Critical stabilization achieved with v2.9.3-stable baseline and full controller system restoration.

### Critical Findings
- **Current System**: FULLY STABLE (Phase 1 complete, ready for Phase 2)
- **Primary Baseline**: v2.9.3-stable (complete controller system restoration)
- **High-Impact Technical Debt**: 3652-line main.js with 66 global functions.

### Four-Phase Remediation Strategy

#### **PHASE 1: Critical Stabilization** - ✅ **COMPLETED** (v2.9.3-stable)
1. ✅ **System Verification**: Complete functional testing completed - all controls working
2. ✅ **Controller Restoration**: 20+ missing event listeners added systematically  
3. ✅ **Baseline Protection**: v2.9.3-stable tag created for stable rollback point
4. ✅ **Evidence-Based Debugging**: Runtime verification methodology established

#### **PHASE 2: Quality Foundation** (3-4 weeks) - HIGH Priority  
4. **Testing Infrastructure**: Implement Jest/Vitest with browser console error detection
5. **Evidence-Based Debugging**: Mandate runtime verification over theoretical code analysis
6. **Function Boundary Audit**: Systematic review of all global functions for proper placement

#### **PHASE 3: Core Architecture** (4-5 weeks) - MEDIUM Priority
7. **Modularization**: Break monolithic main.js into feature modules (StateManager, EventManager, ResourceManager)
8. **State Management**: Replace global state object with proper bounded state system
9. **Event System**: Implement event bus to reduce direct function call coupling

#### **PHASE 4: Performance & Optimization** (2-3 weeks) - LOW Priority
10. **Performance Optimization**: Code splitting, lazy loading, Web Workers for surface extraction
11. **Quality Gates**: Automated testing pipelines, performance monitoring, release validation  
12. **Documentation System**: Architectural patterns library and comprehensive developer guides

## Recent Major Achievements (2025-08-11)

### UI Overhaul and .DAE Integration ✅
**Session Summary**: A significant UI overhaul for the VIEW panel was implemented and .DAE file support was fully integrated.

#### Key Changes:
1. **VIEW Panel Redesign**: Introduced a new horizontal layout with a 3D orientation widget and dedicated data columns for model rotation, camera position, and camera rotation. This also restored the camera rotation display.
2. **.DAE File Support**: Full integration of .DAE file format loading, including updates to `index.html`, `main.js` (validation, handling, and loader integration), and `style.css`.
3. **Multiple Guide Lines**: The guide line system was enhanced to support adding and controlling multiple, independent guide lines.
4. **`ControlSync` Class**: A new, robust class for synchronizing UI controls was implemented, improving architectural quality.
5. **CSS Refinements**: Implemented a coordinated padding system and standardized button styles for a cleaner, more consistent UI.

## Recent Major Achievements (2025-08-14)

### GitHub Actions & UI Refinements ✅
**Session Summary**: This session focused on implementing a GitHub Actions workflow for automated deployment and further refining the user interface.

#### Key Changes:
1. **GitHub Actions Deployment**: A new workflow (`.github/workflows/deploy.yml`) was created to automatically build and deploy the application to GitHub Pages.
2. **UI Enhancements**: 
    - Restored and improved the camera rotation controls.
    - Fixed a bug preventing the ambient light slider from updating correctly.
    - Resolved a conflict between quaternion and euler rotations.
    - Addressed an issue with loading material colors from saved states.
3. **Bug Fixes**:
    - Fixed a critical issue where the model viewer would not load.
    - Corrected a problem with saving and loading guide lines.
    - Resolved an import failure related to the `ViewHelper`.