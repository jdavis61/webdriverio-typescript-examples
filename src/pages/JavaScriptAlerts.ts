import BasePage from './BasePage';
const selectors = require('../selectors/uimap.json');

export default class JavaScriptAlerts extends BasePage {
    constructor() {
        super();
    }

    get jsAlertButton() : WebdriverIO.Element {
        return browser.$(selectors.javascriptAlerts.jsAlertButtonLocator);
    }

    get jsConfirmButton() : WebdriverIO.Element {
        return browser.$(selectors.javascriptAlerts.jsConfirmButtonLocator);
    }

    get result() : WebdriverIO.Element {
        return browser.$(selectors.javascriptAlerts.resultLocator);
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
