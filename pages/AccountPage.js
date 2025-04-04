// @ts-check

import { expect } from '@playwright/test';
import InputElements from '../elements/InputElements';
import BtnElements from '../elements/btnElements';
import LablelElements from '../elements/labelElements';


class AccountPage{

 /**
     * @param {import("playwright-core").Page} page
     */
     
     constructor(page){
        
        this.page = page;
        this.inputSection = new InputElements(page,'.woocommerce-form-login');
        //this.userName = new InputElements(page,'#username');
        //this.password = new InputElements(page,'#password');
        this.btnLogin = new BtnElements(page,'button[name="login"]');
        this.btnRegister = new BtnElements(page,'form[class*=register]');
        //this.messageOnOrderPage = new InputElements(page,'div.woocommerce-info');

        this.AccountSection = new LablelElements(page,'.woocommerce-MyAccount-content');
        this.tabOrderSection = new BtnElements(page,'//a[@href="https://practice.sdetunicorns.com/my-account/orders/"]');
        
     }

     /**
     * @param {string} username
     * @param {string} password
     */
     async performLogin(username, password){

        await this.page.waitForTimeout(5000);
        //await this.inputSection().click();
        await this.inputSection.typeText(username,{label:'Username or email'});
        await this.inputSection.typeText(password,{label:'password'}); 
        //await this.userName.typeText(username);
        //await this.password.typeText(password);
        const btn = await this.btnLogin.clickOnBtn();
        //await btn.click();
     }

     async navigateToOrderSection(){

      await this.tabOrderSection.clickOnBtn();
     }
    
     //async fetchMessageOnOrderPage(){
         //return await this.messageOnOrderPage.getTheText();
   //  }

     async verifyMessagePresentOnOrderSection(){

      const message =await this.AccountSection.findDivText({selector:".woocommerce-info"});
        //const message = await this.messageOnOrderPage.getTheText();
        expect(message).toContain('No order has been made yet.');
        
     }
}

export default AccountPage;