const PaymentService = {
    processPayment: (amount: number) => {
        // ...
        console.log(amount);

        return 'Transaction Successful';
    },

    refundPayment: (transactionId: string) => {
        // ...
        console.log(transactionId);

        return 'Refund Successful';
    },
};

export default PaymentService;
