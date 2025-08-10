# File Format Extension Pattern

## Use When
Adding new 3D file format support to the model viewer

## Solution Architecture
**Multi-Layer Integration Pattern**: File format support requires coordination across multiple system layers

### Layer 1: File Input Acceptance
```html
<input accept=".obj,.stl,.gltf,.glb,.dae,.3mf" />
```

### Layer 2: Validation Gateway
```javascript
const validExtensions = ['.obj', '.stl', '.gltf', '.glb', '.dae', '.3mf'];
```

### Layer 3: Routing Handler
```javascript
switch (extension) {
    case 'dae':
        loadDAEModel(url, filename, onSuccess, onError);
        break;
    case '3mf':
        load3MFModel(url, filename, onSuccess, onError);
        break;
}
```

### Layer 4: Loader Implementation
```javascript
function loadFormatModel(url, filename, onSuccess, onError) {
    const loader = new FormatLoader();
    // Standard Three.js loader pattern
    // Material processing and scene integration
    // Error handling and cleanup
}
```

### Layer 5: User Interface Display
```html
Supports: .obj, .stl, .gltf, .glb, .dae, .3mf
```

## Implementation Checklist
1. **Import Three.js Loader**: Verify loader availability and import path
2. **Add Dependencies**: Install required libraries (e.g., fflate for .3mf)
3. **Update File Input**: Add extension to HTML accept attribute
4. **Extend Validation**: Add to validExtensions array
5. **Create Loader Function**: Follow existing pattern with proper error handling
6. **Add Route Handler**: Create switch case to call loader function
7. **Update UI Text**: Include format in supported formats display
8. **Test Implementation**: Verify loading, materials, scaling, and error handling

## Common Pitfalls
- **Validation Disconnect**: Adding loader without updating validation array
- **Missing UI Updates**: Forgetting to update user-visible supported formats text
- **Incomplete Error Handling**: Not following established cleanup and error patterns
- **Material Mismatch**: Not applying consistent material processing across formats

## Example: .dae COLLADA Integration
**Issue Found**: Complete loader infrastructure existed but validation layer blocked access
**Fix**: Two-line update to connect existing infrastructure
**Lesson**: Always verify all integration layers when adding format support