import { AppStore } from "./app-store";
import { OperatingSystem } from "./operating-system";
import { MessagingApp } from "./apps";
import { GameApp } from "./apps";
import { MusicApp } from "./apps";
import { IApp } from "./app.interface";

class Smartphone {
    private appStore: AppStore;
    private os: OperatingSystem;

    constructor() {
        this.appStore = new AppStore();
        this.os = new OperatingSystem(this.appStore);
    }

    installApp(app: IApp): void {
        this.appStore.installApp(app);
    }

    uninstallApp(appId: string): void {
        this.appStore.uninstallApp(appId);
    }

    openApp(appId: string): void {
        this.os.launchApp(appId);
    }

    closeApp(appId: string): void {
        this.os.closeApp(appId);
    }

    showInstalledApps(): void {
        this.os.listInstalledApps();
    }
}


const smartphone = new Smartphone();

smartphone.installApp(new MessagingApp('msg1', 'Whatsapp'));
smartphone.installApp(new GameApp('game1', 'free fire'));
smartphone.installApp(new MusicApp('music1', 'spotify'));
smartphone.showInstalledApps();
console.log('\nUsing Apps:');
smartphone.openApp('msg1');
smartphone.openApp('game1');
smartphone.closeApp('game1');
smartphone.openApp('music1');
smartphone.uninstallApp('game1');
smartphone.showInstalledApps();