# UI Alignment Patterns for 3D Model Viewer

## Use When: Implementing pixel-perfect UI alignment and professional text formatting

## Core Patterns Discovered

### 1. Explicit Flexbox Gap Management
**Problem**: Flexbox space distribution differs between single-item and multi-item containers
**Solution**: Always use explicit `gap` property for predictable spacing
```css
.container {
    display: flex;
    align-items: center;
    gap: 15px; /* Explicit gap prevents distribution issues */
}
```
**Benefits**: Eliminates undefined space distribution, enables precise calculations

### 2. Mathematical Width Calculation
**Problem**: Container sizing based on estimates leads to alignment drift
**Solution**: Calculate exact widths accounting for all components
```css
/* Example: 135px label + 15px gap + 155px values = 305px total */
.panel { width: 305px; }
.label { width: 135px; }
.values-container { width: 155px; }
```
**Benefits**: Every pixel accounted for, no guesswork in layout

### 3. CSS Table Layout for Text Alignment
**Problem**: Complex text alignment with varying label lengths
**Solution**: Use CSS table display properties for column alignment
```css
.text-table { display: table; width: 100%; }
.text-row { display: table-row; margin-bottom: 8px; }
.text-label { display: table-cell; width: 140px; padding-right: 8px; }
.text-content { display: table-cell; vertical-align: top; }
```
**Benefits**: Professional table-like alignment, consistent spacing

### 4. Consistent Spacing Standards
**Problem**: Different margin/padding values across similar elements
**Solution**: Standardize spacing values across related components
```css
/* Coordinate boxes: uniform 2.5px margins for 5px gaps */
.coordinate-box { margin: 0 2.5px; }
/* Text rows: uniform 8px spacing */
.text-row { margin-bottom: 8px; }
```
**Benefits**: Visual consistency, easier maintenance

### 5. Label Width Accommodation
**Problem**: Text wrapping when containers are too narrow
**Solution**: Size containers based on longest expected content
```css
/* Size for longest label: "Camera Position:" requires 135px minimum */
.info-label { width: 135px; }
```
**Benefits**: Prevents text wrapping, maintains professional appearance

## Anti-Patterns to Avoid

### 1. Position Hacking
```css
/* DON'T: Use margin adjustments to fix alignment */
.element { margin-left: -3px; }

/* DO: Fix the underlying layout structure */
.container { gap: 15px; }
```

### 2. Undefined Space Distribution
```css
/* DON'T: Rely on flexbox to distribute undefined space */
.container { display: flex; }

/* DO: Explicitly define gaps and spacing */
.container { display: flex; gap: 15px; }
```

### 3. Inconsistent Spacing
```css
/* DON'T: Use different margins for similar elements */
.box1 { margin: 0 2px; }
.box2 { margin: 0 3px; }

/* DO: Standardize spacing across similar elements */
.coordinate-box { margin: 0 2.5px; }
```

## Implementation Workflow

### 1. Calculate Before Implementing
- Measure longest text content
- Account for all spacing components
- Calculate total width mathematically
- Verify calculations add up correctly

### 2. Use Structural Solutions
- Prefer CSS layout properties over position hacks
- Use explicit gap controls in flexbox
- Implement table layouts for complex text alignment
- Standardize spacing patterns

### 3. Test Comprehensively
- Verify all components after layout changes
- Check for text wrapping with longest content
- Ensure spacing consistency across rows
- Test responsive behavior

### 4. Document Complex Alignments
- Record width calculations and reasoning
- Document spacing standards for future reference
- Note any browser-specific considerations
- Track regression fixes and their causes

## Browser Compatibility Notes
- CSS table layout: Supported in all modern browsers
- Flexbox gap property: Chrome 84+, Firefox 63+, Safari 14.1+
- Use fallback spacing for older browsers if needed

## Performance Considerations
- CSS table layout is efficient for text alignment
- Explicit gaps prevent reflow from space distribution changes
- Mathematical calculations reduce layout thrashing
- Consistent patterns enable better CSS caching