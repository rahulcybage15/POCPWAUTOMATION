//@ts-check

import BaseElement from './BaseElement';

class BtnElements extends BaseElement{

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector for the button element.
     */

    constructor(page,selector){
        super(page,selector);
        this.element = page.locator(selector);
    }

    /**
     * @returns {Promise<void>}
     */


    async clickOnBtn(){
       // await this.page.locator(this.selector).click();
       await this.element.click();
    }

    /**
     * @returns {Promise<boolean>}
     */
    async isBtnEnabled(){
        return await this.element.isEnabled();
    }

}

export default BtnElements;