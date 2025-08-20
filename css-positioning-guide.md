# CSS Positioning Error Prevention Guide

## Problem Analysis

Based on repeated CSS positioning errors in the 3D Model Viewer codebase, this guide provides systematic rules to prevent:

1. **Directional confusion** (moving elements wrong direction)
2. **Positioning context errors** (fixed vs absolute vs relative)
3. **Container vs viewport confusion** (positioning within parent vs screen)

## Core CSS Positioning Concepts

### 1. Positioning Context Hierarchy

```css
/* VIEWPORT CONTEXT - positions relative to browser window */
position: fixed;
left: 20px; /* 20px from LEFT EDGE OF SCREEN */

/* PARENT CONTAINER CONTEXT - positions relative to nearest positioned ancestor */
position: absolute;
left: 20px; /* 20px from LEFT EDGE OF PARENT CONTAINER */

/* DOCUMENT FLOW CONTEXT - normal document flow with offset */
position: relative;
left: 20px; /* 20px to the RIGHT from normal position */
```

### 2. Critical Distinction: Fixed vs Absolute

| Position Type | Context | Use Case | Your Error Pattern |
|---------------|---------|----------|-------------------|
| `position: fixed` | **Viewport** (screen) | Navigation bars, overlays | ❌ Used for `.capture-mask` thinking it meant "stay with container" |
| `position: absolute` | **Parent container** | Elements within panels | ✅ Should use for `.capture-mask` to position within `.controls-panel` |

## Your Specific Error Patterns

### Error Pattern 1: Fixed Positioning for Container Elements

**❌ WRONG:**
```css
.capture-mask {
    position: fixed; /* Positions relative to SCREEN */
    left: 20px; /* 20px from LEFT EDGE OF SCREEN */
}
```

**✅ CORRECT:**
```css
.capture-mask {
    position: absolute; /* Positions relative to .controls-panel */
    left: 20px; /* 20px from LEFT EDGE OF .controls-panel */
}
```

### Error Pattern 2: Directional Confusion

When user says "move right", you sometimes move left. Use this systematic approach:

**Direction Translation Table:**
| User Says | CSS Property | Value Change | Visual Result |
|-----------|--------------|-------------|---------------|
| "Move right" | `left: 20px` → `left: 40px` | **Increase** left value | Element moves RIGHT |
| "Move right" | `right: 20px` → `right: 40px` | **Increase** right value | Element moves LEFT |
| "Move left" | `left: 20px` → `left: 0px` | **Decrease** left value | Element moves LEFT |
| "Move left" | `right: 20px` → `right: 0px` | **Decrease** right value | Element moves RIGHT |

**Memory Device:** 
- `left: X` means "X distance from left edge" - increase X = move right
- `right: X` means "X distance from right edge" - increase X = move left

### Error Pattern 3: Container Context Confusion

**❌ WRONG ASSUMPTION:**
"The capture-mask should be positioned exactly behind the CAPTURE section"
→ Uses `position: fixed` because section uses fixed positioning

**✅ CORRECT REASONING:**
"The capture-mask should be positioned within the controls-panel container"
→ Uses `position: absolute` because controls-panel is the containing block

## Systematic Decision Framework

### Step 1: Identify the Positioning Context

**Ask yourself:** "What should this element be positioned relative to?"

| Answer | Position Type | Example |
|--------|---------------|---------|
| The browser window/viewport | `position: fixed` | Navigation bars, modal overlays |
| A specific parent container | `position: absolute` | Elements within panels, tooltips |
| Its normal document position | `position: relative` | Slight adjustments, creating positioning context |

### Step 2: Verify the Parent Container

For `position: absolute`, find the nearest positioned ancestor:

```css
/* Parent must have position: relative, absolute, or fixed */
.controls-panel {
    position: relative; /* Creates positioning context */
}

.capture-mask {
    position: absolute; /* Now positions relative to .controls-panel */
    left: 20px; /* 20px from .controls-panel left edge */
}
```

### Step 3: Direction Verification Checklist

Before applying directional changes:

1. **Identify current property:** `left`, `right`, `top`, `bottom`
2. **Check current value:** e.g., `left: 20px`
3. **Apply direction logic:**
   - To move **right**: increase `left` OR decrease `right`
   - To move **left**: decrease `left` OR increase `right`
   - To move **down**: increase `top` OR decrease `bottom`
   - To move **up**: decrease `top` OR increase `bottom`

## Your Codebase Analysis

### Current Structure
```html
<div class="controls-panel"> <!-- position: relative -->
    <h3 class="panel-title">CONTROLS</h3> <!-- position: fixed -->
    <div class="capture-mask"></div> <!-- position: fixed ❌ WRONG -->
    <div class="control-section" data-section="capture"> <!-- position: relative -->
        <!-- CAPTURE content -->
    </div>
</div>
```

### Fixed Structure
```css
.controls-panel {
    position: relative; /* Creates positioning context ✅ */
}

.capture-mask {
    position: absolute; /* Positions within .controls-panel ✅ */
    left: 20px; /* 20px from .controls-panel left edge ✅ */
    top: 54px; /* 54px from .controls-panel top edge ✅ */
}
```

## Prevention Checklist

Before making any positioning changes:

- [ ] **Context Check:** What should this element be positioned relative to?
- [ ] **Position Type:** Fixed (viewport), absolute (parent), or relative (self)?
- [ ] **Parent Verification:** Does parent have positioning context for absolute children?
- [ ] **Direction Logic:** Left/right property vs intended visual movement
- [ ] **Value Verification:** Increase/decrease value based on property and direction

## Common Positioning Patterns in Your Codebase

### Pattern 1: Panel Overlays (like capture-mask)
```css
.parent-panel {
    position: relative; /* Establishes context */
}

.overlay-element {
    position: absolute; /* Positions within panel */
    /* Use left/top for positioning */
}
```

### Pattern 2: Fixed UI Elements (like panel titles)
```css
.fixed-header {
    position: fixed; /* Stays in viewport position */
    /* Use left/right/top/bottom for screen positioning */
}
```

### Pattern 3: Grid-Based Layouts
```css
.master-grid {
    position: absolute; /* Or fixed for viewport positioning */
}

.grid-child {
    position: relative; /* Grid handles positioning */
}
```

## Emergency Debugging Commands

When positioning goes wrong:

```css
/* Add temporary debugging borders */
.debug-container { border: 2px solid red !important; }
.debug-element { border: 2px solid blue !important; }

/* Check positioning context */
.debug-absolute-parent { background: rgba(255,0,0,0.1) !important; }

/* Verify positioning values */
.debug-position { outline: 3px dashed orange !important; }
```

## Quick Reference

| Situation | Position Type | Relative To |
|-----------|---------------|-------------|
| Element within a panel | `absolute` | Panel container |
| UI that stays on screen | `fixed` | Browser viewport |
| Slight position adjustment | `relative` | Element's normal position |
| Grid/flex child | `relative` or `static` | Grid/flex container |

**Remember:** The key is always asking "What should this be positioned relative to?" before choosing the position type.