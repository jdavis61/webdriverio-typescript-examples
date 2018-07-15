const screenLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {

    public loadNavigationMenu() {
        browser.url('/');
    }

    public loadFormAuthenticationPage() {
        browser.url('/login');
        browser.waitForVisible(screenLocators.login);
    }

    public loadCheckboxesPage() {
        browser.url('/checkboxes');
        browser.waitForVisible(screenLocators.checkboxes);
    }

    public loadHoversPage() {
        browser.url('/hovers');
        browser.waitForVisible(screenLocators.hovers);
    }

    public loadJavaScriptAlertsPage() {
        browser.url('/javascript_alerts');
        browser.waitForVisible(screenLocators.javascriptAlertPage);
    }

    public loadKeyPressesPage() {
        browser.url('/key_presses');
        browser.waitForVisible(screenLocators.keyPresses);
    }
}
