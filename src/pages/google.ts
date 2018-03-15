export default class Google {

  private get searchField() { return browser.$('#lst-ib'); }

  public gotoHomePage() {
    browser.url('https://www.google.com');
  }

  public enterData(searchTerm: string) {
      this.searchField.setValue(searchTerm);
  }
}