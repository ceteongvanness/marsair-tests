import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fill(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    }

    async getText(selector: string): Promise<string> {
        return (await this.page.textContent(selector)) || '';
    }
}