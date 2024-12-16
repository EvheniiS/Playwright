import { test, expect, type Page } from '@playwright/test';
import { HomePage } from "../pages/home-page";
import { MyTopMenuPage } from '../pages/my-top-menu-page';


//AAA
///POM

const URL = 'https://playwright.dev';
let homePage: HomePage;
let myTopMenuPage: MyTopMenuPage;
const pageUrl = /.*intro/;



test.beforeEach(async ({page}) => {
    await page.goto(URL);
    homePage = new HomePage(page);
})


async function clickGetStarted(page:Page){
    // await page.getByRole('link', { name: 'Get started' }).click();
    await homePage.clickGetStarted();
}

test.describe('Playwright website', () => {


    test('has title', async () => {
        await homePage.assertPageTitle
    });
    
    test('get started link', async ({ page }) => {
        await clickGetStarted(page);
        await myTopMenuPage.assertPageUrl(pageUrl);
    });
    
    test('check Java page',async ({page}) =>{  
        await clickGetStarted(page);
        await myTopMenuPage.hoverNode();
        await myTopMenuPage.clickJava();
    });
        test.step('Assert', async () => {
            await myTopMenuPage.assertPageUrl(pageUrl);
            await myTopMenuPage.assertNodeDescriptionNotVisible();
            await myTopMenuPage.assertJavaDescriptionVisible();
        
        });

});