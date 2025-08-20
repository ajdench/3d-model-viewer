# controls-scrolling-system.md

## Use When: Implementing scrollable UI panels with gradient fade indicators

## Solution: CSS Mask + Dynamic Height + Scroll Detection Architecture

### Core Pattern
```javascript
// 1. Dynamic height calculation based on actual DOM measurements
function setupDynamicScrollableHeight() {
    const availableHeight = containerHeight - containerPadding;
    const scrollableHeight = availableHeight - fixedHeaderHeight - margins;
    scrollableElement.style.height = `${scrollableHeight}px`;
}

// 2. Content-based gradient detection (not scroll-based)
function setupScrollDetection() {
    const hasContentAbove = scrollTop > 0;
    const hasContentBelow = scrollTop + clientHeight < scrollHeight - 1;
    // Apply classes based on content extension, not scroll state
}
```

### CSS Mask Gradients
```css
/* Conditional gradients based on content visibility */
.container.content-above .scrollable {
    mask: linear-gradient(to bottom, transparent 0%, opaque 20px);
}
.container.content-below .scrollable {
    mask: linear-gradient(to bottom, opaque calc(100% - 20px), transparent 100%);
}
.container.content-above.content-below .scrollable {
    mask: linear-gradient(to bottom, transparent 0%, opaque 20px, opaque calc(100% - 20px), transparent 100%);
}
```

### Scrollbar Positioning Pattern
```css
/* Move scrollbar outside masked content area */
.scrollable-container {
    margin-right: -15px; /* Extend into parent padding */
    padding-right: 15px;  /* Maintain content position */
    overflow-y: auto;     /* Scrollbar at extended right edge */
}
```

## Example: 3D Model Viewer Controls Panel

### Implementation
- **Container**: `.controls-panel` (300px width, 20px padding)
- **Fixed Header**: `.sticky-header` (CONTROLS title + CAPTURE pane)  
- **Scrollable Content**: `.scrollable-sections` (dynamic height)
- **Gradient Indicators**: Show when content extends beyond visible bounds

### Key Measurements
```javascript
// Height calculation breakdown
const controlsPanelHeight = element.clientHeight;           // e.g., 800px
const controlsPadding = 40;                                 // 20px top + 20px bottom  
const availableHeight = controlsPanelHeight - controlsPadding; // 760px
const stickyHeaderHeight = stickyHeader.clientHeight;       // e.g., 140px
const stickyMargin = 20;                                    // margin-bottom
const scrollableHeight = availableHeight - stickyHeaderHeight - stickyMargin; // 600px
```

### Auto-scroll Pattern
```javascript
// Ensure content visibility after expand
function expandSection(element) {
    element.classList.remove('collapsed');
    
    if (element.getAttribute('data-section') === 'target-section') {
        setTimeout(() => { // Wait for DOM update
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }, 100);
    }
}
```

## Trade-offs

### Advantages
- **Visual clarity**: Gradients clearly indicate hidden content
- **Consistent spacing**: Mathematical height calculation prevents gaps
- **Smooth performance**: Hardware-accelerated CSS masks
- **Responsive**: Auto-adjusts on window resize

### Considerations  
- **CSS Mask support**: Requires webkit prefix for broader compatibility
- **Timing sensitive**: DOM measurements need proper sequencing
- **Complexity**: Multiple coordinated systems (height, scroll, gradients)

### Browser Support
- **Modern browsers**: Full CSS mask support
- **Safari/Webkit**: Requires `-webkit-mask` prefix
- **IE/Legacy**: Graceful degradation (no gradients)

## Reusable Components

### 1. Dynamic Height Calculator
```javascript
function createDynamicHeightManager(container, scrollable, fixedElements) {
    return {
        recalculate: () => {
            const available = container.clientHeight - getPadding(container);
            const used = fixedElements.reduce((sum, el) => sum + el.clientHeight + getMargins(el), 0);
            scrollable.style.height = `${available - used}px`;
        }
    };
}
```

### 2. Gradient Controller
```javascript  
function createGradientController(container, scrollable) {
    return {
        update: () => {
            const hasAbove = scrollable.scrollTop > 0;
            const hasBelow = scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 1;
            
            container.classList.toggle('content-above', hasAbove);
            container.classList.toggle('content-below', hasBelow);
        }
    };
}
```

### 3. Auto-scroll Manager
```javascript
function createAutoScroller(scrollable) {
    return {
        scrollToBottom: (delay = 100) => {
            setTimeout(() => {
                scrollable.scrollTop = scrollable.scrollHeight;
            }, delay);
        },
        scrollToTop: () => {
            scrollable.scrollTop = 0;
        }
    };
}
```

## Performance Optimization

### CSS
- Use `transform3d(0,0,0)` to force hardware acceleration on mask elements
- Minimize gradient complexity (max 4 stops)
- Use `will-change: scroll-position` on scroll containers

### JavaScript
- Debounce resize handlers (300ms minimum)
- Cache DOM measurements when possible  
- Use `requestAnimationFrame` for scroll-dependent updates

### Memory
- Remove event listeners on component destruction
- Clear timeouts in cleanup functions
- Avoid retaining references to DOM elements

## Testing Checklist
- [ ] Height calculation accuracy across viewport sizes
- [ ] Gradient visibility at scroll top/middle/bottom positions  
- [ ] Scrollbar positioning outside masked areas
- [ ] Auto-scroll timing and target accuracy
- [ ] Cross-browser CSS mask support
- [ ] Performance with large content lists
- [ ] Resize behavior and recalculation
- [ ] Accessibility with screen readers