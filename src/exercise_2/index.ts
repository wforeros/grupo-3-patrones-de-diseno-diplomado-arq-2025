import { NotificationService } from "./services/NotificationService";
import { User } from "./controllers/User";
import { DeviceFactory } from "./factories/DeviceFactory";

export function program2(){
    // Punto de entrada para probar la implementación de los patrones.
    const notificationService = new NotificationService();
    
    const user1 = new User();
    const device1 = DeviceFactory.createDevice("mobile", "Device1");
    const device2 = DeviceFactory.createDevice("desktop", "Device2");
    
    user1.addDevice(device1);
    user1.addDevice(device2);
    
    notificationService.registerUser(user1);
    notificationService.notifyUsers("Hello, this is a test message!");
}