const screenLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {
    public loadNavigationMenu() {
        browser.url('/');
    }

    public clickFormAuthentication() {
        browser.url('/login');
        browser.waitForVisible(screenLocators.login);
    }

    public clickCheckboxesPage() {
        browser.url('/checkboxes');
        browser.waitForVisible(screenLocators.checkboxes);
    }

    public clickHoversPage() {
        browser.url('/hovers');
        browser.waitForVisible(screenLocators.hovers);
    }

    public clickJavaScriptAlertsPage() {
        browser.url('/javascript_alerts');
        browser.waitForVisible(screenLocators.javascriptAlertPage);
    }
}
