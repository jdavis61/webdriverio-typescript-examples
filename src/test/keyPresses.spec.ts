import NavigationMenu from '../pages/NavigationMenu';
import KeyPresses from 'src/pages/KeyPresses';
require('it-each')();
require('it-each')({ testPerIteration: true });

const keys = ['F5', 'a', '1', 'b', 'Alt', 'Shift'];

// Valid keys found here https://w3c.github.io/webdriver/#keyboard-actions.
describe('Key presses test', () => {
    let keyPressesPage: KeyPresses;
    before('setup', () => {
        const navMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        keyPressesPage = navMenu.loadKeyPressesPage();
    });

    // @ts-ignore: Property 'each' does not exist on type 'ITestDefinition'.
    // it-each does not have a typing file as of July 2018.
    it.each(keys, 'Press %s key, scrape result', ['element'], (element) => {
        const key = element;
        keyPressesPage.pressKey(key);
        keyPressesPage.getResultText().indexOf(key.toUpperCase()).should.be.above(-1);
    });
});
