const locators = require('../selectors/basePage.json');

export default class BasePage {
    public get subheader() {
        return browser.$(locators.pageSubHeaderLocator);
    }

    public get footerText() {
        return browser.$(locators.footerTextLocator);
    }

    public get pageMessage() {
        return browser.$(locators.pageMessageLocator);
    }

    public get closeButton() {
        return browser.$(locators.closeButton);
    }

    public getPageHeader() {
        const h2Selector: string = 'div.example h2';
        const h3Selector: string = 'div.example h3';
        if (browser.$$(locators.h2Selector).length > 0) {
            return $(h2Selector).getText();
        }
        return browser.$(h3Selector).getText();
    }

    public getPageSubHeader() {
        return this.subheader.getText();
    }

    public getFooterText() {
        return this.footerText.getText();
    }

    public getPageMessage() {
        return this.pageMessage.getText().split('\n')[0].trim();
    }

    public closePageMessage() {
        this.closeButton.click();
        browser.waitUntil(() => !this.closeButton.isVisible());
    }
}
