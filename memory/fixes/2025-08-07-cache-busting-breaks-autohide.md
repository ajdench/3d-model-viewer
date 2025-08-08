# 2025-08-07 Cache-Busting Breaks Auto-Hide Functionality

## Status: BLOCKED - Machine Connectivity Issues

## Problem
Auto-hide functionality for default guide line stopped working after implementing aggressive cache-busting headers and switching from dynamic imports back to standard script tags.

## Timeline
1. **Working State**: Auto-hide with pulsing button worked perfectly
2. **Cache-Busting Request**: User requested aggressive cache prevention
3. **Implementation**: Added HTTP headers + version parameters to HTML
4. **Regression**: Auto-hide functionality completely stopped working
5. **Debug Added**: Console logs added to trace execution flow
6. **Testing Blocked**: Machine connectivity preventing localhost server access

## Suspected Causes
1. **Timer Execution**: setTimeout may not be firing properly after script changes
2. **SessionStorage**: Cache-busting may be affecting sessionStorage behavior  
3. **JavaScript Loading**: Script tag changes may have altered initialization timing
4. **DOM Timing**: Template-based controls may have different timing requirements

## Debug Code Added
```javascript
// In setupControls() around line 2471
console.log('Setting up auto-hide timer...');
console.log('Current sessionStorage guideLineUserInteracted:', sessionStorage.getItem('guideLineUserInteracted'));
sessionStorage.removeItem('guideLineUserInteracted'); // TEMPORARY for testing
setTimeout(() => {
    console.log('Auto-hide timer fired!');
    autoHideDefaultGuideLineOnFirstLoad();
}, 2000);
```

## Expected Console Output
- "Setting up auto-hide timer..."
- "Current sessionStorage guideLineUserInteracted: [value]"
- "Cleared sessionStorage for testing" 
- "Auto-hide timer fired!"
- "autoHideDefaultGuideLineOnFirstLoad called"

## Testing Status
**BLOCKED**: Machine connectivity issues preventing access to:
- Vite dev server (localhost:5173, localhost:5175)
- Python HTTP server (localhost:8000)
- Built version (incorrect GitHub Pages paths)

## Files Modified
- `main.js`: Added debug console logs around line 2471-2481
- `index.html`: Aggressive cache-busting headers (may be interfering)

## Next Steps After Machine Restart
1. Test with debug console logs to identify failure point
2. Remove TEMPORARY sessionStorage clearing after debugging
3. Investigate timer execution vs script loading timing
4. Consider moving auto-hide setup to DOMContentLoaded if needed

## Prevention
- Always test functionality immediately after cache-busting changes
- Separate cache-busting from functional changes
- Add automated testing for timer-dependent features