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
        checkboxPage.getPageHeader().should.equal('Checkboxes');
        checkboxPage.checkboxOne.isSelected().should.be.false;
        checkboxPage.checkboxTwo.isSelected().should.be.true;

        checkboxPage.checkboxOne.click();
        checkboxPage.checkboxTwo.click();
        checkboxPage.checkboxOne.isSelected().should.be.true;
        checkboxPage.checkboxTwo.isSelected().should.be.false;

        checkboxPage.checkboxOne.click();
        checkboxPage.checkboxOne.isSelected().should.be.false;
        checkboxPage.checkboxTwo.isSelected().should.be.false;

        checkboxPage.checkboxOne.click();
        checkboxPage.checkboxTwo.click();
        checkboxPage.checkboxOne.isSelected().should.be.true;
        checkboxPage.checkboxTwo.isSelected().should.be.true;

    });
});
