// @ts-check
import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { BlogPage } from '../pages/BlogPage';

test.describe('contact page test cases', () => {

    let homePage ;
    let contactPage;


    test('using pom fill the form', async ({ page }) => {

        homePage = new HomePage(page);
        contactPage = new ContactPage(page);
        await homePage.navigateToHomePage();
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
        await homePage.goToContactPage();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/contact/');
        await contactPage.fillTheForm();
        await contactPage.verifySuccessMessage();
    })
    
})
