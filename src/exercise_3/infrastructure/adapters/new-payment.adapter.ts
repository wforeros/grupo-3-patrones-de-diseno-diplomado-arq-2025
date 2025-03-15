import { PaymentProcessor } from '../../domain/payment.processor';
import { NewPaymentSystem } from '../repositories';


export class NewPaymentAdapter implements PaymentProcessor {
    private newPaymentSystem: NewPaymentSystem;

    constructor() {
        this.newPaymentSystem = new NewPaymentSystem();
    }

    processPayment(account: string, amount: number): void {
        this.newPaymentSystem.makePayment(account, amount);
    }
}