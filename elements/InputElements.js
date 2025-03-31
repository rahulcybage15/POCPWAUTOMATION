//@ts-check

import { el } from '@faker-js/faker';
import BaseElement from './BaseElement';

class InputElements extends BaseElement{

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} sectionSelector - selector for the section containing inputs.
     */


    constructor(page, sectionSelector){
        super(page,sectionSelector);
        this.section = page.locator(sectionSelector);
    }

    /**
     * 
     * @param {object} options
     * @param {string} [options.name]
     * @param {string} [options.placeholder]
     * @param {string} [options.label]
     * @returns {import('@playwright/test').Locator}
     */

    findInput({name, placeholder,label}){
        
        if(name) return this.section.locator(`input[name="${name}"],textarea[name="${name}"]`);
        if(placeholder) return this.section.locator(`input[placeholder="${placeholder}"], textarea[placeholder="${placeholder}"]`);
        if(label) return this.section.locator(`label:has-text("${label}") + input, label:has-text("${label}") + textarea`);
        throw new Error('Must provide name, placeholder, or label to find input');

    }


    /**
     * 
     * @param {string} text 
     * @param {object} options
     */

    async typeText(text,options){
        const input = this.findInput(options);
        await input.waitFor({state:'attached'});
        await input.fill('');
        await input.fill(text);
        //console.log('typing into:',await this.element.evaluate(el => el.outerHTML));
        //await this.element.waitFor({state:'attached'});
        //await this.element.fill('');
        //this.element.fill(text);
    }

    /**
     * @param {object} options
     * @returns {Promise<string>}
     */

    async getTheText(options){


        const input = this.findInput(options);
        await input.waitFor({state:'visible'});
        return await input.inputValue();
        //console.log('getting the value of',await this.element.evaluate(el => el.outerHTML));
        //console.log(await this.element.innerText());
       //return await this.element.innerText();
    }
}

export default InputElements;