import { test, expect } from '@playwright/test';
import { MarsAirPage } from '../../src/pages/marsAirPage';

test.describe('End-to-End Booking Tests', () => {
    let marsAirPage: MarsAirPage;

    test.beforeEach(async ({ page }) => {
        marsAirPage = new MarsAirPage(page);
        await marsAirPage.goto();
    });

    test('complete booking flow', async () => {
        await marsAirPage.searchFlight('July', 'July (next year)');
        const message = await marsAirPage.getMessage();
        expect(message).toContain('Sorry, there are no more seats available');
    });
});