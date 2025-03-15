export interface PaymentProcessor {
  processPayment(account: string, amount: number): void;
}