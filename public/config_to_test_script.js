/**
 * Config to Test Script Generator
 * 
 * This script reads sender_config.json and generates runnable JavaScript
 * that can be pasted into the Electron DevTools console to test automation flows.
 * 
 * Usage:
 * 1. Run this script: node config_to_test_script.js
 * 2. Copy the generated output
 * 3. Paste into Electron DevTools console (with WhatsApp Web open)
 * 4. Call the generated test functions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the config file
const configPath = path.join(__dirname, 'sender_config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Helper function to generate selector resolution code
function generateSelectorResolver(selectorName, selectorValue) {
    if (Array.isArray(selectorValue)) {
        return `
    // Try multiple selectors for ${selectorName}
    let ${selectorName} = null;
    const ${selectorName}_options = ${JSON.stringify(selectorValue)};
    for (const xpath of ${selectorName}_options) {
        try {
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            if (result.singleNodeValue) {
                ${selectorName} = result.singleNodeValue;
                console.log('✓ Found ${selectorName} using:', xpath);
                break;
            }
        } catch (e) {
            console.warn('Failed to evaluate xpath:', xpath, e);
        }
    }
    if (!${selectorName}) {
        console.error('✗ Could not find ${selectorName} with any selector');
    }`;
    } else if (selectorValue.startsWith('//')) {
        // XPath selector
        return `
    const ${selectorName} = document.evaluate('${selectorValue}', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (${selectorName}) {
        console.log('✓ Found ${selectorName}');
    } else {
        console.error('✗ Could not find ${selectorName}');
    }`;
    } else {
        // CSS selector
        return `
    const ${selectorName} = document.querySelector('${selectorValue}');
    if (${selectorName}) {
        console.log('✓ Found ${selectorName}');
    } else {
        console.error('✗ Could not find ${selectorName}');
    }`;
    }
}

// Helper function to generate action execution code
function generateActionCode(action, context = {}) {
    const { action: actionType, selector, value, key, duration, description, optional } = action;
    
    let code = '';
    
    if (description) {
        code += `\n    console.log('${description}');\n`;
    }
    
    if (optional) {
        code += `    // Optional step - won't fail if it errors\n`;
        code += `    try {\n`;
    }
    
    switch (actionType) {
        case 'wait':
            code += `    // Wait for ${selector} (timeout: ${action.timeout}s)\n`;
            code += `    await new Promise((resolve, reject) => {\n`;
            code += `        const timeout = setTimeout(() => reject(new Error('Timeout waiting for ${selector}')), ${action.timeout * 1000});\n`;
            code += `        const checkElement = () => {\n`;
            code += `            if (${selector}) {\n`;
            code += `                clearTimeout(timeout);\n`;
            code += `                resolve();\n`;
            code += `            } else {\n`;
            code += `                setTimeout(checkElement, 100);\n`;
            code += `            }\n`;
            code += `        };\n`;
            code += `        checkElement();\n`;
            code += `    });\n`;
            break;
            
        case 'click':
            code += `    if (${selector}) {\n`;
            code += `        ${selector}.click();\n`;
            code += `        console.log('✓ Clicked ${selector}');\n`;
            code += `    } else {\n`;
            code += `        console.error('✗ Cannot click ${selector} - element not found');\n`;
            code += `    }\n`;
            break;
            
        case 'type':
            const typeValue = value.startsWith('${') ? `context.${value.slice(2, -1)}` : `'${value}'`;
            code += `    if (${selector}) {\n`;
            code += `        ${selector}.focus();\n`;
            code += `        ${selector}.textContent = ${typeValue};\n`;
            code += `        ${selector}.dispatchEvent(new Event('input', { bubbles: true }));\n`;
            code += `        console.log('✓ Typed into ${selector}:', ${typeValue});\n`;
            code += `    } else {\n`;
            code += `        console.error('✗ Cannot type into ${selector} - element not found');\n`;
            code += `    }\n`;
            break;
            
        case 'key':
            const keyTarget = selector ? selector : 'document.activeElement';
            code += `    {\n`;
            code += `        const target = ${keyTarget} || document.activeElement;\n`;
            code += `        const event = new KeyboardEvent('keydown', { key: '${key}', code: '${key}', bubbles: true });\n`;
            code += `        target.dispatchEvent(event);\n`;
            code += `        console.log('✓ Pressed ${key}');\n`;
            code += `    }\n`;
            break;
            
        case 'sleep':
            code += `    await new Promise(resolve => setTimeout(resolve, ${duration * 1000}));\n`;
            code += `    console.log('✓ Waited ${duration}s');\n`;
            break;
    }
    
    if (optional) {
        code += `    } catch (e) {\n`;
        code += `        console.warn('⚠ Optional step failed:', e.message);\n`;
        code += `    }\n`;
    }
    
    return code;
}

// Generate test functions for each script
function generateTestFunctions() {
    let output = `// ============================================
// WhatsApp Automation Test Scripts
// Generated from sender_config.json
// ============================================

// Copy and paste this entire script into Electron DevTools Console

`;

    // Generate selector resolution function
    output += `// Function to resolve all selectors\nfunction resolveSelectors() {\n`;
    for (const [name, value] of Object.entries(config.EL_ADDRESS)) {
        output += generateSelectorResolver(name, value);
    }
    output += `}\n\n`;

    // Generate test function for each script
    for (const [scriptName, actions] of Object.entries(config.SCRIPTS)) {
        output += `// Test function for: ${scriptName}\n`;
        output += `async function test_${scriptName}(context = {}) {\n`;
        output += `    console.log('\\n========== Testing: ${scriptName} ==========');\n`;
        output += `    \n`;
        output += `    // Resolve selectors first\n`;
        output += `    resolveSelectors();\n`;
        output += `    \n`;
        
        for (const action of actions) {
            output += generateActionCode(action);
        }
        
        output += `    \n`;
        output += `    console.log('✓ ${scriptName} completed successfully');\n`;
        output += `}\n\n`;
    }

    // Add convenience functions
    output += `// ============================================
// Convenience Functions
// ============================================

// Test all scripts
async function testAll() {
    console.log('Testing all automation scripts...');
    
    // Test search contact
    await test_search_contact({ phone: '+1234567890' });
    
    // Test send message
    await test_send_message({ message: 'Test message from automation' });
    
    // Test clear dialogs
    await test_clear_dialogs();
    
    // Test disable disappearing message
    await test_disable_disappearing_message();
    
    // Note: send_pdf_flow requires a file path, test manually
    console.log('\\n⚠ send_pdf_flow requires a file path - test manually');
    
    console.log('\\n✓ All tests completed!');
}

// Quick selector check
function checkSelectors() {
    console.log('\\n========== Checking All Selectors ==========');
    resolveSelectors();
    console.log('\\n✓ Selector check completed');
}

// ============================================
// Usage Examples
// ============================================

console.log(\`
Available test functions:
- checkSelectors()                          // Check if all selectors can be found
- test_search_contact({ phone: '+1234567890' })
- test_send_message({ message: 'Hello!' })
- test_clear_dialogs()
- test_disable_disappearing_message()
- test_send_pdf_flow({ file_path: '/path/to/file.pdf', caption: 'Test' })
- testAll()                                 // Run all tests (except send_pdf_flow)

Example:
  await test_search_contact({ phone: '+919876543210' })
\`);
`;

    return output;
}

// Generate and save the test script
const testScript = generateTestFunctions();
const outputPath = path.join(__dirname, 'whatsapp_test_script.js');
fs.writeFileSync(outputPath, testScript);

console.log('✓ Test script generated successfully!');
console.log(`Output: ${outputPath}`);
console.log('\nTo use:');
console.log('1. Open WhatsApp Web in Electron');
console.log('2. Open DevTools Console (Cmd+Option+I)');
console.log('3. Copy and paste the contents of whatsapp_test_script.js');
console.log('4. Run test functions like: await test_search_contact({ phone: "+1234567890" })');
