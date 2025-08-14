# 3D Model Viewer v2.12.0

A professional, interactive 3D model viewer built with Three.js (r179) and Vite. This is a single-page web application that allows users to load, view, and manipulate 3D models in various formats with an extensive set of controls.

## Project Audit & Installation

*   **[Project Audit](./audit.md):** A comprehensive review of the project's code maturity, architecture, security, and dependencies.
*   **[Offline Installation Guide](./install.md):** Instructions for deploying the application on a private, offline web server.

## Key Features

*   **Model Loading**: Supports `.obj`, `.stl`, `.gltf`, `.glb`, and `.dae` file formats. Models can be loaded via a file input or drag-and-drop.
*   **Interactive Controls**: Adjust camera, model, materials, and lighting in real-time.
*   **Advanced Features**: Includes multiple guide lines, preset management, image capture, and experimental external surface extraction.
*   **Enhanced VIEW Panel**: Redesigned with a horizontal layout, including a 3D orientation widget and dedicated data columns for model rotation, camera position, and camera rotation.

## Architecture

The application is built with Vanilla JavaScript and Three.js, using Vite for development and bundling. It is a single-page application with a monolithic `main.js` file, but it is well-documented. The project is currently in the process of being refactored into a more modular architecture.

### Key Architectural Points
- The application is built into a `dist` directory for production deployment.
- All dependencies, including Three.js and its loaders, are bundled. There are no external CDN calls.
- The code is structured with ES6 modules (`import`/`export`).
- Main application logic is in `main.js`.
- Styles are in `style.css`.
- The `index.html` file is the main entry point.

## Development

### Prerequisites

*   Node.js (v20.19.0 or higher)
*   npm (v8.0.0 or higher)

### Setup & Commands

1.  **Install Dependencies:** `npm install`
2.  **Run Dev Server:** `npm run dev`
3.  **Build for Production:** `npm run build`
4.  **Preview Production Build:** `npm run preview`

## Deployment

The project is configured for deployment to GitHub Pages. The `dist` directory, created by the build process, is self-contained and can be deployed to any static web host.

*   **Deploy to Production:** `npm run deploy`
*   **Deploy to Staging:** `npm run deploy-dev-3`

## Branching Strategy

*   **`main` / `gh-pages`**: Production environment.
*   **`Dev-3` / `gh-pages-dev-3`**: Development and staging environment.

## Project Documentation

This project maintains a detailed history of changes and development decisions in the following files:

*   **`claude-code-changes.md`**: A log of manual code modifications.
*   **`gemini-code-changes.md`**: A log of changes made by the Gemini assistant.
*   **`CLAUDE.md` & `GEMINI.md`**: Comprehensive internal documentation and development guidelines.

## Current Status (August 9, 2025): Project Audit Complete

A full codebase audit has been completed, and the results have been documented in `audit.md`. The project is stable, and the next phase of development will focus on implementing a testing framework and refactoring the codebase into a more modular architecture, as outlined in the project's strategic roadmap.

## Strategic Development Roadmap
- **`claude-todo.md`**: A new file outlining the strategic roadmap for the project.
- **Modularization**: The primary focus is on refactoring the monolithic `main.js` into smaller, reusable modules.
- **Core Architecture**: The next phase involves creating `StateManager`, `EventManager`, and `ResourceManager` classes to form a solid architectural foundation.

## Evidence-Based Debugging Protocol

A fundamental shift in development methodology, prompted by the "syncSliderNumber Crisis," where a critical runtime error was missed during theoretical code analysis.

**Core Principle**: Prioritize real-time, observable evidence (browser console errors) over assumptions about code behavior.

### The Protocol
1.  **🚨 Runtime Verification First**: Always test the application's actual behavior in a browser before analyzing code structure. A successful build does not equal a functional application.
2.  **🔍 Browser Console Priority**: User-reported error messages and live console output are the most valuable sources of debugging information.
3.  **⚡ Function Accessibility Checks**: Before debugging complex logic, verify that the functions involved are accessible in the global scope and have not been inadvertently nested or duplicated.
4.  **🎯 Initialization Check**: Confirm that the application initializes completely without errors before investigating issues in specific features.
5.  **📊 Evidence Over Theory**: What the application *is actually doing* is more important than what the code *should be doing*.