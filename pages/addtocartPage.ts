import { Page } from '@playwright/test';

export class AddToCartPage {
  readonly page: Page;
  readonly addToCartButton;

  constructor(page: Page) {
    this.page = page;
    // Backpack ka Add to Cart button
    this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
  }

  async addProductToCart() {
    await this.addToCartButton.click(); // Add to cart button click karega
  }
}
