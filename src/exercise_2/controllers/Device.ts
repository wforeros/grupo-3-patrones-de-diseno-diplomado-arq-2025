import { Observer } from "../models/Observer";

// Implementa el patrón Observer. Cada dispositivo recibe y muestra el mensaje.
export class Device implements Observer {
    constructor(private id: string) {}
    
    update(message: string): void {
        console.log(`Device ${this.id} received message: ${message}`);
    }
}