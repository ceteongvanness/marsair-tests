import { PlaywrightTestConfig } from '@playwright/test';
import { environment } from './environment.config';

const config: PlaywrightTestConfig = {
    testDir: '../tests',
    timeout: 60000,
    expect: {
        timeout: 10000
    },
    use: {
        actionTimeout: 15000,
        navigationTimeout: 15000,
        baseURL: environment.baseUrl,
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'on-first-retry'
    },
    reporter: [
        ['list'],
        ['html'],
        ['allure-playwright'],
        ['json', { outputFile: 'test-results/test-results.json' }]
    ],
    workers: 1,
    retries: process.env.CI ? 2 : 0,
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' }
        }
    ]
};

export default config;