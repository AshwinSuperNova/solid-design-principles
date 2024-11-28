"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appliances_1 = require("./appliances");
var appliances_2 = require("./appliances");
var power_outlet_1 = require("./power-outlet");
var KitchenManager = /** @class */ (function () {
    function KitchenManager(powerOutlet) {
        this.currentAppliance = null;
        this.powerOutlet = powerOutlet;
    }
    KitchenManager.prototype.plugInAppliance = function (appliance) {
        if (this.currentAppliance) {
            this.currentAppliance.stop();
            this.currentAppliance.unplug();
        }
        appliance.plugIn(this.powerOutlet);
        this.currentAppliance = appliance;
    };
    KitchenManager.prototype.useAppliance = function () {
        if (this.currentAppliance) {
            this.currentAppliance.start();
        }
    };
    KitchenManager.prototype.stopAppliance = function () {
        if (this.currentAppliance) {
            this.currentAppliance.stop();
        }
    };
    return KitchenManager;
}());
var powerOutlet = new power_outlet_1.StandardPowerOutlet();
var kitchenManager = new KitchenManager(powerOutlet);
var fridge = new appliances_1.Refrigerator();
var microwave = new appliances_2.Microwave();
console.log('\nTesting Refrigerator:');
kitchenManager.plugInAppliance(fridge);
kitchenManager.useAppliance();
kitchenManager.stopAppliance();
console.log('\nTesting Microwave:');
kitchenManager.plugInAppliance(microwave);
kitchenManager.useAppliance();
kitchenManager.stopAppliance();
