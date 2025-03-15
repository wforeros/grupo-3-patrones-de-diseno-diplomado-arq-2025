export const MessagesConfig = Object.freeze({
  CREDIT_CARD_PAYMENT: (account: string, amount: number) => `Processing credit card payment of ${amount} from account ${account}`,
  PAYPAL_PAYMENT: (account: string, amount: number) => `Processing PayPal payment of ${amount} from account ${account}`,
  NEW_PAYMENT: (account: string, amount: number) => `Processing new payment system payment of ${amount} from account ${account}`
});