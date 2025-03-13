/**
 * Para el caso del ejercicio imaginamos que
 * no podemos modificar este método
 * No podemos implementarle interfaces nuevas
 * cambiar nombres de métodos, tipos ni lo que retornan
 */

interface ResultadoTransaccion {
  fueCompletado: boolean
}

export class MetodoDesconocido {
  completarPago(numeroCuenta: number, cantidad: number): ResultadoTransaccion {
    console.log('Completando el pago con el nuevo metodo desconocido')
    // Proceso imaginario y digamos que siempre funcionó
    return {
      fueCompletado: true
    }
  }
}