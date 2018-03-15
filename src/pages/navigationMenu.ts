var screenLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {
    loadNavigationMenu() {
        browser.url('/');
    }

    clickFormAuthentication() {
        browser.url('/login');
        browser.waitForVisible(screenLocators.login);
    }

    clickCheckboxesPage() {
        browser.url('/checkboxes');
        browser.waitForVisible(screenLocators.checkboxes);
    }

    clickHoversPage() {
        browser.url('/hovers');
        browser.waitForVisible(screenLocators.hovers);
    }

    clickJavaScriptAlertsPage() {
        browser.url('/javascript_alerts');
        browser.waitForVisible(screenLocators.javascriptAlertPage);
    }
}
