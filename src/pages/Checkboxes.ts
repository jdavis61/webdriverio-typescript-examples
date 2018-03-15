import BasePage from './BasePage';

export default class CheckboxesPage extends BasePage {    
    checkboxes: string;
    constructor() {
        super();
        this.checkboxes = '#checkboxes > input';
    }

    public get checkboxOne() {
        return browser.$$(this.checkboxes)[0];
    }

    public get checkboxTwo() {
        return browser.$$(this.checkboxes)[1];
    }
}