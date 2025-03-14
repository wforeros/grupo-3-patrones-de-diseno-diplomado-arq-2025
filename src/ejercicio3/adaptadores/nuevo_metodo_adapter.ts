import { MetodoPago } from "../metodos_pago/metodo_pago";
import { NuevoMetodo } from "../metodos_pago/nuevo_metodo";

export class NuevoMetodoAdapter implements MetodoPago {

  #nuevoMetodoPago: NuevoMetodo

  constructor(nuevoMetodoPago: NuevoMetodo) {
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