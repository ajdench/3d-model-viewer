# 2025-08-10 Layout Alignment Inconsistencies

## Problem
Horizontal layout implementation revealed multiple alignment inconsistencies due to hardcoded values and lack of architectural standardization.

## Symptoms
- VIEW title misaligned with LIGHTING baseline (margin-top mismatch)
- Data column titles positioned differently than section titles 
- VIEW title left-alignment inconsistent with INTERACTION title
- Manual pixel-hunting required for each alignment fix

## Root Cause
**Architectural Fragmentation**: No centralized spacing/alignment system
- `.info-display` uses `padding: 15px` 
- `.horizontal-view-container` uses `margin-top: 10px`
- Data columns use `margin-top: 14px` → `4px` 
- VIEW title uses `margin-top: 4px`, `margin-left: 15px`
- Each component has individual hardcoded positioning values

## Fixes Applied
1. **Vertical Alignment**: Changed data columns from `margin-top: 14px` to `4px`
2. **Baseline Matching**: VIEW title `margin-top: 4px` to match LIGHTING
3. **Left Alignment**: VIEW title `margin-left: 15px` to match INTERACTION's padding

## Architectural Impact
These fixes are **symptomatic patches** of deeper structural issues:
- **No Common Variables**: Spacing values hardcoded throughout CSS
- **No Alignment System**: Each component positioned independently  
- **No Layout Standards**: Inconsistent margin/padding approaches
- **Manual Pixel Hunting**: Required for every alignment task

## Prevention Strategy
**CRITICAL NEED**: Comprehensive architectural review and modularization
- **CSS Variables System**: Centralize all spacing/alignment values
- **Layout Component Standards**: Consistent margin/padding patterns
- **Alignment Grid System**: Standardized baseline and left-edge alignment
- **Common Styling Modules**: Shared classes for consistent positioning

## Technical Debt Assessment
**HIGH PRIORITY**: These alignment inconsistencies indicate systemic architectural fragmentation requiring comprehensive modularization and variable standardization across the entire codebase.