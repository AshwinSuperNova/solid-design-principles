"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = exports.Refrigerator = void 0;
var Refrigerator = /** @class */ (function () {
    function Refrigerator() {
        this.powerSource = null;
    }
    Refrigerator.prototype.plugIn = function (powerOutlet) {
        this.powerSource = powerOutlet;
        console.log('Refrigerator: Plugged in');
    };
    Refrigerator.prototype.unplug = function () {
        this.powerSource = null;
        console.log('Refrigerator: Unplugged');
    };
    Refrigerator.prototype.start = function () {
        if (this.powerSource) {
            this.powerSource.supplyPower();
            console.log('Refrigerator: Running and cooling');
        }
    };
    Refrigerator.prototype.stop = function () {
        if (this.powerSource) {
            this.powerSource.turnOff();
            console.log('Refrigerator: Stopped');
        }
    };
    return Refrigerator;
}());
exports.Refrigerator = Refrigerator;
var Microwave = /** @class */ (function () {
    function Microwave() {
        this.powerSource = null;
    }
    Microwave.prototype.plugIn = function (powerOutlet) {
        this.powerSource = powerOutlet;
        console.log('Microwave: Plugged in');
    };
    Microwave.prototype.unplug = function () {
        this.powerSource = null;
        console.log('Microwave: Unplugged');
    };
    Microwave.prototype.start = function () {
        if (this.powerSource) {
            this.powerSource.supplyPower();
            console.log('Microwave: Heating food');
        }
    };
    Microwave.prototype.stop = function () {
        if (this.powerSource) {
            this.powerSource.turnOff();
            console.log('Microwave: Stopped');
        }
    };
    return Microwave;
}());
exports.Microwave = Microwave;
