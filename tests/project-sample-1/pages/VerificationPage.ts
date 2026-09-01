import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';

const classConstant = {
    verificationText : "xpath=//h1[@data-qaid='qa-email-verification-title']",
    verificationEmail : "xpath=//b[@data-qaid='qa-email-verification-user-email']"
}

export class VerificationPage{
    readonly page: Page;
    commonMethod: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethod = new CommonMethods(this.page);
    }
    
    async verificationLandingPage(expectedEmail: string, expectedText: string){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.verificationText), 25000);
        await this.commonMethod.assertLabelContainsText(classConstant.verificationText, expectedText, "Assertion success : ");
        await this.commonMethod.isElementContainsText(this.page.locator(classConstant.verificationEmail), expectedEmail);
    }
}