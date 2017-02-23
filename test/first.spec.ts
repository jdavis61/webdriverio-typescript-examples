/// <reference path="../typings/index.d.ts" />
import Google from '../pages/google';

describe('First ts test', () => {

  it('Test',() => {
    let google : Google = new Google();
    google.gotoHomePage();
    google.searchField.setValue('webdriver.io typescript');
    browser.pause(10000);
  })

});
