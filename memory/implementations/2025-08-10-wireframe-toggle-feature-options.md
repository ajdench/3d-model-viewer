# 2025-08-10 COLLADA Wireframe Toggle Feature Options

## Background
.dae (COLLADA) files display with white wireframe lines due to line objects exported from 3D applications. Current implementation removes these lines for consistency with other formats.

## Implementation Options Analyzed

### Option 1: Simple Global Wireframe Toggle (2 hours)
**Scope**: Universal wireframe mode for all file formats using Three.js material.wireframe property

**Technical Approach**:
```javascript
state.wireframeEnabled = false;

function toggleWireframe() {
    state.wireframeEnabled = !state.wireframeEnabled;
    if (state.model) {
        state.model.traverse((child) => {
            if (child.isMesh) {
                child.material.wireframe = state.wireframeEnabled;
            }
        });
    }
}
```

**UI Integration**:
- Location: Material section, next to COMPLEX button
- Pattern: `[Color Picker] [COMPLEX] [WIREFRAME]`
- Styling: Universal toggle button with state-primary/secondary classes
- Real-time: Instant toggle, no model reload required

**Benefits**:
- Works with ALL file formats (OBJ, STL, GLTF, GLB, DAE)
- Leverages existing UI patterns and state management
- Professional wireframe visualization option
- Minimal implementation complexity

### Option 2: DAE-Specific Edge Toggle (3 hours)  
**Scope**: COLLADA-specific line object visibility control

**Technical Approach**:
```javascript
state.daeEdgeMode = 'hidden'; // 'hidden', 'visible', 'styled'

// Modify loadDAEModel() to conditionally handle line objects
collada.scene.traverse((child) => {
    if (child.isLine || child.isLineSegments) {
        switch (state.daeEdgeMode) {
            case 'hidden':
                child.parent.remove(child);
                break;
            case 'visible':
                // Keep original white lines
                break;
            case 'styled':
                child.material = new THREE.LineBasicMaterial({
                    color: 0x4CAF50,
                    opacity: 0.3,
                    transparent: true
                });
                break;
        }
    }
});
```

**UI Integration**:
- Location: New DAE-specific controls or Material section
- Options: Hidden/Visible/Styled dropdown or button cycle
- Conditional: Only appears when DAE file loaded

**Benefits**:
- Preserves original COLLADA edge information
- Allows styled edge appearance matching model color
- Format-specific optimization

### Option 3: Advanced Display Modes (6+ hours)
**Scope**: Comprehensive visualization mode system

**Technical Approach**:
```javascript
state.displayMode = {
    wireframe: false,
    edges: 'auto', // 'auto', 'force', 'hidden'
    materials: 'standard', // 'standard', 'wireframe', 'points'
    overlay: 'none' // 'none', 'wireframe', 'edges'
};

// Multiple rendering modes
function setDisplayMode(mode) {
    switch (mode) {
        case 'solid':
            // Standard solid rendering
            break;
        case 'wireframe':
            // Pure wireframe mode
            break;
        case 'solid-with-edges':
            // Solid + edge overlay
            break;
        case 'points':
            // Point cloud visualization
            break;
    }
}
```

**UI Integration**:
- Location: New DISPLAY section in controls panel
- Interface: Mode selector dropdown or button group
- Advanced: Edge color, line width, opacity controls
- Presets: Save display modes with other settings

**Benefits**:
- Professional 3D visualization capabilities
- Multiple rendering techniques
- Advanced user control over appearance
- Extensible for future display modes

## Implementation Complexity Analysis

| Option | Difficulty | Time | UI Changes | Code Changes | Benefits |
|--------|------------|------|------------|--------------|----------|
| Global Wireframe | 4/10 | 2h | Minimal | Material section | Universal |
| DAE-Specific | 5/10 | 3h | Moderate | Loader + UI | Format-aware |
| Advanced Modes | 7/10 | 6+h | Significant | New section | Professional |

## Recommended Implementation Priority

1. **Phase 1**: Global Wireframe Toggle (immediate value, low effort)
2. **Phase 2**: DAE-Specific Edge Control (format optimization)
3. **Phase 3**: Advanced Display Modes (professional features)

## Integration Considerations

**State Management**: All options integrate with existing state object and presets system
**UI Patterns**: Leverage established universal-toggle-button and control-row patterns
**Performance**: Minimal impact - material property changes are GPU-optimized
**User Experience**: Real-time toggles provide immediate visual feedback