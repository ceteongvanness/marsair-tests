import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 60000,
    expect: {
        timeout: 10000
    },
    reporter: [
        ['html'],
        ['list']
    ],
    use: {
        // Set headless to true to run without GUI
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        navigationTimeout: 15000,
        screenshot: 'only-on-failure'
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
