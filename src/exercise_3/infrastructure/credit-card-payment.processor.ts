import { MessagesConfig } from '../config';
import { PaymentProcessor } from '../domain';

export class CreditCardPaymentProcessor implements PaymentProcessor {
    processPayment(account: string, amount: number): void {
        console.log(MessagesConfig.CREDIT_CARD_PAYMENT(account, amount));
    }
}