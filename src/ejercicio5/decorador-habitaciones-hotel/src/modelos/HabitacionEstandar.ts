import { Habitacion } from '../interfaces/Habitacion';

export class HabitacionEstandar implements Habitacion {
  getDescripcion(): string {
    return "Habitación Estándar";
  }

  getCosto(): number {
    return 100000;
  }
}