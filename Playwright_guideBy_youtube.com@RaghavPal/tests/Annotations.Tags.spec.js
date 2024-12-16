import { test } from '@playwright/test';

test.skip('Test', async ({page}) => { 
    await page.goto('https://demo.applitools.com/');
    await page.waitForSelector('#log-in', {timeout: 3000})
    // await page.pause();

    await page.locator("#username").fill("Eugene");
    await page.locator('[placeholder= "Enter your password"]').fill("1234");
    await page.locator('#log-in').click();
    await page.locator('.logged-user-name').isVisible();
});

test('Not ready yet', async ({page}) => {
    await page.goto('https://google.com');
  test.fail();  
})

//Test will not have Fail result 
test.fixme('Fix it', async ({page}) => {
    await page.goto('https://google.com');

})

//will have x3 time on timeout 
test('Slow', async ({page}) => {
    await page.goto('https://google.com');
    test.slow();
});

// test.only('Only this test will run', async () => {
//     page.goto('https://google.com');
// })

test('Skip condition', async ({page}) => {
    await test,skip(browserName === 'firefox', 'still working on it');
    page.goto('https://google.com');
})


//tags

// npx playwright test .Annotations.Tags.spec.js --grep "@smoke"
test('This is @Smoke test', async ({page}) => {
    await page.goto('https://google.com');
})

// npx playwright test .Annotations.Tags.spec.js --grep-invert "@smoke" - All tests with @smoke tag will be skipped 
