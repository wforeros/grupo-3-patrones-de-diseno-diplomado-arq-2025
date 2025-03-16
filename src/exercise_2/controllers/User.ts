import { Observer } from "../models/Observer";

// Implementa el patrón Observer. Un usuario actúa como observador y notifica a sus dispositivos.
export class User implements Observer {
    private devices: Observer[] = [];
    
    addDevice(device: Observer): void {
        this.devices.push(device);
    }
    
    removeDevice(device: Observer): void {
        this.devices = this.devices.filter(d => d !== device);
    }
    
    update(message: string): void {
        console.log(`User received message: ${message}`);
        this.devices.forEach(device => device.update(message));
    }
}