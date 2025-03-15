import { DecoradorHabitacion } from '../base/DecoradorHabitacion';
import { Habitacion } from '../../interfaces/Habitacion';

export class DecoradorVinoPremium extends DecoradorHabitacion {
  constructor(habitacion: Habitacion) {
    super(habitacion);
  }

  getDescripcion(): string {
    return `${this.habitacion.getDescripcion()}, con vino premium`;
  }

  getCosto(): number {
    return this.habitacion.getCosto() + 40000;
  }
}