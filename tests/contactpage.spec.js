// @ts-check
import {test,expect} from '@playwright/test';
import  HomePage  from '../pages/HomePage';
import PageAssertions from '../assertions/PageAssertions';
import DataGenerator from '../utils/datagenerator';
import  ContactPage from '../pages/ContactPage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('contact page test cases', () => {

    let homePage ;
    let contactPage;

    test.beforeEach(async ({ page }) => {
    
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    })

    test('using pom fill the form', async ({ page }) => {
        
        const user = DataGenerator.generateUser();
        const pageassertions = new PageAssertions(page);
        contactPage = new ContactPage(page);
        await homePage.verifyHomePageTitle();
        await contactPage.navigateToContactPage();
        await pageassertions.assertURL(`${process.env.BASE_URL}/contact/`,'url is not matching');
        await contactPage.fillTheForm(user.name,user.email,user.phone,user.message);
        await contactPage.verifySuccessMessage();
    })
    
})
