# CSS Styling Debugging Pattern

## Use When
- Visual styling not appearing as expected despite CSS rules being written
- Border-radius, borders, or other visual properties not displaying correctly
- Need to troubleshoot competing CSS influences

## Systematic Approach

### 1. Check All CSS Layers
When styling isn't working, examine **all possible influences**:

#### Container Level
- Parent containers that might clip or override child styling
- Example: `.models-list` had `border: 1px solid #ddd` affecting appearance
- Example: `.models-list` had `border-radius: 4px` clipping child `border-radius: 6px`

#### Element Level  
- Multiple CSS rules targeting the same element
- Example: Two `.model-item` rules in different parts of CSS file
- Later rules override earlier ones (CSS cascade)

#### Property Conflicts
- Competing properties that mask visual effects
- `border-radius` not visible without background or border to show edges against
- `!important` declarations overriding normal cascade

### 2. Investigation Order
1. **Check parent containers** - borders, border-radius, overflow clipping
2. **Search for duplicate selectors** - multiple rules for same element
3. **Verify property visibility** - does the styling have visual contrast to show?
4. **Use Web Inspector** - check computed values vs written CSS

### 3. Common Container Issues
- Parent `border` adding unwanted visual boundaries
- Parent `border-radius` smaller than child elements, causing clipping
- Parent `overflow: hidden` cutting off child styling
- Parent background masking child visual effects

## Example: Model List Styling Issue

**Problem**: Model items with `border-radius: 6px` not showing rounded corners

**Root Cause Analysis**:
- ❌ Initially focused only on `.model-item` rules
- ❌ Added `!important` and background colors to force visibility  
- ✅ **Should have checked**: Parent `.models-list` container
  - Had `border: 1px solid #ddd` (unwanted border)
  - Had `border-radius: 4px` (clipping 6px child corners)

**Solution**: Remove parent container border and match border-radius values

## Key Insight
**Always examine the complete CSS hierarchy** - parent containers, competing selectors, and compounding influences - not just the target element's direct styling.

## Prevention
- Before adding `!important` or forcing styles, check parent containers
- Search entire CSS file for duplicate selectors affecting same element
- Use systematic approach: container → element → property conflicts