# Three.js Scene Modification Patterns

## Use When
Modifying Three.js scene graph structure (adding/removing objects, changing hierarchy)

## Critical Pattern: Never Modify During Traversal

### ❌ Anti-Pattern: Direct Modification
```javascript
// DANGEROUS - Corrupts traversal iteration
scene.traverse((child) => {
    if (shouldRemove(child)) {
        child.parent.remove(child); // ❌ Breaks iteration
    }
});
```

### ✅ Correct Pattern: Collect-Then-Modify
```javascript
// SAFE - Separate collection and modification phases
const objectsToRemove = [];
scene.traverse((child) => {
    if (shouldRemove(child)) {
        objectsToRemove.push(child); // ✅ Safe during traversal
    }
});

// Modify after traversal completes
objectsToRemove.forEach((obj) => {
    if (obj.parent) {
        obj.parent.remove(obj); // ✅ Safe after iteration
    }
});
```

## Scene Modification Patterns

### Pattern 1: Object Removal
**Use Case**: Remove objects based on type or properties
```javascript
function removeObjectsOfType(scene, typeCheck) {
    const toRemove = [];
    scene.traverse((child) => {
        if (typeCheck(child)) {
            toRemove.push(child);
        }
    });
    
    toRemove.forEach((obj) => {
        if (obj.parent) {
            obj.parent.remove(obj);
        }
    });
}

// Usage examples
removeObjectsOfType(scene, (child) => child.isLine);
removeObjectsOfType(scene, (child) => child.name.includes('temp'));
```

### Pattern 2: Conditional Material Application
**Use Case**: Apply materials to specific object types
```javascript
function applyConditionalMaterials(scene, materialMap) {
    scene.traverse((child) => {
        if (child.isMesh) {
            const materialKey = getMaterialKey(child);
            if (materialMap[materialKey]) {
                child.material = materialMap[materialKey];
            }
        }
    });
}
```

### Pattern 3: Hierarchy Restructuring
**Use Case**: Moving objects to different parents
```javascript
function restructureHierarchy(scene, restructureRules) {
    const modifications = [];
    
    scene.traverse((child) => {
        const newParent = restructureRules(child);
        if (newParent && newParent !== child.parent) {
            modifications.push({ child, newParent });
        }
    });
    
    modifications.forEach(({ child, newParent }) => {
        if (child.parent) {
            child.parent.remove(child);
        }
        newParent.add(child);
    });
}
```

## Alternative Safe Iteration Methods

### Method 1: Clone Children Array
```javascript
function safeChildIteration(object, callback) {
    const children = object.children.slice(); // Create safe copy
    children.forEach(callback); // Iterate over copy
}

// Usage
safeChildIteration(scene, (child) => {
    if (shouldModify(child)) {
        // Safe to modify original scene
        scene.remove(child);
    }
});
```

### Method 2: Reverse Iteration
```javascript
function reverseRemoval(parent, shouldRemove) {
    // Iterate backwards to avoid index shifting issues
    for (let i = parent.children.length - 1; i >= 0; i--) {
        const child = parent.children[i];
        if (shouldRemove(child)) {
            parent.remove(child);
        }
    }
}
```

## Performance Considerations

### Memory Management
```javascript
function efficientObjectRemoval(scene, typeCheck) {
    const toRemove = [];
    
    scene.traverse((child) => {
        if (typeCheck(child)) {
            toRemove.push(child);
            
            // Clean up resources
            if (child.geometry) {
                child.geometry.dispose();
            }
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(mat => mat.dispose());
                } else {
                    child.material.dispose();
                }
            }
        }
    });
    
    toRemove.forEach((obj) => {
        if (obj.parent) {
            obj.parent.remove(obj);
        }
    });
    
    return toRemove.length; // Return count for debugging
}
```

### Batch Operations
```javascript
function batchSceneModifications(scene, operations) {
    const modifications = {
        toRemove: [],
        toAdd: [],
        materialChanges: []
    };
    
    // Collection phase
    scene.traverse((child) => {
        operations.forEach(op => {
            const result = op.check(child);
            if (result) {
                modifications[op.type].push({ child, ...result });
            }
        });
    });
    
    // Application phase
    applyModifications(modifications);
}
```

## Common Three.js Objects and Properties

### Object Type Checking
```javascript
const typeCheckers = {
    mesh: (obj) => obj.isMesh,
    line: (obj) => obj.isLine || obj.isLineSegments,
    light: (obj) => obj.isLight,
    camera: (obj) => obj.isCamera,
    group: (obj) => obj.isGroup,
    sprite: (obj) => obj.isSprite,
    points: (obj) => obj.isPoints
};
```

### Material Type Detection
```javascript
function getMaterialType(material) {
    if (material.isMeshStandardMaterial) return 'standard';
    if (material.isMeshBasicMaterial) return 'basic';
    if (material.isLineBasicMaterial) return 'line';
    if (material.isPointsMaterial) return 'points';
    return 'unknown';
}
```

## Error Handling

### Safe Traversal with Error Recovery
```javascript
function safeSceneTraversal(scene, operation) {
    const errors = [];
    
    scene.traverse((child) => {
        try {
            operation(child);
        } catch (error) {
            errors.push({ child, error });
            console.warn('Scene traversal error:', error, child);
        }
    });
    
    return errors;
}
```

## Best Practices Summary

1. **Never modify scene during traverse()** - Use collect-then-modify pattern
2. **Dispose resources** - Clean up geometry and materials before removal
3. **Check parent existence** - Verify `obj.parent` before calling `parent.remove(obj)`
4. **Use type checking** - Leverage Three.js `is*` properties for object identification
5. **Batch operations** - Group modifications for better performance
6. **Error handling** - Wrap operations in try-catch blocks
7. **Memory management** - Dispose of unused resources to prevent leaks

## Integration with Model Loaders

This pattern is essential when processing loaded models:
- OBJ files: Mesh processing and material application
- COLLADA files: Line object removal and material standardization  
- GLTF files: Scene optimization and resource management
- STL files: Geometry processing and mesh creation