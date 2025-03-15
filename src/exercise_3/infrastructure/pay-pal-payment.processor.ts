import { MessagesConfig } from '../config';
import { PaymentProcessor } from '../domain';

export class PayPalPaymentProcessor implements PaymentProcessor {
    processPayment(account: string, amount: number): void {
        console.log(MessagesConfig.PAYPAL_PAYMENT(account, amount));
    }
}