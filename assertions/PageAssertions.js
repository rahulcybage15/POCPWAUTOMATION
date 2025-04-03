import { expect } from '@playwright/test';
import  BaseAssertions from '../assertions/BaseAssertions';

//const BaseAssertions = require('./BaseAssertions');

class PageAssertions extends BaseAssertions{

    constructor(page){
        super();
        this.page=page;
    }

    async assertURL(expectedURL, message='url not matching'){
        const currnturl = await this.page.url();
        await this.assertEqual(currnturl,expectedURL,message);

    }

    async assertTitle(expectedTitle, message='title is not matching'){
        const currentTitle = await this.page.title();
        await this.assertEqual(currentTitle,expectedTitle,message);
    }

}

export default PageAssertions;