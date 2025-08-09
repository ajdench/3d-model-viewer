# 3D Model Viewer v2.12.0

A professional, interactive 3D model viewer built with Three.js (r179) and Vite. This is a single-page web application that allows users to load, view, and manipulate 3D models in various formats with an extensive set of controls.

## Project Audit & Installation

*   **[Project Audit](./audit.md):** A comprehensive review of the project's code maturity, architecture, security, and dependencies.
*   **[Offline Installation Guide](./install.md):** Instructions for deploying the application on a private, offline web server.

## Key Features

*   **Model Loading:** Load `.obj`, `.stl`, `.gltf`, and `.glb` files.
*   **Interactive Controls:** Adjust camera, model, materials, and lighting in real-time.
*   **Advanced Features:** Includes multiple guide lines, preset management, image capture, and experimental external surface extraction.

## Architecture

The application is built with Vanilla JavaScript and Three.js, using Vite for development and bundling. It is a single-page application with a monolithic but well-documented codebase. The project is currently in the process of being refactored into a more modular architecture.

## Development

### Prerequisites

*   Node.js (v20.19.0 or higher)
*   npm (v8.0.0 or higher)

### Setup & Commands

1.  **Install Dependencies:** `npm install`
2.  **Run Dev Server:** `npm run dev`
3.  **Build for Production:** `npm run build`

## Deployment

The project is configured for deployment to GitHub Pages. The `dist` directory, created by the build process, is self-contained and can be deployed to any static web host.

*   **Deploy to Production:** `npm run deploy`
*   **Deploy to Staging:** `npm run deploy-dev`

## Branching Strategy

*   **`main` / `gh-pages`**: Production environment.
*   **`Dev-2` / `gh-pages-dev-2`**: Development and staging environment.

## Project Documentation

This project maintains a detailed history of changes and development decisions in the following files:

*   **`claude-code-changes.md`**: A log of manual code modifications.
*   **`gemini-code-changes.md`**: A log of changes made by the Gemini assistant.
*   **`CLAUDE.md` & `GEMINI.md`**: Comprehensive internal documentation and development guidelines.

## Current Status (August 9, 2025): Project Audit Complete

A full codebase audit has been completed, and the results have been documented in `audit.md`. The project is stable, and the next phase of development will focus on implementing a testing framework and refactoring the codebase into a more modular architecture, as outlined in the project's strategic roadmap.