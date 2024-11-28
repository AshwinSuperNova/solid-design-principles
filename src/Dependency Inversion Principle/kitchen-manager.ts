import { IPowerOutlet } from "./power.interface";
import { IAppliance } from "./appliance.interface";
import { Refrigerator } from "./appliances";
import { Microwave } from "./appliances";
import { StandardPowerOutlet } from "./power-outlet";
class KitchenManager {
    private powerOutlet: IPowerOutlet;
    private currentAppliance: IAppliance | null = null;

    constructor(powerOutlet: IPowerOutlet) {
        this.powerOutlet = powerOutlet;
    }

    plugInAppliance(appliance: IAppliance): void {
        if (this.currentAppliance) {
            this.currentAppliance.stop();
            this.currentAppliance.unplug();
        }
        
        appliance.plugIn(this.powerOutlet);
        this.currentAppliance = appliance;
    }

    useAppliance(): void {
        if (this.currentAppliance) {
            this.currentAppliance.start();
        }
    }

    stopAppliance(): void {
        if (this.currentAppliance) {
            this.currentAppliance.stop();
        }
    }
}


const powerOutlet = new StandardPowerOutlet();
const kitchenManager = new KitchenManager(powerOutlet);

const fridge = new Refrigerator();
const microwave = new Microwave();

console.log('\nTesting Refrigerator:');
kitchenManager.plugInAppliance(fridge);
kitchenManager.useAppliance();
kitchenManager.stopAppliance();

console.log('\nTesting Microwave:');
kitchenManager.plugInAppliance(microwave);
kitchenManager.useAppliance();
kitchenManager.stopAppliance();