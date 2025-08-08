# 3D Model Viewer v2.11.0

A professional, interactive 3D model viewer built with Three.js (r179) and Vite. This is a single-page web application that allows users to load, view, and manipulate 3D models in various formats with an extensive set of controls.

## Key Features

- **Multiple Model Formats**: Load `.obj`, `.stl`, `.gltf`, and `.glb` files via drag-and-drop or file input.
- **Comprehensive Controls**: Adjust camera position, model rotation (including Yaw, Pitch, and Roll), materials (color, metalness, roughness), and lighting in real-time.
- **Advanced Lighting**: Dual directional lights with an interactive 2D control pad and Basic/Complex modes for precise lighting adjustments.
- **Multiple Guide Lines**: Add, customize, and remove multiple independent guide lines, each with its own controls for color, thickness, transparency, angle, and position.
- **Control Synchronization**: A robust `ControlSync` system ensures that all UI controls (sliders and number inputs) are perfectly synchronized, providing a seamless user experience.
- **Preset Management**: Save and load complete scene configurations (camera, model, materials, lighting) to and from `localStorage`.
- **Image Capture**: Save the current view as a high-quality PNG file with a transparent background.
- **External Surface Extraction**: A new experimental feature to extract and render only the external surfaces of a model, which can improve performance and visual clarity for complex, high-poly models.

## Change Logs

This project maintains two dedicated change logs to provide a clear and transparent history of all modifications:

- **`claude-code-changes.md`**: A chronological record of all manual code modifications, design changes, and user-driven feature implementations.
- **`gemini-code-changes.md`**: A log of all changes made by the Gemini assistant, including automated refactoring, process enhancements, and documentation updates.

## Branching Strategy

This project utilizes a dual-branch system for development and production:

- **`main` / `gh-pages`**: The production environment. The `main` branch contains the stable, production-ready source code, which is built and deployed to the `gh-pages` branch.
- **`Dev-2` / `gh-pages-dev-2`**: The development/staging environment. The `Dev-2` branch is used for active development, and its builds are deployed to the `gh-pages-dev-2` branch. This allows for a live, testable version of the application that is separate from the production deployment.

## Development

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm (v8.0.0 or higher)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/3d-model-viewer.git
    cd 3d-model-viewer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the Vite development server with hot-reloading, run:

```bash
npm run dev
```

This will start the server, typically on `http://localhost:5173`.

### Building for Production

To create a production-ready build in the `dist` directory, run:

```bash
npm run build
```

### Deployment

The project includes a script to simplify deployment to GitHub Pages.

-   **Deploy to Production (`gh-pages`):**

    ```bash
    npm run deploy
    ```

-   **Deploy to Development (`gh-pages-dev-2`):**

    ```bash
    npm run deploy-dev
    ```

## Evidence-Based Debugging

This project adheres to a strict **Evidence-Based Debugging Protocol**. The core principle is to prioritize real-time, observable evidence (such as browser console errors) over theoretical code analysis. This ensures that development efforts are focused on fixing actual runtime issues rather than chasing phantom problems.

## Current Status (August 7, 2025): PHASE 1 COMPLETE

**Problem**: The previous `TypeError` in `main.js` caused by syntax errors has been resolved, and Phase 1 of the remediation plan, "Critical Stabilization," is now complete.

**Resolution**: The `main.js` file was manually corrected, resolving the orphaned code and syntax issues. Additionally, the controller system has been fully restored with over 20 missing event listeners systematically added, and the project is now at a stable baseline (v2.9.3-stable).

**Next Steps**: The project is now ready to proceed with Phase 2: Quality Foundation, which includes implementing testing infrastructure and formalizing evidence-based debugging protocols.