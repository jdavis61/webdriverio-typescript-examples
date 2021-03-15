import NavigationMenu from '../pages/NavigationMenu';
import JavaScriptAlerts from 'src/pages/JavaScriptAlerts';

describe('JavaScript alerts test', () => {
    let jsAlert: JavaScriptAlerts;
    before('setup', () => {
        const navMenu: NavigationMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        jsAlert = navMenu.loadJavaScriptAlertsPage();
    });

    it('JavaScript alert test', () => {
        jsAlert.getPageHeader().should.be.equal('JavaScript Alerts');
        jsAlert.clickJSAlertButton();
        jsAlert.closeAlert();
        jsAlert.getResult().should.be.equal('You successfully clicked an alert');
    });

    it('JavaScript confirm test', () => {
        jsAlert.getPageHeader().should.be.equal('JavaScript Alerts');
        jsAlert.clickJSConfirmButton();
        jsAlert.closeAlert();
        jsAlert.getResult().should.be.equal('You clicked: Ok');
    });
});
