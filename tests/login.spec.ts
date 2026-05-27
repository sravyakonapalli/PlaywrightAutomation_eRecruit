import { test, expect } from '../fixtures/baseFixture';

import path from 'path';

import { LoginPage } from '../pages/LoginPage';

import { getExcelData } from '../utils/excelReader';

const excelPath =
  path.join(__dirname, '../test-data/loginData.xlsx');

test.describe('Login Test Suite', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('/');
  });

  test('Login Tests From Excel', async ({ loginPage }) => {

    const testData =
      await getExcelData(excelPath, 'Login');

    for (const data of testData) {

      await loginPage.navigateToLoginPage();

      await loginPage.login(
        data.email,
        data.password
      );

      await loginPage.verifyText(
        data.expectedText
      );
    }
  });
});