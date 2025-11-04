import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddToCartPage } from '../pages/addtocartPage';

test('Login and Add to Cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addToCartPage = new AddToCartPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  //Step 2: Click on Login Button     
  await loginPage.clickLoginButton();


  // Step 3: Add product to cart
  await addToCartPage.addProductToCart();

  // Step 4: Pause for manual check
  await page.pause();
});
