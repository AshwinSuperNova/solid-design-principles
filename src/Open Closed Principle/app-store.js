"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStore = void 0;
var AppStore = /** @class */ (function () {
    function AppStore() {
        this.apps = new Map();
    }
    AppStore.prototype.installApp = function (app) {
        console.log("Installing ".concat(app.name, "..."));
        this.apps.set(app.appId, app);
    };
    AppStore.prototype.uninstallApp = function (appId) {
        var app = this.apps.get(appId);
        if (app) {
            console.log("Uninstalling ".concat(app.name, "..."));
            this.apps.delete(appId);
        }
    };
    AppStore.prototype.getInstalledApps = function () {
        return Array.from(this.apps.values());
    };
    AppStore.prototype.getApp = function (appId) {
        return this.apps.get(appId);
    };
    return AppStore;
}());
exports.AppStore = AppStore;
