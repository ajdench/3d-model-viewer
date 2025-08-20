# 2025-08-18-scroll-fade-system-architecture.md

## Problem: Complex scroll fade system with gradient visibility and positioning issues

### Context
Implementing a scroll fade effect where CONTROLS title and CAPTURE pane remain fixed while other sections scroll behind them with a gradient fade zone.

### Requirements
- **At rest**: Clean 20px gap between CAPTURE pane and GUIDE LINE section
- **On scroll**: 40px fade zone starting exactly at CAPTURE pane bottom
  - First 20px: Solid #f4f4f4 block color
  - Next 20px: Gradient fade from #f4f4f4 to transparent
- **No scroll jumping**: Smooth transitions without scrollbar position changes
- **Clean sticky behavior**: CONTROLS + CAPTURE move together as unit

### Architecture Evolution

#### Final HTML Structure
```html
<div class="sticky-header">
    <h3 class="panel-title">CONTROLS</h3>
    <div class="control-section" data-section="capture">
        <!-- CAPTURE content -->
    </div>
</div>

<div class="controls-panel">
    <div class="sticky-spacer"></div>
    <div class="scrollable-sections">
        <!-- GUIDE LINE, CAMERA, etc. -->
    </div>
</div>
```

#### CSS Positioning System
```css
/* Sticky header covers controls-panel padding */
.sticky-header {
    position: sticky;
    top: -20px; /* Pull up to cover transparent padding */
    z-index: 20;
    background: #f4f4f4;
    margin-top: -20px;
    padding-top: 20px;
}

/* CAPTURE pane spacing */
.control-section[data-section="capture"] {
    margin-top: 20px; /* Gap below CONTROLS title */
    margin-bottom: 20px; /* Default gap - removed on scroll */
}

/* Dynamic fade spacer */
.sticky-spacer {
    height: 40px; /* Constant to prevent scroll jump */
    background: transparent; /* Default invisible */
    position: relative;
    z-index: 10;
    transition: background 0.3s ease;
}

/* Scroll state changes */
.controls-panel.scrolling .control-section[data-section="capture"] {
    margin-bottom: 0; /* Remove to start fade at CAPTURE bottom */
}

.controls-panel.scrolling .sticky-spacer {
    background: linear-gradient(to bottom, #f4f4f4 0%, #f4f4f4 50%, transparent 100%);
}
```

### Critical Issues Identified

#### 1. Gradient Visibility Problem
**Issue**: CSS background gradients don't create content fade effect
**Root Cause**: Gradient background sits behind content, doesn't mask scrolling content
**Solutions Attempted**:
- CSS mask on scrollable-sections ❌ (positioning conflicts)
- Background gradient on sticky-spacer ❌ (no content interaction)
**Next Approach**: CSS mask positioned correctly relative to sticky-spacer

#### 2. Scroll Jump Problem  
**Issue**: Height transitions (0px→40px) cause scrollbar position jumps
**Root Cause**: Total container height changes during transition
**Solution**: Constant 40px sticky-spacer height with background transition only

#### 3. Positioning Complexity
**Issue**: Multiple margin/height combinations creating 60px instead of 40px total
**Root Cause**: CAPTURE margin-bottom (20px) + sticky-spacer (40px) = 60px on scroll
**Solution**: Remove CAPTURE margin-bottom when scrolling

### JavaScript Integration
```javascript
function setupScrollDetection() {
    const scrollableContainer = document.querySelector('.scrollable-sections');
    const controlsPanel = document.querySelector('.controls-panel');
    
    if (scrollableContainer && controlsPanel) {
        scrollableContainer.addEventListener('scroll', () => {
            if (scrollableContainer.scrollTop > 0) {
                controlsPanel.classList.add('scrolling');
            } else {
                controlsPanel.classList.remove('scrolling');
            }
        });
    }
}
```

### Failed Approaches

#### Attempt 1: Multiple Gap Sections (gap-section-1, gap-section-2, gap-section-3)
- **Issue**: Complex absolute positioning broke with collapsible CAPTURE
- **Lesson**: Avoid multiple positioned elements for single effect

#### Attempt 2: Yellow Expansion Bar + Sticky Spacer
- **Issue**: Created 60px total (20px yellow + 40px spacer) instead of 40px
- **Lesson**: Minimize dynamic elements

#### Attempt 3: CSS Mask on Scrollable Content  
- **Issue**: Mask positioning from wrong reference point
- **Lesson**: Mask coordinates must account for all preceding elements

### Current State (Session End)
- ✅ Sticky header architecture working
- ✅ Scroll detection functional
- ✅ No scroll jumping (constant height)
- ❌ Gradient not visible (masking issue)
- ⚠️ Total spacing: 60px at rest, 40px on scroll (margin issue)

### Next Session Priorities
1. **Fix gradient visibility**: Use CSS mask on scrollable-sections with correct positioning
2. **Test all spacing**: Verify 20px at rest, 40px on scroll
3. **Remove debug colors**: Clean up red/blue temporary backgrounds
4. **Browser testing**: Ensure cross-browser mask support

### Code References
- HTML structure: `index.html:238-260`
- CSS positioning: `style.css:78-149`  
- Scroll detection: `main.js:3788-3801`

### User Feedback Pattern
- CSS positioning more complex than Three.js 3D transformations
- Multiple iterations due to interaction effects between positioning types
- Need for evidence-based debugging over theoretical CSS analysis