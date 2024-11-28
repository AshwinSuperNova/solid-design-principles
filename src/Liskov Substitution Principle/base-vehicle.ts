import { IVehicle } from "./vehicle.interface";

export abstract class BaseVehicle implements IVehicle {
    protected isInRide: boolean = false;

    startRide(pickup: string, destination: string): void {
        this.isInRide = true;
        console.log(`Starting ride from ${pickup} to ${destination}`);
    }

    endRide(): void {
        this.isInRide = false;
        console.log('Ride completed');
    }


    getEstimatedTime(): number {
        return 30; 
    }
}