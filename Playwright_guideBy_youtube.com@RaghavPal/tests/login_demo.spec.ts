import { test, expect } from '@playwright/test';

test.only('Demo login test 1', async({page}) => {

    await page.goto('https://demo.applitools.com/');
    await page.waitForSelector('#log-in', {timeout: 3000})
    // await page.pause();

    await page.locator("#username").fill("Eugene");
    await page.locator('[placeholder= "Enter your password"]').fill("1234");
    await page.locator('#log-in').click();
    await page.locator('.logged-user-name').isVisible();
})

test('Demo login test 2', async({page}) => {
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByText('PaulJames Collings').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})
