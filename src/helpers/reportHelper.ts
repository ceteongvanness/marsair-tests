interface TestResult {
    status: 'passed' | 'failed' | 'skipped';
    duration: number;
}

interface TestSummary {
    total: number;
    passed: number;
    failed: number;
    duration: number;
}

export class ReportHelper {
    static generateTestSummary(results: TestResult[]): TestSummary {
        return {
            total: results.length,
            passed: results.filter(r => r.status === 'passed').length,
            failed: results.filter(r => r.status === 'failed').length,
            duration: results.reduce((sum, r) => sum + r.duration, 0)
        };
    }
}