// ============================================
// WhatsApp Automation Test Scripts
// Generated from sender_config.json
// ============================================

// Copy and paste this entire script into Electron DevTools Console

// Function to resolve all selectors
function resolveSelectors() {

    const new_chat_el = document.evaluate('//button[@aria-label='New dump chat']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (new_chat_el) {
        console.log('✓ Found new_chat_el');
    } else {
        console.error('✗ Could not find new_chat_el');
    }
    // Try multiple selectors for number_input_el
    let number_input_el = null;
    const number_input_el_options = ["//div[@contenteditable=\"true\" and @data-tab=\"3\"]","//div[@contenteditable=\"true\" and @role=\"textbox\"]","//p[@data-tab=\"3\"]","//*[@id=\"app\"]/div/div[3]/div/div[2]/div[1]/span/div/span/div/div[1]/div[2]/div/div/div[1]/p","//div[@title=\"Search input textbox\"]//div[@contenteditable=\"true\"]"];
    for (const xpath of number_input_el_options) {
        try {
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            if (result.singleNodeValue) {
                number_input_el = result.singleNodeValue;
                console.log('✓ Found number_input_el using:', xpath);
                break;
            }
        } catch (e) {
            console.warn('Failed to evaluate xpath:', xpath, e);
        }
    }
    if (!number_input_el) {
        console.error('✗ Could not find number_input_el with any selector');
    }
    const attachment_el = document.evaluate('//span[@data-icon='plus-rounded']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (attachment_el) {
        console.log('✓ Found attachment_el');
    } else {
        console.error('✗ Could not find attachment_el');
    }
    // Try multiple selectors for document_option_el
    let document_option_el = null;
    const document_option_el_options = ["//div[@role='menuitem' and contains(., 'Document')]","//span[contains(text(), 'Document')]"];
    for (const xpath of document_option_el_options) {
        try {
            const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            if (result.singleNodeValue) {
                document_option_el = result.singleNodeValue;
                console.log('✓ Found document_option_el using:', xpath);
                break;
            }
        } catch (e) {
            console.warn('Failed to evaluate xpath:', xpath, e);
        }
    }
    if (!document_option_el) {
        console.error('✗ Could not find document_option_el with any selector');
    }
    const doc_el = document.evaluate('//input[@accept = '*']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (doc_el) {
        console.log('✓ Found doc_el');
    } else {
        console.error('✗ Could not find doc_el');
    }
    const content_el = document.evaluate('//div[@aria-placeholder='Type a message']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (content_el) {
        console.log('✓ Found content_el');
    } else {
        console.error('✗ Could not find content_el');
    }
    const message_box = document.evaluate('//div[@aria-placeholder='Type a message']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (message_box) {
        console.log('✓ Found message_box');
    } else {
        console.error('✗ Could not find message_box');
    }
    const send_el = document.evaluate('//div[@aria-label="Send"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (send_el) {
        console.log('✓ Found send_el');
    } else {
        console.error('✗ Could not find send_el');
    }
    const qr_img = document.querySelector('div[data-ref]');
    if (qr_img) {
        console.log('✓ Found qr_img');
    } else {
        console.error('✗ Could not find qr_img');
    }
    const search_input = document.querySelector('div[title='Search input textbox']');
    if (search_input) {
        console.log('✓ Found search_input');
    } else {
        console.error('✗ Could not find search_input');
    }
    const list_el = document.querySelector('/html/body/div[1]/div/div/div[3]/div/div[2]/div[1]/span/div/span/div/div[2]/div/div/div');
    if (list_el) {
        console.log('✓ Found list_el');
    } else {
        console.error('✗ Could not find list_el');
    }
    const profile_details_el = document.evaluate('//div[@title='Profile details']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (profile_details_el) {
        console.log('✓ Found profile_details_el');
    } else {
        console.error('✗ Could not find profile_details_el');
    }
    const profile_section_el = document.querySelector('/html/body/div[1]/div/div/div[3]/div/div[5]/span/div/span/div/div/section');
    if (profile_section_el) {
        console.log('✓ Found profile_section_el');
    } else {
        console.error('✗ Could not find profile_section_el');
    }
    const off_option_el = document.evaluate('//span[text()='Off']/ancestor::label', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (off_option_el) {
        console.log('✓ Found off_option_el');
    } else {
        console.error('✗ Could not find off_option_el');
    }
    const disappearing_msg_el = document.evaluate('//span[contains(text(),'Disappearing messages')]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (disappearing_msg_el) {
        console.log('✓ Found disappearing_msg_el');
    } else {
        console.error('✗ Could not find disappearing_msg_el');
    }
    const list_of_names_el = document.querySelector('/html/body/div[1]/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/span/div/span/div/div[2]/div[2]/div/div/div[2]');
    if (list_of_names_el) {
        console.log('✓ Found list_of_names_el');
    } else {
        console.error('✗ Could not find list_of_names_el');
    }
    const back_and_save_button = document.evaluate('//button[@type='button' and @aria-label='Back']', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (back_and_save_button) {
        console.log('✓ Found back_and_save_button');
    } else {
        console.error('✗ Could not find back_and_save_button');
    }}

// Test function for: search_contact
async function test_search_contact(context = {}) {
    console.log('\n========== Testing: search_contact ==========');
    
    // Resolve selectors first
    resolveSelectors();
    
    // Wait for new_chat_el (timeout: 20s)
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Timeout waiting for new_chat_el')), 20000);
        const checkElement = () => {
            if (new_chat_el) {
                clearTimeout(timeout);
                resolve();
            } else {
                setTimeout(checkElement, 100);
            }
        };
        checkElement();
    });
    if (new_chat_el) {
        new_chat_el.click();
        console.log('✓ Clicked new_chat_el');
    } else {
        console.error('✗ Cannot click new_chat_el - element not found');
    }
    // Wait for number_input_el (timeout: 5s)
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Timeout waiting for number_input_el')), 5000);
        const checkElement = () => {
            if (number_input_el) {
                clearTimeout(timeout);
                resolve();
            } else {
                setTimeout(checkElement, 100);
            }
        };
        checkElement();
    });
    if (number_input_el) {
        number_input_el.focus();
        number_input_el.textContent = context.phone;
        number_input_el.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('✓ Typed into number_input_el:', context.phone);
    } else {
        console.error('✗ Cannot type into number_input_el - element not found');
    }
    {
        const target = number_input_el || document.activeElement;
        const event = new KeyboardEvent('keydown', { key: 'ENTER', code: 'ENTER', bubbles: true });
        target.dispatchEvent(event);
        console.log('✓ Pressed ENTER');
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('✓ Waited 3s');
    // Wait for message_box (timeout: 10s)
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Timeout waiting for message_box')), 10000);
        const checkElement = () => {
            if (message_box) {
                clearTimeout(timeout);
                resolve();
            } else {
                setTimeout(checkElement, 100);
            }
        };
        checkElement();
    });
    
    console.log('✓ search_contact completed successfully');
}

// Test function for: send_message
async function test_send_message(context = {}) {
    console.log('\n========== Testing: send_message ==========');
    
    // Resolve selectors first
    resolveSelectors();
    
    // Wait for message_box (timeout: 10s)
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Timeout waiting for message_box')), 10000);
        const checkElement = () => {
            if (message_box) {
                clearTimeout(timeout);
                resolve();
            } else {
                setTimeout(checkElement, 100);
            }
        };
        checkElement();
    });
    if (message_box) {
        message_box.click();
        console.log('✓ Clicked message_box');
    } else {
        console.error('✗ Cannot click message_box - element not found');
    }
    if (message_box) {
        message_box.focus();
        message_box.textContent = context.message;
        message_box.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('✓ Typed into message_box:', context.message);
    } else {
        console.error('✗ Cannot type into message_box - element not found');
    }
    {
        const target = message_box || document.activeElement;
        const event = new KeyboardEvent('keydown', { key: 'ENTER', code: 'ENTER', bubbles: true });
        target.dispatchEvent(event);
        console.log('✓ Pressed ENTER');
    }
    
    console.log('✓ send_message completed successfully');
}

// Test function for: clear_dialogs
async function test_clear_dialogs(context = {}) {
    console.log('\n========== Testing: clear_dialogs ==========');
    
    // Resolve selectors first
    resolveSelectors();
    

    console.log('Closing any open dialogs');
    {
        const target = document.activeElement || document.activeElement;
        const event = new KeyboardEvent('keydown', { key: 'ESCAPE', code: 'ESCAPE', bubbles: true });
        target.dispatchEvent(event);
        console.log('✓ Pressed ESCAPE');
    }
    {
        const target = document.activeElement || document.activeElement;
        const event = new KeyboardEvent('keydown', { key: 'ESCAPE', code: 'ESCAPE', bubbles: true });
        target.dispatchEvent(event);
        console.log('✓ Pressed ESCAPE');
    }
    {
        const target = document.activeElement || document.activeElement;
        const event = new KeyboardEvent('keydown', { key: 'ESCAPE', code: 'ESCAPE', bubbles: true });
        target.dispatchEvent(event);
        console.log('✓ Pressed ESCAPE');
    }
    
    console.log('✓ clear_dialogs completed successfully');
}

// Test function for: disable_disappearing_message
async function test_disable_disappearing_message(context = {}) {
    console.log('\n========== Testing: disable_disappearing_message ==========');
    
    // Resolve selectors first
    resolveSelectors();
    

    console.log('Opening profile details');
    // Optional step - won't fail if it errors
    try {
    if (profile_details_el) {
        profile_details_el.click();
        console.log('✓ Clicked profile_details_el');
    } else {
        console.error('✗ Cannot click profile_details_el - element not found');
    }
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }
    // Optional step - won't fail if it errors
    try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('✓ Waited 1s');
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }

    console.log('Clicking disappearing messages option');
    // Optional step - won't fail if it errors
    try {
    if (disappearing_msg_el) {
        disappearing_msg_el.click();
        console.log('✓ Clicked disappearing_msg_el');
    } else {
        console.error('✗ Cannot click disappearing_msg_el - element not found');
    }
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }
    // Optional step - won't fail if it errors
    try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('✓ Waited 1s');
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }

    console.log('Turning off disappearing messages');
    // Optional step - won't fail if it errors
    try {
    if (off_option_el) {
        off_option_el.click();
        console.log('✓ Clicked off_option_el');
    } else {
        console.error('✗ Cannot click off_option_el - element not found');
    }
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }

    console.log('Saving changes');
    // Optional step - won't fail if it errors
    try {
    if (back_and_save_button) {
        back_and_save_button.click();
        console.log('✓ Clicked back_and_save_button');
    } else {
        console.error('✗ Cannot click back_and_save_button - element not found');
    }
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }

    console.log('Closing profile sidebar');
    // Optional step - won't fail if it errors
    try {
    {
        const target = document.activeElement || document.activeElement;
        const event = new KeyboardEvent('keydown', { key: 'ESCAPE', code: 'ESCAPE', bubbles: true });
        target.dispatchEvent(event);
        console.log('✓ Pressed ESCAPE');
    }
    } catch (e) {
        console.warn('⚠ Optional step failed:', e.message);
    }
    
    console.log('✓ disable_disappearing_message completed successfully');
}

// Test function for: send_pdf_flow
async function test_send_pdf_flow(context = {}) {
    console.log('\n========== Testing: send_pdf_flow ==========');
    
    // Resolve selectors first
    resolveSelectors();
    

    console.log('Clicking attachment button');
    if (attachment_el) {
        attachment_el.click();
        console.log('✓ Clicked attachment_el');
    } else {
        console.error('✗ Cannot click attachment_el - element not found');
    }

    console.log('Selecting Document option');
    if (document_option_el) {
        document_option_el.click();
        console.log('✓ Clicked document_option_el');
    } else {
        console.error('✗ Cannot click document_option_el - element not found');
    }

    console.log('Uploading file');
    if (doc_el) {
        doc_el.focus();
        doc_el.textContent = context.file_path;
        doc_el.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('✓ Typed into doc_el:', context.file_path);
    } else {
        console.error('✗ Cannot type into doc_el - element not found');
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('✓ Waited 2s');

    console.log('Entering caption');
    if (content_el) {
        content_el.focus();
        content_el.textContent = context.caption;
        content_el.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('✓ Typed into content_el:', context.caption);
    } else {
        console.error('✗ Cannot type into content_el - element not found');
    }

    console.log('Clicking send button');
    if (send_el) {
        send_el.click();
        console.log('✓ Clicked send_el');
    } else {
        console.error('✗ Cannot click send_el - element not found');
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('✓ Waited 3s');
    
    console.log('✓ send_pdf_flow completed successfully');
}

// ============================================
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
    console.log('\n⚠ send_pdf_flow requires a file path - test manually');
    
    console.log('\n✓ All tests completed!');
}

// Quick selector check
function checkSelectors() {
    console.log('\n========== Checking All Selectors ==========');
    resolveSelectors();
    console.log('\n✓ Selector check completed');
}

// ============================================
// Usage Examples
// ============================================

console.log(`
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
`);
