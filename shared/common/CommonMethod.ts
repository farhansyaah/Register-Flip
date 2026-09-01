import { expect, Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CommonMethods{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async goToUrl(url:string, timeOut:number){
        let newTimeout = 10000 + timeOut //default value 10s
        try{
            await this.page.goto(url,{timeout:newTimeout});
        }
        catch(e){
            throw new Error("TimeoutException : " + timeOut + "ms exceeded. ");
        }
    }



    async isEleDisplayed(locator:Locator, timeOut?:number){
        try{
            await expect(locator).toBeVisible({timeout:timeOut});
        }
        catch(e){
            throw new Error("NoElementDisplayedException : the locator is not visible in DOM. ");
        }
    }

    async isEleNotDisplayed(locator:Locator, timeOut?:number){
        try{
            await expect(locator).not.toBeVisible({timeout:timeOut});
        }
        catch(e){
            throw new Error("AssertionException : the locator is visible in DOM (expected : not visible). ");
        }
    }

    async isEleDisabled(locator:Locator, timeOut?:number){
        try{
            await expect(locator).toBeDisabled({timeout:timeOut});
        }
        catch(e){
            throw new Error("AssertionException : the locator is not disabled in DOM. ");
        }
    }

    async isElementTextContains(ele:string, expectedValue:string){
        let elementText = await this.page.locator(ele).textContent();

        await this.page.locator(ele).isVisible();

        try {
            await expect(elementText?.toLowerCase()).toContain(expectedValue.toLowerCase());
            console.log("Assertion success : "+elementText?.trim()+" is contains "+expectedValue.trim())
            return true;
        } catch (e) {
            throw new Error("AssertionException : actual text "+elementText?.trim()+" is not contains "+expectedValue.trim() + ". ");
        }
    }

    async isElementValueContains(locator: Locator, expectedValue: string) {
        await this.isEleDisplayed(await locator);
        await this.page.waitForTimeout(2000);

        const elementValue = await locator.getAttribute("value");

        if(await elementValue?.toLowerCase().includes(expectedValue.toLowerCase())) {
            console.log("ASSERTION (SUCCESS) : " + elementValue + " IS CONTAINS " + expectedValue);
            return true;

        }else {
            console.log("ASSERTION (FAILED) : " + elementValue + " IS NOT CONTAINS " + expectedValue);
            return false;
        }
    }

    async isElementHasClassAttribute(ele: string, expectedValue: string) {
        await this.page.locator(ele).isVisible();

        const element = this.page.locator(ele);

        try{
            const regex = new RegExp(`\\b${expectedValue}\\b`);
            await expect(element).toHaveClass(regex);
        }
        catch(e){
            throw new Error("AssertionException : the locator is not contains " + expectedValue + " class attribute. ");
        }
    }

    
    async uploadFiles(filePath:string){
        const fileInput = await this.page.$('input[type=file]');
        try{
            await fileInput?.setInputFiles(filePath);
        }
        catch(e){
            throw new Error("IOException : the file you want to upload is not Found. ");
        }
    }


    async uploadFileIntoWeb(webSelector:string, filePath:string){
        try{
            await this.page.locator(webSelector).setInputFiles(filePath);
        }
        catch (e){
            console.log(e);
            throw new Error("IOException : no such file or directory. ")
        }
    }

    async assertUrl(expectedUrl:string, timeOut?:number){
        try{
            await expect(this.page).toHaveURL(expectedUrl, {timeout : timeOut})
        }
        catch (e){
            throw new Error("AssertionException : URL is Different. ");
        }
    }


    async getDateFromToday(noofdays: number) {
        const DAY_IN_MS = 1000 * 60 * 60 * 24;
        const currentDate = new Date();
        const checkInDate = new Date(currentDate.getTime() + noofdays * DAY_IN_MS);

        const weekday = checkInDate.toLocaleString('en', { weekday: 'short' });
        const day = checkInDate.getDate();
        const month = checkInDate.toLocaleString('en', { month: 'short' });
        const year = checkInDate.getFullYear();
        
        const formattedDate = `${weekday}, ${day.toString().padStart(2, '0')} ${month} ${year}`;
        return formattedDate;
    
    }
    
    async isElementContainsText(locator:Locator, expectedValue:string){
        let elementText = await locator.textContent();

        await locator.isVisible();
        await this.page.waitForTimeout(2000);

        try {
            await expect(elementText?.toLowerCase()).toContain(expectedValue.toLowerCase());
            console.log("Assertion success : "+elementText?.trim()+" is contains "+expectedValue.trim())
            return true;
        } catch (e) {
            throw new Error("AssertionException : actual text "+elementText?.trim()+" is not contains "+expectedValue.trim() + ". ");
        }
    }



    async waitForElementClickable(locator: Locator){
        await locator.waitFor({state:"visible", timeout:15000})
    }

    async getRandomFullname() {
        return faker.person.firstName().replace(new RegExp("[^A-Za-z0-9]"),"") + " " + faker.person.lastName().replace(new RegExp("[^A-Za-z0-9]"),"");
    }

    async getRandomLastname(){
        return faker.person.lastName().replace(new RegExp("[^A-Za-z0-9]"),"");
    }

    async getRandomEmail(){
        return faker.internet.email({ provider: 'test.only' });
    }

    async getRandomCompany(){
        return faker.company.name();
    }

    async getRandomNumber(digits: number){
        return faker.string.numeric(digits);
    }

    async randomAlphabetNumericString(count: number) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let builder = '';
      
        while (count-- !== 0) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          builder += characters.charAt(randomIndex);
        }
      
        return builder;
    }


    async isEleVisible(locator:Locator, timeOut?:number){
        try{
            await expect(locator).toBeVisible({timeout:timeOut});
            console.log("Element is visible: "+locator);
            return true;
        }
        catch(e){
            console.log("The following element is not visible in "+timeOut+" ms: "+locator);
            return false;
        }
    }

    async actionClick(page: Page, locator: Locator){
        const box = await locator.boundingBox();
        if (box != null) {
            await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
        }
        await page.waitForTimeout(2000);
    }



    async getDate(date:string){
        // get date from certain date format. Example : 24-April-2024 --> return 24
        return date.split('-')[0].replace(/^0+/, "");
    }

    async getMonth(date:string){
        // get month from certain date format. Example : 24-April-2024 --> return April
        return date.split('-')[1];
    }

    async getYear(date:string){
        // get year from certain date format. Example : 24-April-2024 --> return 2024
        return date.split('-')[2];
    }

    async getTodayDate(){
        //return current date with this format --> 24-April-2024
        const today = new Date();
        const dd = today.getDate();
        //const dd = String(today.getDate()).padStart(2, '0');
        const month = today.toLocaleString('en', { month: 'long' });
        const yyyy = today.getFullYear();

        const formattedDate = `${dd.toString().padStart(2, '0')}-${month}-${yyyy}`;
        return formattedDate;
    }


    async assertLabelContainsText(locator:string, text : string, logMessage:string){
        await this.page.locator(locator).scrollIntoViewIfNeeded({timeout:15000});
        await this.isEleDisplayed(await this.page.locator(locator));
        console.log(logMessage.concat(text));
        return await this.isElementTextContains(locator, text);
    }
    
    async assertTextFieldContainsText(locator:string, text : string, logMessage:string){
        await this.isEleDisplayed(await this.page.locator(locator));
        console.log(logMessage.concat(text));
        return await this.isElementValueContains(await this.page.locator(locator), text);
    }

}