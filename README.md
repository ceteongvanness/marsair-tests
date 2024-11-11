
## MarsAir Test Automation
The MarsAir booking system is a web application that allows users to book flights to Mars. The application includes flight search functionality, date selection, and promotional code features.

### Testing Scope
* Flight booking search functionality
* Date validation rules
* Promotional code validation
* Navigation and UI elements
* Error message validation

### Test Strategy
#### Testing Levels
1. Unit Testing
* Individual component functionality
* Date validation logic
* Promotional code validation
2. Integration Testing
* Search form submission
* Navigation between pages
* Form interactions
3. End-to-End Testing
* Complete booking flow
* User journey scenarios
* Cross-browser compatibility

#### Testing Types
1. Functional Testing
* Search functionality
* Date selection validation
* Promotional code application
* Navigation verification
2. UI Testing
* Form element presence
* Error message display
* Page layout verification
* Response messages
3. Error Handling
* Invalid date combinations
* Error message display
* Invalid promotional codes
* Empty form submissions

### Prerequisites

* Node.js (v14 or higher)
* npm (Node Package Manager)

### Project Setup
1. Clone the repository:
```
clone <repository-url>
cd marsair-tests
```

2. Install dependencies:
```
npm install
```

3. Install Playwright browsers:
```
npx playwright install
```


### Project Structure
```
marsair-tests/
├── tests/
│   ├── marsair.spec.ts      # Test specifications
│   └── marsair.page.ts      # Page object model
├── playwright.config.ts     # Playwright configuration
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

### Available Scripts
* ```npm run test``` - Run tests (cleans previous results first)
* ```npm run test:debug``` - Run tests in debug mode
* ```npm run test:ui - Run ```tests with Playwright UI mode
* ```npm run report ```- Show test report
* ```npm run report:html``` - Show HTML report from playwright-report directory
* ```npm run test:report ```- Run tests and show report immediately after
* ```npm run clean ```- Clean all report directories
* ```npm run pretest ```- Automatically runs before test (cleans reports)

### Running Tests
#### Basic Test Run
```
npm run test
```

#### Run Tests with UI Mode
```
npm run test:ui
```

#### Run Tests in Debug Mode
```
npm run test:debug
```

### Viewing Reports
#### View Latest Report
```
npm run report
```
#### Run Tests and View Report
```
npm run test:report
```

#### Clean Reports
```
npm run clean
```

### Test Report Location
Test reports are generated in the following directories:

* HTML Report: ```playwright-report/```
* Test Results: ```test-results/```

### Troubleshooting
If you encounter any issues:
1. Clean the project:
```
npm run clean
```

2. Reinstall dependencies:
```
npm ci
```

3. Reinstall browsers:
```
npx playwright install
```

#### Additional Information
* Tests are written in TypeScript
* Page Object Model pattern is used for better maintainability
* Reports include screenshots for failed tests
* All tests run in Chromium by default

#### Common Problems and Solutions

1. Tests failing to start:
```
npm run clean
npm install
npx playwright install
```

2. Report not generating:
```
npm run clean
npm run test:report
```

3. Browser not found:
```
npx playwright install
```
