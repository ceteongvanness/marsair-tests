export interface BookingDates {
    departure: string;
    return: string;
}

export class TestUtils {
    static getValidDates(): BookingDates[] {
        const currentYear = new Date().getFullYear();
        return [
            {
                departure: `July ${currentYear}`,
                return: `December ${currentYear}`
            },
            {
                departure: `July ${currentYear}`,
                return: `July ${currentYear + 1}`
            },
            {
                departure: `December ${currentYear}`,
                return: `July ${currentYear + 1}`
            }
        ];
    }

    static isValidPromoCode(code: string): boolean {
        const pattern = /^[A-Z]{2}\d-[A-Z]{3}-\d{3}$/;
        return pattern.test(code);
    }
}