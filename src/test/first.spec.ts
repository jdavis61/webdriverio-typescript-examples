import Google from '../pages/google';

describe('Google basic search', () => {

  it('Test',() => {
    let google : Google = new Google();
    google.gotoHomePage();
    google.enterData('webdriver.io typescript');
    browser.pause(1000);
  })

});
