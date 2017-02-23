const selectors = require('../selectors/nestedFrames.json');

export default class NestedFrames {

    private getFrame(frameId) : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        const frame = browser.frame(frameId);
        return frame.$('html');
    }

    switchToTopFrame() : void {
        const frameId = browser.$(selectors.topFrame).value;
        browser.frame(frameId);
    }

    switchToParentFrame() : void {
        browser.frameParent();
    }

    get bottomFrame() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        const frameId = browser.$(selectors.bottomFrame).value;
        return this.getFrame(frameId);
    }

    get leftFrame() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        const frameId = browser.$(selectors.leftFrame).value;
        return this.getFrame(frameId);
    }

    get middleFrame() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        const frameId = browser.$(selectors.middleFrame).value;
        return this.getFrame(frameId);
    }

    get rightFrame() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        const frameId = browser.$(selectors.rightFrame).value;
        return this.getFrame(frameId);
    }
}
