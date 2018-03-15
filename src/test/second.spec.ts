import NavMenu from '../pages/navigationMenu';

describe('Nav menu', () => {

  it('Test',() => {
    let navMenu : NavMenu = new NavMenu();
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
  })

});