import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import Checkboxes from '../pages/Checkboxes';

// Test
describe('Add command test', () => {
    let navMenu;
    let checkboxPage;
    before('setup', () => {
        navMenu = new NavigationMenu();
        checkboxPage = new Checkboxes();
    });

    it('Checkboxes test', () => {
        navMenu.loadNavigationMenu();
        navMenu.clickCheckboxesPage();
        assert.equal(checkboxPage.getPageHeader(), 'Checkboxes');
        assert.isNotTrue(checkboxPage.checkboxOne.isSelected());
        assert.isTrue(checkboxPage.checkboxTwo.isSelected());

        checkboxPage.checkboxOne.click();
        checkboxPage.checkboxTwo.click();
        assert.equal(checkboxPage.checkboxOne.isSelected(), true);
        assert.equal(checkboxPage.checkboxTwo.isSelected(), false);

        checkboxPage.checkboxOne.click();
        assert.equal(checkboxPage.checkboxOne.isSelected(), false);
        assert.equal(checkboxPage.checkboxTwo.isSelected(), false);

        checkboxPage.checkboxOne.click();
        checkboxPage.checkboxTwo.click();
        assert.equal(checkboxPage.checkboxOne.isSelected(), true);
        assert.equal(checkboxPage.checkboxTwo.isSelected(), true);
    });
});
