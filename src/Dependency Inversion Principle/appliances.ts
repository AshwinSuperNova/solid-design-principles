import { IAppliance } from "./appliance.interface";
import { IPowerOutlet } from "./power.interface";

export class Refrigerator implements IAppliance {
    private powerSource: IPowerOutlet | null = null;

    plugIn(powerOutlet: IPowerOutlet): void {
        this.powerSource = powerOutlet;
        console.log('Refrigerator: Plugged in');
    }

    unplug(): void {
        this.powerSource = null;
        console.log('Refrigerator: Unplugged');
    }

    start(): void {
        if (this.powerSource) {
            this.powerSource.supplyPower();
            console.log('Refrigerator: Running and cooling');
        }
    }

    stop(): void {
        if (this.powerSource) {
            this.powerSource.turnOff();
            console.log('Refrigerator: Stopped');
        }
    }
}
export class Microwave implements IAppliance {
    private powerSource: IPowerOutlet | null = null;

    plugIn(powerOutlet: IPowerOutlet): void {
        this.powerSource = powerOutlet;
        console.log('Microwave: Plugged in');
    }

    unplug(): void {
        this.powerSource = null;
        console.log('Microwave: Unplugged');
    }

    start(): void {
        if (this.powerSource) {
            this.powerSource.supplyPower();
            console.log('Microwave: Heating food');
        }
    }

    stop(): void {
        if (this.powerSource) {
            this.powerSource.turnOff();
            console.log('Microwave: Stopped');
        }
    }
}