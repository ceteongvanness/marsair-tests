import { test, expect } from '@playwright/test';
import { MarsAirPage } from '../../src/pages/marsAirPage';
import { DateUtils } from '../../src/utils/dateUtils';

test.describe('Search Flow Integration', () => {
    let page: MarsAirPage;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const newPage = await context.newPage();
        page = new MarsAirPage(newPage);
    });

    test('valid date combinations', async () => {
        // Test valid one-year gap
        const isValidOneYear = DateUtils.isValidDateCombination('July', 'July (next year)');
        expect(isValidOneYear).toBeTruthy();

        // Test valid 1.5 year gap
        const isValidOneAndHalf = DateUtils.isValidDateCombination('July', 'December (next year)');
        expect(isValidOneAndHalf).toBeTruthy();

        // Test invalid short gap
        const isInvalidShort = DateUtils.isValidDateCombination('July', 'December');
        expect(isInvalidShort).toBeFalsy();

        // Test invalid long gap
        const isInvalidLong = DateUtils.isValidDateCombination('July', 'July (two years from now)');
        expect(isInvalidLong).toBeFalsy();
    });

    test('search with valid dates', async () => {
        await page.goto();
        await page.searchFlight('July', 'July (next year)');
        const message = await page.getMessage();
        expect(message).toContain('Sorry, there are no more seats available');
    });
});