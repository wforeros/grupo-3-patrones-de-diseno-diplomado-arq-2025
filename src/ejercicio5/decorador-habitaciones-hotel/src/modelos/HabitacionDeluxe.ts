import { Habitacion } from '../interfaces/Habitacion';

export class HabitacionDeluxe implements Habitacion {
  getDescripcion(): string {
    return "Habitación Deluxe";
  }

  getCosto(): number {
    return 150000;
  }
}