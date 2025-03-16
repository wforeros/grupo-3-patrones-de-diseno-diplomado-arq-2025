import { Observer } from "../models/Observer";
import { Device } from "../controllers/Device";

export class DeviceFactory {
    static createDevice(type: string, id: string): Observer {
        if (type === "mobile" || type === "desktop" || type === "tablet") {
            return new Device(id);
        }
        throw new Error("Unknown device type");
    }
}