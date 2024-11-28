import { IPowerOutlet } from "./power.interface";

export class StandardPowerOutlet implements IPowerOutlet {
    private isOn: boolean = false;

    supplyPower(): void {
        this.isOn = true;
        console.log('Power outlet: Supplying power');
    }

    turnOff(): void {
        this.isOn = false;
        console.log('Power outlet: Power off');
    }
}