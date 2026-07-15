import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';
import { LoginPage } from "../pages/LoginPage";

export class LoginStep{
    readonly page: Page;
    commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethods = new CommonMethods(this.page);
    }

    async userGoToWeb(url: string, username: string, password: string){
        let commonMethods = new CommonMethods(this.page);
        let loginPage = new LoginPage(this.page);
        await commonMethods.goToUrl(url,5000);
        await loginPage.login(username, password);
    }
}

