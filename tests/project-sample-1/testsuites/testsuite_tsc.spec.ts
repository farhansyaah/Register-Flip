import { test } from '@playwright/test';
import { LoginStep } from '../steps/LoginStep';
import { HomeStep } from '../steps/HomeStep';
import { commonConst } from '../../../shared/constant/const'


test.describe('Example', {
}, () =>  {
    test('Login Dashboard Home & Account Setting', async ({ page }) => {
        let loginStep = new LoginStep(page);
        let homeStep = new HomeStep(page);

        await loginStep.userGoToWeb(commonConst.URL, commonConst.EMAIL, commonConst.PASSWORD);
        await homeStep.userGoToDashboardWeb()
    });

});