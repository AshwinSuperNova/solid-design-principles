"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardPowerOutlet = void 0;
var StandardPowerOutlet = /** @class */ (function () {
    function StandardPowerOutlet() {
        this.isOn = false;
    }
    StandardPowerOutlet.prototype.supplyPower = function () {
        this.isOn = true;
        console.log('Power outlet: Supplying power');
    };
    StandardPowerOutlet.prototype.turnOff = function () {
        this.isOn = false;
        console.log('Power outlet: Power off');
    };
    return StandardPowerOutlet;
}());
exports.StandardPowerOutlet = StandardPowerOutlet;
