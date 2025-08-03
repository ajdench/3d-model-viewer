# Update Claude - Documentation Automation Guide

## Overview
The `update-claude.py` script automates the process of updating all project documentation when new features are implemented. It synchronizes CLAUDE.md, README.md, and the claude-dementia memory system with consistent version information.

## Quick Start

### Basic Usage
```bash
# Update with specific version and feature
python3 scripts/update-claude.py --version v2.9.6 --feature "New lighting system"

# Auto-detect current version and increment
python3 scripts/update-claude.py --auto-detect --feature "Transparency improvements" 

# Preview changes without applying (dry run)
python3 scripts/update-claude.py --dry-run --version v3.0.0 --feature "Major UI overhaul"
```

### Advanced Usage
```bash
# Auto-detect with custom increment type
python3 scripts/update-claude.py --auto-detect --increment minor --feature "New export formats"

# Include git commit after updates
python3 scripts/update-claude.py --version v2.9.7 --feature "Bug fixes" --commit

# Specify custom project directory
python3 scripts/update-claude.py --root-dir /path/to/project --version v1.0.0 --feature "Initial release"
```

## Command Line Options

| Option | Description | Example |
|--------|-------------|---------|
| `--version` | Specify version number | `--version v2.9.6` |
| `--feature` | Feature description | `--feature "New UI components"` |
| `--auto-detect` | Auto-detect current version and increment | `--auto-detect` |
| `--increment` | Version increment type (major/minor/patch) | `--increment minor` |
| `--dry-run` | Preview changes without applying | `--dry-run` |
| `--commit` | Create git commit after updates | `--commit` |
| `--root-dir` | Project root directory | `--root-dir /path/to/project` |

## What Gets Updated

### 1. CLAUDE.md
- **Major Changes Section**: Adds new version entry with feature description
- **Project Header**: Updates version in "Current Project" section
- **Insertion Logic**: Places new entry after most recent version

### 2. README.md
- **Recent Updates Section**: Adds new version with detailed feature bullets
- **Version History**: Maintains reverse chronological order
- **User-Focused**: Emphasizes user benefits over technical details

### 3. Memory System
- **status.md**: Adds timestamped completion entry via memory/update.sh
- **context.md**: Updates current version and project status
- **Token Management**: Triggers automatic compression if needed

### 4. Backup System
- **Automatic Backups**: Creates timestamped backup before any changes
- **Recovery**: Backup location displayed in output for rollback
- **Safety**: Protects against data loss during updates

## Integration Workflows

### Development Workflow
1. **Implement Feature**: Complete code implementation and testing
2. **Update Docs**: Run update-claude.py with appropriate version and description
3. **Review Changes**: Check generated documentation updates
4. **Commit**: Use --commit flag or manually commit changes

### Release Workflow
```bash
# Major release
python3 scripts/update-claude.py --auto-detect --increment major --feature "Major release with breaking changes" --commit

# Minor release  
python3 scripts/update-claude.py --auto-detect --increment minor --feature "New features and improvements" --commit

# Patch release
python3 scripts/update-claude.py --auto-detect --increment patch --feature "Bug fixes and minor improvements" --commit
```

### CI/CD Integration
```bash
# In automated scripts
python3 scripts/update-claude.py --auto-detect --feature "$FEATURE_DESCRIPTION" --commit
```

## Version Detection Logic

### Auto-Detection Priority
1. **Git Tags**: Checks `git describe --tags --abbrev=0`
2. **CLAUDE.md**: Scans for version patterns like `v2.9.5`
3. **Manual Fallback**: Requires --version if detection fails

### Version Increment Rules
- **major**: Increments major number, resets minor/patch to 0
- **minor**: Increments minor number, resets patch to 0  
- **patch**: Increments patch number only (default)

## Error Handling

### Common Issues
1. **Missing Files**: Script validates all required files exist
2. **Git Not Clean**: Warns about uncommitted changes (continues unless --commit)
3. **Regex Failures**: Reports if insertion points not found
4. **Permission Errors**: Checks file write permissions

### Recovery Procedures
1. **Restore from Backup**: Backup location shown in output
2. **Git Reset**: Use git to revert documentation changes
3. **Manual Fix**: Edit files directly if script fails

## Customization

### Template Modification
- **CLAUDE.md Template**: `scripts/templates/claude-md-version-template.md`
- **README.md Template**: `scripts/templates/readme-version-template.md`
- **Memory Template**: `scripts/templates/memory-status-template.md`

### Pattern Customization
Edit regex patterns in `update-claude.py` for different documentation structures:
```python
# CLAUDE.md insertion point
dependency_pattern = r'(\*\*Dependency Updates \([^)]+\)\*\*.*?)\n'

# README.md insertion point  
pattern = r'(## 🔄 Recent Updates\n\n)'

# Version detection pattern
version_pattern = r'## Current Project: 3D Model Viewer v\d+\.\d+\.\d+'
```

## Best Practices

### Feature Descriptions
- **CLAUDE.md**: Technical focus with implementation details
- **README.md**: User benefit focus with clear value proposition
- **Consistency**: Use similar terminology across files

### Version Numbering
- **Semantic Versioning**: Follow semver principles (major.minor.patch)
- **Descriptive**: Choose versions that communicate change scope
- **Sequential**: Don't skip version numbers

### Documentation Quality
- **Before Updates**: Complete feature implementation and testing
- **Clear Descriptions**: Write concise but comprehensive feature descriptions  
- **Review Changes**: Always review generated documentation before committing
- **Backup Awareness**: Know backup location for recovery if needed

## Troubleshooting

### Script Fails to Run
```bash
# Check Python version
python3 --version

# Check file permissions
ls -la scripts/update-claude.py

# Check required files exist
ls CLAUDE.md README.md memory/active/
```

### Regex Pattern Issues
- Run with `--dry-run` first to test pattern matching
- Check file structure matches expected format
- Customize patterns for your specific documentation structure

### Git Integration Problems
- Ensure git working directory is clean (or accept warnings)
- Check git credentials for commits
- Verify branch permissions for pushes

This automation system ensures consistent, accurate documentation updates while saving time and reducing manual errors.