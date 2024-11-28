import { IApp } from "./app.interface"; 
export class AppStore {
    private apps: Map<string, IApp> = new Map();

    installApp(app: IApp): void {
        console.log(`Installing ${app.name}...`);
        this.apps.set(app.appId, app);
    }

    uninstallApp(appId: string): void {
        const app = this.apps.get(appId);
        if (app) {
            console.log(`Uninstalling ${app.name}...`);
            this.apps.delete(appId);
        }
    }

    getInstalledApps(): IApp[] {
        return Array.from(this.apps.values());
    }

    getApp(appId: string): IApp | undefined {
        return this.apps.get(appId);
    }
}