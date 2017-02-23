"use strict";
var Google = (function () {
    function Google() {
    }
    Google.prototype.gotoHomePage = function () {
        browser.url('/');
        browser.pause(10000);
    };
    return Google;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Google;
