import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddToCartPage } from '../pages/addtocartPage';
import { GoToCartPage } from '../pages/goToCartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { DeliveryAddressPage } from '../pages/deliveryAddressPage';
import { FinishPage } from '../pages/finishPage';


test('Login → Add to Cart → Go to Cart Page', async ({ page }) => {
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
                                        