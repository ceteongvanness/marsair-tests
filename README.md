# MarsAir Test Automation

Automated testing framework for MarsAir booking system using Playwright with TypeScript.

## Project Structure
```bash
marsair-tests/
├── src/
│   ├── pages/                 # Page Objects
│   │   ├── basePage.ts       # Base page with common methods
│   │   └── marsAirPage.ts    # MarsAir specific page object
│   ├── utils/                 # Utilities
│   │   ├── dateUtils.ts      # Date validation utilities
│   │   └── validationUtils.ts # General validation utilities
│   ├── fixtures/             # Test Data
│   │   ├── testData.json     # Test data in JSON format
│   │   └── mockResponses.ts  # Mock response data
│   └── helpers/              # Helper Functions
│       ├── testHelper.ts     # Test helper functions
│       └── reportHelper.ts   # Report generation helpers
├── tests/
│   ├── e2e/                  # End-to-End Tests
│   │   ├── booking.spec.ts   # Booking flow tests
│   │   └── marsair.spec.ts   # General MarsAir tests
│   ├── integration/          # Integration Tests
│   │   └── searchFlow.spec.ts # Search functionality tests
│   └── unit/                 # Unit Tests
│       └── dateValidator.spec.ts # Date validation tests
├── config/                   # Configuration Files
│   ├── playwright.config.ts  # Playwright configuration
│   └── environment.config.ts # Environment variables
├── reports/                  # Test Reports
│   └── .gitkeep
├── package.json             # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Technology Stack

- **Test Framework**: Playwright
- **Language**: TypeScript
- **Reporting**: 
  - Playwright HTML Reporter
  - Allure Reporter
- **CI/CD**: GitHub Actions
- **Version Control**: Git

## Setup Instructions

1. Install dependencies:
```bash
# Install Node dependencies
npm install

# Install Playwright browsers
npx playwright install

# Install Allure CLI (optional, for Allure reports)
npm install -g allure-commandline
```

2. Configure environment:
```bash
# Copy environment config (if needed)
cp config/environment.example.ts config/environment.config.ts
```

## Running Tests

### Basic Test Commands
```bash
# Run all tests
npm test

# Run specific test types
npm run test:e2e          # End-to-End tests
npm run test:integration  # Integration tests
npm run test:unit         # Unit tests

# Run with UI mode
npm run test:ui

# Run in debug mode
npm run test:debug
```

### Test Reports

#### Playwright HTML Report
```bash
# Generate and view HTML report
npm run test:report

# View existing report
npm run report
```

#### Allure Report
```bash
# Generate Allure report
npm run allure:generate

# View Allure report
npm run allure:open
```

### Clean Up
```bash
# Clean reports and test results
npm run clean
```

## CI/CD Pipeline

### GitHub Actions Workflow

The pipeline runs automatically on:
- Push to main/master branch
- Pull requests
- Daily schedule (midnight UTC)

#### Pipeline Steps:
1. Setup environment
   - Node.js installation
   - Dependencies installation
   - Playwright browsers installation

2. Test execution
   - Run all test suites
   - Generate reports
   - Capture test artifacts

3. Report generation
   - Generate HTML report
   - Generate Allure report
   - Upload reports as artifacts

4. Deployment
   - Deploy reports to GitHub Pages
   - Send notifications
   - Update status badges

### Viewing Reports

1. **GitHub Actions**
   - Go to Actions tab
   - Select workflow run
   - Download artifacts

2. **GitHub Pages**
   - Visit: `https://<username>.github.io/<repository>`
   - View deployed Allure report

3. **Local Reports**
   ```bash
   # View HTML report
   npm run report

   # View Allure report
   npm run allure:generate
   npm run allure:open
   ```

## Test Organization

### 1. End-to-End Tests
- Complete user journeys
- Booking flow tests
- Full system integration

### 2. Integration Tests
- Component interactions
- Search functionality
- Form validations

### 3. Unit Tests
- Date validation
- Utility functions
- Helper methods

## Development Guidelines

### Adding New Tests

1. Page Objects (`src/pages/`)
   - Create page class extending BasePage
   - Define selectors and methods
   - Implement page-specific logic

2. Test Files (`tests/`)
   - Choose appropriate test type (e2e/integration/unit)
   - Follow existing naming conventions
   - Include clear test descriptions

3. Test Data (`src/fixtures/`)
   - Add test data in JSON format
   - Create mock responses if needed

### Best Practices

1. **Code Organization**
   - Use page object pattern
   - Maintain single responsibility
   - Follow DRY principles

2. **Test Writing**
   - Clear test descriptions
   - Independent tests
   - Proper assertions
   - Error handling

3. **Maintenance**
   - Regular updates
   - Code reviews
   - Documentation updates

## Troubleshooting

### Common Issues

1. **Test Failures**
   ```bash
   # Retry failed tests
   npm test -- --retries=3

   # Run with debug logs
   npm test -- --debug
   ```

2. **Report Generation Issues**
   ```bash
   # Clean and regenerate
   npm run clean
   npm run test:report
   ```

3. **CI Pipeline Issues**
   - Check GitHub Actions logs
   - Verify environment variables
   - Check browser installation
