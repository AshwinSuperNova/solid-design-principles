import { AppStore } from './app-store';

export class OperatingSystem {
    constructor(private appStore: AppStore) {}

    launchApp(appId: string): void {
        const app = this.appStore.getApp(appId);
        if (app) {
            app.start();
        } else {
            console.log('App not found');
        }
    }

    closeApp(appId: string): void {
        const app = this.appStore.getApp(appId);
        if (app) {
            app.stop();
        }
    }

    listInstalledApps(): void {
        console.log('\nInstalled Apps:');
        this.appStore.getInstalledApps().forEach(app => {
            console.log(`- ${app.name} (${app.appId})`);
        });
    }
}