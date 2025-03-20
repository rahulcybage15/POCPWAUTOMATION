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


    async fillTheForm(){

        await this.nameInput.fill('Rahul');
        await this.emailInput.fill('abc@test.com');
        await this.phoneInput.fill('12345678');
        await this.messageInput.fill('this is test message');
        await this.submitBtn.click();
    }

    async verifySuccessMessage(){
        const successMessgae = await this.messageSuccess.innerText();
        console.log(successMessgae);
       await expect(this.messageSuccess).toBeVisible();
    }
}