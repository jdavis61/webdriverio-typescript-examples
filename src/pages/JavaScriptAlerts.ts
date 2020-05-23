import BasePage from './BasePage';
const selectors = require('../selectors/javascriptAlerts.json');

export default class JavaScriptAlerts extends BasePage {
    constructor() {
        super();
    }

    get jsAlertButton() : WebdriverIO.Element {
        return browser.$(selectors.jsAlertButtonLocator);
    }

    get jsConfirmButton() : WebdriverIO.Element {
        return browser.$(selectors.jsConfirmButtonLocator);
    }

    get result() : WebdriverIO.Element {
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
        browser.acceptAlert();
    }
}
