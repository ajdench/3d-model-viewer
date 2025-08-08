# Transparency Mode Implementation Pattern

## Context
Pattern for implementing multiple transparency modes in Three.js applications, specifically addressing high-poly model rendering artifacts and providing smooth opacity control.

**Implemented in**: v2.9.5 Unified Surface Transparency system
**Solves**: "Messy" transparency appearance on complex models, limited opacity ranges

## Pattern Architecture

### 1. Mode-Based Transparency System
```javascript
// Central transparency application with mode switching
function updateMaterialTransparency(opacity) {
    const transparencyMode = state.transparencyMode || 'threshold';
    
    switch (transparencyMode) {
        case 'threshold':    // Unified Surface - optimized blending
        case 'wboit':        // Alpha test approach  
        case 'advanced':     // DoubleSide + adaptive blending
        case 'standard':     // Basic transparency
        case 'dithered':     // Bayer pattern
    }
}
```

### 2. Individual Mode Functions
Each transparency mode has dedicated implementation:
```javascript
function applyThresholdTransparency(mesh, opacity) {
    // UNIFIED SURFACE: Optimized for high-poly models
    mesh.material.transparent = true;
    mesh.material.opacity = opacity;
    mesh.material.side = THREE.FrontSide; // Clean silhouette
    mesh.material.depthWrite = false;      // Proper blending
    
    // Adaptive blending based on opacity level
    if (opacity < 0.1) {
        mesh.material.blending = THREE.AdditiveBlending;
        mesh.material.opacity = opacity * 0.5; // Reduce intensity
    } else {
        mesh.material.blending = THREE.NormalBlending;
        mesh.material.premultipliedAlpha = true; // Better color accuracy
    }
}
```

### 3. Material Property Integration
```javascript
function updateMaterialPropertyForMesh(mesh, property, value) {
    if (mesh.material._isWBOIT || mesh.material._isThreshold) {
        // Enhanced material handling for special modes
        mesh.material[property] = value;
        if (mesh.material._originalMaterial) {
            mesh.material._originalMaterial[property] = value;
        }
    } else {
        // Standard material handling
        mesh.material[property] = value;
    }
}
```

## Implementation Strategy

### Phase 1: Core Infrastructure
1. **State Management**: Add `transparencyMode` to global state
2. **Mode Switching**: Implement central switch logic
3. **UI Integration**: Add transparency mode selector to HTML

### Phase 2: Mode Implementation
1. **Unified Surface**: Optimized blending for clean appearance
2. **Alpha Test Modes**: WBOIT and dithered approaches
3. **Fallback Modes**: Standard and advanced options

### Phase 3: Integration & Testing
1. **Material Property Updates**: Ensure all material functions handle special modes
2. **Preset System**: Include transparency mode in save/load
3. **Range Validation**: Test full 1.0→0.0 opacity range

## Key Technical Insights

### Front-Side Only Rendering
```javascript
mesh.material.side = THREE.FrontSide; // Eliminates back-face artifacts
```
**Why**: High-poly models show "messy" transparency due to overlapping front/back faces

### Adaptive Blending Strategy
```javascript
// Low opacity: Additive blending for ethereal effects
// High opacity: Normal blending with premultiplied alpha
```
**Why**: Different opacity ranges benefit from different blending approaches

### Material Flags for Enhanced Modes
```javascript
mesh.material._isThreshold = true;     // Mark for special handling
mesh.material._originalMaterial = original; // Preserve original for consistency
```
**Why**: Enhanced modes need special handling in material property updates

## Problem-Solution Mapping

### Problem: "Messy" High-Poly Transparency
**Root Cause**: Individual face transparency creates overlapping artifacts
**Solution**: Front-side only rendering + optimized blending modes

### Problem: Limited Opacity Range
**Root Cause**: Alpha test creates binary cutoff (visible/invisible)
**Solution**: Switch to transparency blending with adaptive modes

### Problem: Inconsistent Material Updates
**Root Cause**: Enhanced modes use different material structures
**Solution**: Flag-based detection and dual update paths

## Usage Guidelines

### When to Use This Pattern
- Multiple transparency requirements in single application
- High-poly models with transparency artifacts
- Need for smooth opacity ranges (0.0→1.0)
- Different transparency aesthetics for different use cases

### Mode Selection Guidelines
- **Unified Surface**: Default for clean, professional appearance
- **WBOIT**: When alpha test cutoff is acceptable
- **Advanced**: For models requiring back-face transparency
- **Standard**: Simple cases without artifacts
- **Dithered**: Special visual effects

### Performance Considerations
- Front-side rendering: Better performance than DoubleSide
- Premultiplied alpha: Better color accuracy but slight performance cost
- Additive blending: Fastest but changes appearance significantly

## Extension Points

### Adding New Modes
1. Add case to switch statement
2. Implement dedicated function
3. Add UI option
4. Update material property handlers
5. Add to preset system

### Advanced Features
- **Animation**: Smooth transitions between transparency modes
- **LOD Integration**: Different modes based on model complexity
- **Material-Specific**: Per-material transparency mode override

## Testing Strategy

### Validation Checklist
- [ ] Full opacity range 1.0→0.0 functional
- [ ] No visual artifacts on high-poly models
- [ ] Material property changes work in all modes
- [ ] Preset save/load includes transparency mode
- [ ] Performance acceptable across all modes

### Test Cases
1. **Default Torus**: Verify baseline functionality
2. **High-Poly Model**: Test artifact elimination
3. **Extreme Opacity**: Test 0.01 and 0.99 values
4. **Mode Switching**: Verify smooth transitions
5. **Material Updates**: Test color/metalness/roughness changes

This pattern provides a robust, extensible system for handling complex transparency requirements while maintaining performance and visual quality.