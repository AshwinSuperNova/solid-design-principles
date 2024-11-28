export interface IApp {
    appId: string;
    name: string;
    start(): void;
    stop(): void;
}