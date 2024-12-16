import { test, expect, chromium } from '@playwright/test';


test('Slow motion and video recording demo', async () => {
    const browsers = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browsers.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600 }
        }
    });

    const page = await context.newPage();
    
    await page.goto('https://demo.applitools.com/');
    await page.waitForSelector('#log-in', {timeout: 3000})
    // await page.pause();

    await page.locator("#username").fill("Eugene");
    await page.locator('[placeholder= "Enter your password"]').fill("1234");
    await page.locator('#log-in').click();
    await page.locator('.logged-user-name').isVisible();

    await context.close();
})
