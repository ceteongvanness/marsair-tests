export class DateUtils {
    private static readonly dateMap = new Map<string, number>([
        ['July', 0],
        ['December', 1],
        ['July (next year)', 2],
        ['December (next year)', 3],
        ['July (two years from now)', 4],
        ['December (two years from now)', 5]
    ]);

    static isValidDateCombination(departure: string, returnDate: string): boolean {
        const departureValue = this.dateMap.get(departure);
        const returnValue = this.dateMap.get(returnDate);

        // Check if dates exist in our valid options
        if (departureValue === undefined || returnValue === undefined) {
            return false;
        }

        // Rules for valid combinations:
        // 1. Return must be at least one year after departure
        // 2. Return can't be more than 2 years after departure
        const difference = returnValue - departureValue;
        
        // Difference should be 2 (1 year) or 3 (1.5 years)
        return difference === 2 || difference === 3;
    }

    static getValidDates(): string[] {
        return Array.from(this.dateMap.keys());
    }

    static isValidDepartureDate(date: string): boolean {
        return this.dateMap.has(date);
    }

    static isValidReturnDate(departureDate: string, returnDate: string): boolean {
        return this.isValidDateCombination(departureDate, returnDate);
    }
}