import BasePage from './BasePage';
const selectors = require('../selectors/uimap.json');

export default class KeyPresses extends BasePage {
    constructor() {
        super();
    }

    get result() :WebdriverIO.Element {
        return browser.$(selectors.keyPresses.result);
    }

    getResultText() : string {
        return this.result.getText();
    }

    pressKey(value) : void {
        browser.keys(value);
        // browser.pause(1000);
    }
}
