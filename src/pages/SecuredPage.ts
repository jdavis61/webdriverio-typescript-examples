import BasePage from './BasePage';
const screenLocators = require('../selectors/screenPresenceLocators.json');

export default class SecuredPage extends BasePage {
    constructor() {
        super();
    }

    public get logoutButton() {
        const logoutButtonLocator: string = 'a.radius';s;
        return $(logoutButtonLocator);
    }

    public clickLogout() {
        this.logoutButton.click();
        browser.waitForVisible(screenLocators.login);
    }
}
