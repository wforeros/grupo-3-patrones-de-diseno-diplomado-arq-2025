import { DecoradorHabitacion } from '../base/DecoradorHabitacion';
import { Habitacion } from '../../interfaces/Habitacion';

export class DecoradorChocolateGourmet extends DecoradorHabitacion {
  constructor(habitacion: Habitacion) {
    super(habitacion);
  }

  getDescripcion(): string {
    return `${this.habitacion.getDescripcion()}, con chocolate gourmet`;
  }

  getCosto(): number {
    return this.habitacion.getCosto() + 15000;
  }
}