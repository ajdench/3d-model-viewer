#!/bin/bash
# Quick memory update script

SUMMARY="$1"
if [ -z "$SUMMARY" ]; then
    echo "Usage: ./update.sh 'Summary of changes'"
    exit 1
fi

DATE=$(date +"%Y-%m-%d %H:%M")
echo "" >> memory/active/status.md
echo "### Update: $DATE" >> memory/active/status.md
echo "- $SUMMARY" >> memory/active/status.md

# Run compression check
./memory/compress.sh

# Check CLAUDE.md size and warn if approaching limit
if [ -f "scripts/claude-md-monitor.py" ]; then
    CLAUDE_STATUS=$(python3 scripts/claude-md-monitor.py --warn 2>/dev/null)
    CLAUDE_EXIT_CODE=$?
    if [ $CLAUDE_EXIT_CODE -eq 1 ]; then
        echo "⚠️  CLAUDE.md size warning - consider compression"
        python3 scripts/claude-md-monitor.py --compress 2>/dev/null | head -10
    elif [ $CLAUDE_EXIT_CODE -eq 2 ]; then
        echo "⚠️  CLAUDE.md approaching size limit"
    fi
fi

echo "✓ Memory updated"

# CLAUDE.md GitHub Character Limit Monitor
# Script runs from project root, so CLAUDE.md is in current directory
CLAUDE_FILE="CLAUDE.md"
if [ -f "$CLAUDE_FILE" ]; then
    CLAUDE_CHARS=$(wc -c < "$CLAUDE_FILE")
    CLAUDE_LIMIT=37950
    CLAUDE_USAGE=$((CLAUDE_CHARS * 100 / CLAUDE_LIMIT))
    CLAUDE_REMAINING=$((CLAUDE_LIMIT - CLAUDE_CHARS))
    
    echo ""
    echo "📄 CLAUDE.md GitHub Limit Monitor"
    echo "========================================"
    echo "Current size: $CLAUDE_CHARS characters"
    echo "GitHub limit: $CLAUDE_LIMIT characters"
    echo "Usage: $CLAUDE_USAGE%"
    echo "Remaining: $CLAUDE_REMAINING characters"
    echo ""
    
    if [ $CLAUDE_CHARS -gt $CLAUDE_LIMIT ]; then
        echo "Status: 🚨 CRITICAL - EXCEEDS GITHUB LIMIT"
        echo "⚠️  CLAUDE.md is $((CLAUDE_CHARS - CLAUDE_LIMIT)) characters over GitHub limit!"
        echo "⚠️  Git commit will fail. Compression required immediately."
    elif [ $CLAUDE_USAGE -ge 95 ]; then
        echo "Status: 🚨 CRITICAL - Approaching GitHub limit"
        echo "⚠️  Less than 5% remaining. Compression needed before next commit."
    elif [ $CLAUDE_USAGE -ge 85 ]; then
        echo "Status: ⚠️  WARNING - Near GitHub limit"
        echo "⚠️  Consider compression soon to avoid commit issues."
    else
        echo "Status: ✅ SAFE"
    fi
    echo ""
else
    echo "⚠️  CLAUDE.md not found"
fi
