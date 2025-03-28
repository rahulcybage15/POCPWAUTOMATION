// @ts-check
import {test,expect} from '@playwright/test';
import  HomePage  from '../pages/HomePage';
import PageAssertions from '../assertions/PageAssertions';
import DataGenerator from '../utils/datagenerator';
import  ContactPage from '../pages/ContactPage';

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
        await pageassertions.assertURL('https://practice.sdetunicorns.com/contact/','url is matching');
        await contactPage.fillTheForm(user.name,user.email,user.phone,user.message);
        await contactPage.verifySuccessMessage();
    })
    
})
