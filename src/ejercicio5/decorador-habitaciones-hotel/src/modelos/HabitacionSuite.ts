import { Habitacion } from '../interfaces/Habitacion';

export class HabitacionSuite implements Habitacion {
  getDescripcion(): string {
    return "Suite";
  }

  getCosto(): number {
    return 250000;
  }
}