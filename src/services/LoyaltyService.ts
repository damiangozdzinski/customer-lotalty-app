export interface OperationResult {
    success: boolean;
    message: string;
    currentBalance?: number;
}

type CustomerBalances = Map<string, number>;

export class LoyaltyService {
    private customerBalances: CustomerBalances = new Map();

    public getBalance(customerId: string): number {
        return this.customerBalances.get(customerId) || 0;
    }

    public earnPoints(customerId: string, points: number): OperationResult {
        const currentBalance = this.getBalance(customerId);
        const newBalance = currentBalance + points;
        this.customerBalances.set(customerId, newBalance);

        return {
            success: true,
            currentBalance: newBalance,
            message: `Customer ${customerId} earned ${points} points. New balance: ${newBalance} points.`
        }
    }

    public redeemPoints(customerId: string, points: number): OperationResult {
        const currentCustomerBalance = this.getBalance(customerId);

        if (currentCustomerBalance < points) {
            return {
                success: false,
                currentBalance: currentCustomerBalance,
                message: `Error: Customer ${customerId} does not have enough points to redeem. Current balance: ${currentCustomerBalance} points.`
            }
        }

        const newBalance = currentCustomerBalance - points;
        this.customerBalances.set(customerId, newBalance);

        let message = `Customer ${customerId} redeemed ${points} points. New balance: ${newBalance} points.`;

        if (newBalance < 10) {
            message += `\nWarning: Customer ${customerId} has less than 10 points remaining.`;
        }

        return {
            success: true,
            currentBalance: newBalance,
            message: message
        }
    }
}