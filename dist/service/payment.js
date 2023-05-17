"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentService = {
    processPayment: (amount) => {
        // ...
        console.log(amount);
        return 'Transaction Successful';
    },
    refundPayment: (transactionId) => {
        // ...
        console.log(transactionId);
        return 'Refund Successful';
    },
};
exports.default = PaymentService;
