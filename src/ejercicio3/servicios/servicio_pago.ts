import { MetodoPago } from "../metodos_pago/metodo_pago";

export class ServicioPago {
  #metodoPago: MetodoPago

  constructor(metodoPago: MetodoPago) {
    this.#metodoPago = metodoPago
  }

  hacerPago(cuenta: string, cantidad: number): boolean {
    console.log('============================');
    console.log('Ejecutando caso hacerPago');
    this.#metodoPago.pagar(cuenta, cantidad)
    console.log('Final del caso hacerPago')
    return true
  }
}