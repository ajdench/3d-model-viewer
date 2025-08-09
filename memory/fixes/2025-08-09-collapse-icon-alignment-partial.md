# 2025-08-09 Collapse Icon Alignment - Partial Progress

## Status: IN PROGRESS - Requires Fine Tuning

## Problem
Complex alignment issues with collapse icons (minus sign − and triangle ▼) in collapsible control panes:

### Issue 1: Vertical Alignment
- Minus sign (−) not aligned with top of title text
- Triangle (▼) correctly aligned vertically but inconsistent with minus positioning

### Issue 2: Horizontal Alignment  
- Both icons not aligned with right edge of buttons and input boxes
- Ignoring global spacing system (`--section-content-padding: 13px`)

### Issue 3: Spacing Issues
- Space between main pane title and first content element minimal after changes
- Need proper gap when pane is expanded

## Progress Made

### New Variable Created
**Variable**: `--section-header-to-content-gap: 15px`
- **Location**: Line 29 in style.css root variables
- **Purpose**: Controls gap between section header and first content element
- **For Future Refinement**: This variable can be adjusted to fine-tune spacing

### Changes Applied
1. **CSS Variables**: Added `--section-header-to-content-gap: 15px`
2. **Section Header**: Modified margin to use new variable
3. **Collapse Icon**: Adjusted positioning with `top: -2px` and `margin-left: 8px`
4. **Typography**: Set `line-height: 1` for consistent alignment

### Current CSS State
```css
.section-header {
    margin: -2px -4px var(--section-header-to-content-gap) -4px;
    padding: 0 4px 0 4px;
    align-items: flex-start;
}

.collapse-icon {
    font-size: 16px;
    margin-left: 8px;
    top: -2px;
    line-height: 1;
}
```

## Remaining Issues
User feedback: "This still isn't correct. But seems to require a lot more fine tuning"

### Known Problems
- Icons still not properly aligned with global spacing system
- Vertical alignment of minus sign still not perfect
- Horizontal positioning needs refinement to match other UI components

## Next Steps
1. **Fine-tune horizontal positioning** to align with right edge of buttons/inputs
2. **Perfect vertical alignment** of minus sign with title text top
3. **Test spacing consistency** across all collapsible sections
4. **Validate against global spacing variables**

## Investigation Notes
- Global spacing uses `--section-content-padding: 13px`
- Section content has padding that affects alignment boundaries
- Flexbox `justify-content: space-between` may need alternative approach
- Typography baseline vs top alignment considerations

## Files Modified
- `/style.css`: Lines 29, 118-131, 155-166
- Added: `--section-header-to-content-gap` variable
- Modified: `.section-header` and `.collapse-icon` rules

## Testing Required
- Visual alignment with rulers/guides
- Consistency across CAPTURE, GUIDE LINE, CAMERA, MODEL, MATERIAL, PRESETS panes
- Both expanded (−) and collapsed (▼) states
- Responsive behavior during collapse/expand animations