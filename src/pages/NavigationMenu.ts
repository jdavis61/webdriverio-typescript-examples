import LoginPage from './LoginPage';
import Checkboxes from './Checkboxes';
import HoversPage from './HoversPage';
import JavaScriptAlerts from './JavaScriptAlerts';
import KeyPresses from './KeyPresses';
import NestedFrames from './NestedFrames';

const presenceLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {

    public loadNavigationMenu() : void {
        browser.url('/');
    }

    public loadFormAuthenticationPage() : LoginPage {
        browser.url('/login');
        browser.waitForVisible(presenceLocators.login);
        return new LoginPage();
    }

    public loadCheckboxesPage() : Checkboxes {
        browser.url('/checkboxes');
        browser.waitForVisible(presenceLocators.checkboxes);
        return new Checkboxes();
    }

    public loadHoversPage() : HoversPage {
        browser.url('/hovers');
        browser.waitForVisible(presenceLocators.hovers);
        return new HoversPage();
    }

    public loadJavaScriptAlertsPage() : JavaScriptAlerts {
        browser.url('/javascript_alerts');
        browser.waitForVisible(presenceLocators.javascriptAlertPage);
        return new JavaScriptAlerts();
    }

    public loadKeyPressesPage() : KeyPresses {
        browser.url('/key_presses');
        browser.waitForVisible(presenceLocators.keyPresses);
        return new KeyPresses();
    }

    public loadNestedFramesPage() : NestedFrames {
        browser.url('/nested_frames');
        browser.waitForVisible(presenceLocators.nestedFrames);
        return new NestedFrames();
    }
}
