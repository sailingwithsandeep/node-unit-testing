import { expect } from 'chai';
import PaymentService from '../../service/payment';
describe('PaymentService', () => {
    describe('processPayment', () => {
        it('should process the payment successfully', () => {
            const originalPaymentGateway = PaymentService.processPayment;
            PaymentService.processPayment = amount => {
                console.log('Payment Gateway Response');
                return 'Transaction Successful';
            };

            const consoleLogSpy: any[] = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleLogSpy.push(...(args as any));
            };

            const result = PaymentService.processPayment(100);

            expect(result).to.equal('Transaction Successful');
            expect(consoleLogSpy).to.deep.equal(['Payment Gateway Response']);

            PaymentService.processPayment = originalPaymentGateway;
            console.log = originalConsoleLog;
        });
    });

    describe('refundPayment', () => {
        it('should initiate the refund successfully', () => {
            const originalPaymentGateway = PaymentService.refundPayment;
            PaymentService.refundPayment = transactionId => {
                console.log('Payment Gateway Response');
                return 'Refund Successful';
            };

            const consoleLogSpy: any = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleLogSpy.push(...args);
            };

            const result = PaymentService.refundPayment('123456');

            expect(result).to.equal('Refund Successful');
            expect(consoleLogSpy).to.deep.equal(['Payment Gateway Response']);

            PaymentService.refundPayment = originalPaymentGateway;
            console.log = originalConsoleLog;
        });
    });
});
