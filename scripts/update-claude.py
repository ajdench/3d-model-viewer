#!/usr/bin/env python3
"""
Update Claude - Comprehensive Documentation & Automation System

Automatically updates CLAUDE.md, README.md, and claude-dementia memory system
with new version information and feature descriptions.

Usage:
    python scripts/update-claude.py --version v2.9.6 --feature "New lighting system"
    python scripts/update-claude.py --auto-detect
    python scripts/update-claude.py --dry-run --version v3.0.0
"""

import argparse
import json
import re
import os
import sys
import shutil
import subprocess
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

class UpdateClaude:
    def __init__(self, root_dir: str = "."):
        self.root_dir = Path(root_dir)
        self.backup_dir = self.root_dir / "backups" / f"update-claude-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
        self.files_to_update = {
            "CLAUDE.md": self.root_dir / "CLAUDE.md",
            "README.md": self.root_dir / "README.md",
            "memory/active/status.md": self.root_dir / "memory" / "active" / "status.md",
            "memory/active/context.md": self.root_dir / "memory" / "active" / "context.md"
        }
        
    def detect_current_version(self) -> Optional[str]:
        """Auto-detect current version from git tags, CLAUDE.md, or README.md"""
        try:
            # Try git tags first
            result = subprocess.run(
                ["git", "describe", "--tags", "--abbrev=0"], 
                capture_output=True, text=True, cwd=self.root_dir
            )
            if result.returncode == 0:
                return result.stdout.strip()
        except:
            pass
            
        # Try CLAUDE.md version references
        try:
            claude_md = self.files_to_update["CLAUDE.md"].read_text()
            version_matches = re.findall(r'v(\d+\.\d+\.\d+)', claude_md)
            if version_matches:
                # Return the highest version found
                versions = sorted(version_matches, key=lambda x: tuple(map(int, x.split('.'))))
                return f"v{versions[-1]}"
        except:
            pass
            
        return None
        
    def increment_version(self, current_version: str, version_type: str = "patch") -> str:
        """Increment version number based on type (major, minor, patch)"""
        if not current_version.startswith('v'):
            current_version = 'v' + current_version
            
        version_num = current_version[1:]  # Remove 'v' prefix
        major, minor, patch = map(int, version_num.split('.'))
        
        if version_type == "major":
            major += 1
            minor = 0
            patch = 0
        elif version_type == "minor":
            minor += 1
            patch = 0
        else:  # patch
            patch += 1
            
        return f"v{major}.{minor}.{patch}"
        
    def create_backup(self, files: List[Path]):
        """Create backup of files before modification"""
        self.backup_dir.mkdir(parents=True, exist_ok=True)
        
        for file_path in files:
            if file_path.exists():
                backup_path = self.backup_dir / file_path.name
                shutil.copy2(file_path, backup_path)
                print(f"  📁 Backed up: {file_path.name}")
                
    def update_claude_md(self, version: str, feature_description: str) -> bool:
        """Update CLAUDE.md with new version information"""
        claude_md_path = self.files_to_update["CLAUDE.md"]
        
        if not claude_md_path.exists():
            print(f"❌ ERROR: {claude_md_path} not found")
            return False
            
        content = claude_md_path.read_text()
        
        # Find the major changes section and add new entry
        major_changes_pattern = r'(\*\*[^*]+\*\*.*?): ([^\\n]+)'
        
        # Create new version entry
        new_entry = f'**{feature_description} ({version})**: [Description to be customized based on specific changes]'
        
        # Find insertion point (after dependency updates or similar recent entry)
        dependency_pattern = r'(\*\*Dependency Updates \([^)]+\)\*\*.*?)\n'
        match = re.search(dependency_pattern, content)
        
        if match:
            # Insert after dependency updates
            insertion_point = match.end()
            updated_content = (
                content[:insertion_point] + 
                new_entry + "\n" +
                content[insertion_point:]
            )
        else:
            # Fallback: add at the end of major changes section
            pattern = r'(### Code Impact)'
            match = re.search(pattern, content)
            if match:
                insertion_point = match.start()
                updated_content = (
                    content[:insertion_point] + 
                    new_entry + "\n\n" +
                    content[insertion_point:]
                )
            else:
                print("❌ Could not find insertion point in CLAUDE.md")
                return False
                
        # Also update the version in project overview if it exists
        def replace_version(match):
            return f"## Current Project: 3D Model Viewer v{version[1:]}"
        
        version_pattern = r'## Current Project: 3D Model Viewer v\d+\.\d+\.\d+'
        updated_content = re.sub(version_pattern, replace_version, updated_content)
        
        if self.dry_run:
            print(f"  📝 Would update CLAUDE.md with version {version}")
            return True
        else:
            claude_md_path.write_text(updated_content)
            print(f"  ✅ Updated CLAUDE.md with version {version}")
            return True
            
    def update_readme_md(self, version: str, feature_description: str) -> bool:
        """Update README.md with new version section"""
        readme_path = self.files_to_update["README.md"]
        
        if not readme_path.exists():
            print(f"❌ ERROR: {readme_path} not found")
            return False
            
        content = readme_path.read_text()
        
        # Create new version section
        new_version_section = f'''### Version {version}: {feature_description}
- **Feature Description**: [Customize based on actual changes]
- **Technical Details**: [Add specific implementation details]
- **User Impact**: [Describe user-facing improvements]

'''
        
        # Find insertion point after "Recent Updates" header
        pattern = r'(## 🔄 Recent Updates\n\n)'
        match = re.search(pattern, content)
        
        if match:
            insertion_point = match.end()
            updated_content = (
                content[:insertion_point] + 
                new_version_section +
                content[insertion_point:]
            )
        else:
            print("❌ Could not find 'Recent Updates' section in README.md")
            return False
            
        if self.dry_run:
            print(f"  📝 Would update README.md with version {version}")
            return True
        else:
            readme_path.write_text(updated_content)
            print(f"  ✅ Updated README.md with version {version}")
            return True
            
    def update_memory_system(self, version: str, feature_description: str) -> bool:
        """Update claude-dementia memory system files"""
        success = True
        
        # Update status.md using existing script
        try:
            update_message = f"{version} COMPLETE: {feature_description} - updated all documentation and automation"
            
            if self.dry_run:
                print(f"  📝 Would update memory system with: {update_message}")
            else:
                result = subprocess.run(
                    [str(self.root_dir / "memory" / "update.sh"), update_message],
                    capture_output=True, text=True, cwd=self.root_dir
                )
                if result.returncode == 0:
                    print(f"  ✅ Updated memory system status")
                else:
                    print(f"  ❌ Error updating memory system: {result.stderr}")
                    success = False
        except Exception as e:
            print(f"  ❌ Error running memory update script: {e}")
            success = False
            
        # Update context.md version
        context_path = self.files_to_update["memory/active/context.md"]
        if context_path.exists():
            try:
                content = context_path.read_text()
                
                # Update version in project header
                def replace_project_version(match):
                    return f"## Current Project: 3D Model Viewer v{version[1:]}"
                
                def replace_current_version(match):
                    return f"- **Current Version**: v{version[1:]}"
                
                version_pattern = r'## Current Project: 3D Model Viewer v\d+\.\d+\.\d+'
                updated_content = re.sub(version_pattern, replace_project_version, content)
                
                # Update current version line
                current_version_pattern = r'- \*\*Current Version\*\*: v\d+\.\d+\.\d+'
                updated_content = re.sub(current_version_pattern, replace_current_version, updated_content)
                
                if self.dry_run:
                    print(f"  📝 Would update context.md with version {version}")
                else:
                    context_path.write_text(updated_content)
                    print(f"  ✅ Updated context.md with version {version}")
                    
            except Exception as e:
                print(f"  ❌ Error updating context.md: {e}")
                success = False
        
        return success
        
    def validate_files(self) -> bool:
        """Validate that all required files exist and are readable"""
        missing_files = []
        
        for file_name, file_path in self.files_to_update.items():
            if not file_path.exists():
                missing_files.append(file_name)
                
        if missing_files:
            print(f"❌ Missing required files: {', '.join(missing_files)}")
            return False
            
        return True
        
    def check_git_status(self) -> Tuple[bool, List[str]]:
        """Check git status and return clean status and modified files"""
        try:
            result = subprocess.run(
                ["git", "status", "--porcelain"], 
                capture_output=True, text=True, cwd=self.root_dir
            )
            
            if result.returncode != 0:
                return False, ["Git not available or not a git repository"]
                
            modified_files = []
            for line in result.stdout.strip().split('\\n'):
                if line.strip():
                    modified_files.append(line.strip())
                    
            return len(modified_files) == 0, modified_files
            
        except Exception as e:
            return False, [f"Git check failed: {e}"]
            
    def create_git_commit(self, version: str, feature_description: str) -> bool:
        """Create git commit with updated documentation"""
        try:
            # Add modified files
            subprocess.run(["git", "add", "CLAUDE.md", "README.md"], cwd=self.root_dir)
            subprocess.run(["git", "add", "memory/active/"], cwd=self.root_dir)
            
            # Create commit
            commit_message = f"docs: Update documentation for {version} - {feature_description}"
            result = subprocess.run(
                ["git", "commit", "-m", commit_message],
                capture_output=True, text=True, cwd=self.root_dir
            )
            
            if result.returncode == 0:
                print(f"  ✅ Created git commit: {commit_message}")
                return True
            else:
                print(f"  ❌ Git commit failed: {result.stderr}")
                return False
                
        except Exception as e:
            print(f"  ❌ Git commit error: {e}")
            return False
            
    def run_update(self, version: str, feature_description: str, 
                   create_commit: bool = False, dry_run: bool = False) -> bool:
        """Run the complete update process"""
        self.dry_run = dry_run
        
        print(f"🚀 Update Claude Documentation System")
        print(f"📋 Version: {version}")
        print(f"📋 Feature: {feature_description}")
        print(f"📋 Mode: {'DRY RUN' if dry_run else 'EXECUTE'}")
        print()
        
        # Validation
        print("🔍 Validating prerequisites...")
        if not self.validate_files():
            return False
            
        # Git status check
        git_clean, modified_files = self.check_git_status()
        if not git_clean and not dry_run:
            print(f"⚠️  Warning: Git working directory not clean:")
            for file in modified_files[:5]:  # Show first 5 files
                print(f"    {file}")
            if len(modified_files) > 5:
                print(f"    ... and {len(modified_files) - 5} more files")
            print()
            
        # Create backup
        if not dry_run:
            print("📁 Creating backup...")
            files_to_backup = [path for path in self.files_to_update.values() if path.exists()]
            self.create_backup(files_to_backup)
            print()
        
        # Update files
        print("📝 Updating documentation files...")
        success = True
        
        success &= self.update_claude_md(version, feature_description)
        success &= self.update_readme_md(version, feature_description)
        success &= self.update_memory_system(version, feature_description)
        
        if not success:
            print("\\n❌ Some updates failed!")
            return False
            
        print()
        print("✅ All updates completed successfully!")
        
        # Optional git commit
        if create_commit and not dry_run:
            print("📝 Creating git commit...")
            self.create_git_commit(version, feature_description)
            
        # Summary
        print("\\n📊 Update Summary:")
        print(f"  Version: {version}")
        print(f"  Feature: {feature_description}")
        print(f"  Files Updated: {len(self.files_to_update)}")
        if not dry_run:
            print(f"  Backup Location: {self.backup_dir}")
        print()
        
        return True

def main():
    parser = argparse.ArgumentParser(description="Update Claude documentation system")
    parser.add_argument("--version", help="Version number (e.g., v2.9.6)")
    parser.add_argument("--feature", help="Feature description")
    parser.add_argument("--auto-detect", action="store_true", 
                       help="Auto-detect current version and increment")
    parser.add_argument("--increment", choices=["major", "minor", "patch"], 
                       default="patch", help="Version increment type")
    parser.add_argument("--commit", action="store_true", 
                       help="Create git commit after updates")
    parser.add_argument("--dry-run", action="store_true", 
                       help="Preview changes without applying")
    parser.add_argument("--root-dir", default=".", 
                       help="Root directory of the project")
    
    args = parser.parse_args()
    
    updater = UpdateClaude(args.root_dir)
    
    # Determine version
    if args.auto_detect:
        current_version = updater.detect_current_version()
        if current_version:
            version = updater.increment_version(current_version, args.increment)
            print(f"🔍 Detected current version: {current_version}")
            print(f"📈 New version: {version}")
        else:
            print("❌ Could not detect current version. Please specify --version")
            return 1
    elif args.version:
        version = args.version
        if not version.startswith('v'):
            version = 'v' + version
    else:
        print("❌ Must specify --version or use --auto-detect")
        return 1
        
    # Determine feature description
    feature_description = args.feature or "Feature updates"
    
    # Run update
    success = updater.run_update(
        version=version,
        feature_description=feature_description,
        create_commit=args.commit,
        dry_run=args.dry_run
    )
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())