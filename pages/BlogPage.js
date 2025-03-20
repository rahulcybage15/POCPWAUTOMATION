// @ts-check

import exp from 'constants';

const {expect} = require('@playwright/test');
export class BlogPage {

    /**
     * @param {import("playwright-core").Page} page
     */

    constructor(page){
        this.page=page;
        this.blogLists = page.locator('#recent-posts-3 ul li');

    }

    async NavigateToBlogPage(){
        await this.page.goto('/blog/');
    }

    async verifyPageTitle(){

       await expect(this.page).toHaveTitle('Blog – Practice E-Commerce Site');
    }

    async blogCount(){
        return await this.blogLists.count();
    }

    async verifyNumberOfBlogPresent(){
        //const blogCount = await this.blogLists.count();
        console.log(await this.blogCount());
        expect(await this.blogCount()).toEqual(5);
    }

    async fetchTheNameOfLinks(){
        const blogList =  this.blogLists;
        for(const el of await blogList.elementHandles()){
            console.log(await el.innerText());

        }

        }
    
}