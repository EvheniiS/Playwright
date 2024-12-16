import { test, expect, type Page } from '@playwright/test';


test('Selectors DEMO', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.pause()

    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Medison')
    // await page.locator('[id ="user-name"]').fill('user2name')
    //Using CSS selector
    // #login-button
    await page.locator('#login-button').click();

    // Using XPath
    await page.locator('xpath=//input[@name="password"]').fill('Faraday');
    await page.locator('//input[@name="password"]').fill('Ramon')

});


// XPath practice with DuckDuck Go Search
test.only('DuckDuck Go', async ({page}) => {
    const snippetLocator = '//article/div/div[@data-result="snippet"]';
    const searchTitleLocator = '//a[@data-testid="result-title-a"]';
    const searchText = "Giant pandas"


    await page.goto('https://duckduckgo.com/')
    await page.locator('//input[@class = "searchbox_input__bEGm3"]').fill(searchText)
    await page.locator('//button[@aria-label = "Search"]').click();
    await page.pause();
    await page.waitForTimeout(2000); // Adding a timeout to wait for search results


    //Validate that we have 10 search result
    await expect(page.locator(searchTitleLocator)).toHaveCount(10)
    await expect(page.locator(snippetLocator)).toHaveCount(10)

  // Validate search result snippets contain the word from .fill(searchText) method 

  //TODO: Change = if (snippetText.includes("panda")) to verify text from variable 
  //* Note that it will give a lot of false negative assertions if *searchText variable is used ( need to use 1 main word instead of full search query)_ Maybe use RegEX
  const snippetElements = await page.locator(snippetLocator).all(); 
  for (const element of snippetElements) {
      const snippetText = await element.textContent();

      if (snippetText.includes("panda")) {
          console.log(`Snippet contains "panda":`, snippetText);
      } else {
        await expect(snippetText).toContain("panda");
    }
  }
})

//*chooses all links that goes after 'Images' tab //a[contains(@class, "zcm__link")][preceding::a[@data-zci-link='images']]
//* check for links that goes before 'Images' tab  //a[contains(@class, "zcm__link")][following::a[@data-zci-link='images']]
//* alink = page.locator('//a[.//img][1]'),
//* snippet Text Don't Have Value = page.locator('//article/div/div[@data-result= "snippet"]/span[not(contains(.,"domestic violence"))]'),
//* Nth Snippet =  page.locator('(//article/div/div[@data-result= "snippet"]/span[not(contains(.,"domestic violence"))])[3]');