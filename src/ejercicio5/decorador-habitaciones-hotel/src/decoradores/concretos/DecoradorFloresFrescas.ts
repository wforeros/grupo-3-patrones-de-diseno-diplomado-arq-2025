import { DecoradorHabitacion } from '../base/DecoradorHabitacion';
import { Habitacion } from '../../interfaces/Habitacion';

export class DecoradorFloresFrescas extends DecoradorHabitacion {
  constructor(habitacion: Habitacion) {
    super(habitacion);
  }

  getDescripcion(): string {
    return `${this.habitacion.getDescripcion()}, con flores frescas`;
  }

  getCosto(): number {
    return this.habitacion.getCosto() + 25000;
  }
}