import BasePage from './BasePage';
const selectors = require('../selectors/KeyPresses.json');

export default class KeyPresses extends BasePage {
    constructor() {
        super();
    }

    get result() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(selectors.result);
    }

    getResultText() : string {
        return this.result.getText();
    }

    pressKey(value) : void {
        browser.keys(value);
        // browser.pause(1000);
    }
}
