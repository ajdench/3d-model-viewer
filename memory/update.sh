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
