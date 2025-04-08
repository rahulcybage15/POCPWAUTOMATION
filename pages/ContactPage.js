// @ts-check
import { expect } from "@playwright/test";
// @ts-ignore


import InputElements from '../elements/InputElements';
import BtnElements from "../elements/btnElements";
import BasePage from "./BasePage";
import ContactPageLocators from "./Locators/ContactPageLocators";
import VerificationUtils from "../utils/VerificationUtils";

 class ContactPage extends BasePage {

   
    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){

        super(page);
        this.locatorMap = ContactPageLocators;
        
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

        await this.typeText(this.getLocator('nameInput'),name);
        await this.typeText(this.getLocator('emailInput'),email);
        await this.typeText(this.getLocator('phoneInput'),phone);
        await this.typeText(this.getLocator('messageInput'),msg);
        await this.getLocator('btnSubmit').click();
    }

    async verifySuccessMessage(){

        const sucessLocator= await this.getLocator('messageSuccess');
        await expect(sucessLocator).toBeVisible();
        //const messageText = await sucessLocator.innerText();
        await expect(sucessLocator).toContainText(`${process.env.CONTACT_PAGE_SUCCESS_TITLE}`);
    }

    async verifyContactPageURL(){
        VerificationUtils.pageHaveURL(this.page,`${process.env.BASE_URL}/contact/`);

    }


}

export default ContactPage;