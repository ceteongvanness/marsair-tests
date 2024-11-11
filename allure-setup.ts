// allure-setup.ts
import allure from 'allure-playwright';

export const allureSetup = {
    reporter: [
        ['line'],
        ['allure-playwright', {
            detail: true,
            outputFolder: 'allure-results',
            suiteTitle: false,
            categories: [
                {
                    name: 'Flaky tests',
                    matchedStatuses: ['failed', 'broken', 'passed']
                },
                {
                    name: 'Failed tests',
                    matchedStatuses: ['failed']
                }
            ]
        }]
    ]
};