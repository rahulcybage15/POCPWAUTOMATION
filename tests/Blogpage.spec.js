// @ts-check
import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BlogPage } from '../pages/BlogPage';

test.describe('test cases for blog page', () => {

    let homePage;
    let blogPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    })
    

    test('count length', async ({ page }) => {
                
        blogPage = new BlogPage(page);
        await homePage.verifyHomePageTitle();
        await blogPage.NavigateToBlogPage();
        await page.waitForURL('https://practice.sdetunicorns.com/blog/');
       await blogPage.verifyPageTitle();
        await blogPage.verifyNumberOfBlogPresent();
        await blogPage.fetchTheNameOfLinks();
        
    })
})
