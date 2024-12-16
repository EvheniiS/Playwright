import { test, expect } from '@playwright/test';

test('Assertions Demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

    // This statement(page.$) return True or False (Present / Not present) which allowe us to use if methode
    if(await page.$('text=The Kitchen')){ 
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    };

    //Check element hidden or visible 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

    //check element enabled or disabled 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    //Text matches value or not 
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText("ABCDSFG");

    //Check atribute value 
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/) 
    await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a')
    // Check page URL title 
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/)
    
    await page.pause();

    // Screenshot Validation
    await expect(page).toHaveScreenshot()
});