import { RideManager } from "./ride-manager";
import { IVehicle } from "./vehicle.interface";
import { RegularCar, LuxuryCar, HybridCar, ElectricCar } from "./vehicles";

export class TransportationService {
    private rideManager: RideManager;

    constructor() {
        this.rideManager = new RideManager();
    }


    bookRide(vehicle: IVehicle, pickup: string, destination: string): void {
        this.rideManager.startRideWithVehicle(vehicle, pickup, destination);
        

        setTimeout(() => {
            this.rideManager.completeRide(vehicle);
        }, 2000);
    }
}


const transportService = new TransportationService();


console.log('\nBooking with Regular Car:');
transportService.bookRide(new RegularCar(), 'Home', 'Office');

setTimeout(() => {
    console.log('\nBooking with Luxury Car:');
    transportService.bookRide(new LuxuryCar(), 'Hotel', 'Airport');
}, 3000);

setTimeout(() => {
    console.log('\nBooking with Hybrid Car:');
    transportService.bookRide(new HybridCar(), 'Mall', 'Restaurant');
}, 6000);

setTimeout(() => {
    console.log('\nBooking with Electric Car:');
    transportService.bookRide(new ElectricCar(), 'Office', 'Home');
}, 9000);