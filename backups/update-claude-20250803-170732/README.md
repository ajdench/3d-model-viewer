# 3D Model Viewer

A professional, interactive 3D model viewer built with Three.js, designed to be completely self-contained for offline use. It provides intuitive model manipulation, camera positioning, and material properties control. Features real-time view status tracking, custom model loading, and preset management with simplified, unified controls.

![Three.js](https://img.shields.io/badge/Three.js-Managed%20via%20npm-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange)

## 	✨ Features

### 	🎮 Interactive Controls
- **Mouse Controls**: Left-click rotates the model, right-click pans the camera.
- **Guide Line Overlay**: A configurable 2D overlay line with adjustable thickness, color, transparency, angle, and vertical position. It remains fixed in the viewer, independent of 3D scene movements, and is excluded from image captures.
- **Real-time View**: Live display of camera position, model rotation, and current model
- **Precision Controls**: Sliders with editable number inputs for exact positioning
- **One-click Reset**: Separate reset buttons for camera and model
- **Focus Function**: F key automatically centers and focuses the model on screen

### 	📐 Camera Management
- **3-Axis Camera Position**: Position controls (X,Y,Z) for precise camera placement
- **Dynamic Zoom**: Scroll wheel control with distance-based calculation
- **Camera Panning**: Right-click drag for smooth camera movement
- **Viewport Adaptation**: Responsive to window resizing and fullscreen mode
- **Streamlined Interface**: Simplified controls focused on model manipulation rather than complex camera rotation

### 	🎨 Material Properties
- **Real-time Material Editor**: Color, metalness, roughness adjustment
- **Advanced Transparency Control**: Variable opacity with five transparency modes:
  - **Unified Surface**: Optimized blending for clean high-poly model appearance
  - **WBOIT**: Alpha test approach for unified surfaces
  - **Advanced**: DoubleSide rendering with adaptive blending
  - **Standard**: Basic transparency with potential artifacts
  - **Dithered**: Bayer pattern dithering for uniform appearance
- **Professional Lighting**: Balanced ambient and directional lighting (left and right) without harsh shadows
- **Compact Lighting Controls**: A redesigned, compact control panel for lighting, featuring:
  - **Vertical Sliders**: For intuitive control of left and right directional light intensity.
  - **Interactive Light Pad**: A 2D pad for visually positioning the lights.
  - **Ambient Light Control**: A dedicated slider for adjusting the overall ambient light.
  - **Dual Lighting Modes**: Switch between Basic (simple positioning) and Complex (icon rotation and light targeting) modes.
- **Live Preview**: Instant visual feedback for all material changes

### 	📁 Model Loading System
- **Built-in Model Library**: 
  - Default Torus Knot (mathematical precision)
  - Geometric primitives (Cube, Sphere, Pyramid)
  - Example models (Utah Teapot, Suzanne Monkey)
- **Custom Model Support**: 
  - ✅ **OBJ Files**: Wavefront format with the official Three.js loader
  - ✅ **STL Files**: Binary STL support with the official Three.js loader
  - ✅ **GLTF/GLB Files**: GL Transmission Format support with the official Three.js loader.
- **Drag & Drop Interface**: Intuitive file upload with visual feedback
- **Auto-processing**: Automatic centering, scaling, and material application

### 	💾 Preset Management
- **Save/Load System**: Store complete viewer configurations
- **Persistent Storage**: Browser localStorage for cross-session persistence
- **Configuration Scope**: Saves camera position, model settings, material properties, and lighting configurations
- **Quick Access**: Dropdown selection and manual naming
- **Backward Compatibility**: Existing presets automatically adapt to simplified control scheme

### 	📸 Image Capture
- **Save to File**: Capture a 2D PNG image of the current model view with a transparent background.
- **Save to Clipboard**: *Currently disabled due to technical issues.*

## 🔄 Recent Updates

### Version 2.9.5: Unified Surface Transparency
- **Five Transparency Modes**: Complete transparency system for high-poly models.
- **Unified Surface Mode**: New default mode with optimized blending for clean appearance.
- **Transparency Range Fix**: Resolved opacity control issues for smooth 1.0→0.0 range.
- **High-Poly Optimization**: Eliminates "messy" artifacts on complex models.

### Version 2.9.2: Dependency Updates
- **Three.js**: Upgraded from r178 to r179.
- **Vite**: Upgraded from 7.0.5 to 7.0.6.
- **Resolved Deprecation**: Fixed `punycode` module deprecation warning.

### Version 2.7: UI Refinements
- **Boxless Design**: Removed backgrounds, borders, and shadows from VIEW, LIGHTING, and INTERACTION panels for a cleaner appearance.
- **Text Standardization**: Unified all panel text to 12px for consistent typography.
- **Spacing Optimization**: Standardized control panel positioning to 10px from model pane edges.

### Version 2.6: UI Alignment
- **Pixel-perfect Flexbox Gaps**: Achieved precise spacing and alignment using flexbox.
- **CSS Table Layout**: Utilized CSS table properties for structured content.
- **Mathematical Precision**: Ensured pixel-perfect alignment through precise calculations.

### Version 2.5: Advanced Lighting Modes
- **Dual Modes**: Implemented dual-mode lighting system with "BASIC" and "COMPLEX" buttons.
- **Icon Rotation & Light Targeting**: Advanced features for complex mode, including icon rotation and light targeting based on vertical position.

### Version 2.4: Lighting Controls Redesign
- **Compact Layout**: Complete redesign of LIGHTING CONTROLS panel with compact, integrated layout.
- **Vertical Sliders**: Left and Right directional light controls positioned as vertical sliders.
- **Integrated Ambient Controls**: Ambient light slider and value input positioned below main controls.

### Version 2.3: Simplified Control Scheme
- **Unified Mouse Controls**: Streamlined interaction model with left-click always rotating the model.
- **Camera Rotation Controls Removed**: Eliminated complex camera rotation sliders to focus on model manipulation.
- **VIEW Panel**: Renamed from "VIEWER STATS" with cleaner information display.
- **Interface Layout**: Repositioned control panels for better user experience.

### Version 2.2: Guide Line Improvements
- **New Default Values**: Light gray, thinner, semi-transparent guide line for professional appearance.
- **Responsive Layout**: Interface elements adapt dynamically to different screen sizes.

## 	🏛️ Architecture

This project has been refactored for robustness and offline deployment.

*   **Self-Contained:** All dependencies, including the Three.js library, are bundled into the application. It does **not** require an internet connection to run.
*   **Build Process:** The project uses **Vite** as a build tool to bundle and optimize all assets (JavaScript, CSS).
*   **Modular Code:** The codebase is organized into separate HTML, CSS, and JavaScript files (`index.html`, `style.css`, `main.js`) and uses modern ES6 modules.
*   **Reliable Loaders:** The old custom 3D model parsers have been replaced with the official, battle-tested `OBJLoader` and `STLLoader` from the Three.js library, ensuring better compatibility and performance.

## 	🚀 Installation and Usage

An internet connection is required for the initial setup (to download dependencies). After the build step, the application is fully offline-capable.

### 1. Installation

First, clone the repository and install the required `npm` dependencies.

```bash
# Clone the repository
git clone https://github.com/yourusername/3d-model-viewer.git
cd 3d-model-viewer

# Install dependencies (requires internet)
npm install
```

### 2. Development

To run the application in a local development environment with hot-reloading:

```bash
# Run the development server
npm run dev
```

Vite will start a server and provide a local URL (usually `http://localhost:5173`). Open this URL in your browser.

Alternatively, you can use the provided shell script to start the server and open the browser automatically:

```bash
./start-dev.sh
```

### 3. Building for Production (Offline Deployment)

To create a self-contained, production-ready build:

```bash
# Build the application
npm run build
```

This command creates a new `dist` directory. This directory contains your entire application, fully optimized and with all dependencies included.

### 4. Deployment

Copy the contents of the `dist` directory to your private web server. The application is now ready to be served and will work without an internet connection.

## 	🛠️ Technical Specifications

### Core Technologies
- **Three.js**: 3D rendering and scene management (managed via npm).
- **Vite**: Modern frontend build tool for development and bundling.
- **Vanilla JavaScript (ES6 Modules)**: No framework dependencies.
- **HTML5 Canvas**: Hardware-accelerated graphics.
- **CSS3**: Modern styling.
- **localStorage API**: Client-side data persistence for presets.

## 	🐛 Troubleshooting

### Common Issues

**Q: Models appear too small or large**
A: The auto-scaling system should handle this, but you can adjust `targetSize` in `centerAndScaleModel()` in `main.js`.

**Q: Browser shows security errors when running locally**
A: Ensure you are using the `npm run dev` command to start the Vite development server, rather than opening the `index.html` file directly in your browser.

**Q: Preset loading fails**
A: Check your browser's developer console for localStorage errors. Private or incognito browsing modes may disable localStorage.

### Performance Optimization
- **Large Models**: Consider decimating complex models before uploading them.
- **File Size**: A 50MB limit is enforced, but smaller files will always load faster.
- **Browser Performance**: Close other tabs or resource-intensive applications if you experience slowdowns.

## 	🤝 Contributing

### Development Setup
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Make your changes and test them thoroughly using the development server.
4. Commit with descriptive messages.
5. Submit a pull request for review.

### Code Style
- Use modern ES6+ JavaScript.
- Follow the existing indentation and formatting.
- Add comments to explain complex or non-obvious functionality.

## 	📄 License

This project is licensed under the MIT License.