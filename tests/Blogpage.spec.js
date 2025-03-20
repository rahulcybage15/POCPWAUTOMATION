// @ts-check
import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BlogPage } from '../pages/BlogPage';

test.describe('test cases for blog page', () => {

    let homePage;
    let blogPage;

    test('count length', async ({ page }) => {

        homePage = new HomePage(page);
        blogPage = new BlogPage(page);
        await homePage.navigateToHomePage();
        homePage.verifyHomePageTitle();
        homePage.goToBlogPage();
        await page.waitForURL('https://practice.sdetunicorns.com/blog/');
        blogPage.verifyPageTitle();
        await blogPage.verifyNumberOfBlogPresent();
        await blogPage.fetchTheNameOfLinks();
        
    })
})
