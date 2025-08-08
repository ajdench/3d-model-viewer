# 3D Model Viewer Code Patterns

## Core Utility Patterns

### Safe DOM Operations
```javascript
safeSetValue(id, value)              // Prevents null reference errors
safeAddEventListener(id, event, fn)  // Safe event binding
syncSliderNumber(sliderId, numberId) // Bidirectional control sync
```
**Use When**: Any DOM interaction | **Benefits**: Graceful degradation

### Material Management
```javascript
updateMaterialProperty(property, value) // Handles single mesh + groups
updateMaterialColor(colorValue)         // Universal color updates  
updateMaterialTransparency(opacity)     // Transparency management
```
**Use When**: Material changes | **Benefits**: Works for all model types

### Model Processing
```javascript
centerAndScaleModel(object)  // Transform reset + scaling
validateFile(file)          // Pre-upload validation
handleFileUpload(file, onSuccess, onError) // Robust loading
```
**Use When**: Model operations | **Benefits**: Prevents cumulative issues

## Error Handling Patterns

### Validation + Fallback
```javascript
function updateCameraInfo() {
    try {
        if (state.camera && state.model) {
            // Update operations
        }
    } catch (error) {
        console.warn('Error updating camera info:', error);
    }
}
```
**Use When**: Operations that might fail | **Benefits**: App continues running

### File Upload Safety
1. **Validate early**: Format + size checks before processing
2. **Timeout protection**: 30-second limits on operations
3. **Resource cleanup**: `URL.revokeObjectURL()` in all paths
4. **User feedback**: Status updates during operations

## Three.js Integration Patterns

### Scene Setup
```javascript
// Transparent background for capture
scene.background = null;
renderer.setClearColor(0x000000, 0);

// Preserve buffer for screenshots
renderer.preserveDrawingBuffer = true;
```

### Material Application
```javascript
// Handle both single meshes and groups
if (model.material) {
    // Single mesh (basic geometries)
    model.material.property = value;
} else {
    // Group (loaded models)
    model.traverse((child) => {
        if (child.isMesh && child.material) {
            child.material.property = value;
        }
    });
}
```

## Memory System Patterns

### Session Workflow
```bash
# Morning: Load context
cat memory/active/status.md && cat memory/active/context.md

# During: Update progress  
./memory/update.sh "Implemented feature X"

# Evening: Auto-document
python scripts/session-logger.py
```

### Documentation Templates
```markdown
# Fix: memory/fixes/YYYY-MM-DD-issue.md
## Problem: [One line]
## Cause: [Root cause]  
## Fix: [Solution]
## Prevention: [Test added]

# Question: memory/questions/YYYY-MM-DD-topic.md
## Status: OPEN|ANSWERED
## Q: [Specific question]
## Context: [Why needed]
## Answer: [When received]
```

## Anti-Patterns Avoided

| Anti-Pattern | Why Avoided | Solution |
|--------------|-------------|----------|
| Function nesting | Runtime errors | Top-level functions |
| Direct material access | Fails for groups | Helper functions |
| Cumulative transforms | Size drift | Transform reset |
| Missing cleanup | Memory leaks | Resource management |
| CDN dependencies | Loading issues | ES6 modules + Vite |

## Performance Patterns

### Efficient Updates
- `requestAnimationFrame` for render loop
- Event delegation for UI controls  
- Viewport units for responsive scaling
- File size limits + timeout protection

### Memory Management
- Automatic token compression at 10k limit
- Weekly archival of old content
- Pattern detection from git history
- Search indexing for quick retrieval
