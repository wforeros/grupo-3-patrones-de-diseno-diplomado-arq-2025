import { MetodoPago } from "./metodo_pago";

export class PaypalMetodo implements MetodoPago {
  pagar(cuenta: string, monto: number): boolean {
    console.log('Pagando con PayPal')
    return true
  }
}