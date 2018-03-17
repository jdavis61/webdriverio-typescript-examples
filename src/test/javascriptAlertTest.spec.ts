import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import JavascriptAlerts from '../pages/JavascriptAlerts';

describe('JavaScript Alert test', () => {

    let jsAlert : JavaScriptAlertsPage;
    before('setup', () => {
        jsAlert = new JavaScriptAlertsPage();
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

