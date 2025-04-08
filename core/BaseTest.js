
import { test as base, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },

  contactPage: async ({ page }, use) => {
    const contact = new ContactPage(page);
    await use(contact);
  },

  // You can also add common hooks or assertions here if needed
  baseURL: async ({}, use) => {
    await use(process.env.BASE_URL || 'https://practice.sdetunicorns.com/');
  }
});

export { expect };
