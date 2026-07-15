import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';
import { HomePage } from "../pages/HomePage";

export class HomeStep{
    readonly page: Page;
    commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethods = new CommonMethods(this.page);
    }

    async userGoToDashboardWeb(){
        let homePage = new HomePage(this.page);
        await homePage.validatingPopUpBanner();
    }
}

