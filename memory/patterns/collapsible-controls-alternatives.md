# Collapsible Controls Implementation Alternatives

## Context
Alternative architectural approaches for implementing collapsible sections in the CONTROLS pane, documented for future consideration or enhancement needs.

**Implemented**: Option 1 (Pure CSS + Minimal JavaScript) - v2.8+
**Future Options**: Options 2 & 3 for advanced requirements

## Option 2: Full JavaScript Animation Control

### Use When
- Need precise animation control with dynamic timing
- Require complex animation sequences or easing functions
- Want pixel-perfect height calculations
- Planning advanced interaction features (drag-to-resize, etc.)

### Architecture Overview
```javascript
class AdvancedCollapsibleSections {
    constructor() {
        this.animationDuration = 300;
        this.easingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
        this.activeAnimations = new Map();
    }

    async toggleSection(sectionElement, sectionId) {
        if (this.activeAnimations.has(sectionId)) {
            return; // Prevent overlapping animations
        }

        const content = sectionElement.querySelector('.section-content');
        const isCollapsed = sectionElement.classList.contains('collapsed');
        
        if (isCollapsed) {
            await this.expandWithJS(content, sectionElement, sectionId);
        } else {
            await this.collapseWithJS(content, sectionElement, sectionId);
        }
    }

    async expandWithJS(content, section, sectionId) {
        this.activeAnimations.set(sectionId, true);
        
        // Measure natural height
        content.style.height = 'auto';
        const naturalHeight = content.getBoundingClientRect().height;
        content.style.height = '0px';
        
        // Force reflow then animate
        content.offsetHeight;
        content.style.transition = `height ${this.animationDuration}ms ${this.easingFunction}`;
        content.style.height = naturalHeight + 'px';
        
        await this.waitForAnimation(this.animationDuration);
        
        // Cleanup
        content.style.height = 'auto';
        content.style.transition = '';
        section.classList.remove('collapsed');
        this.activeAnimations.delete(sectionId);
    }

    async collapseWithJS(content, section, sectionId) {
        this.activeAnimations.set(sectionId, true);
        
        const currentHeight = content.getBoundingClientRect().height;
        content.style.height = currentHeight + 'px';
        
        // Force reflow then animate
        content.offsetHeight;
        content.style.transition = `height ${this.animationDuration}ms ${this.easingFunction}`;
        content.style.height = '0px';
        
        await this.waitForAnimation(this.animationDuration);
        
        section.classList.add('collapsed');
        content.style.transition = '';
        this.activeAnimations.delete(sectionId);
    }

    waitForAnimation(duration) {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

    // Advanced features possible
    setAnimationSpeed(speed) {
        this.animationDuration = speed;
    }

    pauseAnimation(sectionId) {
        // Complex pause/resume logic
    }

    getAnimationProgress(sectionId) {
        // Real-time animation progress
    }
}
```

### Implementation Strategy
1. **Height Calculation**: Use `getBoundingClientRect()` for exact measurements
2. **Animation Control**: JavaScript-managed transitions with Promise-based timing
3. **State Management**: Track active animations to prevent conflicts
4. **Performance**: Use `requestAnimationFrame` for smooth updates
5. **Fallbacks**: CSS fallback for unsupported browsers

### Advantages
- **Precision**: Exact height calculations eliminate animation glitches
- **Flexibility**: Easy to modify timing, easing, and behavior
- **Advanced Features**: Support for pause/resume, progress tracking, dynamic speed
- **Responsive**: Adapts to content changes automatically

### Disadvantages
- **Complexity**: ~150-200 lines of code vs ~30 for Option 1
- **Performance**: JavaScript calculations vs hardware-accelerated CSS
- **Maintenance**: More complex debugging and testing requirements
- **File Size**: Larger JavaScript bundle

### When to Upgrade
- User requests for animation customization
- Need for advanced interaction patterns
- Performance issues with CSS approach
- Complex content that changes height dynamically

## Option 3: Web Components Approach

### Use When
- Building a component library or design system
- Need highly reusable collapsible functionality
- Planning to extend with advanced features
- Working with modern development stack

### Architecture Overview
```javascript
class CollapsibleSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isCollapsed = false;
    }

    static get observedAttributes() {
        return ['collapsed', 'title', 'persist-state'];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.loadPersistedState();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 25px;
                    padding: 15px;
                    background: rgba(0, 0, 0, 0.03);
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                    padding: 2px 0;
                }

                .title {
                    color: #333;
                    font-size: 16px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0;
                }

                .icon {
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-size: 12px;
                    color: #666;
                }

                .content {
                    overflow: hidden;
                    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                               opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                :host([collapsed]) .icon {
                    transform: rotate(-90deg);
                }

                :host([collapsed]) .content {
                    max-height: 0;
                    opacity: 0;
                }

                :host(:not([collapsed])) .content {
                    max-height: 1000px;
                    opacity: 1;
                }
            </style>
            
            <div class="header" role="button" tabindex="0">
                <h3 class="title">${this.getAttribute('title') || 'Section'}</h3>
                <span class="icon" aria-hidden="true">▼</span>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        `;
    }

    setupEventListeners() {
        const header = this.shadowRoot.querySelector('.header');
        
        header.addEventListener('click', () => this.toggle());
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    toggle() {
        this.isCollapsed = !this.isCollapsed;
        
        if (this.isCollapsed) {
            this.setAttribute('collapsed', '');
        } else {
            this.removeAttribute('collapsed');
        }

        this.saveState();
        this.dispatchEvent(new CustomEvent('toggle', {
            detail: { collapsed: this.isCollapsed }
        }));
    }

    saveState() {
        if (this.hasAttribute('persist-state')) {
            const id = this.getAttribute('id');
            if (id) {
                localStorage.setItem(`collapsible-${id}`, this.isCollapsed);
            }
        }
    }

    loadPersistedState() {
        if (this.hasAttribute('persist-state')) {
            const id = this.getAttribute('id');
            if (id) {
                const saved = localStorage.getItem(`collapsible-${id}`);
                if (saved === 'true') {
                    this.setAttribute('collapsed', '');
                    this.isCollapsed = true;
                }
            }
        }
    }
}

// Register the custom element
customElements.define('collapsible-section', CollapsibleSection);
```

### HTML Usage
```html
<!-- Convert existing sections to web components -->
<collapsible-section title="Camera" id="camera-section" persist-state>
    <div class="control-group">
        <label>Position X</label>
        <!-- existing controls -->
    </div>
</collapsible-section>

<collapsible-section title="Material" id="material-section" persist-state>
    <div class="control-group">
        <label>Colour</label>
        <!-- existing controls -->
    </div>
</collapsible-section>
```

### Implementation Strategy
1. **Progressive Migration**: Convert sections one by one
2. **Shadow DOM**: Encapsulated styling prevents conflicts
3. **Slot API**: Preserve existing content structure
4. **Custom Events**: Integration with existing JavaScript
5. **Attribute API**: Declarative configuration

### Advantages
- **Encapsulation**: No CSS/JS conflicts with existing code
- **Reusability**: Easy to use in other projects or pages
- **Standardized**: Modern web platform features
- **Extensible**: Easy to add features like drag-and-drop, nested sections
- **Maintainable**: Self-contained components with clear APIs

### Disadvantages
- **Browser Support**: Requires modern browsers (IE not supported)
- **Learning Curve**: New paradigm for the development team
- **Migration Effort**: Significant refactoring required
- **Bundle Size**: Polyfills needed for older browsers

### Migration Path
1. **Phase 1**: Implement basic CollapsibleSection component
2. **Phase 2**: Convert one section (e.g., Material) as proof of concept
3. **Phase 3**: Gradually migrate remaining sections
4. **Phase 4**: Add advanced features (nested sections, drag-and-drop)

### When to Consider
- Planning major UI framework upgrade
- Building additional collapsible interfaces
- Need for component reuse across multiple pages
- Team comfortable with modern web components

## Comparison Matrix

| Aspect | Option 1 (CSS+JS) | Option 2 (Full JS) | Option 3 (Web Components) |
|--------|-------------------|--------------------|-----------------------------|
| **Implementation Effort** | Low (30 lines) | Medium (150 lines) | High (200+ lines + migration) |
| **Performance** | Excellent | Good | Good |
| **Browser Support** | Universal | Universal | Modern browsers only |
| **Maintainability** | High | Medium | High (after migration) |
| **Extensibility** | Limited | High | Very High |
| **File Size Impact** | Minimal | Medium | Medium-High |
| **Learning Curve** | None | Low | Medium |
| **Future Flexibility** | Limited | High | Very High |

## Recommendation Strategy

### Current Implementation (Option 1)
- ✅ **Immediate needs**: Perfect for current requirements
- ✅ **Low risk**: Minimal code changes
- ✅ **High performance**: Hardware-accelerated animations

### Future Upgrade Path
1. **Short term** (6-12 months): Monitor user feedback on Option 1
2. **Medium term** (1-2 years): Consider Option 2 if advanced features needed
3. **Long term** (2+ years): Evaluate Option 3 for component library approach

### Trigger Conditions for Upgrade
- **To Option 2**: User requests for animation customization, complex interactions
- **To Option 3**: Building component library, major UI framework changes, need for reusability

This documentation ensures future developers have clear guidance for enhancing the collapsible functionality based on evolving requirements.