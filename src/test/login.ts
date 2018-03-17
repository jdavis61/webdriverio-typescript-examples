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
        navMenu.clickFormAuthentication();
    });

    it('Login Test', () => {
        const msg = pageProperties.loginSubheader;
        assert.equal(loginPage.getPageHeader(), 'Login Page', 'Page header equals login.');
        assert.equal(loginPage.getPageSubHeader(), msg, 'Subheader is correct');
        assert.equal(loginPage.getFooterText(), 'Powered by Elemental Selenium');

        loginPage.login(username, password);
        assert.equal(securedPage.getPageMessage(), 'You logged into a secure area!', 'Secured are msg visible.');
        assert.equal(securedPage.getPageHeader(), 'Secure Area', 'Page header = Secure Area');
        assert.equal(securedPage.getFooterText(), 'Powered by Elemental Selenium');

        securedPage.clickLogout();
        assert.notEqual(securedPage.getPageHeader(), 'Secure Area', 'Logoff redirects to Login Page');
        assert.equal(securedPage.getPageMessage(), 'You logged out of the secure area!');
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
        assert.equal(loginPage.getPageMessage(), passwordErrorMessage);

        // Submit blank form
        loginPage.enterLoginInformation('', '');
        loginPage.clickSubmitButton();
        assert.equal(loginPage.getPageMessage(), usernameErrorMessage);
    });

    it('Close Validation Message Test', () => {
        loginPage.enterLoginInformation(incorrectUsername, incorrectPassword);
        loginPage.clickSubmitButton();
        assert.equal(loginPage.getPageMessage(), usernameErrorMessage);
        loginPage.closePageMessage();

        let isCloseButtonClicked : boolean = false;
        try {
            loginPage.closePageMessage();
            isCloseButtonClicked = true;
        } catch (err) {
            assert.notEqual(isCloseButtonClicked, true);
        }
    });
});
