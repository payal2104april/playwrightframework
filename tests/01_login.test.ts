import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
  
  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Go to Login Page
    await loginPage.goto();

    // Step 2: Enter credentials and login
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 3: Click on Login Button
    await loginPage.clickLoginButton();

    await page.pause();
    
  });
   
});
