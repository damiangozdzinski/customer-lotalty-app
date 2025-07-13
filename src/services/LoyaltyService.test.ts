import { LoyaltyService } from './LoyaltyService';

describe('LoyaltyService', () => {
    let service: LoyaltyService;

    beforeEach(() => {
        service = new LoyaltyService();
    });

    it('should return 0 balance for new customer', () => {
        expect(service.getBalance('cust1')).toBe(0);
    });

    it('should earn points correctly', () => {
        service.earnPoints('cust1', 50);
        expect(service.getBalance('cust1')).toBe(50);
    });

    it('should redeem points correctly', () => {
        service.earnPoints('cust1', 30);
        const result = service.redeemPoints('cust1', 20);
        expect(result.success).toBe(true);
        expect(result.currentBalance).toBe(10);
    });

    it('should not redeem more points than available', () => {
        service.earnPoints('cust1', 10);
        const result = service.redeemPoints('cust1', 20);
        expect(result.success).toBe(false);
        expect(result.currentBalance).toBe(10);
    });

    it('should warn when balance drops below 10', () => {
        service.earnPoints('cust1', 15);
        const result = service.redeemPoints('cust1', 10);
        expect(result.message).toContain('Warning');
    });
});