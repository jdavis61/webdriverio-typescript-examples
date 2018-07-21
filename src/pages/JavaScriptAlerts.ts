import BasePage from './BasePage';
const selectors = require('../selectors/javascriptAlerts.json');

export default class JavaScriptAlerts extends BasePage {
    constructor() {
        super();
    }

    get jsAlertButton() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(selectors.jsAlertButtonLocator);
    }

    get jsConfirmButton() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(selectors.jsConfirmButtonLocator);
    }

    get result() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(selectors.resultLocator);
    }

    clickJSAlertButton() : void {
        this.jsAlertButton.click();
    }

    clickJSConfirmButton() : void {
        this.jsConfirmButton.click();
    }

    getResult() : string {
        return this.result.getText().trim();
    }

    closeAlert() : void {
        browser.alertAccept();
    }
}
