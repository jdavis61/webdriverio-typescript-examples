import LoginPage from './LoginPage';
import Checkboxes from './Checkboxes';
import HoversPage from './HoversPage';
import JavaScriptAlerts from './JavaScriptAlerts';
import KeyPresses from './KeyPresses';

const selectors = require('../selectors/uimap.json');

export default class NavigationMenu {

    public loadNavigationMenu() : void {
        browser.url('/');
    }

    public loadFormAuthenticationPage() : LoginPage {
        browser.url('/login');
        browser.$(selectors.screenPresenceLocators.login).waitForDisplayed();
        return new LoginPage();
    }

    public loadCheckboxesPage() : Checkboxes {
        browser.url('/checkboxes');
        browser.$(selectors.screenPresenceLocators.checkboxes).waitForDisplayed();
        return new Checkboxes();
    }

    public loadHoversPage() : HoversPage {
        browser.url('/hovers');
        browser.$(selectors.screenPresenceLocators.hovers).waitForDisplayed();
        return new HoversPage();
    }

    public loadJavaScriptAlertsPage() : JavaScriptAlerts {
        browser.url('/javascript_alerts');
        browser.$(selectors.screenPresenceLocators.javascriptAlertPage).waitForDisplayed();
        return new JavaScriptAlerts();
    }

    public loadKeyPressesPage() : KeyPresses {
        browser.url('/key_presses');
        browser.$(selectors.screenPresenceLocators.keyPresses).waitForDisplayed();
        return new KeyPresses();
    }
}
