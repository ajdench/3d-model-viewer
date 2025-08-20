# Project Instructions for Claude Code

## Overview
Brief description of what this project does and its main objectives.

## Architecture & Structure

### File Organization
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── features/     # Feature-specific components
│   └── layout/       # Layout components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── constants/        # App constants
```

### Component Hierarchy
- **Utility Functions** → Pure functions for data processing
- **Custom Hooks** → Stateful logic abstraction
- **UI Components** → Small, reusable building blocks
- **Feature Components** → Business logic implementation
- **Layout Components** → Page structure and routing
- **App Component** → Root application component

## Coding Standards

### Component Requirements
- Single responsibility principle
- Clear prop interfaces with TypeScript
- Separation of business logic from presentation
- Reusable and testable design
- Comprehensive comments and documentation

### Implementation Order
1. Start with utility functions at the top
2. Define custom hooks
3. Create UI components (smallest to largest)
4. Build feature components
5. Implement layout components
6. Assemble main App component

## Code Examples

### Utility Function Pattern
```javascript
// utils/dataProcessing.js
/**
 * Formats currency values for display
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};
```

### Custom Hook Pattern
```javascript
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * Custom hook for localStorage management
 * @param {string} key - localStorage key
 * @param {any} initialValue - Default value
 * @returns {[any, function]} Current value and setter function
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};
```

### UI Component Pattern
```javascript
// components/ui/Button.jsx
import React from 'react';

/**
 * Reusable Button component
 * @param {Object} props - Component props
 * @param {string} props.variant - Button style variant
 * @param {boolean} props.disabled - Disabled state
 * @param {function} props.onClick - Click handler
 * @param {React.ReactNode} props.children - Button content
 */
export const Button = ({ 
  variant = 'primary', 
  disabled = false, 
  onClick, 
  children,
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
```

## Testing Requirements

### Mandatory Testing Protocol
Every component and function MUST include:

1. **Syntax Validation**: All brackets, parentheses, and quotes properly closed
2. **Compilation Check**: Code compiles/renders without errors
3. **Basic Functionality Test**: Include test function for core features
4. **Import Verification**: All imports are correct and accessible

### Test Function Example
```javascript
// Include this type of validation in each component file
const testComponent = () => {
  try {
    // Test basic functionality
    const result = formatCurrency(1234.56);
    console.log('✅ formatCurrency test passed:', result);
    
    // Test edge cases
    const edgeCase = formatCurrency(0);
    console.log('✅ Edge case test passed:', edgeCase);
    
    return true;
  } catch (error) {
    console.error('❌ Component test failed:', error);
    return false;
  }
};

// Run test on module load (development only)
if (process.env.NODE_ENV === 'development') {
  testComponent();
}
```

## Update Guidelines

### Modular Updates Only
- Identify the specific component that needs changes
- Update ONLY that component, not the entire codebase
- Maintain existing interfaces unless breaking changes are necessary
- Test the updated component in isolation
- Verify integration with dependent components

### Before Submitting Code
- [ ] Syntax check completed
- [ ] Component compiles successfully
- [ ] Basic functionality tested
- [ ] Imports verified
- [ ] Test function included and passing
- [ ] Documentation updated if needed

## Common Patterns

### Error Boundaries
```javascript
// components/ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### Loading States
```javascript
// Common loading pattern
const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Implementation here...

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{/* Main content */}</div>;
};
```

## Best Practices Summary

### Structure Your Markdown Files With:
- **Clear headers** using proper heading hierarchy (H1, H2, H3)
- **Code blocks** with language specification for syntax highlighting
- **Examples** showing both correct implementation and common patterns
- **Logical flow** from general concepts to specific implementations
- **Action items** and checklists for verification
- **Context sections** explaining why certain patterns are preferred

### Claude Code Optimization Tips:
- Use consistent formatting and indentation
- Include comprehensive comments in code examples
- Provide both positive examples (what to do) and negative examples (what to avoid)
- Structure information hierarchically for easy parsing
- Include validation steps and testing protocols
- Make instructions actionable and specific

---

**✅ Template Tested and Confirmed Working**: This markdown structure provides clear context, actionable examples, and comprehensive guidance that Claude Code can effectively parse and utilize for project development.

# Three.js Assembler and Extensions

This document contains the full technical exchange about assembling multiple 3D files in Three.js, with snapping features, export options, and performance optimizations.

---

## Core Question

Does Three.js allow for multiple 3D files to be loaded together and assembled, allowing for placement on top of each other (and to the sides, back, front, and below), enabling a single item to be saved in various formats, and aid with placement with snap-to points that are automatically identified or can be configured via UI mouse click controls?

### Summary Answer

Yes. Three.js supports loading multiple 3D files, assembling them hierarchically, placing them relative to each other, exporting to formats like GLB/OBJ/STL/USDZ, and implementing snapping behavior. Three.js itself does not automatically detect snap points, but you can define or compute them, and provide UI mechanisms for alignment.

---

## Implementation Approaches

### Loading multiple files
- Use loaders (`GLTFLoader`, `OBJLoader`, `FBXLoader`).
- Add loaded meshes into a parent `Group` (`assemblyGroup`).
- Parts can be moved individually or grouped.

### Snapping Options
1. **Anchor-based snap:** Define `anchor_*` nodes in modeling software. Snap moving part’s anchor to target’s anchor.
2. **Grid snapping:** Quantize positions and rotations when dropping objects.
3. **Surface snapping:** Use `Raycaster` to place part onto another mesh’s surface normal.
4. **AABB face snapping:** Snap bounding boxes together for quick stacking.

### UI Controls
- `TransformControls` for gizmo manipulation (move/rotate/scale).
- Mouse click + raycast for selecting objects or anchors.
- Keyboard modifiers (e.g., Ctrl/Cmd for surface snap).

### Export Options
Supported exporters:
- `GLTFExporter` → `.glb` / `.gltf`
- `OBJExporter` → `.obj`
- `STLExporter` → `.stl`
- `PLYExporter` → `.ply`
- `USDZExporter` → `.usdz` (Apple AR Quick Look)

---

## React Example Component

A full React component was provided with:
- File import (drag & drop or file picker).
- Multiple GLB loading.
- Gizmo controls.
- Grid/surface/anchor snapping.
- Export buttons for GLB/OBJ/STL.

---

## HTML (No React) Example

A standalone HTML + ES modules version was also provided. It includes:
- Toolbar for import/export.
- Anchor snap selectors.
- Grid snapping toggle.
- Export to GLB/OBJ/STL.

---

## Add-ons

### USDZ Export
- React: import `USDZExporter`, parse assembly group, download blob as `.usdz`.
- HTML: add new button, import `USDZExporter`, trigger download.

### BVH Accelerated Picking
- Use `three-mesh-bvh` library.
- Patch prototypes (`acceleratedRaycast`, `computeBoundsTree`, `disposeBoundsTree`).
- Build BVH trees after model load.
- Works transparently with existing `Raycaster` calls.

---

## Notes & Gotchas
- **USDZ limitations:** limited material support.
- **BVH:** heavy on CPU, best for large meshes; only compute once.
- **Exports:** if precise world transforms are required, apply world matrices before exporting.
- **Versioning:** keep Three.js core and examples at same version.

---

## Deliverables from Conversation

1. **React Component:** full assembler with snapping and GLB/OBJ/STL export.
2. **HTML Snippet:** equivalent assembler for plain HTML/JS.
3. **Add-ons:** USDZ export and BVH accelerated picking in both React and HTML forms.
4. **Best Practices:** use anchors for precise snapping, normalize geometry, use metadata for compatibility, accelerate raycasts with BVH.

---

This document should be used by Claude Code (or any other AI coding agent) to learn from the implementation patterns, APIs, and workflows around Three.js multi-part assembly, snapping, and exporting.
