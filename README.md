# 3D Model Viewer

[![Three.js](https://img.shields.io/badge/Three.js-r179-black?style=for-the-badge&logo=three.js)](https://threejs.org/) [![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-222222?style=for-the-badge&logo=github)](https://ajdench.github.io/3d-model-viewer/)

[![npm audit](https://img.shields.io/badge/npm%20audit-0%20vulnerabilities-brightgreen?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/npm-audit) [![Snyk](https://img.shields.io/badge/Snyk-0%20vulnerabilities-brightgreen?style=for-the-badge&logo=snyk)](https://snyk.io/) [![audit-ci](https://img.shields.io/badge/audit--ci-0%20vulnerabilities-brightgreen?style=for-the-badge)](https://github.com/IBM/audit-ci)

## What is this?

**3D Model Viewer** is a professional, interactive 3D model viewer built with **Three.js** (a cross-browser JavaScript library used to create and display static and animated 3D computer graphics in a web browser). It's designed to be completely self-contained for offline use and provides intuitive model manipulation, camera positioning, and material property controls directly in your browser, offering enterprise-level features for viewing, orienting and recolouring 3D files, creating 2D images of 3D models for use in a variety of applications.

## What can you do with it?

### 🎯 **Load Your Models**
- **Drag and drop** your 3D files directly into the viewer
- **Supports popular formats**: .obj, .stl, .gltf, .glb, .dae
- **No file size limits** for most typical models
- **Instant loading** with visual feedback

Simply drag your 3D model files from your computer directly into the viewer window. The application automatically detects the file type and loads your model with real-time progress indicators. Works completely offline once loaded, making it perfect for secure environments or locations without internet access.

### 🎮 **Interactive Controls**
- **Rotate models** by clicking and dragging
- **Zoom in/out** with your mouse wheel
- **Pan the camera** with right-click and drag
- **Focus on models** with the F key
- **Reset views** with double-click actions

Navigate your 3D models with intuitive mouse and keyboard controls that feel natural and responsive. The viewer includes an orientation widget that shows your current viewing angle in real-time. Advanced users can access precise camera positioning controls for exact viewpoint requirements.

### 🎨 **Customize Appearance**
- **Change colors** with easy color pickers
- **Adjust materials** - make things shiny, rough, or transparent
- **Control lighting** - position light sources for the perfect view
- **Add professional guide lines** to measure or reference parts of your model

Transform the look of your models with professional-grade material controls including metalness, roughness, and multiple transparency modes. The advanced lighting system lets you position directional light sources with visual indicators, while the dynamic guide line system provides edge-to-edge lines at any angle with perpendicular positioning and customizable appearance. All changes update in real-time for immediate feedback.

### 💾 **Save Your Work**
- **Save scenes** with all your customizations
- **Load previous setups** instantly
- **Create presets** for common configurations
- **Professional model capture** with high-quality rendering

Never lose your customizations with comprehensive save and load functionality. Create named presets for different viewing configurations and share them with team members. The advanced capture system renders high-resolution images (2K-4K) with optimal model framing, 10px transparent borders, and native OS file dialogs for professional output ready for presentations or documentation.

### 🔧 **Professional Features**
- **Multiple transparency modes** for complex models
- **Advanced lighting controls** with directional indicators
- **Real-time orientation widget** showing model position
- **Responsive interface** that works on any screen size

Built for professional workflows with enterprise-grade features like external surface extraction for high-polygon models and advanced transparency rendering modes. The interface adapts to any screen size while maintaining full functionality, making it suitable for everything from mobile devices to large displays. All processing happens locally in your browser for maximum security and performance.

## Who is this for?

- **3D Artists** reviewing their work
- **Engineers** inspecting CAD models  
- **Students** learning about 3D modeling
- **Hobbyists** sharing 3D prints
- **Anyone** who wants to view 3D files easily

## How to get started?

1. **Visit the live demo**: [3d-model-viewer.demo](https://ajdench.github.io/3d-model-viewer/)
2. **Drag a 3D file** into the viewer area
3. **Start exploring** with mouse controls
4. **Customize** colors and lighting as desired
5. **Save your scene** to keep your settings

---

## Technical Information

### Quick Start (Development)

```bash
# Clone the repository
git clone https://github.com/yourusername/3d-model-viewer.git
cd 3d-model-viewer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Architecture

**Professional 3D Model Viewer** built with Three.js r179. Single-page web application with interactive controls for camera, models, materials, lighting, and guide lines. Uses ES6 modules + Vite, deploys to GitHub Pages.

#### Core Structure
- **Files**: `index.html`, `main.js`, `style.css` (cleanly separated)
- **State**: Global `state` object manages all scene components
- **Event-Driven**: UI controls with real-time 3D updates
- **ES6 Modules**: Vite development + bundling

#### Key Systems

**Scene**: Transparent background, perspective camera (50° FOV), WebGL renderer with antialiasing
**Lighting**: Ambient + dual directional lights, compact vertical sliders, Basic/Complex modes
**Models**: Built-in torus model + file upload (OBJ/STL/GLTF/GLB/DAE)
**Controls**: Left-drag=rotate model, right-drag=pan camera, wheel=zoom
**Materials**: PBR with color/metalness/roughness/transparency (5 transparency modes)
**Presets**: Save/load complete configurations to localStorage
**Capture**: PNG download with transparent backgrounds
**Guide Lines**: Overlay with customizable appearance and position

### Browser Support

- **Chrome 88+** (recommended)
- **Firefox 84+** 
- **Safari 14+**
- **Edge 88+**

Requires modern browser with WebGL support and ES6 module capabilities.

### Development Guidelines

#### Code Organization
- **Functions**: Top-level scope, organized by feature (loading, controls, utilities)
- **Safety**: Use `safeSetValue()` and `safeAddEventListener()` for DOM operations
- **Modules**: ES6 imports for Three.js and loaders from examples
- **Material Updates**: Helper functions handle both single meshes and groups

#### Requirements
- **Browser**: Modern WebGL + ES6 modules support
- **Files**: 50MB upload limit, supports .obj/.stl/.gltf/.glb/.dae
- **Performance**: requestAnimationFrame, preserveDrawingBuffer for capture

### Recent Updates (v3.0+)

#### Professional Clipboard & Interface Improvements (v3.1 - Latest)
- **Complete Clipboard Functionality**: Modern Clipboard API with three-tier fallback (direct copy → browser overlay → manual save)
- **Cross-Browser Status Messages**: Borderless design with perfect width alignment and anti-aliasing optimizations
- **Popup Overlay System**: Professional fallback interface with macOS context menu integration for copy/save operations
- **Y-Axis Hover Restoration**: Fixed CAPTURE button clipping with proper overflow handling and smooth animations

#### Professional Capture & Guide Line System (v3.0)
- **High-Quality Capture**: 2K-4K adaptive rendering with model-focused framing and 10px transparent borders
- **OS-Level File Dialogs**: Native file system integration with three-tier fallback (OS dialog → prompt → download)
- **Dynamic Guide Lines**: Edge-to-edge extension at all angles (-90° to +90°) with perpendicular positioning mathematics
- **Advanced Controls**: Decimal precision positioning (±360 range), container clipping with 10px margins

#### UI Excellence (Previous Sessions)
- **Borderless Design**: Applied comprehensive borderless aesthetic to all panels while preserving backgrounds and corner radii
- **Instructions Optimization**: Perfect width tuning (386px) with proper text alignment and collapsible functionality
- **Lighting Controls**: Fixed click vs drag detection, corrected COMPLEX mode directional logic with visual arrow indicators
- **Visual Consistency**: Unified design language across viewer container, controls panel, and all input elements

#### Major Features (v2.8-2.9)
- **Collapsible Controls** (v2.8): All 7 sections with smooth CSS animations, persistent state, accessibility
- **Upload Area Relocation** (v2.9): Moved to bottom-right with streamlined interface
- **Dependency Updates** (v2.9.2): Three.js r178→r179, Vite 7.0.6→7.1.2
- **External Surface Extraction** (v2.10.0): Hybrid architecture for high-poly model optimization

### License

MIT License - feel free to use in your own projects.

### Contributing

Issues and pull requests welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.