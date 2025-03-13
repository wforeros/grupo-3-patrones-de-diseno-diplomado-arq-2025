import { MetodoPago } from "../metodos_pago/metodo_pago";
import { MetodoDesconocido } from "../metodos_pago/nuevo_metodo_desconocido";

export class MetodoDesconocidoAdaptador implements MetodoPago {

  #nuevoMetodoPago: MetodoDesconocido

  constructor(nuevoMetodoPago: MetodoDesconocido) {
    this.#nuevoMetodoPago = nuevoMetodoPago
  }

  pagar(cuenta: string, monto: number): boolean {
    const numeroCuenta = Number(cuenta)

    if (isNaN(numeroCuenta)) {
      throw new Error('La cuenta debería ser un número para completar con este método de pago')
    }

    const resultadoTransaccion = this.#nuevoMetodoPago.completarPago(numeroCuenta, monto)
    return resultadoTransaccion.fueCompletado
  }
}