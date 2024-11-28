import { IVehicle } from "./vehicle.interface";

export class RideManager {
    startRideWithVehicle(vehicle: IVehicle, pickup: string, destination: string): void {
        const estimatedTime = vehicle.getEstimatedTime();
        console.log(`Estimated time to destination: ${estimatedTime} minutes`);
        vehicle.startRide(pickup, destination);
    }

    completeRide(vehicle: IVehicle): void {
        vehicle.endRide();
    }
}