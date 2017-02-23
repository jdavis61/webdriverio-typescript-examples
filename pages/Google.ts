export default class Google {

  get searchField() { return browser.$('#lst-ib'); }

  gotoHomePage() {
    browser.url('/');
  }

  
}
