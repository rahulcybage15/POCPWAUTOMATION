//@ts-check

import BaseElement from './BaseElement';

class InputElements extends BaseElement{

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector for the button element.
     */


    constructor(page, selector){
        super(page,selector);
        this.element = page.locator(selector);
    }
    /**
     * 
     * @param {string} text 
     */

    async typeText(text){
        this.element.fill(text);
    }

    async getTheText(){
        this.element.innerText();
    }
}

export default InputElements;