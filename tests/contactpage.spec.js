// @ts-check
import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { faker } from '@faker-js/faker';

test.describe('contact page test cases', () => {

    let homePage ;
    let contactPage;

    test.beforeEach(async ({ page }) => {
    
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    })
    


    test('using pom fill the form', async ({ page }) => {
        
        const name =faker.person.firstName();
        contactPage = new ContactPage(page);
        await homePage.verifyHomePageTitle();
        await contactPage.navigateToContactPage();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/contact/');
        await contactPage.fillTheForm(name,faker.internet.email(),faker.phone.number(),faker.commerce.productDescription());
        await contactPage.verifySuccessMessage();
    })
    
})
