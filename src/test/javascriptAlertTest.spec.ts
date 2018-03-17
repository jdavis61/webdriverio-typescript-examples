import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import JavaScriptAlerts from '../pages/JavaScriptAlerts';

describe('JavaScript Alert test', () => {

    let jsAlert : JavaScriptAlerts;
    before('setup', () => {
        jsAlert = new JavaScriptAlerts();
        const navMenu: NavigationMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        navMenu.clickJavaScriptAlertsPage();
    });

    it('JavaScript Alert test', () => {
        assert.equal(jsAlert.getPageHeader(), 'JavaScript Alerts');
        jsAlert.clickJSAlertButton();
        jsAlert.closeAlert();
        assert.equal(jsAlert.getResult(), 'You successfuly clicked an alert');
    });

    it('JavaScript confirm test', () => {
        assert.equal(jsAlert.getPageHeader(), 'JavaScript Alerts');
        jsAlert.clickJSConfirmButton();
        jsAlert.closeAlert();
        assert.equal(jsAlert.getResult(), 'You clicked: Ok');
    });
});

