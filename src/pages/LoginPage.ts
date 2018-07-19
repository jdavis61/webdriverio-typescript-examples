import BasePage from './BasePage';

const loginSelectors = require('../selectors/login.json');

export default class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get username() {
        return browser.$(loginSelectors.usernameLocator);
    }

    get password() {
        return browser.$(loginSelectors.passwordLocator);
    }

    get loginButton() {
        return browser.$(loginSelectors.loginButtonLocator);
    }

    enterLoginInformation(usernameValue, passwordValue) {
        this.username.setValue(usernameValue);
        this.password.setValue(passwordValue);
    }

    clickSubmitButton() {
        // Same issue with the antivirus pop occurs with webdriverio as well as webdriver.
        // The workaround is to click with javascript to bypass the pop-up.
        try {
            this.loginButton.click();
        } catch (err) {
            browser.execute(() => {
                const button: any = document.getElementsByClassName('radius')[0];
                button.click();
            });
        }
    }

    login(usernameValue, passwordValue) {
        const securedScreenPresenceLocator = 'a.radius';
        this.enterLoginInformation(usernameValue, passwordValue);
        this.clickSubmitButton();
        browser.waitForVisible(securedScreenPresenceLocator);
    }
}
