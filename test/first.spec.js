"use strict";
var google_1 = require("../pages/google");
describe('First ts test', function () {
    it('Test', function () {
        var google = new google_1.default();
        google.gotoHomePage();
        google.searchField.setValue('webdriver.io typescript');
        browser.pause(10000);
    });
});
