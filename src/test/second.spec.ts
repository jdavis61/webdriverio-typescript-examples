import NavigationMenu from '../pages/NavigationMenu';

describe('Nav menu', () => {

    it('Test',() => {
        const navMenu : NavigationMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        navMenu.clickCheckboxesPage();
        browser.pause(1000);
        browser.back();
        navMenu.clickFormAuthentication();
        browser.pause(1000);
        browser.back();
        navMenu.clickHoversPage();
        browser.pause(1000);
        browser.back();
        navMenu.clickJavaScriptAlertsPage();
        browser.back();
    // browser.close();
    });

});
