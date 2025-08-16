# Troubleshooting Guide

## Common Issues
- **Loading Stuck**: Check browser compatibility (Chrome 88+, Firefox 84+, Safari 14+), run `npm run dev`
- **Material Controls Don't Work**: Use helper functions (`updateMaterialColor()`, `updateMaterialProperty()`, `updateMaterialTransparency()`)
- **Code Errors**: Keep functions at top level, use try-catch, check object existence
- **Model Loading Fails**: Check file format (.obj/.stl/.gltf/.glb), size (<50MB), file integrity
- **Performance Issues**: Reduce model complexity, check file size, close browser tabs
- **Upload Issues**: Wait 30s for timeout, ensure correct file types, file input clears after upload

## Resolved Issues
**Guide Lines (v2.2)** ✅: Fixed positioning, thickness units, event handlers, UI initialization
**Scaling (v2.1)** ✅: Fixed transform resets, bounding box validation  
**Drag & Drop (v2.1)** ✅: Fixed visual feedback, file validation

## Testing Checklist
1. Run `npm run dev` and verify default model loads
2. Test material controls on all model types  
3. Test file uploads (OBJ/STL/GLTF/GLB), drag & drop, edge cases
4. Verify scaling consistency, guide lines, lighting controls
5. Test build (`npm run build` → `npm run preview`) and deployment
6. Check console for errors, verify capture functionality