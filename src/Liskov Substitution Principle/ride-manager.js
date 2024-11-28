"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideManager = void 0;
var RideManager = /** @class */ (function () {
    function RideManager() {
    }
    RideManager.prototype.startRideWithVehicle = function (vehicle, pickup, destination) {
        var estimatedTime = vehicle.getEstimatedTime();
        console.log("Estimated time to destination: ".concat(estimatedTime, " minutes"));
        vehicle.startRide(pickup, destination);
    };
    RideManager.prototype.completeRide = function (vehicle) {
        vehicle.endRide();
    };
    return RideManager;
}());
exports.RideManager = RideManager;
