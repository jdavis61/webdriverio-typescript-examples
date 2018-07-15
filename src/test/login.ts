import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import LoginPage from '../pages/LoginPage';
import SecuredPage from '../pages/SecuredPage';

const pageProperties = require('../config/messages.json');

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const incorrectUsername = 'timsmith';
const incorrectPassword = 'qwerty100';
const usernameErrorMessage = 'Your username is invalid!';
const passwordErrorMessage = 'Your password is invalid!';

describe('Login functionality test suite', () => {
    let loginPage : LoginPage;
    let securedPage : SecuredPage;
    before('setup', () => {
        const navMenu: NavigationMenu = new NavigationMenu();
        loginPage = new LoginPage();
        securedPage = new SecuredPage();
        navMenu.loadNavigationMenu();
        navMenu.loadFormAuthenticationPage();
    });

    it('Login Test', () => {
        const msg = pageProperties.loginSubheader;
        loginPage.getPageHeader().should.be.equal('Login Page');
        loginPage.getPageSubHeader().should.be.equal(msg, 'Subheader is correct');
        loginPage.getFooterText().should.be.equal('Powered by Elemental Selenium');

        loginPage.login(username, password);
        securedPage.getPageMessage().should.be.equal('You logged into a secure area!');
        securedPage.getPageHeader().should.be.equal('Secure Area');
        securedPage.getFooterText().should.be.equal('Powered by Elemental Selenium');

        securedPage.clickLogout();
        securedPage.getPageHeader().should.not.be.equal('Secure Area', 'Logoff redirects to Login Page');
        securedPage.getPageMessage().should.be.equal('You logged out of the secure area!');
    });

    it('Validation Message Test', () => {
        // enter incorrect username
        loginPage.username.setValue(incorrectUsername);
        loginPage.clickSubmitButton();
        assert.equal(loginPage.getPageMessage(), usernameErrorMessage);

        // enter incorrect password
        loginPage.username.setValue(username);
        loginPage.password.setValue(incorrectPassword);
        loginPage.clickSubmitButton();
        loginPage.getPageMessage().should.be.equal(passwordErrorMessage);

        // Submit blank form
        loginPage.enterLoginInformation('', '');
        loginPage.clickSubmitButton();
        loginPage.getPageMessage().should.be.equal(usernameErrorMessage);
    });

    it('Close Validation Message Test', () => {
        loginPage.enterLoginInformation(incorrectUsername, incorrectPassword);
        loginPage.clickSubmitButton();
        loginPage.getPageMessage().should.be.equal(usernameErrorMessage);
        loginPage.closePageMessage();

        let isCloseButtonClicked : boolean = false;
        try {
            loginPage.closePageMessage();
            isCloseButtonClicked = true;
        } catch (err) {
            isCloseButtonClicked.should.be.equal(false);
        }
    });
});
