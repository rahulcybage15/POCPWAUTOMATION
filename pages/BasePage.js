

class BasePage {

    constructor(page) {
        this.page = page;
    }

    // Navigate to a URL
    async navigate(url) {
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
    async clickElement(selector) {
        await this.page.locator(selector).click();
    }

    // Type text into an input field
    async typeText(selector, text) {
        const element = this.page.locator(selector);
        await element.fill('');
        await element.fill(text);
    }

    // Get text content of an element
    async getText(selector) {
        return await this.page.locator(selector).innerText();
    }

    // Select from a dropdown
    async selectDropdown(selector, value) {
        await this.page.locator(selector).selectOption(value);
    }

    // Check if an element is visible
    async isElementVisible(selector) {
        return await this.page.locator(selector).isVisible();
    }

    // Wait for an element to be visible
    async waitForElement(selector, timeout = 5000) {
        await this.page.locator(selector).waitFor({ state: 'visible', timeout });
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
    async getAttribute(selector, attribute) {
        return await this.page.locator(selector).getAttribute(attribute);
    }

    // Scroll to element
    async scrollToElement(selector) {
        await this.page.locator(selector).scrollIntoViewIfNeeded();
    }

    // Wait for a response matching a specific URL or regex
    async waitForResponse(urlOrRegex, timeout = 10000) {
        return await this.page.waitForResponse(response => response.url().includes(urlOrRegex), { timeout });
    }
}

export default BasePage;
