// @ts-check
import { expect } from "@playwright/test";
// @ts-ignore

//import {InputElements} from '../elements/InputElements';

import InputElements from '../elements/InputElements';
//import ElementAssertions from '../assertions/ElementAssertions';
 class ContactPage {

   // elemntAssertions = new ElementAssertions(this.page);
    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){

        this.page =page;
        this.userNameInput = new InputElements(page,'.contact-name input');
        this.emailInput = new InputElements(page,'.contact-email input');
        this.phoneInput = new InputElements(page,'.contact-phone input');
        this.messageInput = new InputElements(page,'.contact-message textarea');
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

        await this.userNameInput.typeText(name);
        await this.emailInput.typeText(email);
        await this.phoneInput.typeText(phone);
        await this.messageInput.typeText(msg);
        //await this.nameInput.fill(name);
       // await this.emailInput.fill(email);
        //await this.phoneInput.fill(phone);
       // await this.messageInput.fill(msg);
        await this.submitBtn.click();
    }

    async verifySuccessMessage(){
        //await this.elemntAssertions.elementHaveText();
        const successMessgae = await this.messageSuccess.innerText();
        console.log(successMessgae);
       await expect(this.messageSuccess).toBeVisible();
    }


}

export default ContactPage;