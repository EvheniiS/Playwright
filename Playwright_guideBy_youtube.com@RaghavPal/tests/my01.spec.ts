import { test, expect, type Page } from '@playwright/test';

test('MyFirstTest', async ({page}) => {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})