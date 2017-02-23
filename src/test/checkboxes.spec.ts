import NavigationMenu from '../pages/NavigationMenu';

// Test
describe('Checkboxes test', () => {
    let navMenu;
    before('setup', () => {
        navMenu = new NavigationMenu();
    });

    it('Checkboxes state test', () => {
        navMenu.loadNavigationMenu();
        const checkboxPage = navMenu.loadCheckboxesPage();
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
