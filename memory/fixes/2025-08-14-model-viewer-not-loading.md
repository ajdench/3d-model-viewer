## Problem: Model Viewer Not Loading on GitHub Pages Deployment

## Cause: Incorrect `base` path in `vite.config.js` and insufficient permissions for `GITHUB_TOKEN`.

## Fix: Updated `vite.config.js` `base` path to `/3d-model-viewer/` and granted `contents: write` permission to `GITHUB_TOKEN` in the GitHub Actions workflow file.

## Prevention: Ensure `base` path is correctly configured for subpath deployments and `GITHUB_TOKEN` has necessary write permissions.