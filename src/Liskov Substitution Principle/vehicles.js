"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricCar = exports.HybridCar = exports.LuxuryCar = exports.RegularCar = void 0;
var base_vehicle_1 = require("./base-vehicle");
var RegularCar = /** @class */ (function (_super) {
    __extends(RegularCar, _super);
    function RegularCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegularCar.prototype.startRide = function (pickup, destination) {
        console.log('Regular car dispatched');
        _super.prototype.startRide.call(this, pickup, destination);
    };
    return RegularCar;
}(base_vehicle_1.BaseVehicle));
exports.RegularCar = RegularCar;
var LuxuryCar = /** @class */ (function (_super) {
    __extends(LuxuryCar, _super);
    function LuxuryCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LuxuryCar.prototype.startRide = function (pickup, destination) {
        console.log('Luxury car dispatched with complimentary water');
        _super.prototype.startRide.call(this, pickup, destination);
    };
    return LuxuryCar;
}(base_vehicle_1.BaseVehicle));
exports.LuxuryCar = LuxuryCar;
var HybridCar = /** @class */ (function (_super) {
    __extends(HybridCar, _super);
    function HybridCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HybridCar.prototype.startRide = function (pickup, destination) {
        console.log('Eco-friendly hybrid car dispatched');
        _super.prototype.startRide.call(this, pickup, destination);
    };
    return HybridCar;
}(base_vehicle_1.BaseVehicle));
exports.HybridCar = HybridCar;
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectricCar.prototype.startRide = function (pickup, destination) {
        console.log('Zero-emission electric car dispatched');
        _super.prototype.startRide.call(this, pickup, destination);
    };
    return ElectricCar;
}(base_vehicle_1.BaseVehicle));
exports.ElectricCar = ElectricCar;
