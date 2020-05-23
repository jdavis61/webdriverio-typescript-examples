import LoginPage from './LoginPage';
import Checkboxes from './Checkboxes';
import HoversPage from './HoversPage';
import JavaScriptAlerts from './JavaScriptAlerts';
import KeyPresses from './KeyPresses';

const presenceLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {

    public loadNavigationMenu() : void {
        browser.url('/');
    }

    public loadFormAuthenticationPage() : LoginPage {
        browser.url('/login');
        browser.$(presenceLocators.login).waitForDisplayed();
        return new LoginPage();
    }

    public loadCheckboxesPage() : Checkboxes {
        browser.url('/checkboxes');
        browser.$(presenceLocators.checkboxes).waitForDisplayed();
        return new Checkboxes();
    }

    public loadHoversPage() : HoversPage {
        browser.url('/hovers');
        browser.$(presenceLocators.hovers).waitForDisplayed();
        return new HoversPage();
    }

    public loadJavaScriptAlertsPage() : JavaScriptAlerts {
        browser.url('/javascript_alerts');
        browser.$(presenceLocators.javascriptAlertPage).waitForDisplayed();
        return new JavaScriptAlerts();
    }

    public loadKeyPressesPage() : KeyPresses {
        browser.url('/key_presses');
        browser.$(presenceLocators.keyPresses).waitForDisplayed();
        return new KeyPresses();
    }
}
