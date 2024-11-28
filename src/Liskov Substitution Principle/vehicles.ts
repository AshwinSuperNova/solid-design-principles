import { BaseVehicle } from "./base-vehicle";

export class RegularCar extends BaseVehicle {
    startRide(pickup: string, destination: string): void {
        console.log('Regular car dispatched');
        super.startRide(pickup, destination);
    }
}

export class LuxuryCar extends BaseVehicle {
    startRide(pickup: string, destination: string): void {
        console.log('Luxury car dispatched with complimentary water');
        super.startRide(pickup, destination);
    }
}

export class HybridCar extends BaseVehicle {
    startRide(pickup: string, destination: string): void {
        console.log('Eco-friendly hybrid car dispatched');
        super.startRide(pickup, destination);
    }
}

export class ElectricCar extends BaseVehicle {
    startRide(pickup: string, destination: string): void {
        console.log('Zero-emission electric car dispatched');
        super.startRide(pickup, destination);
    }
}
