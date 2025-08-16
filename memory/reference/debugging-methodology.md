# Evidence-Based Debugging Methodology

## Core Principle
**User-reported runtime errors > Theoretical code analysis**

## Success Protocol
1. **🚨 User Reports First**: Real error messages are gold-standard debugging data
2. **🧪 Runtime Verification**: Test actual behavior before analyzing code structure  
3. **🔍 Browser Console Priority**: Real errors trump theoretical analysis
4. **⚡ Function Accessibility**: Verify functions can actually be called
5. **🎯 Initialization Check**: Confirm app loads before debugging advanced features

## Anti-Patterns to Avoid
1. **Assumption-Based Debugging**: Theorizing without runtime evidence
2. **Code Analysis Paralysis**: Over-analyzing structure while missing execution failures
3. **Phantom Problem Chasing**: Elaborate solutions for non-existent issues
4. **Compilation Confidence**: Equating build success with functional success
5. **Initialization Blindness**: Not checking if app works before debugging features

## Quality Gates
1. **Code Compilation** ✅ (Necessary but insufficient)
2. **Code Archaeology Investigation** - Understand existing structure
3. **Function Boundary Analysis** - Validate function responsibilities  
4. **UI Interaction Testing** - End-to-end user workflows
5. **Template System Validation** - Dynamic controls verification
6. **Structural Root Cause Analysis** - Address underlying issues

## Historic Crisis Examples
- **syncSliderNumber Crisis (2025-08-05)**: 875+ duplicate lines, scope conflicts
- **Guide Line Failures**: Function boundary violations, template timing issues
- **Multiple Fix Failures**: Surface patching vs structural analysis

## Lessons Learned
- **Build Success ≠ Functional Success**
- **Real browser console errors** reveal root causes faster than code inspection
- **Evidence-based debugging** prevents assumption traps
- **User feedback integration** essential for validation