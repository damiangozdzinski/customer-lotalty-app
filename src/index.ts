import { LoyaltyService, OperationResult } from "./services/LoyaltyService";

const loyaltyService = new LoyaltyService();

function main() {
    const [, , operation, customerId, pointsValue] = process.argv;

    if(!operation || !customerId || !pointsValue) {
        console.error("Usage: npm start -- <earn|redeem> <customerId> <points>");
        process.exit(1);
    }

    const points = parseInt(pointsValue, 10);

    if (isNaN(points) || points < 0) {
        console.error("Points must be a non-negative integer.");
        process.exit(1);
    }

    let result: OperationResult;

    switch(operation) {
        case 'earn':
            result = loyaltyService.earnPoints(customerId, points);
            break;
        case 'redeem':
            result = loyaltyService.redeemPoints(customerId, points);
            break;
        default:
            console.error(`Invalid operation: ${operation}. Use 'earn' or 'redeem'.`);
            process.exit(1);
    }

    if(result.success) {
        console.log(result.message);
    } else {
        console.error(result.message);
        process.exit(1);
    }
}

main();