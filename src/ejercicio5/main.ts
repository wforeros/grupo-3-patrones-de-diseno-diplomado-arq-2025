interface IHabitacion {
    getDescripcion(): string;
    getCosto(): number;
}

class Habitacion implements IHabitacion {
    private descripcion: string = "Habitación estándar";
    private costo: number = 50;

    getDescripcion(): string {
        return this.descripcion;
    }

    getCosto(): number {
        return this.costo; 
    }
}

abstract class DecoradorHabitacion implements IHabitacion {
    protected habitacion: IHabitacion;

    constructor(habitacion: IHabitacion) {
        this.habitacion = habitacion;
    }

    getDescripcion(): string {
        return this.habitacion.getDescripcion();
    }

    getCosto(): number {
        return this.habitacion.getCosto();
    }
}

class FloresDecorador extends DecoradorHabitacion {
    private descripcion: string = "Flores frescas";
    private costo: number = 20;

    getDescripcion(): string {
        return this.habitacion.getDescripcion() + ", con " + this.descripcion;
    }

    getCosto(): number {
        return this.habitacion.getCosto() + this.costo;
    }
}

class ChocolateDecorador extends DecoradorHabitacion {
    private descripcion: string = "Chocolate gourmet";
    private costo: number = 10;

    getDescripcion(): string {
        return this.habitacion.getDescripcion() + ", con " + this.descripcion;
    }

    getCosto(): number {
        return this.habitacion.getCosto() + this.costo;
    }
}

class VinoDecorador extends DecoradorHabitacion {
    private descripcion: string = "Vino de alta calidad";
    private costo: number = 30;

    getDescripcion(): string {
        return this.habitacion.getDescripcion() + ", con " + this.descripcion;
    }

    getCosto(): number {
        return this.habitacion.getCosto() + this.costo;
    }
}

export function program5(){
    let habitacion: IHabitacion = new Habitacion();
    console.log(habitacion.getDescripcion(), "- Precio:", habitacion.getCosto());
    
    habitacion = new FloresDecorador(habitacion);
    console.log(habitacion.getDescripcion(), "- Precio:", habitacion.getCosto());
    
    habitacion = new ChocolateDecorador(habitacion);
    console.log(habitacion.getDescripcion(), "- Precio:", habitacion.getCosto());
    
    habitacion = new VinoDecorador(habitacion);
    console.log(habitacion.getDescripcion(), "- Precio:", habitacion.getCosto());
}