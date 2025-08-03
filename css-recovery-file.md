# CSS Recovery File

## Current (Corrupted) state of `style.css`

```css
.control-group-row {
    gap: 8px; /* Standardize gap for precise alignment */
}

.color-input {
    height: 26px; /* Match height of number inputs */
}

[data-section*="guideline"] .control-group-row .control-group:has(.color-input) {
    flex: 0 0 80px; /* Fixed width for color input container */
}

[data-section*="guideline"] .control-group-row .control-group:has(.add-line-below, #addLine) {
    flex: 1; /* Take remaining space for add line button container */
}
```

## Intended Changes (that led to this state)

The goal was to align the "Colour" box with the "Thickness" value box and make the "ADD LINE..." button the same width as the GUIDE LINE sliders, uniformly across all guide line panes.

The intended changes involved:
1.  Standardizing the `gap` for `.control-group-row` to `8px`.
2.  Adjusting the `height` of `.color-input` to `26px`.
3.  Setting the `flex-basis` of the `control-group` containing `.color-input` to `80px` and `flex-shrink` to `0`.
4.  Setting the `flex-grow` of the `control-group` containing the "ADD LINE..." button to `1`.

**Note:** The original state of `style.css` before these modifications is not available in this log. The current state reflects the result of multiple `write_file` operations that inadvertently overwrote the file content.
