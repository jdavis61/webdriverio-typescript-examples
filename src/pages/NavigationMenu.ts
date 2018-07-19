const presenceLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {

    public loadNavigationMenu() {
        browser.url('/');
    }

    public loadFormAuthenticationPage() {
        browser.url('/login');
        browser.waitForVisible(presenceLocators.login);
    }

    public loadCheckboxesPage() {
        browser.url('/checkboxes');
        browser.waitForVisible(presenceLocators.checkboxes);
    }

    public loadHoversPage() {
        browser.url('/hovers');
        browser.waitForVisible(presenceLocators.hovers);
    }

    public loadJavaScriptAlertsPage() {
        browser.url('/javascript_alerts');
        browser.waitForVisible(presenceLocators.javascriptAlertPage);
    }

    public loadKeyPressesPage() {
        browser.url('/key_presses');
        browser.waitForVisible(presenceLocators.keyPresses);
    }

    public loadNestedFramesPage() {
        browser.url('/nested_frames');
        browser.waitForVisible(presenceLocators.nestedFrames);
    }
}
