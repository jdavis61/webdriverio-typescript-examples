import NavigationMenu from '../pages/NavigationMenu';

describe('JavaScript alerts test', () => {

    let jsAlert;
    before('setup', () => {
        const navMenu: NavigationMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        jsAlert = navMenu.loadJavaScriptAlertsPage();
    });

    it('JavaScript alert test', () => {
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

