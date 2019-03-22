const locators = require('../selectors/basePage.json');

export default class BasePage {
    public get subheader() : WebdriverIO.Element {
        return browser.$(locators.pageSubHeaderLocator);
    }

    public get footerText() : WebdriverIO.Element {
        return browser.$(locators.footerTextLocator);
    }

    public get pageMessage() : WebdriverIO.Element {
        return browser.$(locators.pageMessageLocator);
    }

    public get closeButton() : WebdriverIO.Element {
        return browser.$(locators.closeButton);
    }

    public getPageHeader() : string {
        const h2Selector: string = 'div.example h2';
        const h3Selector: string = 'div.example h3';
        if (browser.$$(locators.h2Selector).length > 0) {
            return $(h2Selector).getText();
        }
        return browser.$(h3Selector).getText();
    }

    public getPageSubHeader() : string {
        return this.subheader.getText();
    }

    public getFooterText() : string {
        return this.footerText.getText();
    }

    public getPageMessage() : string {
        return this.pageMessage.getText().split('\n')[0].trim();
    }

    public closePageMessage() : void {
        this.closeButton.click();
        browser.waitUntil(() => !this.closeButton.isDisplayed());
    }
}
