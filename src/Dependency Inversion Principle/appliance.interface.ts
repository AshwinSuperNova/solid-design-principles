import { IPowerOutlet } from "./power.interface";

export interface IAppliance {
    plugIn(powerOutlet: IPowerOutlet): void;
    unplug(): void;
    start(): void;
    stop(): void;
}