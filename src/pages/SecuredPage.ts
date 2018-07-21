import BasePage from './BasePage';
import LoginPage from './LoginPage';
const screenLocators = require('../selectors/screenPresenceLocators.json');

export default class SecuredPage extends BasePage {
    constructor() {
        super();
    }

    public get logoutButton() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        const logoutButtonLocator: string = 'a.radius';
        return $(logoutButtonLocator);
    }

    public clickLogout() : LoginPage {
        this.logoutButton.click();
        browser.waitForVisible(screenLocators.login);
        return new LoginPage();
    }
}
