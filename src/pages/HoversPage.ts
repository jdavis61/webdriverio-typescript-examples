import BasePage from './BasePage';
const screenPresenceLocators = require('../selectors/screenPresenceLocators.json');

export default class HoversPage extends BasePage {

    constructor() {
        super();
    }

    get captions() : Array<WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>> {
        const captionsLocator = '.figcaption';
        return browser.$$(captionsLocator);
    }

    get figures() : Array<WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>> {
        const figureLocator = '.figure';
        return browser.$$(figureLocator);
    }

    hoverOverImage(position: number) : void {
        const figure = this.figures[position];
        figure.moveToObject('img');
        this.captions[position].waitForVisible();
    }

    clickViewProfile(position) : void {
        this.hoverOverImage(position);
        const captionSection = this.captions[position];
        const link = captionSection.$('a');
        link.click();
        browser.waitForVisible(screenPresenceLocators.userprofile);
    }

    returnToHoversPage() : void {
        browser.back();
        browser.waitForVisible(screenPresenceLocators.hovers);
    }

    getUserName(position: number) {
        this.hoverOverImage(position);
        const captionSection = this.captions[position];
        return captionSection.$('h5').getText().trim().replace('name: ', '');
    }
}
