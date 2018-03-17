import BasePage from './BasePage';
const selectors = require('../selectors/javascriptAlerts.json');

export default class JavaScriptAlertsPage extends BasePage {
    constructor() {
        super();
    }

    get jsAlertButton() {
        return browser.$(selectors.jsAlertButtonLocator);
    }

    get jsConfirmButton() {
        return browser.$(selectors.jsConfirmButtonLocator);
    }

    get result() {
        return browser.$(selectors.resultLocator);
    }

    clickJSAlertButton() {
        this.jsAlertButton.click();
    }

    clickJSConfirmButton() {
        this.jsConfirmButton.click();
    }

    getResult() {
        return this.result.getText().trim();
    }

    closeAlert() {
        browser.alertAccept();
    }
}
