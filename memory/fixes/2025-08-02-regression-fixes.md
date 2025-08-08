# 2025-08-02-regression-fixes.md

## Problem: Multiple regressions caused by previous alignment attempts
The VIEW panel alignment fixes caused several secondary issues:
1. Label wrapping ("Camera Position:", "Model Rotation:")
2. Inconsistent coordinate box gaps between rows
3. Lost INTERACTION box text formatting and alignment
4. Model box still 1px misaligned (documented for future)

## Root Cause: Cascading effects from width adjustments
Previous attempts to fix Model box alignment reduced container widths too aggressively, causing:
- Insufficient space for longer labels
- Different margin calculations affecting spacing consistency
- Missing CSS classes for INTERACTION formatting

## Solutions Applied:

### 1. Label Wrapping Fix
**BEFORE**: `#info` width 287px, `.info-label` width 120px
**AFTER**: `#info` width 305px, `.info-label` width 135px
**Calculation**: 135px + 15px + 155px = 305px total
**Result**: "Camera Position:" and "Model Rotation:" fit without wrapping

### 2. Coordinate Box Gap Consistency
**BEFORE**: Inconsistent margins causing different gap sizes
**AFTER**: Standardized `.info-value-box` margin to `0 2.5px`
**Result**: Uniform 5px gaps between all coordinate boxes across all rows

### 3. INTERACTION Box Restoration
**BEFORE**: Missing CSS classes, no line spacing or alignment
**AFTER**: Added complete CSS structure:
```css
.interaction-table { display: table; width: 100%; }
.interaction-row { display: table-row; margin-bottom: 8px; }
.interaction-label { display: table-cell; width: 140px; }
.interaction-action { display: table-cell; }
```
**Result**: Proper line spacing and tab alignment with "Pan Camera" as reference

### 4. Model Box Update
**BEFORE**: 152px width (outdated)
**AFTER**: 155px width to match new coordinate container
**Status**: Still 1px misaligned (documented for future fixing)

## Prevention: Test all panel components after layout changes
- Verify label space before reducing container widths
- Check spacing consistency across all coordinate rows
- Ensure INTERACTION formatting is preserved
- Test responsive behavior at different screen sizes

## Files Modified:
- `style.css`: Updated width calculations, margins, and restored INTERACTION CSS classes