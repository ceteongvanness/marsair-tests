import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 60000,
    expect: {
        timeout: 10000
    },
    reporter: [
        ['html'], // HTML reporter
        ['list']  // Console reporter
    ],
    use: {
        actionTimeout: 10000,
        navigationTimeout: 15000,
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure' // Takes screenshots only on failure
    },
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium'
            }
        }
    ]
};

export default config;