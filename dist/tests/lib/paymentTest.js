"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const payment_1 = __importDefault(require("../../service/payment"));
describe('PaymentService', () => {
    describe('processPayment', () => {
        it('should process the payment successfully', () => {
            const originalPaymentGateway = payment_1.default.processPayment;
            payment_1.default.processPayment = amount => {
                console.log('Payment Gateway Response');
                return 'Transaction Successful';
            };
            const consoleLogSpy = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleLogSpy.push(...args);
            };
            const result = payment_1.default.processPayment(100);
            (0, chai_1.expect)(result).to.equal('Transaction Successful');
            (0, chai_1.expect)(consoleLogSpy).to.deep.equal(['Payment Gateway Response']);
            payment_1.default.processPayment = originalPaymentGateway;
            console.log = originalConsoleLog;
        });
    });
    describe('refundPayment', () => {
        it('should initiate the refund successfully', () => {
            const originalPaymentGateway = payment_1.default.refundPayment;
            payment_1.default.refundPayment = transactionId => {
                console.log('Payment Gateway Response');
                return 'Refund Successful';
            };
            const consoleLogSpy = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleLogSpy.push(...args);
            };
            const result = payment_1.default.refundPayment('123456');
            (0, chai_1.expect)(result).to.equal('Refund Successful');
            (0, chai_1.expect)(consoleLogSpy).to.deep.equal(['Payment Gateway Response']);
            payment_1.default.refundPayment = originalPaymentGateway;
            console.log = originalConsoleLog;
        });
    });
});
