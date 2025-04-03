

import BaseElement from './BaseElement';

class BtnElements extends BaseElement{

    /**
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} sectionSelector - selector for the section containing inputs.
     */

    constructor(page, sectionSelector){
        super(page,sectionSelector);
        this.section = page.locator(sectionSelector);
    }

    /**
     * @returns {Promise<void>}
     */


    async clickOnBtn(){
       // await this.page.locator(this.selector).click();
       await this.element.first().click();
    }

    /**
     * @returns{Promise<import ('@playwright/test').Locator>}
     */
    async getFirstElement(){
        //return new BtnElements(this.page,this.element.first());
        
        return this.element.first();

    }

    /**
     * @returns {Promise<boolean>}
     */
    async isBtnEnabled(){
        return await this.element.isEnabled();
    }

    findButtonByLabel({label} = {}){

        if(label){
            return this.section.locator(`xpath=//button[normalize-space(text())='${label}']`);
        }else{
            throw new Error('label is not given');
        }
    }

}

export default BtnElements;