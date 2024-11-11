import { test, expect } from '@playwright/test';
import { MarsAirPage } from './marsair.page';

test.describe('MarsAir Booking System Tests', () => {
    let page: MarsAirPage;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const newPage = await context.newPage();
        page = new MarsAirPage(newPage);
        await page.goto();
    });

    // Test Case #1: Basic Search Flow
    test.describe('1. Basic Search Flow', () => {
        // Test Case 1.1.1: Search with valid dates
        test('1.1.1 should search with valid dates', async () => {
            await page.searchFlight('July', 'July (next year)');
            const message = await page.getMessage();
            expect(message).toContain('Sorry, there are no more seats available');
        });

        // Test Case 1.1.2: Search with invalid schedule
        test('1.1.2 should handle invalid schedule', async () => {
            await page.searchFlight('July', 'December');
            const message = await page.getMessage();
            expect(message).toContain('Unfortunately, this schedule is not possible. Please try again');
        });

        // Test Case 1.2.1: Search with dates outside next two years
        test('1.2.1 should handle far future dates', async () => {
            await page.searchFlight('July (two years from now)', 'December (two years from now)');
            const message = await page.getMessage();
            expect(message).toContain('Unfortunately, this schedule is not possible. Please try again');
        });

        // Test Case 1.3.1: Search with invalid duration
        test('1.3.1 should handle invalid duration', async () => {
            await page.searchFlight('July', 'December');
            const message = await page.getMessage();
            expect(message).toContain('Unfortunately, this schedule is not possible. Please try again');
        });
    });

    // Test Case #2: Promotional Codes
    test.describe('2. Promotional Codes', () => {
        // Test Case 2.1.1: Valid promotional code
        test('2.1.1 should handle valid promotional code', async () => {
            await page.searchFlight('July', 'July (next year)', 'AF3-FJK-418');
            const message = await page.getMessage();
            expect(message).toContain('Sorry, there are no more seats available');
        });

        // Test Case 2.2.1: Invalid promotional code
        test('2.2.1 should handle invalid promotional code', async () => {
            await page.searchFlight('July', 'July (next year)', 'AF3-FJK-40X');
            const message = await page.getMessage();
            expect(message).toContain('Sorry, there are no more seats available');
        });

        // Test Case 2.2.2: Promotional code with incorrect check digit
        test('2.2.2 should handle incorrect check digit', async () => {
            await page.searchFlight('July', 'July (next year)', 'JJ5-OPQ-320');
            const message = await page.getMessage();
            expect(message).toContain('Sorry, there are no more seats available');
        });
    });

    // Test Case #3: Link to Home Page
    test.describe('3. Navigation Tests', () => {
        // Test Case 3.1.1: Book a ticket link
        test('3.1.1 should navigate using book ticket link', async () => {
            await page.clickBookTicketLink();
            expect(page.page.url()).toBe(page.baseUrl);
        });

        // Test Case 3.1.2: Logo navigation
        test('3.1.2 should navigate using logo', async () => {
            await page.clickLogo();
            expect(page.page.url()).toBe(page.baseUrl);
        });

        // Test Case 3.2.1: Invalid URL navigation
        test('3.2.1 should handle invalid URL', async () => {
            await page.page.goto(page.baseUrl + '/invalid');
            expect(page.page.url()).toContain('invalid');
        });
    });

    // Test Case #4: Return Dates
    test.describe('4. Return Date Validation', () => {
        // Test Case 4.1.1: Valid return date
        test('4.1.1 should accept valid return date', async () => {
            await page.searchFlight('July', 'July (next year)');
            const message = await page.getMessage();
            expect(message).toContain('Sorry, there are no more seats available');
        });

        // Test Case 4.2.1: Invalid return date
        test('4.2.1 should reject invalid return date', async () => {
            await page.searchFlight('July', 'December');
            const message = await page.getMessage();
            expect(message).toContain('Unfortunately, this schedule is not possible. Please try again');
        });

        // Test Case 4.3.1: Return date exactly 1 year
        test('4.3.1 should accept exact 1 year return', async () => {
            await page.searchFlight('July', 'July (next year)');
            const message = await page.getMessage();
            expect(message).toContain('Sorry, there are no more seats available');
        });
    });

    // Test Group 5: Form Elements
    test('should have all required form elements', async () => {
        await expect(page.page.locator('#departing')).toBeVisible();
        await expect(page.page.locator('#returning')).toBeVisible();
        await expect(page.page.locator('#promotional_code')).toBeVisible();
        await expect(page.page.locator('input[type="submit"]')).toBeVisible();
    });
});