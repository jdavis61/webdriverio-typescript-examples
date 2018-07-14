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
        jsAlert.getPageHeader().should.be.equal('JavaScript Alerts');
        jsAlert.clickJSAlertButton();
        jsAlert.closeAlert();
        jsAlert.getResult().should.be.equal('You successfuly clicked an alert');
    });

    it('JavaScript confirm test', () => {
        jsAlert.getPageHeader().should.be.equal('JavaScript Alerts');
        jsAlert.clickJSConfirmButton();
        jsAlert.closeAlert();
        jsAlert.getResult().should.be.equal('You clicked: Ok');
    });
});

