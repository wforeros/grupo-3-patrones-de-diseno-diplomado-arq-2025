import { PaymentService } from './application/payment.service';
import { CreditCardPaymentProcessor, NewPaymentAdapter, PayPalPaymentProcessor } from './infrastructure';

export function program6(){
    const creditCardService = new PaymentService(new CreditCardPaymentProcessor());
    const payPalService = new PaymentService(new PayPalPaymentProcessor());
    const newPaymentService = new PaymentService(new NewPaymentAdapter());
    
    const USER_ACCOUNT = 'user@example.com';
    const PAYMENT_AMOUNT = 15000;
    
    console.log('Credit Card Payment:');
    creditCardService.process(USER_ACCOUNT, PAYMENT_AMOUNT);
    
    console.log('PayPal Payment:');
    payPalService.process(USER_ACCOUNT, PAYMENT_AMOUNT);
    
    console.log('New Payment System Payment:');
    newPaymentService.process(USER_ACCOUNT, PAYMENT_AMOUNT);
}