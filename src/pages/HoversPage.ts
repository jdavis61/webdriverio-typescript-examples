import BasePage from './BasePage';
const screenPresenceLocators = require('../selectors/screenPresenceLocators.json');

export default class HoversPage extends BasePage {

    constructor() {
        super();
    }

    get captions() : WebdriverIO.Element[] {
        const captionsLocator = '.figcaption';
        return browser.$$(captionsLocator);
    }

    get figures() : WebdriverIO.Element[] {
        const figureLocator = '.figure';
        return browser.$$(figureLocator);
    }

    hoverOverImage(position: number) : void {
        const figure = this.figures[position];
        figure.$('img').moveTo();
        this.captions[position].waitForDisplayed();
    }

    clickViewProfile(position) : void {
        this.hoverOverImage(position);
        const captionSection = this.captions[position];
        const link = captionSection.$('a');
        link.click();
        browser.$(screenPresenceLocators.userprofile).waitForDisplayed();
    }

    returnToHoversPage() : void {
        browser.back();
        browser.$(screenPresenceLocators.hovers).waitForDisplayed();
    }

    getUserName(position: number) {
        this.hoverOverImage(position);
        const captionSection = this.captions[position];
        return captionSection.$('h5').getText().trim().replace('name: ', '');
    }
}
