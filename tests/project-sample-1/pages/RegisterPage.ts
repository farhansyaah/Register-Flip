import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';
import { commonConst } from '../../../shared/constant/const';

const classConstant = {
    nameField : "xpath=//input[@data-qaid='qa-name-field']",
    emailField : "xpath=//input[@data-qaid='qa-email-field']",
    phoneField : "xpath=//input[@data-qaid='qa-phone-field']",
    businessType : (text: string) => `xpath=//label[.//span[text()='${text}']]`,
    businessNameField : "xpath=//input[@data-qaid='qa-company-name-field']",
    businessIdField : "xpath=//input[@data-qaid='qa-ffb-id-field']",
    passwordField : "xpath=//input[@data-qaid='qa-password-field']",
    btnSubmit : "xpath=//button[@type='submit']",
    emailError: "xpath=//div[@data-qaid='qa-email-error']",
    alertError: "xpath=//div[@data-testid='qa-alert-icon-text']"
}

export class RegisterPage{
    readonly page: Page;
    commonMethod: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethod = new CommonMethods(this.page);
    }
    
    async register(dumyName: string, dumyEmail: string, dumyPhoneNumber: string, business_type: string, dumyBusinessName: string, dumyBusinessId: string, password:string){

        await this.inputName(dumyName);
        await this.inputEmail(dumyEmail);
        await this.inputPhoneNumber(dumyPhoneNumber);
        await this.inputBusinessType(business_type, dumyBusinessName);
        await this.inputBusinessId(dumyBusinessId);
        await this.inputPassword(password);
    }

    async inputPassword(password: string){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.passwordField), 25000);
        await this.page.locator(classConstant.passwordField).fill(password);
    }

    async inputBusinessId(dumyBusinessId: string){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.businessIdField), 15000);
        await this.page.locator(classConstant.businessIdField).fill(dumyBusinessId);        
    }

    async inputBusinessType(business_type: string, dumyBusinessName: string) {
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.businessType(business_type)), 15000);
        await this.commonMethod.waitForElementClickable(this.page.locator(classConstant.businessType(business_type)));
        await this.page.locator(classConstant.businessType(business_type)).click({timeout: 15000});

        if (business_type === "Badan Usaha") {
            await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.businessNameField), 15000);
            await this.page.locator(classConstant.businessNameField).fill(dumyBusinessName);
        }
    }
    
    async inputPhoneNumber(dumyPhoneNumber: string){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.phoneField), 25000);
        await this.page.locator(classConstant.phoneField).fill(dumyPhoneNumber);
    }

    async inputEmail(dumyEmail: string){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.emailField), 15000);
        await this.page.locator(classConstant.emailField).fill(dumyEmail);
    }

    async inputName(dumyName: string) {
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.nameField), 15000);
        await this.page.locator(classConstant.nameField).fill(dumyName);
    }

    async clickSubmitButton() {
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.btnSubmit), 25000);
        await this.page.locator(classConstant.btnSubmit).click({timeout:15000});
    }

    async validationInvalidPassword() {
        await this.commonMethod.assertLabelContainsText(classConstant.alertError, commonConst.PW_ERROR_MSSG, "Assertion: ")
    }

    async validationInvalidEmail() {
    await this.commonMethod.assertLabelContainsText(classConstant.emailError, commonConst.EMAIL_ERROR_MSSG, "Assertion: ");
    }

    async validationButtonDisable(){
        await this.commonMethod.isEleDisabled(this.page.locator(classConstant.btnSubmit), 15000);
    }
    
    async validationRegisteredEmail() {
        await this.commonMethod.assertLabelContainsText(classConstant.alertError, commonConst.REGISTERED_EMAIL_ERROR, "Assertion: ")
    }

}