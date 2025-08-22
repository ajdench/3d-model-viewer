# Safari Scrollbar Visibility Issue

## Status: OPEN - Known Bug
**Date**: 2025-08-21  
**Component**: CONTROLS panel `.scrollable-sections`  
**Browser**: Safari (macOS)

## Problem
CONTROLS pane scrollbar disappears automatically in Safari despite CSS attempts to force visibility.

## Attempted Solutions
✅ **Implemented comprehensive cross-browser scrollbar styling**:
```css
.scrollable-sections {
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: rgba(0,0,0,0.3) transparent; /* Firefox */
    -webkit-overflow-scrolling: touch; /* Safari */
}

.scrollable-sections::-webkit-scrollbar {
    width: 8px;
    -webkit-appearance: none; /* Remove default styling */
}

.scrollable-sections::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3);
    border-radius: 4px;
    min-height: 20px; /* Ensure visible thumb */
    -webkit-appearance: none;
}
```

❌ **Still disappears in Safari**

## Root Cause Analysis
Safari's scrollbar behavior is heavily influenced by:
1. **macOS System Preferences**: "Show scroll bars" setting (Always/When scrolling/Automatically)
2. **Safari's internal scrollbar management**: Overrides CSS in some cases
3. **Touch/trackpad interaction**: May force auto-hide regardless of CSS

## Current Status
- ✅ **Chrome/Edge**: Scrollbar always visible with thin styling
- ✅ **Firefox**: Scrollbar always visible with thin styling  
- ❌ **Safari**: Scrollbar disappears (system behavior override)

## Workaround
Users can manually adjust macOS System Preferences:
`System Preferences > General > Show scroll bars: "Always"`

## Future Solutions to Investigate
1. **JavaScript-based scrollbar**: Custom scrollbar implementation
2. **Alternative overflow approach**: Different container structure
3. **Safari-specific detection**: Different behavior for Safari users
4. **Visual scroll indicators**: Custom scroll position indicators

## Priority
**Low** - Functional scrolling still works (wheel/trackpad), only visual indicator affected

## Browser Support Matrix
| Browser | Scrollbar Visibility | Thin Styling | Notes |
|---------|---------------------|--------------|--------|
| Chrome  | ✅ Always visible   | ✅ 8px width | Perfect |
| Edge    | ✅ Always visible   | ✅ 8px width | Perfect |
| Firefox | ✅ Always visible   | ✅ Thin      | Perfect |
| Safari  | ❌ Auto-disappears  | ✅ 8px width | System override |