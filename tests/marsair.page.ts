import { Page } from '@playwright/test';

export class MarsAirPage {
    readonly page: Page;
    readonly baseUrl: string;

    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://marsair.recruiting.thoughtworks.net/EngTeongCheah';
    }

    // Locators
    private readonly departureSelect = '#departing';
    private readonly returnSelect = '#returning';
    private readonly promoCodeInput = '#promotional_code';
    private readonly searchButton = 'input[type="submit"]';
    private readonly messageDiv = '#content p:first-of-type';
    private readonly logoLink = 'h1 a[href*="EngTeongCheah"]';
    private readonly bookTicketLink = 'text=Book a ticket to the red planet now!';

    private readonly dateOptions = {
        'July': '0',
        'December': '1',
        'July (next year)': '2',
        'December (next year)': '3',
        'July (two years from now)': '4',
        'December (two years from now)': '5'
    };

    async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async selectDates(departureMonth: string, returnMonth: string): Promise<void> {
        const departureValue = this.dateOptions[departureMonth];
        const returnValue = this.dateOptions[returnMonth];

        if (departureValue === undefined || returnValue === undefined) {
            throw new Error(`Invalid date selection. Valid options are: ${Object.keys(this.dateOptions).join(', ')}`);
        }

        await this.page.waitForSelector(this.departureSelect);
        await this.page.selectOption(this.departureSelect, departureValue);
        await this.page.selectOption(this.returnSelect, returnValue);
    }

    async enterPromoCode(code: string): Promise<void> {
        await this.page.waitForSelector(this.promoCodeInput);
        await this.page.fill(this.promoCodeInput, code);
    }

    async clickSearch(): Promise<void> {
        await this.page.waitForSelector(this.searchButton);
        await this.page.click(this.searchButton);
        await this.page.waitForLoadState('networkidle');
    }

    async getMessage(): Promise<string> {
        await this.page.waitForSelector(this.messageDiv);
        const content = await this.page.textContent(this.messageDiv);
        return (content || '').trim();
    }

    async clickLogo(): Promise<void> {
        await this.page.waitForSelector(this.logoLink);
        await this.page.click(this.logoLink);
        await this.page.waitForLoadState('networkidle');
    }

    async clickBookTicketLink(): Promise<void> {
        await this.page.waitForSelector(this.bookTicketLink);
        await this.page.click(this.bookTicketLink);
        await this.page.waitForLoadState('networkidle');
    }

    async searchFlight(departureMonth: string, returnMonth: string, promoCode?: string): Promise<void> {
        await this.selectDates(departureMonth, returnMonth);
        if (promoCode) {
            await this.enterPromoCode(promoCode);
        }
        await this.clickSearch();
    }
}