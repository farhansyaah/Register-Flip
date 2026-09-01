import { test } from '@playwright/test';
import { RegisterStep } from '../steps/RegisterStep';
import { VerificationStep } from '../steps/VerificationStep';
import { commonConst } from '../../../shared/constant/const';

test.describe('Business Registration', {
}, () =>  {

    
    test('Register Business Perorangan with valid data', async ({ page }) => {

        let registerStep = new RegisterStep(page);
        let verificationStep = new VerificationStep(page);
        
        let dumyName = await registerStep.commonMethods.getRandomFullname();
        let dumyEmail = await registerStep.commonMethods.getRandomEmail();
        let dumyPhoneNumber = "812" + await registerStep.commonMethods.getRandomNumber(8);
        let dumyBusinessId = "Id" + await registerStep.commonMethods.getRandomNumber(3);
        let dumyBusinessName = "Buss " + await registerStep.commonMethods.getRandomNumber(3);


        await registerStep.userRegisterToWeb(commonConst.URL,
        dumyName,
        dumyEmail,
        dumyPhoneNumber,
        commonConst.BUSINESS_PERSEORANGAN,
        dumyBusinessName,
        dumyBusinessId,
        commonConst.PASSWORD);
        await verificationStep.verifyEmailSent(dumyEmail, commonConst.VERIFICATION_TITLE); 
    });

    test('Register Business Badan Usaha with valid data', async ({ page }) => {

        let registerStep = new RegisterStep(page);
        let verificationStep = new VerificationStep(page);
        
        let dumyName = await registerStep.commonMethods.getRandomFullname();
        let dumyEmail = await registerStep.commonMethods.getRandomEmail();
        let dumyPhoneNumber = "812" + await registerStep.commonMethods.getRandomNumber(8);
        let dumyBusinessId = "Id" + await registerStep.commonMethods.getRandomNumber(3);
        let dumyBusinessName = "Buss " + await registerStep.commonMethods.getRandomNumber(3);

        await registerStep.userRegisterToWeb(commonConst.URL,
        dumyName,
        dumyEmail,
        dumyPhoneNumber,
        commonConst.BUSINESS_BADAN_USAHA,
        dumyBusinessName,
        dumyBusinessId,
        commonConst.PASSWORD);
        await verificationStep.verifyEmailSent(dumyEmail, commonConst.VERIFICATION_TITLE); 
    });

    test('Register Business Badan Usaha with In-valid Password data', async ({ page }) => {

        let registerStep = new RegisterStep(page);
        
        let dumyName = await registerStep.commonMethods.getRandomFullname();
        let dumyEmail = await registerStep.commonMethods.getRandomEmail();
        let dumyPhoneNumber = "812" + await registerStep.commonMethods.getRandomNumber(8);
        let dumyBusinessId = "Id" + await registerStep.commonMethods.getRandomNumber(3);
        let dumyBusinessName = "Buss " + await registerStep.commonMethods.getRandomNumber(3);

        await registerStep.userInvalidPasswordRegisterToWeb(commonConst.URL,
        dumyName,
        dumyEmail,
        dumyPhoneNumber,
        commonConst.BUSINESS_BADAN_USAHA,
        dumyBusinessName,
        dumyBusinessId,
        commonConst.INVALID_PASSWORD);
    });

    test('Register with In-valid Email data', async ({ page }) => {

        let registerStep = new RegisterStep(page);

        await registerStep.userInvalidEmailRegisterToWeb(commonConst.URL,
        commonConst.INVALID_EMAIL);
    });

    test('Register Business Badan Usaha without Busines Name', async ({ page }) => {

        let registerStep = new RegisterStep(page);
        
        let dumyName = await registerStep.commonMethods.getRandomFullname();
        let dumyEmail = await registerStep.commonMethods.getRandomEmail();
        let dumyPhoneNumber = "812" + await registerStep.commonMethods.getRandomNumber(8);
        let dumyBusinessId = "Id" + await registerStep.commonMethods.getRandomNumber(3);
        let dumyBusinessName = ""

        await registerStep.userNotInputBusinessName(commonConst.URL,
        dumyName,
        dumyEmail,
        dumyPhoneNumber,
        commonConst.BUSINESS_BADAN_USAHA,
        dumyBusinessName,
        dumyBusinessId,
        commonConst.PASSWORD);
    });

    test('Register Business Perseorangan with registered Email', async ({ page }) => {

        let registerStep = new RegisterStep(page);
        
        let dumyName = await registerStep.commonMethods.getRandomFullname();
        let dumyEmail = commonConst.REGISTERED_EMAIL
        let dumyPhoneNumber = "812" + await registerStep.commonMethods.getRandomNumber(8);
        let dumyBusinessId = "Id" + await registerStep.commonMethods.getRandomNumber(3);
        let dumyBusinessName = "Buss " + await registerStep.commonMethods.getRandomNumber(3);

        await registerStep.userRegisteredEmailToWeb(commonConst.URL,
        dumyName,
        dumyEmail,
        dumyPhoneNumber,
        commonConst.BUSINESS_PERSEORANGAN,
        dumyBusinessName,
        dumyBusinessId,
        commonConst.PASSWORD);
    });
});