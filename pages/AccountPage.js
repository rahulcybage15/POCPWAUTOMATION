// @ts-check

import { expect } from '@playwright/test';
import InputElements from '../elements/InputElements';
import BtnElements from '../elements/btnElements';


class AccountPage{

 /**
     * @param {import("playwright-core").Page} page
     */
     
     constructor(page){
        
        this.page = page;
        this.userName = new InputElements(page,'#username');
        this.password = new InputElements(page,'#password');
        this.btnLogin = new BtnElements(page,'form[class*=login]');
        this.btnRegister = new BtnElements(page,'form[class*=register]');
        this.messageOnOrderPage = new InputElements(page,'div.woocommerce-info');
        this.tabOrderSection = new BtnElements(page,'//a[@href="https://practice.sdetunicorns.com/my-account/orders/"]');
        
     }

     /**
     * @param {string} username
     * @param {string} password
     */
     async performLogin(username, password){

        await this.userName.typeText(username);
        await this.password.typeText(password);
        await this.btnLogin.clickOnBtn();
     }

     async navigateToOrderSection(){

      await this.tabOrderSection.clickOnBtn();
        //await this.page.goto('/my-account/orders');
     }

     async fetchMessageOnOrderPage(){

        console.log(await this.messageOnOrderPage.getTheText());
        return await this.messageOnOrderPage.getTheText();
     }

     async verifyMessagePresentOnOrderSection(){

        expect(await this.fetchMessageOnOrderPage()).toContain('No order has been made yet.');
        
     }
}

export default AccountPage;