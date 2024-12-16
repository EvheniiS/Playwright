import { test, Page, Locator } from '@playwright/test';

export default class LoginPage {
    page: Page
    userName: Locator;
    password:Locator;
    loginButton: Locator;

    constructor(page:Page) {
        this.userName = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: ' Login' });
    }

    async gotoLoginPage(){

        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username,password){ 
        
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click()

    }

}
