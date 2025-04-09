// @ts-check

import { expect } from '@playwright/test';
import AccountPageLocators from './Locators/AccountPageLocators';
import BasePage from './BasePage';
import VerificationUtils from '../utils/VerificationUtils';


class AccountPage extends BasePage{

 /**
     * @param {import("playwright-core").Page} page
     */
     
     constructor(page){
      super(page);
        this.locatorMap = AccountPageLocators;
        
     }

     async navigateToAccountPage(){

      await this.navigate(`${process.env.BASE_URL}/my-account`);
      
  }

     /**
     * @param {string} username
     * @param {string} password
     */
     async performLogin(username, password){

        await this.page.waitForTimeout(5000);

        await this.typeText(this.getLocator('userNameInput'),username);
        await this.typeText(this.getLocator('passwordInput'),password);
        await this.getLocator('btnLogin').click();
     }

     async navigateToOrderSection(){

     await this.getLocator('tabOrder').click();

     }

     async verifyMessagePresentOnOrderSection(){

      await VerificationUtils.elementIsVisible(this.getLocator('messageOrderPage'));
      await VerificationUtils.elementContainsText(this.getLocator('messageOrderPage'),'No order has been made yet.');
        
     }

     async navigateToAccountDetailsSection(){
      await this.getLocator('tabAccountDetails').click();
     }

     /**
      * 
      * @param {string} fistname 
      * @param {string} lastname 
      * @param {string} displayname 
      */
     async modifyDetailsOnAccountSection(fistname, lastname, displayname){

      await this.typeText(this.getLocator('firstNameAccountDetails'),fistname);
      await this.typeText(this.getLocator('lastNameAccountDetails'),lastname);
      await this.typeText(this.getLocator('displayNameAccountDetails'),displayname);
      await this.getLocator('btnSaveChanges').click();
     }

     async verifyAccountDetailsGotSaved(){

      await expect(this.getLocator('messageAccountDetailsSaved')).toBeVisible();
      const message = await this.getLocator('messageAccountDetailsSaved').innerText();
      expect(message).toContain('Account details changed successfully.');
     }
}

export default AccountPage;