const selectors = require('../selectors/nestedFrames.json');

export default class NestedFrames {

    private getFrame(frameId) {
        const frame = browser.frame(frameId);
        return frame.$('html');        
    }
    
    switchToTopFrame() {
        const frameId = browser.$(selectors.topFrame).value;
        browser.frame(frameId);
    }

    switchToParentFrame() {
        browser.frameParent();
    }
    
    get bottomFrame() {
        const frameId = browser.$(selectors.bottomFrame).value;
        return this.getFrame(frameId);
    }

    get leftFrame() {
        const frameId = browser.$(selectors.leftFrame).value;
        return this.getFrame(frameId);
    }

    get middleFrame() {
        const frameId = browser.$(selectors.middleFrame).value;
        return this.getFrame(frameId);
    }

    get rightFrame() {
        const frameId = browser.$(selectors.rightFrame).value;
        return this.getFrame(frameId);
    }
}
