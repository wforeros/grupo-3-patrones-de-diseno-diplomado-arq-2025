/**
 * Para el caso del ejercicio imaginamos que
 * no podemos modificar este método
 * No podemos implementarle interfaces nuevas
 * cambiar nombres de métodos, tipos ni lo que retornan
 */

interface Resultado {
  fueCompletado: boolean
}

export class NuevoMetodo {
  completarPago(numeroCuenta: number, cantidad: number): Resultado {
    console.log('Completando el pago con el nuevo metodo.')
    // Proceso imaginario y digamos que siempre funcionó
    return {
      fueCompletado: true
    }
  }
}