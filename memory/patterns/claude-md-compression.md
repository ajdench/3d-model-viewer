# CLAUDE.md Compression Patterns

## Use When
- CLAUDE.md approaches 35,000 characters (87.5% of 40k limit)
- File contains duplicate or redundant sections
- Historical information can be archived
- Content becomes too verbose for quick reference

## Problem Context
Large CLAUDE.md files reduce Claude Code performance and make information harder to find. The 40,000 character limit ensures optimal loading and processing times.

## Solution Strategies

### 1. Content Prioritization (Keep/Archive/Remove)

**KEEP (Essential Core)**:
- Memory management system (current version)
- Project overview and architecture
- Commands and development guidelines
- Recent version changes (last 2-3 versions)
- Key function references
- Current troubleshooting issues

**ARCHIVE (Move to memory/archive/)**:
- Detailed version history older than 6 months
- Resolved issues that no longer occur
- Deprecated feature documentation
- Verbose implementation details

**REMOVE (Eliminate)**:
- Duplicate sections
- Redundant explanations
- Overly verbose descriptions
- Outdated information

### 2. Compression Techniques

**Text Optimization**:
```markdown
# BEFORE (verbose)
### Lighting Controls Redesign (v2.4)
- **Compact Layout**: Redesigned LIGHTING CONTROLS panel with compact, integrated layout.
- **Vertical Sliders**: Left and Right directional light controls positioned as vertical sliders.

# AFTER (compressed)
**Lighting Controls (v2.4)**: Compact design with vertical sliders, perfect alignment
```

**List Consolidation**:
```markdown
# BEFORE (separate items)
**Loading (v2.0)**: Fixed CDN timing issues → ES6 modules + Vite bundling
**Functions (v2.0)**: Fixed nested definitions → top-level scope organization
**Materials (v2.0)**: Fixed geometry-only controls → helper functions

# AFTER (grouped)
**Core System Fixes (v2.0)**: ES6 modules + Vite bundling, top-level functions, helper function material controls
```

**Reference Linking**:
```markdown
# BEFORE (inline details)
Complex troubleshooting steps with detailed explanations...

# AFTER (referenced)
**Complex Issue**: See memory/fixes/2024-08-02-complex-issue.md for detailed solution
```

### 3. Structural Optimization

**Section Merging**:
- Combine related troubleshooting items
- Merge similar version change descriptions
- Consolidate function references by category

**Information Hierarchy**:
- Use bullet points instead of paragraphs
- Employ consistent heading levels
- Prioritize most recent/relevant information

### 4. Automated Monitoring

**Prevention System**:
```bash
# Check before updates
python3 scripts/claude-md-monitor.py

# Integrated warnings in memory updates
./memory/update.sh "changes"  # Auto-checks CLAUDE.md size

# Git commit protection
# Pre-commit hook prevents oversized commits
```

## Implementation Example: v2.7+ Cleanup

### Problem Identified
- GEMINI created duplicate "Major Changes" section
- 600+ characters of redundant content
- Inconsistent section structure

### Solution Applied
1. **Removed Duplicate Section**: Lines 241-260 eliminated
2. **Preserved Information**: All unique content retained in existing sections
3. **Maintained Structure**: Kept chronological version progression

### Results
- **Before**: 14,629 characters
- **After**: 13,264 characters  
- **Saved**: 1,365 characters (9.3% reduction)
- **Status**: ✅ HEALTHY (33.2% of limit)

## Compression Decision Tree

```
CLAUDE.md > 35k chars?
├─ Yes → Immediate compression needed
│   ├─ Archive old version details
│   ├─ Remove duplicates
│   └─ Consolidate sections
└─ No → Monitor and prevent growth
    ├─ Check for redundancy
    ├─ Use concise formatting
    └─ Reference external memory files
```

## Best Practices

### Content Guidelines
1. **One-line summaries** for version changes
2. **Bullet points** instead of paragraphs
3. **External references** for detailed procedures
4. **Recent focus** - prioritize last 2-3 versions
5. **Essential only** - remove nice-to-have details

### Maintenance Routine
1. **Weekly review** of file size during maintenance
2. **Pre-commit checks** prevent bloat accumulation
3. **Archive pattern** - move old content to memory/archive/
4. **Version rotation** - keep only recent version details

### Emergency Compression (>38k chars)
1. **Immediate actions**:
   - Remove duplicate sections
   - Archive version history >6 months old
   - Consolidate similar troubleshooting items
   - Move detailed patterns to memory/patterns/

2. **Content triage**:
   - Essential core information (keep)
   - Historical details (archive)
   - Redundant content (remove)

## Tools and Automation

- **Monitor**: `python3 scripts/claude-md-monitor.py`
- **Analysis**: `python3 scripts/claude-md-monitor.py --compress`
- **Prevention**: Git pre-commit hooks
- **Integration**: Automatic size checks in memory updates

## Trade-offs

**Advantages**:
- Faster Claude Code loading
- Easier information finding
- Sustainable documentation growth
- Automated maintenance

**Considerations**:
- Some historical detail lost (but archived)
- Requires discipline in content creation
- May need periodic manual review
- Balance between completeness and conciseness