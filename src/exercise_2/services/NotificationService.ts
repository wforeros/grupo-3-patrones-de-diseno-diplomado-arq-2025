import { User } from "../controllers/User";

// Patrón Facade (Estructural): Centraliza el manejo de usuarios y sus notificaciones.
export class NotificationService {
    private users: User[] = [];
    
    registerUser(user: User): void {
        this.users.push(user);
    }
    
    notifyUsers(message: string): void {
        this.users.forEach(user => user.update(message));
    }
}