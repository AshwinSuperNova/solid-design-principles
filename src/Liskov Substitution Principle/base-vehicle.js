"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVehicle = void 0;
var BaseVehicle = /** @class */ (function () {
    function BaseVehicle() {
        this.isInRide = false;
    }
    BaseVehicle.prototype.startRide = function (pickup, destination) {
        this.isInRide = true;
        console.log("Starting ride from ".concat(pickup, " to ").concat(destination));
    };
    BaseVehicle.prototype.endRide = function () {
        this.isInRide = false;
        console.log('Ride completed');
    };
    BaseVehicle.prototype.getEstimatedTime = function () {
        return 30;
    };
    return BaseVehicle;
}());
exports.BaseVehicle = BaseVehicle;
