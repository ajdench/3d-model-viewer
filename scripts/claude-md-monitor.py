#!/usr/bin/env python3
"""
CLAUDE.md Character Limit Monitor

Monitors CLAUDE.md file size and provides warnings/suggestions to maintain
the file under 40,000 characters for optimal Claude Code performance.

Usage:
    python scripts/claude-md-monitor.py              # Check current status
    python scripts/claude-md-monitor.py --warn       # Show warnings only
    python scripts/claude-md-monitor.py --compress   # Show compression suggestions
"""

import os
import sys
import argparse
from pathlib import Path

# Configuration
MAX_CHARS = 40000
WARNING_THRESHOLD = 35000  # 87.5% of limit
CRITICAL_THRESHOLD = 38000  # 95% of limit

def get_char_count(file_path):
    """Get character count of file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        return len(content), content
    except FileNotFoundError:
        print(f"❌ Error: {file_path} not found")
        return 0, ""
    except Exception as e:
        print(f"❌ Error reading file: {e}")
        return 0, ""

def analyze_content_sections(content):
    """Analyze content to identify potential compression targets."""
    lines = content.split('\n')
    sections = {}
    current_section = None
    
    for i, line in enumerate(lines):
        if line.startswith('##'):
            current_section = line.strip()
            sections[current_section] = {'start': i, 'lines': 0, 'chars': 0}
        elif current_section:
            sections[current_section]['lines'] += 1
            sections[current_section]['chars'] += len(line) + 1  # +1 for newline
    
    return sections

def get_compression_suggestions(char_count, sections):
    """Provide specific compression suggestions based on content analysis."""
    suggestions = []
    
    if char_count > CRITICAL_THRESHOLD:
        suggestions.append("🚨 CRITICAL: File size exceeds 95% of limit!")
        
    # Identify largest sections
    large_sections = [(name, data['chars']) for name, data in sections.items() 
                     if data['chars'] > 1000]
    large_sections.sort(key=lambda x: x[1], reverse=True)
    
    if large_sections:
        suggestions.append("\n📊 Largest sections (potential compression targets):")
        for name, chars in large_sections[:5]:
            percentage = (chars / char_count) * 100
            suggestions.append(f"   • {name}: {chars:,} chars ({percentage:.1f}%)")
    
    # Specific compression strategies
    if char_count > WARNING_THRESHOLD:
        suggestions.append("\n💡 Compression strategies:")
        suggestions.append("   • Move detailed version history to memory/archive/")
        suggestions.append("   • Consolidate similar troubleshooting items")
        suggestions.append("   • Use bullet points instead of paragraphs")
        suggestions.append("   • Reference memory patterns instead of inline details")
        suggestions.append("   • Archive older 'Critical Fixes' to memory/fixes/")
    
    return suggestions

def format_size_status(char_count):
    """Format the current size status with visual indicators."""
    percentage = (char_count / MAX_CHARS) * 100
    
    if char_count < WARNING_THRESHOLD:
        status = "✅ HEALTHY"
        color = ""
    elif char_count < CRITICAL_THRESHOLD:
        status = "⚠️  WARNING"
        color = ""
    else:
        status = "🚨 CRITICAL"
        color = ""
    
    remaining = MAX_CHARS - char_count
    
    return f"""
📄 CLAUDE.md Size Monitor Report
{'=' * 40}
Current size: {char_count:,} characters
Limit: {MAX_CHARS:,} characters
Usage: {percentage:.1f}%
Remaining: {remaining:,} characters

Status: {status}
"""

def main():
    parser = argparse.ArgumentParser(description='Monitor CLAUDE.md character count')
    parser.add_argument('--warn', action='store_true', 
                       help='Show warnings only (exit code 1 if over threshold)')
    parser.add_argument('--compress', action='store_true',
                       help='Show compression suggestions')
    parser.add_argument('--file', default='CLAUDE.md',
                       help='Path to CLAUDE.md file (default: CLAUDE.md)')
    
    args = parser.parse_args()
    
    # Find CLAUDE.md file
    claude_md_path = Path(args.file)
    if not claude_md_path.exists():
        # Try relative to script location
        script_dir = Path(__file__).parent
        claude_md_path = script_dir.parent / args.file
    
    if not claude_md_path.exists():
        print(f"❌ Error: Cannot find {args.file}")
        return 1
    
    char_count, content = get_char_count(claude_md_path)
    if char_count == 0:
        return 1
    
    # Warning mode - just check and exit with code
    if args.warn:
        if char_count > WARNING_THRESHOLD:
            print(f"⚠️  CLAUDE.md size warning: {char_count:,}/{MAX_CHARS:,} characters ({(char_count/MAX_CHARS)*100:.1f}%)")
            return 1
        return 0
    
    # Normal mode - show full report
    print(format_size_status(char_count))
    
    if args.compress or char_count > WARNING_THRESHOLD:
        sections = analyze_content_sections(content)
        suggestions = get_compression_suggestions(char_count, sections)
        
        if suggestions:
            print('\n'.join(suggestions))
    
    # Exit with error code if critical
    if char_count > CRITICAL_THRESHOLD:
        return 1
    elif char_count > WARNING_THRESHOLD:
        return 2  # Warning level
    
    return 0

if __name__ == '__main__':
    sys.exit(main())