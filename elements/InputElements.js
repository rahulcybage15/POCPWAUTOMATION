

import { el } from '@faker-js/faker';
import BaseElement from './BaseElement';
import { error } from 'console';

class InputElements extends BaseElement{

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} sectionSelector - selector for the section containing inputs.
     */


    constructor(page, sectionSelector){
        super(page,sectionSelector);
        this.section = page.locator(sectionSelector);
    }

    
    findInputByLabel({label} = {}){

        if(label){
            return this.section.locator(`xpath=//label[span[contains(text(),"${label}")]]/following-sibling::*[self::input or self::textarea]`);
        }else{
            throw new Error('label is required');
        }

    }

    /**
     * 
     * @param {string} text 
     * @param {object} label
     */

    async typeText(text,label){
        const input = this.findInputByLabel(label);
       // await input.waitFor({state:'visible'});
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