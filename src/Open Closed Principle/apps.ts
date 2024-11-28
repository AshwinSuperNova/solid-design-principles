import { IApp } from "./app.interface";

export class MessagingApp implements IApp {
    constructor(public appId: string, public name: string) {}

    start(): void {
        console.log(`${this.name}: Starting messaging services`);
    }

    stop(): void {
        console.log(`${this.name}: Stopping messaging services`);
    }
}

export class GameApp implements IApp {
    constructor(public appId: string, public name: string) {}

    start(): void {
        console.log(`${this.name}: Loading game resources`);
    }

    stop(): void {
        console.log(`${this.name}: Saving game state and closing`);
    }
}

export class MusicApp implements IApp {
    constructor(public appId: string, public name: string) {}

    start(): void {
        console.log(`${this.name}: Starting music player`);
    }

    stop(): void {
        console.log(`${this.name}: Stopping music playback`);
    }
}