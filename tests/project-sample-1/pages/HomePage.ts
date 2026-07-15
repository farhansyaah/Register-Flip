import { Page } from "@playwright/test";
import { CommonMethods } from '../../../shared/common/CommonMethod';

const classConstant = {
    popUpWellcome : "xpath=//div[starts-with(@id,'headlessui-dialog-panel')]",
    btnExitPopUp : "//button[contains(@class,'rounded-full')][contains(@class,'right-4')]"
}

export class HomePage{
    readonly page: Page;
    commonMethod: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.commonMethod = new CommonMethods(this.page);
    }
    
    async validatingPopUpBanner(){
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.popUpWellcome), 15000);
        await this.commonMethod.isEleDisplayed(this.page.locator(classConstant.btnExitPopUp), 15000);
        await this.page.locator(classConstant.btnExitPopUp).click();
    }
}