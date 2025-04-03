// @ts-check
import { expect } from "@playwright/test";
// @ts-ignore

//import {InputElements} from '../elements/InputElements';

import InputElements from '../elements/InputElements';
import BtnElements from "../elements/btnElements";
//import ElementAssertions from '../assertions/ElementAssertions';
 class ContactPage {

   // elemntAssertions = new ElementAssertions(this.page);
    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){

        this.page =page;
        this.inputsFormSection = new InputElements(page,'.evf-field-container');
        this.btnFormSection = new BtnElements(page,'.evf-submit-container ');

        //this.userNameInput = new InputElements(page,'.contact-name input');
       // this.emailInput = new InputElements(page,'.contact-email input');
        //this.phoneInput = new InputElements(page,'.contact-phone input');
        //this.messageInput = new InputElements(page,'.contact-message textarea');
        this.submitBtn = page.getByRole('button',{name: 'Submit'});
        this.messageSuccess = page.getByRole('alert');
    }

    async navigateToContactPage(){
        await this.page.goto('/contact');
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

       // await this.userNameInput.typeText(name,{label:'Name'});
       // await this.emailInput.typeText(email,{label:'Email'});
      // await this.phoneInput.typeText(phone,{label:'Phone'});
       // await this.messageInput.typeText(msg,{label:'Message'});
        //await this.nameInput.fill(name);
       // await this.emailInput.fill(email);
        //await this.phoneInput.fill(phone);
       // await this.messageInput.fill(msg);
        //await this.submitBtn.click();
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