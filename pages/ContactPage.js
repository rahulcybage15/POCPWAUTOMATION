// @ts-check
import { expect } from "@playwright/test";

export class ContactPage {

    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){

        this.page =page;
        this.nameInput =page.locator('.contact-name input');
        this.emailInput = page.locator('.contact-email input');
        this.phoneInput = page.locator('.contact-phone input');
        this.messageInput = page.locator('.contact-message textarea');
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

        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.messageInput.fill(msg);
        await this.submitBtn.click();
    }

    async verifySuccessMessage(){
        const successMessgae = await this.messageSuccess.innerText();
        console.log(successMessgae);
       await expect(this.messageSuccess).toBeVisible();
    }
}