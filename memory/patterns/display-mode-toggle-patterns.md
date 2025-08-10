# Display Mode Toggle Patterns

## Use When
Implementing user-controllable visualization modes (wireframe, edges, rendering styles)

## Architectural Pattern: Layered Display Control

### Layer 1: Material Property Toggles (Simple)
**Use Case**: Basic wireframe/solid toggle
**Complexity**: Low (2 hours)
**Pattern**:
```javascript
// State management
state.wireframeEnabled = false;

// Toggle function  
function toggleWireframe() {
    state.wireframeEnabled = !state.wireframeEnabled;
    if (state.model) {
        state.model.traverse((child) => {
            if (child.isMesh) {
                child.material.wireframe = state.wireframeEnabled;
            }
        });
    }
    updateWireframeButton();
}

// UI integration
<button id="wireframeToggle" class="universal-toggle-button">WIREFRAME</button>
```

### Layer 2: Format-Specific Object Control (Moderate)
**Use Case**: COLLADA edge visibility, format-specific geometry handling
**Complexity**: Moderate (3 hours)
**Pattern**:
```javascript
// Format-specific state
state.formatSettings = {
    dae: { edgeMode: 'hidden' }, // 'hidden', 'visible', 'styled'
    obj: { smoothing: true },
    stl: { facetDisplay: false }
};

// Conditional handling in loaders
function handleFormatSpecificObjects(child, format) {
    switch (format) {
        case 'dae':
            if (child.isLine) {
                handleDAEEdges(child, state.formatSettings.dae.edgeMode);
            }
            break;
    }
}
```

### Layer 3: Advanced Display Mode System (Complex)
**Use Case**: Professional 3D visualization with multiple modes
**Complexity**: High (6+ hours)
**Pattern**:
```javascript
// Comprehensive display state
state.displayMode = {
    renderingMode: 'solid', // 'solid', 'wireframe', 'points', 'hybrid'
    edgeDisplay: 'auto',    // 'auto', 'force', 'hidden', 'styled'
    materialOverride: null, // null, 'wireframe', 'normals', 'depth'
    overlayMode: 'none'     // 'none', 'wireframe', 'edges', 'normals'
};

// Mode application system
function applyDisplayMode(mode) {
    if (!state.model) return;
    
    state.model.traverse((child) => {
        if (child.isMesh) {
            applyMeshDisplayMode(child, mode);
        } else if (child.isLine) {
            applyLineDisplayMode(child, mode);
        }
    });
}
```

## UI Integration Patterns

### Pattern 1: Inline Toggle (Material Section)
**Best For**: Simple toggles that relate to existing controls
```html
<div class="control-row-color-button">
    <div class="color-container">
        <label>Colour</label>
        <input type="color" id="materialColor" class="color-input">
    </div>
    <div class="button-container">
        <button id="complexButton" class="universal-toggle-button state-primary">COMPLEX</button>
        <button id="wireframeButton" class="universal-toggle-button state-secondary">WIREFRAME</button>
    </div>
</div>
```

### Pattern 2: Dedicated Section
**Best For**: Multiple related display controls
```html
<div class="control-section" data-section="display">
    <div class="section-header">
        <h3>Display</h3>
        <span class="collapse-icon">−</span>
    </div>
    <div class="section-content">
        <!-- Display mode controls -->
    </div>
</div>
```

### Pattern 3: Mode Selector
**Best For**: Multiple exclusive options
```html
<div class="control-group">
    <label>Rendering Mode</label>
    <select id="displayModeSelector" class="control-input">
        <option value="solid">Solid</option>
        <option value="wireframe">Wireframe</option>
        <option value="points">Points</option>
        <option value="hybrid">Solid + Wireframe</option>
    </select>
</div>
```

## State Management Pattern

### Global State Integration
```javascript
let state = {
    // Existing properties...
    
    // Display control state
    displaySettings: {
        wireframeEnabled: false,
        edgeDisplay: 'auto',
        renderingMode: 'solid'
    },
    
    // Format-specific settings
    formatSettings: {
        dae: { preserveEdges: false },
        obj: { smoothing: true }
    }
};
```

### Preset System Integration
```javascript
// Include display settings in presets
function savePreset(name) {
    const preset = {
        // ... existing preset data
        displaySettings: { ...state.displaySettings },
        formatSettings: { ...state.formatSettings }
    };
    // Save to localStorage
}
```

## Performance Considerations

### Real-time Toggle Optimization
- **Material Properties**: Instant (GPU-optimized)
- **Object Visibility**: Fast (`object.visible = false`)
- **Geometry Changes**: Slower (require recreation)
- **Shader Swapping**: Moderate (material changes)

### Memory Management
```javascript
// Cache original materials for toggle restoration
const originalMaterials = new WeakMap();

function toggleWireframe(enabled) {
    state.model.traverse((child) => {
        if (child.isMesh) {
            if (enabled && !originalMaterials.has(child)) {
                originalMaterials.set(child, child.material.clone());
            }
            child.material.wireframe = enabled;
        }
    });
}
```

## Best Practices

1. **Consistent UI Patterns**: Follow existing button and control styling
2. **State Persistence**: Integrate with preset system for user preference storage
3. **Real-time Feedback**: Provide immediate visual response to toggles
4. **Performance Awareness**: Cache materials, use object visibility over geometry changes
5. **Format Awareness**: Handle format-specific geometry appropriately
6. **Progressive Enhancement**: Start simple, add complexity based on user needs

## Implementation Checklist

- [ ] Define state structure for display settings
- [ ] Create toggle functions following existing patterns  
- [ ] Design UI integration (inline vs dedicated section)
- [ ] Add event handlers with safeAddEventListener()
- [ ] Integrate with preset save/load system
- [ ] Test performance with various model sizes
- [ ] Ensure consistent behavior across file formats
- [ ] Add appropriate user feedback and status updates