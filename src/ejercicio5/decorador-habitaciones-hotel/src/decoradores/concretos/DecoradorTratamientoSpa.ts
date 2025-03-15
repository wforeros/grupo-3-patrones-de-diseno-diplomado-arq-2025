import { DecoradorHabitacion } from '../base/DecoradorHabitacion';
import { Habitacion } from '../../interfaces/Habitacion';

export class DecoradorTratamientoSpa extends DecoradorHabitacion {
  constructor(habitacion: Habitacion) {
    super(habitacion);
  }

  getDescripcion(): string {
    return `${this.habitacion.getDescripcion()}, con tratamiento de spa`;
  }

  getCosto(): number {
    return this.habitacion.getCosto() + 50;
  }
}