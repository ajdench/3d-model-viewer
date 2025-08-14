# 2025-08-13-guide-line-save-load-fix.md

## Problem: Only first guide line being saved to .3dview files
**Symptom**: Users add multiple guide lines but only the first one appears when loading saved .3dview files
**Impact**: Loss of user configuration data for additional guide lines

## Root Cause Analysis
**Saving Function**: ✅ WORKING CORRECTLY
- `saveViewerState()` properly saves ALL guide lines using `state.guideLines.map()` (lines 3468-3475)
- All guide line data correctly serialized to JSON

**Loading Function**: ❌ BROKEN
- `loadViewerState()` only processed `savedState.guideLines[0]` (lines 3632-3649)
- Completely ignored additional guide lines in saved files
- No iteration through the full guide lines array

## Solution Implemented
**Fixed loadViewerState function** to properly handle multiple guide lines:

1. **Clear existing additional controls**: Remove DOM elements for extra guide lines
2. **Reset state array**: Clear `state.guideLines` to prevent duplication
3. **Restore all guide lines**: Iterate through `savedState.guideLines.forEach()`
4. **Handle first line specially**: Update main guide line controls for index 0
5. **Create additional controls**: Call `addGuideLineControl()` for index > 0
6. **Update titles and render**: Refresh UI and visual elements

## Code Changes
**File**: `/Users/andrew.dench/Documents/3d-model-viewer v2.0/main.js`
**Lines**: 3632-3670 (loadViewerState guide lines section)

**Key improvements**:
- Full array iteration instead of single element access
- Proper cleanup of existing controls to prevent conflicts
- Systematic restoration of both state data and UI controls
- Preservation of first guide line's special control binding

## Testing Protocol
1. Create scene with multiple guide lines (use "ADD LINE BELOW" button)
2. Configure each guide line with different settings (color, thickness, angle, position)
3. Save scene using "SAVE SCENE" button
4. Reload page or create new session
5. Load saved .3dview file
6. Verify ALL guide lines restored with correct properties

## Prevention
- Evidence-based debugging: Test actual save/load workflow, don't assume functionality
- Function boundary analysis: Verify that save and load functions handle arrays consistently
- End-to-end testing: Always test complete user workflows, not isolated functions

## Success Criteria
- ✅ Multiple guide lines save correctly (was already working)
- ✅ Multiple guide lines load correctly (fixed)  
- ✅ UI controls properly created for additional guide lines
- ✅ No duplicate guide lines or control conflicts
- ✅ Proper guide line numbering and titles