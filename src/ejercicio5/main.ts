// Interfaz común para una Habitación
interface IHabitacion {
    descripcion(): string;
    costo(): number;
}

// Clase base: Habitación simple
class Habitacion implements IHabitacion {
    descripcion(): string {
        return "Habitación estándar";
    }

    costo(): number {
        return 100; // Precio base de la habitación
    }
}

// Decorador base que implementa IHabitacion
abstract class DecoradorHabitacion implements IHabitacion {
    protected habitacion: IHabitacion;

    constructor(habitacion: IHabitacion) {
        this.habitacion = habitacion;
    }

    descripcion(): string {
        return this.habitacion.descripcion();
    }

    costo(): number {
        return this.habitacion.costo();
    }
}

// Decorador específico: Flores
class FloresDecorador extends DecoradorHabitacion {
    descripcion(): string {
        return this.habitacion.descripcion() + ", con flores frescas";
    }

    costo(): number {
        return this.habitacion.costo() + 20;
    }
}

// Decorador específico: Chocolate
class ChocolateDecorador extends DecoradorHabitacion {
    descripcion(): string {
        return this.habitacion.descripcion() + ", con chocolate gourmet";
    }

    costo(): number {
        return this.habitacion.costo() + 30;
    }
}

// Decorador específico: Vino
class VinoDecorador extends DecoradorHabitacion {
    descripcion(): string {
        return this.habitacion.descripcion() + ", con vino de alta calidad";
    }

    costo(): number {
        return this.habitacion.costo() + 50;
    }
}

export function program5(){
    let habitacion: IHabitacion = new Habitacion();
    console.log(habitacion.descripcion(), "- Precio:", habitacion.costo());
    
    habitacion = new FloresDecorador(habitacion);
    console.log(habitacion.descripcion(), "- Precio:", habitacion.costo());
    
    habitacion = new ChocolateDecorador(habitacion);
    console.log(habitacion.descripcion(), "- Precio:", habitacion.costo());
    
    habitacion = new VinoDecorador(habitacion);
    console.log(habitacion.descripcion(), "- Precio:", habitacion.costo());
}

