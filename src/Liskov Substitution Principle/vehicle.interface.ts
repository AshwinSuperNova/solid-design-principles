
export interface IVehicle {
    startRide(pickup: string, destination: string): void;
    endRide(): void;
    getEstimatedTime(): number;
}