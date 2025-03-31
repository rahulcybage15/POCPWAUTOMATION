//@ts-check

import { el } from '@faker-js/faker';
import BaseElement from './BaseElement';

class LablelElements extends BaseElement{

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} sectionSelector - selector for the section containing inputs.
     */


    constructor(page, sectionSelector){
        super(page,sectionSelector);
        this.section = page.locator(sectionSelector);
    }

    /**
 * Finds a <div> inside the section and returns its inner text.
 * @param {object} options
 * @param {string} [options.selector] - A specific selector for the div.
 * @param {string} [options.contains] - A partial text to match inside the div.
 * @returns {Promise<string>} - The inner text of the found div.
 */
async findDivText({ selector = "div", contains } = {}) {
    let divLocator = this.section.locator(selector);

    if (contains) {
        divLocator = this.section.locator(`${selector}:has-text("${contains}")`);
    }

    await divLocator.waitFor({ state: "visible" });
    console.log(await divLocator.innerText());
    return await divLocator.innerText();
}
}

export default LablelElements;