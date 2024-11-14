export class ValidationUtils {
    static isValidPromoCode(code: string): boolean {
        return /^[A-Z]{2}\d-[A-Z]{3}-\d{3}$/.test(code);
    }
}