import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MarsAirPage extends BasePage {
    private readonly baseUrl = 'https://marsair.recruiting.thoughtworks.net/EngTeongCheah';
    
    private readonly selectors = {
        departure: '#departing',
        return: '#returning',
        promoCode: '#promotional_code',
        searchButton: 'input[type="submit"]',
        message: '#content p:first-of-type'
    };

    constructor(page: Page) {
        super(page);
    }

    async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        // Wait for critical elements
        await this.page.waitForSelector(this.selectors.departure);
    }

    async searchFlight(departure: string, returnDate: string, promoCode?: string): Promise<void> {
        // Wait for elements to be ready
        await this.page.waitForSelector(this.selectors.departure);
        await this.page.selectOption(this.selectors.departure, { label: departure });
        
        await this.page.waitForSelector(this.selectors.return);
        await this.page.selectOption(this.selectors.return, { label: returnDate });
        
        if (promoCode) {
            await this.page.waitForSelector(this.selectors.promoCode);
            await this.page.fill(this.selectors.promoCode, promoCode);
        }
        
        await this.page.click(this.selectors.searchButton);
        await this.page.waitForLoadState('networkidle');
    }

    async getMessage(): Promise<string> {
        await this.page.waitForSelector(this.selectors.message);
        const content = await this.page.textContent(this.selectors.message);
        return (content || '').trim();
    }
}