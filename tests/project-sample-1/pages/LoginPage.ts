import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';

const classConstant = {
    emailOrUsername : "xpath=//input[@id='email' and @type='email']",
    isPassword : "xpath=//input[@id='password' and @type='password']",
    btnLogin : "xpath=//button[@type='submit']",
    txtLinkBtn : "xpath=//button[normalize-space()='Email']"
}

export class LoginPage{
    readonly page: Page;
    commonMethod: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethod = new CommonMethods(this.page);
    }
    
    async login(username:string, password:string){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.txtLinkBtn), 15000);
        await this.page.locator(classConstant.txtLinkBtn).click();

        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.emailOrUsername), 15000);
        await this.page.locator(classConstant.emailOrUsername).fill(username);

        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.isPassword), 25000);
        await this.page.locator(classConstant.isPassword).fill(password);

        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.btnLogin), 25000);
        await this.page.locator(classConstant.btnLogin).click({timeout:15000});

        await this.page.waitForTimeout(3000); //waiting for animation, mimic human behaviour
    }
}