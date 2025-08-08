# iCloud Sync Interference with Vite Development Server
**Date**: 2025-08-05  
**Priority**: HIGH  
**Status**: IDENTIFIED - WORKAROUND AVAILABLE

## Problem
Vite development server cannot start due to esbuild service failures caused by iCloud sync attributes on project files.

## Symptoms
- `Error: The service was stopped` when running `npm run dev`
- `ERR_MODULE_NOT_FOUND` errors for rollup/parseAst
- @ symbols visible in `ls -la` output indicating iCloud sync attributes
- esbuild process crashes during dependency scanning

## Root Cause
iCloud sync adds extended attributes to files that interfere with Node.js development tools, particularly esbuild which Vite depends on for bundling.

## Immediate Workarounds
1. **Simple HTTP Server**: `python3 -m http.server 3000` (requires ES6 module support)
2. **Temporary Relocation**: Move project folder out of iCloud (e.g., to ~/Desktop) for development
3. **Production Build**: `npm run build` then serve from dist/ folder

## Long-term Solutions
1. **Development Copy**: Keep working copy outside iCloud, sync changes back periodically
2. **iCloud Exclusion**: Configure .icloudignore for node_modules and build artifacts
3. **Alternative Bundler**: Consider switching to Webpack or other bundlers less sensitive to file attributes

## Prevention
- Avoid placing Node.js projects directly in iCloud-synced folders
- Use git for version control instead of relying on iCloud sync
- Keep development environment separate from cloud storage

## Testing Status
- **Fix Applied**: syncSliderNumber error resolved
- **Core Functionality**: Should work correctly via HTTP server
- **User Validation**: Required to confirm mouse controls and guide line system