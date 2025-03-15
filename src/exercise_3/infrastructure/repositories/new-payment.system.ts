import { MessagesConfig } from '../../config';

export class NewPaymentSystem {
    makePayment(account: string, total: number): void {
        console.log(MessagesConfig.NEW_PAYMENT(account, total));
    }
}