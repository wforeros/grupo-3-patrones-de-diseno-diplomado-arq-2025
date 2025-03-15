import { MetodoPago } from "./metodo_pago";

export class TarjetaCredito implements MetodoPago {
  pagar(cuenta: string, monto: number): boolean {
    console.log('Pagando con Tarjeta de Crédito');
    return true
  }
}