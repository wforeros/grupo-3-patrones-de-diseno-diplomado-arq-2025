import { Habitacion } from '../../interfaces/Habitacion';

export abstract class DecoradorHabitacion implements Habitacion {
  protected habitacion: Habitacion;

  constructor(habitacion: Habitacion) {
    this.habitacion = habitacion;
  }

  getDescripcion(): string {
    return this.habitacion.getDescripcion();
  }

  getCosto(): number {
    return this.habitacion.getCosto();
  }
}