import NavigationMenu from '../pages/NavigationMenu';
import Checkboxes from '../pages/Checkboxes';

// Test
describe('Checkboxes test', () => {
    let navMenu;
    let checkboxPage;
    before('setup', () => {
        navMenu = new NavigationMenu();
        checkboxPage = new Checkboxes();
    });

    it('Checkboxes state test', () => {
        navMenu.loadNavigationMenu();
        navMenu.loadCheckboxesPage();
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
