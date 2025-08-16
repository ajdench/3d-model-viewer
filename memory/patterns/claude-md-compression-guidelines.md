# CLAUDE.md Compression Guidelines

## Purpose
Maintain CLAUDE.md under 35,995 character GitHub limit while preserving essential development guidance.

## Compression Protocol

### Priority Order (Compress These First)
1. **Verbose Examples** - Keep essential code, remove explanatory text
2. **Repetitive Sections** - Consolidate similar information  
3. **Prose Paragraphs** - Convert to bullet points
4. **Long Command Explanations** - Use inline comments instead

### Compression Techniques
- **Lists > Paragraphs**: `- Item` vs "This item does..."
- **Tables > Prose**: Structured data in tabular format
- **References > Duplication**: Link to memory files vs copying content
- **Inline Comments > Separate Explanations**: `command # what it does`

### What NEVER to Compress
- Core memory commands and paths
- Essential project structure information
- Critical troubleshooting steps
- Core development guidelines

### Archive Strategy
Move detailed information to:
- `memory/reference/` for stable technical details
- `memory/patterns/` for reusable code patterns
- `memory/implementations/` for specific feature documentation

## Monitoring
- **Automatic**: Every `./memory/update.sh` run checks character count
- **Thresholds**: 85% warning, 95% critical, >100% blocks commit
- **Current Status**: Tracked in real-time with usage percentage

## Compression Actions by Usage Level
- **85-94%**: Compress verbose examples and prose
- **95-99%**: Archive detailed sections to memory/reference/
- **≥100%**: Emergency compression - remove all non-essential content

This pattern ensures CLAUDE.md remains functional while staying within GitHub limits.