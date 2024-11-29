"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportationService = void 0;
var ride_manager_1 = require("./ride-manager");
var vehicles_1 = require("./vehicles");
var TransportationService = /** @class */ (function () {
    function TransportationService() {
        this.rideManager = new ride_manager_1.RideManager();
    }
    TransportationService.prototype.bookRide = function (vehicle, pickup, destination) {
        var _this = this;
        this.rideManager.startRideWithVehicle(vehicle, pickup, destination);
        setTimeout(function () {
            _this.rideManager.completeRide(vehicle);
        }, 1000);
    };
    return TransportationService;
}());
exports.TransportationService = TransportationService;
var transportService = new TransportationService();
console.log('\nBooking with Regular Car:');
transportService.bookRide(new vehicles_1.RegularCar(), 'Home', 'Office');
setTimeout(function () {
    console.log('\nBooking with Luxury Car:');
    transportService.bookRide(new vehicles_1.LuxuryCar(), 'Hotel', 'Airport');
}, 1000);
setTimeout(function () {
    console.log('\nBooking with Hybrid Car:');
    transportService.bookRide(new vehicles_1.HybridCar(), 'Mall', 'Restaurant');
}, 2000);
setTimeout(function () {
    console.log('\nBooking with Electric Car:');
    transportService.bookRide(new vehicles_1.ElectricCar(), 'Office', 'Home');
}, 3000);
