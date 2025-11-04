import { Page } from '@playwright/test';

export class GoToCartPage {
  readonly page: Page;
  readonly cartIcon;

  constructor(page: Page) {
    this.page = page;
    // Cart icon locator
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async goToCart() {
    // Cart icon par click karega
    await this.cartIcon.click();
  }
}
