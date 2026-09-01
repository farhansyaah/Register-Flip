import { Page } from "@playwright/test";
import { VerificationPage } from "../pages/VerificationPage";


export class VerificationStep {
    readonly page: Page;
    verificationPage: VerificationPage;

    constructor(page: Page) {
        this.page = page;
        this.verificationPage = new VerificationPage(page);
    }

    async verifyEmailSent(expectedEmail: string, expectedText: string) {
        await this.verificationPage.verificationLandingPage(expectedEmail, expectedText);
    }
}