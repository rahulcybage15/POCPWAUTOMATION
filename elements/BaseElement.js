class BaseElement {

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector for the button element.
     */


    constructor(page,selector){
        this.page =page;
        //this.selector = selector;
        this.element = page.locator(selector);

    }
    async click(){
        await this.element.click();
        //await this.page.locator(this.selector).click();
    }
}

export default BaseElement;