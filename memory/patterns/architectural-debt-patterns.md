# Architectural Debt Patterns

## Pattern: Hardcoded Positioning Values
**Symptoms**: Manual pixel-hunting for alignments, inconsistent spacing
**Examples**: 
- `margin-top: 14px` vs `margin-top: 4px` for title alignment
- `padding: 15px` vs `margin-left: 15px` for left alignment
- Multiple hardcoded spacing values throughout CSS

**Impact**: Every layout change requires manual investigation and adjustment

## Pattern: Component Isolation Without Standards
**Symptoms**: Each UI component positioned independently
**Examples**:
- `.info-display` padding system
- `.horizontal-view-container` margin system  
- `.orientation-widget-section` alignment system
- No shared spacing/alignment variables

**Impact**: Architectural fragmentation, inconsistent user experience

## Pattern: Symptomatic Patches vs Structural Solutions
**Symptoms**: Fixing surface issues without addressing root causes
**Examples**: 
- Adjusting individual margin values instead of creating alignment system
- Manual positioning fixes instead of standardized layout modules
- Component-specific solutions instead of architectural patterns

**Impact**: Technical debt accumulation, repeated similar issues

## Recommended Solution: CSS Variable Modularization
```css
:root {
    /* Layout alignment system */
    --layout-baseline-margin: 4px;
    --layout-left-padding: 15px;
    --layout-section-gap: 10px;
    
    /* Title standardization */
    --title-font-size: 12px;
    --title-color: #555;
    --title-spacing: 8px;
}
```

## Implementation Priority
**HIGH**: These patterns indicate systemic architectural issues requiring comprehensive CSS modularization and variable standardization across the entire codebase.