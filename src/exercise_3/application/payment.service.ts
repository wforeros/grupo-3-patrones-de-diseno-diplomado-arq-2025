import { PaymentProcessor } from '../domain/payment.processor';

export class PaymentService {
    constructor(private paymentProcessor: PaymentProcessor) {}

    process(account: string, amount: number): void {
        this.paymentProcessor.processPayment(account, amount);
    }
}