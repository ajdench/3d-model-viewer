# 2025-08-02-flexbox-alignment-root-cause.md

## Problem: Model text box fundamentally misaligned despite multiple pixel adjustments
The Model text box started too far in and ended too far out compared to coordinate boxes above. Manual margin adjustments (-1px, -2px, -3px) had no visible effect, indicating a structural issue rather than simple positioning problem.

## Root Cause: Flexbox space distribution differences
**The Issue**: Different behavior between multi-item and single-item flexbox containers:

### Coordinate Boxes (Multi-item):
- Container: `display: inline-flex`, `width: 156px`
- Content: 3 boxes × 50px + 6 margins × 1px = 156px total
- **Result**: Boxes fill container edge-to-edge, perfect alignment

### Model Box (Single-item):
- Container: `display: inline-flex`, `width: 156px`  
- Content: 1 box × 154px = 154px
- **Result**: Flexbox centers 154px box within 156px container
- **Misalignment**: 1px gap on each side (156px - 154px = 2px distributed)

## Why Margin Adjustments Failed
The `-3px` margin hack attempted to move the box within its container, but:
1. Flexbox still centered the content within the container
2. Container positioning remained identical for both rows
3. Moving content within container didn't fix container-level positioning difference

## Solution: Match container behavior exactly
Changed Model box to fill container completely like coordinate boxes:

**BEFORE** (Flexbox centering issue):
```css
width: 154px; /* Smaller than container */
margin-left: -3px; /* Positioning hack */
```

**AFTER** (Perfect alignment):
```css
width: 156px; /* Match container width exactly */
margin-left: 0; /* No hack needed */
```

## Technical Explanation
**Coordinate boxes**: Fill 156px container completely (3×50px + 6×1px = 156px)
**Model box**: Now fills 156px container completely (1×156px = 156px)
**Result**: Both containers have identical edge-to-edge content, eliminating flexbox centering behavior

## Prevention: Consider container space distribution
- Account for flexbox behavior differences with single vs multiple items
- Match total content width to container width for consistent alignment
- Avoid positioning hacks when structural solutions are available
- Test alignment with similar content patterns to ensure consistency

## Files Modified:
- `style.css`: Updated `.model-name-box` width from 154px to 156px, removed margin-left hack