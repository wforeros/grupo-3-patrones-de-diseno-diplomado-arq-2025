import { NuevoMetodoAdapter } from "./adaptadores/nuevo_metodo_adapter";
import { NuevoMetodo } from "./metodos_pago/nuevo_metodo";
import { PaypalMetodo } from "./metodos_pago/paypal";
import { TarjetaCredito } from "./metodos_pago/tarjeta_credito";
import { ServicioPago } from "./servicios/servicio_pago";

export function program3(){
    const CUENTA = "123"
    const VALOR_TRANSFERENCIA = 1000
    
    // Paypal
    const paypal = new PaypalMetodo()
    const servicioPaypal = new ServicioPago(paypal)
    servicioPaypal.hacerPago(CUENTA, VALOR_TRANSFERENCIA)
    
    // TC
    const tarjetaCredito = new TarjetaCredito()
    const servicioTarjetaCredito = new ServicioPago(tarjetaCredito)
    servicioTarjetaCredito.hacerPago(CUENTA, VALOR_TRANSFERENCIA)
    
    // Metodo Desconocido
    const nuevoMetodo = new NuevoMetodo()
    const nuevoMetodoAdaptado = new NuevoMetodoAdapter(nuevoMetodo)
    const servicioNuevoMetodo = new ServicioPago(nuevoMetodoAdaptado)
    servicioNuevoMetodo.hacerPago(CUENTA, VALOR_TRANSFERENCIA)
    
    // Va a arrojar error si lo usamos directamente
    // const servicioNuevoMetodo = new ServicioPago(nuevoMetodo)

}