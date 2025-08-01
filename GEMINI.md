## Gemini Development Guidelines

This project is a self-contained 3D model viewer that has been refactored to run in an offline environment. It uses Vite for development and bundling.

### Core Technologies
- **JavaScript Framework**: None (Vanilla JS)
- **3D Library**: Three.js (managed as an npm dependency)
- **Build Tool**: Vite

### Development Commands
- **Run Development Server**: `npm run dev`
- **Create Production Build**: `npm run build`
- **Run Development Server and Open Browser**: `./start-dev.sh`

### Key Architectural Points
- The application is built into a `dist` directory for production deployment.
- All dependencies, including Three.js and its loaders, are bundled. There are no external CDN calls.
- The code is structured with ES6 modules (`import`/`export`).
- Main application logic is in `main.js`.
- Styles are in `style.css`.
- The `index.html` file is the main entry point.

### Features
- **Model Loading**: Supports `.obj`, `.stl`, `.gltf`, and `.glb` file formats. Models can be loaded via a file input or drag-and-drop.
- **Model Selection**: A dropdown menu allows users to switch between several built-in models (Torus Knot, Cube, Sphere, Pyramid).
- **Example Models**: Buttons to load example models like the Utah Teapot and Suzanne Monkey.
- **Camera Controls**: Sliders and number inputs for adjusting the camera's position (X, Y, Z) and rotation (X, Y, Z).
- **Model Controls**: Sliders and number inputs for adjusting the model's rotation (X, Y, Z) and zoom.
- **Material Properties**: Controls for adjusting the model's material, including color, metalness, roughness, and transparency.
- **Lighting**: 
  - Sliders to control the intensity of ambient and directional lights.
  - An interactive 2D control pad to visually adjust the X/Y position of the directional lights.
- **Guide Line Overlay**: A configurable 2D overlay line with adjustable thickness, color, transparency, angle, and vertical position. It remains fixed in the viewer, independent of 3D scene movements, and is excluded from image captures.
- **Presets**: Users can save and load their own presets for camera, model, material, and lighting settings.
- **Reset Functionality**: Buttons to reset the camera and model to their default states.
- **Responsive Viewer**: The 3D viewer resizes to fit its container.
- **Image Capture**: Save a 2D PNG image of the current model view to a file with a transparent background. (Clipboard functionality is currently disabled due to technical issues.)

### Known Issues
- The `handleResize` function was missing, causing an error during viewer initialization. This has been fixed by adding the function to `main.js`.
- The "Viewer Stats" and "Interaction Controls" dialogs were restyled for consistency.
- The mouse controls were updated to remove middle-click functionality and reassign right-click to panning.
- A right directional light was added to provide more control over model lighting.

### Lighting Controls Redesign (v2.4)
- **Issue**: Previous lighting controls were scattered across the right panel, taking up excessive space
- **Fix**: Complete redesign of LIGHTING CONTROLS panel with compact, integrated layout
- **New Design Features**:
  - **Vertical Sliders**: Left and Right directional light controls positioned as vertical sliders flanking the light positioning pad
  - **Perfect Alignment**: Sliders exactly match the height of the dark grey positioning area (150px)
  - **Corner Labels**: LEFT and RIGHT labels positioned in bottom corners of the positioning pad with proper spacing (10px inset)
  - **Integrated Ambient Controls**: Ambient light slider and value input positioned below the main controls
  - **Precise Sizing**: Dark grey box width (128px) perfectly matches ambient controls width for visual consistency
  - **Boundary Constraints**: Light icons constrained within positioning area with overlap prevention (30px minimum distance)
  - **Dynamic Boundaries**: JavaScript recalculates positioning boundaries in real-time instead of using cached values
- **Container Optimization**: Overall LIGHTING CONTROLS box reduced to 230px width for perfect left/right border symmetry
- **Responsive Updates**: All breakpoints updated to maintain proper proportions across screen sizes
- **Impact**: Compact, intuitive lighting interface with professional appearance and improved usability

### Future Development Ideas

- **Advanced Lighting Controls:**
  - **Option 1 (Simple):** Implement vertical sliders to control the Y-axis (height) of the directional lights.
  - **Option 3 (Complex):** Enhance the 2D control pad by adding separate Z-axis (depth) sliders for each light, providing full 3D positional control.

- **Guide Line Overlay (2D):**
  - **Option 1: Single HTML `div` with CSS Transforms (Current Implementation)**
    - **Concept:** Uses a `div` element positioned absolutely over the viewer. The line itself is another `div` inside, styled and transformed using CSS (`rotate`, `scaleY` for thickness, `background-color`, `opacity`).
    - **Pros:** Pure CSS/HTML, true overlay (fixed to screen), relatively simple, easy capture exclusion (toggle `display`).
    - **Cons:** Limited to straight lines.
  - **Option 2: HTML `canvas` Element with 2D Drawing**
    - **Concept:** Create a separate `canvas` element overlaying the viewer. Use the 2D Canvas API (`getContext('2d')`) to draw the line.
    - **Pros:** More flexible for complex drawing (dashed lines, arrows, text), clear separation of drawing logic.
    - **Cons:** Higher complexity, more JavaScript code, capture exclusion requires clearing/redrawing.
  - **Option 3: SVG Overlay**
    - **Concept:** Create an SVG element overlaying the viewer. Use SVG elements (`<line>`, `<rect>`) and SVG transformations to render the line.
    - **Pros:** Vector graphics (scalable), declarative, good for evolving to more complex 2D guides.
    - **Cons:** Higher complexity, requires SVG DOM manipulation.