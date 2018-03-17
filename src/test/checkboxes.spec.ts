import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import Checkboxes from '../pages/Checkboxes';

// Test
describe('Add command test', () => {
    it('Checkboxes test', () => {
        const navMenu = new NavigationMenu();
        const checkboxPage = new CheckboxesPage();
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
