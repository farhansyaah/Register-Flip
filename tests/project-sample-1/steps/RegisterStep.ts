import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';
import { RegisterPage } from "../pages/RegisterPage";

export class RegisterStep{
    readonly page: Page;
    commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethods = new CommonMethods(this.page);
    }

    async userRegisterToWeb(url: string, dumyName: string, dumyEmail: string, dumyPhoneNumber: string, business_type:string, dumyBusinessName: string, dumyBusinessId: string, password:string) {
        let registerPage = new RegisterPage(this.page);

        await this.commonMethods.goToUrl(url, 5000);
        await registerPage.register(dumyName, dumyEmail, dumyPhoneNumber, business_type, dumyBusinessName,  dumyBusinessId, password);
        await registerPage.clickSubmitButton();    
    }

    async userInvalidPasswordRegisterToWeb(url: string, dumyName: string, dumyEmail: string, dumyPhoneNumber: string, business_type:string, dumyBusinessName: string, dumyBusinessId: string, password:string) {
        let registerPage = new RegisterPage(this.page);

        await this.commonMethods.goToUrl(url, 5000);
        await registerPage.register(dumyName, dumyEmail, dumyPhoneNumber, business_type, dumyBusinessName,  dumyBusinessId, password);
        await registerPage.clickSubmitButton();
        await registerPage.validationInvalidPassword();
    }

    async userInvalidEmailRegisterToWeb(url: string, dumyEmail: string) {
        let registerPage = new RegisterPage(this.page);

        await this.commonMethods.goToUrl(url, 5000);
        await registerPage.inputEmail(dumyEmail);
        await registerPage.validationInvalidEmail();
    }

    async userNotInputBusinessName(url: string, dumyName: string, dumyEmail: string, dumyPhoneNumber: string, business_type:string, dumyBusinessName: string, dumyBusinessId: string, password:string) {
        let registerPage = new RegisterPage(this.page);

        await this.commonMethods.goToUrl(url, 5000);
        await registerPage.register(dumyName, dumyEmail, dumyPhoneNumber, business_type, dumyBusinessName,  dumyBusinessId, password);
        await registerPage.validationButtonDisable();
    }


    async userRegisteredEmailToWeb(url: string, dumyName: string, dumyEmail: string, dumyPhoneNumber: string, business_type:string, dumyBusinessName: string, dumyBusinessId: string, password:string) {
        let registerPage = new RegisterPage(this.page);

        await this.commonMethods.goToUrl(url, 5000);
        await registerPage.register(dumyName, dumyEmail, dumyPhoneNumber, business_type, dumyBusinessName,  dumyBusinessId, password);
        await registerPage.clickSubmitButton();
        await registerPage.validationRegisteredEmail();    
    }
}





