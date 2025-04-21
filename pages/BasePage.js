import { ur } from "@faker-js/faker";
import { expect } from "@playwright/test";

class BasePage {

    constructor(page) {
        this.page = page;
        this.locatorMap = {};
        
    }

    getLocator(key){

        const locator  = this.locatorMap[key];

        if(!locator){
            throw new Error(`locator for "${key}" not found in map.`);
        }
        if(typeof locator  === 'string'){
            return this.page.locator(locator);

        }
        if(locator.role){
            return this.page.getByRole(locator.role, locator.options || {});
        }
        throw new Error (`not supported locator "${key}"`);

    }

    // Navigate to a URL
    async navigate(url) {
        console.log(`[NAVIGATE] --> ${url}`);
        await this.page.goto(url);
    }

    // Get page title
    async getTitle() {
        return await this.page.title();
    }

    // Find an element
    async findElement(selector) {
        return this.page.locator(selector);
    }

    // Click an element
    async clickElement(selectorOrLocator) {
        const element = typeof selectorOrLocator === 'string'
        ? this.page.locator(selectorOrLocator)
        : selectorOrLocator;
        await element.click();
    }

    // Type text into an input field
    async typeText(selectorOrLocator, text) {
        const element = typeof selectorOrLocator === 'string'
        ? this.page.locator(selectorOrLocator)
        : selectorOrLocator;

        await element.fill('');
        await element.fill(text);
    }

    // Get text content of an element
    async getText(selectorOrLocator) {

        const element = typeof selectorOrLocator === 'string'
        ? this.page.locator(selectorOrLocator) : selectorOrLocator;

        await element.waitFor({ state: 'visible' });
        return await element.innerText();
    }

    // Select from a dropdown
    async selectDropdown(selectorOrLocator, value) {

        const element = typeof selectorOrLocator === 'string'
            ? this.page.locator(selectorOrLocator)
            : selectorOrLocator;

        await element.selectOption(value);
    }

    // Check if an element is visible
    async isElementVisible(selectorOrLocator) {
        const element = typeof selectorOrLocator === 'string'
            ? this.page.locator(selectorOrLocator)
            : selectorOrLocator;
            return await element.isVisible();
    }

    // Wait for an element to be visible
    async waitForElement(selectorOrLocator, timeout = 5000) {
        const element = typeof selectorOrLocator === 'string'
            ? this.page.locator(selectorOrLocator)
            : selectorOrLocator;

            await element.waitFor({ state: 'visible', timeout });
    }

    // Take a screenshot
    async takeScreenshot(filename = 'screenshot.png') {
        await this.page.screenshot({ path: filename });
    }

    // Handle alerts (accept/dismiss)
    async handleAlert(action = 'accept') {
        this.page.on('dialog', async dialog => {
            if (action === 'accept') {
                await dialog.accept();
            } else {
                await dialog.dismiss();
            }
        });
    }

    // Get attribute value
    async getAttribute(selectorOrLocator, attribute) {

        const element = typeof selectorOrLocator === 'string'
            ? this.page.locator(selectorOrLocator)
            : selectorOrLocator;
            return await element.getAttribute(attribute);

    }

    // Scroll to element
    async scrollToElement(selectorOrLocator) {
        const element = typeof selectorOrLocator === 'string'
            ? this.page.locator(selectorOrLocator)
            : selectorOrLocator;
            await element.scrollIntoViewIfNeeded();
    }

    // Wait for a response matching a specific URL or regex
    async waitForResponse(urlOrRegex, timeout = 10000) {
        return await this.page.waitForResponse(response => response.url().includes(urlOrRegex), { timeout });
    }
}

export default BasePage;
