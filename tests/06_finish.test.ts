/*import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddToCartPage } from '../pages/addtocartPage';
import { GoToCartPage } from '../pages/goToCartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { DeliveryAddressPage } from '../pages/deliveryAddressPage';
import { FinishPage } from '../pages/finishPage';


test('login works @sanity', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);
    const goToCartPage = new GoToCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const finishPage = new FinishPage(page);

    // Step 1: Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    //Step 2: Click on Login Button     
    await loginPage.clickLoginButton();

    // Step 3: Add product to cart
    await addToCartPage.addProductToCart();


    // Step 4: Go to cart page
    await goToCartPage.goToCart();

    // Step 5: Proceed to checkout
    await checkoutPage.proceedToCheckout();

    // Step 6: Enter delivery address details
    const deliveryAddressPage = new DeliveryAddressPage(page);
    await deliveryAddressPage.enterDeliveryDetails('payal', 'sharma', '12345'); 

    // Step 7: Click on Continue Button
    await deliveryAddressPage.clickContinueButton();

    // Step 8: Finish the order
    await finishPage.finishOrder();

    // Step 6: Pause to check manually
    await page.pause();
});
                                        */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddToCartPage } from '../pages/addtocartPage';
import { GoToCartPage } from '../pages/goToCartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { DeliveryAddressPage } from '../pages/deliveryAddressPage';
import { FinishPage } from '../pages/finishPage';

test('login works @sanity', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addToCartPage = new AddToCartPage(page);
  const goToCartPage = new GoToCartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const deliveryAddressPage = new DeliveryAddressPage(page);
  const finishPage = new FinishPage(page);

  await test.step('Login', async () => {
    await loginPage.goto(); // make sure this uses baseURL or a full URL
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.clickLoginButton();
    // basic sanity that inventory/products page loaded
    await expect(page).toHaveURL(/inventory|products/i, { timeout: 15000 });
  });

  await test.step('Add to cart', async () => {
    await addToCartPage.addProductToCart();
  });

  await test.step('Open cart', async () => {
    await goToCartPage.goToCart();
    await expect(page).toHaveURL(/cart/i, { timeout: 15000 });
  });

  await test.step('Checkout - info', async () => {
    await checkoutPage.proceedToCheckout();
    await deliveryAddressPage.enterDeliveryDetails('payal', 'sharma', '12345');
    await deliveryAddressPage.clickContinueButton();
  });

  await test.step('Finish order', async () => {
    await finishPage.finishOrder();
    await expect(page.getByText(/thank you for your order/i)).toBeVisible({ timeout: 20000 });
  });

  // Only pause when debugging locally (never in CI)
  if (process.env.PWDEBUG) {
    await page.pause();
  }
});
