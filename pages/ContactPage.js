// @ts-check
import { expect } from "@playwright/test";
// @ts-ignore

//import {InputElements} from '../elements/InputElements';

import InputElements from '../elements/InputElements';
import BtnElements from "../elements/btnElements";
import BasePage from "./BasePage";
//import ElementAssertions from '../assertions/ElementAssertions';
 class ContactPage extends BasePage {

   // elemntAssertions = new ElementAssertions(this.page);
    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){

        super();
        this.page =page;
        this.inputsFormSection = new InputElements(page,'.evf-field-container');
        this.btnFormSection = new BtnElements(page,'.evf-submit-container ');
        this.submitBtn = page.getByRole('button',{name: 'Submit'});
        this.messageSuccess = page.getByRole('alert');
    }

    async navigateToContactPage(){

        await this.navigate(`${process.env.BASE_URL}/contact`);
        
    }


    /**
     * @param {string} name
     * @param {string} email
     * @param {string} phone
     * @param {string} msg
     */
    async fillTheForm(name,email,phone,msg){

        
        await this.inputsFormSection.typeText(name,{label:'Name'});
        await this.inputsFormSection.typeText(email,{label:'Email'});
        await this.inputsFormSection.typeText(phone,{label:'Phone'});
        await this.inputsFormSection.typeText(msg,{label:'Message'});
        await this.btnFormSection.findButtonByLabel({label: 'Submit' }).click();
    }

    async verifySuccessMessage(){
        //await this.elemntAssertions.elementHaveText();
        const successMessgae = await this.messageSuccess.innerText();
        console.log(successMessgae);
       await expect(this.messageSuccess).toBeVisible();
    }


}

export default ContactPage;