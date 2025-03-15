import { PaymentProcessor } from '../../domain/payment.processor';
import { NewPaymentProcessor } from '../../infrastructure/new-payment.processor';


export class NewPaymentAdapter implements PaymentProcessor {
    private newPaymentProcessor: NewPaymentProcessor;

    constructor() {
        this.newPaymentProcessor = new NewPaymentProcessor();
    }

    processPayment(account: string, amount: number): void {
        this.newPaymentProcessor.makePayment(account, amount);
    }
}