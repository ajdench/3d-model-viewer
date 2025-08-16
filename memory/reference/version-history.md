# Version History & Major Changes

## Major Changes (v2.3+)

### Sunset Features
**Camera Rotation Controls (v2.3)**: Removed UI controls, simplified mouse interactions
**Zoom Controls (v2.6)**: Removed UI controls, use mouse wheel or camera position

### UI Updates (v2.3+)
**Panel Renames**: VIEWER STATS → VIEW STATUS
**Layout**: INTERACTION (bottom-left), VIEW (top-right), LIGHTING (top-right)
**Guide Lines**: Gray color, semi-transparent, integer thickness (0-100)

### UI Refinements (v2.7+)
**Boxless Design**: Removed backgrounds, borders, shadows for cleaner appearance
**Text Standardization**: Unified all panel text to 12px for consistent typography
**Spacing Optimization**: 10px standard positioning, LIGHTING at 16px for balance

### Major UI Reorganization (v2.8-2.9+)
**Collapsible Controls (v2.8)**: All 7 sections with smooth CSS animations, persistent state
**Upload Area Relocation (v2.9)**: Moved to bottom-right with TORUS/LIBRARY buttons
**Example Model Removal (v2.9.1)**: Eliminated Utah Teapot and Suzanne Monkey models
**Dependency Updates (v2.9.2)**: Three.js r178→r179, Vite 7.0.5→7.0.6

## Critical Fixes (v2.0+)

### Core System Fixes
**Loading (v2.0)**: Fixed CDN timing → ES6 modules + Vite
**Functions (v2.0)**: Fixed nested definitions → top-level scope
**Materials (v2.0)**: Fixed geometry-only controls → helper functions
**Model Loaders (v2.0)**: Rewrote OBJ/STL loaders with error handling
**Upload (v2.1)**: Added callback system with 30s timeout
**Scaling (v2.1)**: Fixed cumulative transforms → proper resets
**Guide Lines (v2.2)**: Fixed positioning, thickness, event handlers