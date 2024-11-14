import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const directories = [
    'playwright-report',
    'test-results',
    'reports'
];

directories.forEach(dir => {
    const path = join(process.cwd(), dir);
    if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
        console.log(`Created directory: ${dir}`);
    }
});