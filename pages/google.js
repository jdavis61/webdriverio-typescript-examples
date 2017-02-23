"use strict";
var Google = (function () {
    function Google() {
    }
    Object.defineProperty(Google.prototype, "searchField", {
        get: function () { return browser.$('#lst-ib'); },
        enumerable: true,
        configurable: true
    });
    Google.prototype.gotoHomePage = function () {
        browser.url('/');
    };
    return Google;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Google;
