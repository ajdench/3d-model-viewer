# CLAUDE.md Version Update Template

## Template for Major Changes Section

```markdown
**{FEATURE_NAME} ({VERSION})**: {BRIEF_DESCRIPTION} - {KEY_TECHNICAL_DETAILS}
```

### Examples:

```markdown
**Unified Surface Transparency (v2.9.5)**: Five transparency modes for high-poly models - Unified Surface (optimized blending for clean high-poly appearance), WBOIT (Alpha Test approach), Advanced (DoubleSide+adaptive blending), Standard, Dithered (Bayer pattern). Resolved transparency range issues for smooth 1.0→0.0 opacity control.

**Advanced Lighting Controls (v2.8.0)**: Dual-mode lighting system with Basic/Complex modes - vertical sliders, light pad positioning, icon rotation, and light targeting. Compact design with pixel-perfect alignment.

**Collapsible Controls (v2.7.0)**: All control sections now collapsible with smooth CSS animations - persistent state, full accessibility (ARIA), keyboard navigation support.
```

## Template Variables:
- `{FEATURE_NAME}`: Main feature being added/updated
- `{VERSION}`: Version number (e.g., v2.9.6)
- `{BRIEF_DESCRIPTION}`: One-line summary of what was added
- `{KEY_TECHNICAL_DETAILS}`: Important technical specifications or capabilities

## Insertion Rules:
1. Add after most recent version entry
2. Maintain chronological order (newest first)
3. Keep consistent formatting with existing entries
4. Include technical details that help future developers
5. Mention any breaking changes or deprecations