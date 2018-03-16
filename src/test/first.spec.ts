import Google from '../pages/Google';

describe('Google basic search', () => {

    it('Test',() => {
        let google : Google = new Google();
        google.gotoHomePage();
        google.enterData('webdriver.io typescript');
        browser.pause(1000);
    });
});
