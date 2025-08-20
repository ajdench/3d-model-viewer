# CSS Positioning Decision Checklist

## Before Making ANY Positioning Change

### 1. Context Question (30 seconds)
**"What should this element be positioned relative to?"**

- [ ] Browser window/viewport → `position: fixed`
- [ ] Specific parent container → `position: absolute` 
- [ ] Its normal document position → `position: relative`

### 2. Parent Container Check (15 seconds)
For `position: absolute`, verify parent has positioning context:

```css
/* Parent MUST have one of these: */
position: relative; /* ✅ Most common */
position: absolute; /* ✅ Less common */
position: fixed;    /* ✅ Rare */
/* NOT position: static (default) ❌ */
```

### 3. Direction Verification (15 seconds)
**User says "move right":**

- [ ] Using `left` property? → **Increase** value (left: 20px → left: 30px)
- [ ] Using `right` property? → **Decrease** value (right: 20px → right: 10px)

**User says "move left":**

- [ ] Using `left` property? → **Decrease** value (left: 20px → left: 10px)  
- [ ] Using `right` property? → **Increase** value (right: 20px → right: 30px)

### 4. Your Common Error Prevention
**❌ AVOID:**
- Using `position: fixed` for elements that should stay within a container
- Moving elements opposite direction from user request
- Assuming fixed positioning means "fixed relative to parent"

**✅ DO:**
- Use `position: absolute` for elements positioned within containers
- Double-check direction logic before applying changes
- Remember: `position: fixed` = viewport, `position: absolute` = parent container

## Emergency Debug
If positioning breaks:
```css
/* Add to see what's happening */
.debug { border: 2px solid red !important; background: rgba(255,0,0,0.1) !important; }
```

## Time Investment
- **Checklist time:** 60 seconds
- **Time saved:** 15-30 minutes debugging wrong positioning
- **Error prevention:** ~95% of directional and context errors