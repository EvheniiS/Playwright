import { expect, Locator, Page } from '@playwright/test';

export class MyTopMenuPage{
    //variebles 
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly nodeLink: Locator;
    readonly javaLink: Locator;
    readonly nodeLabel: Locator;
    readonly javaLabel: Locator;
    readonly nodeDescription: string = `Installing Plawyright`;
    readonly javaDescription: string = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;

    //constructor
    constructor (page: Page){
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.nodeLink = page.getByRole('button', {name: 'Node.js'});
        this.javaLink =  page.getByText('Java', {exact:true});
        this.nodeLabel = page.getByText(this.nodeDescription, {exact:true});
        this.javaLabel = page.getByText(this.javaDescription);



    
    }
    //methods
    async hoverNode() {
        await this.nodeLink.hover();
    }

    async clickJava(){
        await this.javaLink.click();
    }

    async assertPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async assertNodeDescriptionNotVisible() {
        await expect(this.nodeLabel).not.toBeVisible();
    }

    async assertJavaDescriptionVisible() {
        await expect(this.javaLabel).toBeVisible();
    }

}


export default MyTopMenuPage;
