import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: '../tests',
    timeout: 60000,
    expect: {
        timeout: 10000
    },
    reporter: [
        ['list'],  // Console reporter
        ['html', { open: 'never' }]  // HTML reporter
    ],
    use: {
        actionTimeout: 15000,
        navigationTimeout: 15000,
        baseURL: 'https://marsair.recruiting.thoughtworks.net/EngTeongCheah',
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'on-first-retry'
    },
    outputDir: '../test-results/',
    workers: 1,
    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' }
        }
    ]
};

export default config;