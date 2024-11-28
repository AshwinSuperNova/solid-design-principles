"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicApp = exports.GameApp = exports.MessagingApp = void 0;
var MessagingApp = /** @class */ (function () {
    function MessagingApp(appId, name) {
        this.appId = appId;
        this.name = name;
    }
    MessagingApp.prototype.start = function () {
        console.log("".concat(this.name, ": Starting messaging services"));
    };
    MessagingApp.prototype.stop = function () {
        console.log("".concat(this.name, ": Stopping messaging services"));
    };
    return MessagingApp;
}());
exports.MessagingApp = MessagingApp;
var GameApp = /** @class */ (function () {
    function GameApp(appId, name) {
        this.appId = appId;
        this.name = name;
    }
    GameApp.prototype.start = function () {
        console.log("".concat(this.name, ": Loading game resources"));
    };
    GameApp.prototype.stop = function () {
        console.log("".concat(this.name, ": Saving game state and closing"));
    };
    return GameApp;
}());
exports.GameApp = GameApp;
var MusicApp = /** @class */ (function () {
    function MusicApp(appId, name) {
        this.appId = appId;
        this.name = name;
    }
    MusicApp.prototype.start = function () {
        console.log("".concat(this.name, ": Starting music player"));
    };
    MusicApp.prototype.stop = function () {
        console.log("".concat(this.name, ": Stopping music playback"));
    };
    return MusicApp;
}());
exports.MusicApp = MusicApp;
