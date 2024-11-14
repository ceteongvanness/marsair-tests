import { test, expect } from '@playwright/test';
import { DateUtils } from '../../src/utils/dateUtils';
import { ValidationUtils } from '../../src/utils/validationUtils';

test.describe('Date Validator Tests', () => {
    test('validates date combinations', () => {
        // Valid combinations (exactly 1 year or 1.5 years apart)
        expect(DateUtils.isValidDateCombination('July', 'July (next year)')).toBeTruthy();
        expect(DateUtils.isValidDateCombination('July', 'December (next year)')).toBeTruthy();
        expect(DateUtils.isValidDateCombination('December', 'December (next year)')).toBeTruthy();

        // Invalid combinations (less than 1 year or more than 2 years)
        expect(DateUtils.isValidDateCombination('July', 'December')).toBeFalsy();
        expect(DateUtils.isValidDateCombination('December', 'July (next year)')).toBeFalsy();
        expect(DateUtils.isValidDateCombination('July', 'July (two years from now)')).toBeFalsy();
    });

    test('validates departure dates', () => {
        expect(DateUtils.isValidDepartureDate('July')).toBeTruthy();
        expect(DateUtils.isValidDepartureDate('December')).toBeTruthy();
        expect(DateUtils.isValidDepartureDate('August')).toBeFalsy();
    });

    test('validates return dates', () => {
        expect(DateUtils.isValidReturnDate('July', 'July (next year)')).toBeTruthy();
        expect(DateUtils.isValidReturnDate('July', 'December')).toBeFalsy();
    });
});

test.describe('Promotional Code Tests', () => {
    test('validates promo codes', () => {
        expect(ValidationUtils.isValidPromoCode('AF3-FJK-418')).toBeTruthy();
        expect(ValidationUtils.isValidPromoCode('INVALID')).toBeFalsy();
        expect(ValidationUtils.isValidPromoCode('XX1-YYY-999')).toBeTruthy();
    });
});