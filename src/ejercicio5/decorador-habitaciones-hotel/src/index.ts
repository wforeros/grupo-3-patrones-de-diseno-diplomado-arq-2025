// src/index.ts
import { Habitacion } from './interfaces/Habitacion';
import { HabitacionEstandar } from './modelos/HabitacionEstandar';
import { HabitacionDeluxe } from './modelos/HabitacionDeluxe';
import { HabitacionSuite } from './modelos/HabitacionSuite';
import { DecoradorFloresFrescas } from './decoradores/concretos/DecoradorFloresFrescas';
import { DecoradorChocolateGourmet } from './decoradores/concretos/DecoradorChocolateGourmet';
import { DecoradorVinoPremium } from './decoradores/concretos/DecoradorVinoPremium';
import { DecoradorServicioHabitacion } from './decoradores/concretos/DecoradorServicioHabitacion';
import { DecoradorTratamientoSpa } from './decoradores/concretos/DecoradorTratamientoSpa';

function main() {
  let habitacion: Habitacion = new HabitacionEstandar();
  console.log(`${habitacion.getDescripcion()} - Costo: $${habitacion.getCosto()}`);

  habitacion = new DecoradorFloresFrescas(habitacion);
  console.log(`${habitacion.getDescripcion()} - Costo: $${habitacion.getCosto()}`);

  habitacion = new DecoradorChocolateGourmet(habitacion);
  console.log(`${habitacion.getDescripcion()} - Costo: $${habitacion.getCosto()}`);

  let habitacionLujo: Habitacion = new HabitacionSuite();
  habitacionLujo = new DecoradorVinoPremium(habitacionLujo);
  habitacionLujo = new DecoradorTratamientoSpa(habitacionLujo);
  habitacionLujo = new DecoradorServicioHabitacion(habitacionLujo);
  console.log(`${habitacionLujo.getDescripcion()} - Costo: $${habitacionLujo.getCosto()}`);
}


main();