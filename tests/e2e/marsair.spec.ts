import { test, expect } from '@playwright/test';
import { MarsAirPage } from '../../src/pages/marsAirPage';

test.describe('MarsAir Booking System Tests', () => {
    let marsAirPage: MarsAirPage;

    test.beforeEach(async ({ page }) => {
        marsAirPage = new MarsAirPage(page);
        await marsAirPage.goto();
    });

    test('should search with valid dates', async () => {
        await marsAirPage.searchFlight('July', 'July (next year)');
        const message = await marsAirPage.getMessage();
        expect(message).toContain('Sorry, there are no more seats available');
    });

    test('should handle no seats available scenario', async () => {
        await marsAirPage.searchFlight('December', 'December (next year)');
        const message = await marsAirPage.getMessage();
        expect(message).toContain('Sorry, there are no more seats available');
    });

    test('should handle valid promotional code', async () => {
        await marsAirPage.searchFlight('July', 'July (next year)', 'AF3-FJK-418');
        const message = await marsAirPage.getMessage();
        expect(message).toContain('Sorry, there are no more seats available');
    });
});