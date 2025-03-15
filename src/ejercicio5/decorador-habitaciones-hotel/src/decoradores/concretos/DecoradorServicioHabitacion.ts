import { DecoradorHabitacion } from '../base/DecoradorHabitacion';
import { Habitacion } from '../../interfaces/Habitacion';

export class DecoradorServicioHabitacion extends DecoradorHabitacion {
  constructor(habitacion: Habitacion) {
    super(habitacion);
  }

  getDescripcion(): string {
    return `${this.habitacion.getDescripcion()}, con servicio a la habitación`;
  }

  getCosto(): number {
    return this.habitacion.getCosto() + 20000;
  }
}