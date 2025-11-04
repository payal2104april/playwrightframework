import { Page, expect } from '@playwright/test';

export class FinishPage {
    readonly page: Page;
    readonly finishButton;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
    }
    async finishOrder() {
        await this.finishButton.click();
    }

}                   