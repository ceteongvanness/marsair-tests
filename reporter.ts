import { Reporter, TestCase, TestResult, TestStep } from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

class CustomReporter implements Reporter {
    private reports: any[] = [];

    onBegin(config: any, suite: any) {
        console.log('Testing started');
        this.reports = [];
    }

    onTestBegin(test: TestCase) {
        console.log(`Starting test: ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        this.reports.push({
            title: test.title,
            status: result.status,
            duration: result.duration,
            error: result.error?.message,
            retries: result.retry,
            suite: test.parent.title
        });
    }

    async onEnd() {
        const reportPath = path.join(process.cwd(), 'test-results');
        if (!fs.existsSync(reportPath)) {
            fs.mkdirSync(reportPath, { recursive: true });
        }

        const reportData = {
            timestamp: new Date().toISOString(),
            totalTests: this.reports.length,
            passed: this.reports.filter(r => r.status === 'passed').length,
            failed: this.reports.filter(r => r.status === 'failed').length,
            skipped: this.reports.filter(r => r.status === 'skipped').length,
            duration: this.reports.reduce((acc, curr) => acc + curr.duration, 0),
            tests: this.reports
        };

        fs.writeFileSync(
            path.join(reportPath, 'custom-report.json'),
            JSON.stringify(reportData, null, 2)
        );
    }
}

export default CustomReporter;