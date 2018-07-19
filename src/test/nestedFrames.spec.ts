import NavigationMenu from '../pages/NavigationMenu';
import NestedFrames from '../pages/NestedFrames';

// Test
describe('Checkboxes test', () => {
    let navMenu;
    let nestedFramesPage;
    before('setup', () => {
        navMenu = new NavigationMenu();
        nestedFramesPage = new NestedFrames();
    });

    it('Nested frames test', () => {
        navMenu.loadNavigationMenu();
        navMenu.loadNestedFramesPage();
        nestedFramesPage.switchToTopFrame();
        nestedFramesPage.leftFrame.$('body').getText().trim().should.equal('LEFT');
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.middleFrame.$('body').getText().trim().should.equal('MIDDLE');
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.rightFrame.$('body').getText().trim().should.equal('RIGHT');
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.switchToParentFrame();
        nestedFramesPage.bottomFrame.$('body').getText().trim().should.equal('BOTTOM');
    });
});
