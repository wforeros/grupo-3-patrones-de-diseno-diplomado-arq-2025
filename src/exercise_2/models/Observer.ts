// Patrón Observer (Comportamiento): Permite que múltiples dispositivos reciban notificaciones en tiempo real.
export interface Observer {
  update(message: string): void;
}
