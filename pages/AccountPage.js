// @ts-check

import { expect } from "@playwright/test";

export class AccountPage{

     /**
     * @param {import("playwright-core").Page} page
     */
     
     constructor(page){
        this.page = page;
        this.userName = page.locator('#username');
        this.password = page.locator('#password');
        this.btnLogin = page.locator('[value="Log in"]');
        this.messageOnOrderPage = page.locator('div.woocommerce-info');
        this.tabOrderSection = page.locator('a:has-text("Orders")');
     }

     /**
     * @param {string} username
     * @param {string} password
     */
     async performLogin(username, password){
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.btnLogin.click();
     }

     async navigateToOrderSection(){
        await this.page.goto('/my-account/orders');
        //await this.tabOrderSection.click();
     }

     async fetchMessageOnOrderPage(){
        console.log(await this.messageOnOrderPage.innerText());
        return await this.messageOnOrderPage.innerText();
     }

     async verifyMessagePresentOnOrderSection(){

        expect(await this.fetchMessageOnOrderPage()).toEqual('No order has been made yet.');
     }
}