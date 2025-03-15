export interface MetodoPago {
  pagar(cuenta: string, monto: number): boolean;
}