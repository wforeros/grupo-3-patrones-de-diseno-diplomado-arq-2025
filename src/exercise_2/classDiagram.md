<!-- this diagram can be visualized with MermaidJS -->
classDiagram
    class Observer {
        <<interface>>
        +update(message: string)
    }
    
    class Device {
        +id: string
        +update(message: string)
    }
    
    class User {
        +devices: Observer[]
        +addDevice(device: Observer)
        +removeDevice(device: Observer)
        +update(message: string)
    }
    
    class NotificationService {
        +users: User[]
        +registerUser(user: User)
        +notifyUsers(message: string)
    }
    
    class DeviceFactory {
        +createDevice(type: string, id: string): Observer
    }
    
    Observer <|.. Device
    Observer <|.. User
    User "1" -- "*" Device
    NotificationService "1" -- "*" User
    DeviceFactory ..> Device