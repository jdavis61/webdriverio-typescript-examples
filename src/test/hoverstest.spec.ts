import NavigationMenu from '../pages/NavigationMenu';

describe('Hovers test', () => {
    it('Hover over image test', () => {
        for (let i = 0; i < 3; i += 1) {
            const navMenu = new NavigationMenu();
            navMenu.loadNavigationMenu();
            const hoversPage = navMenu.loadHoversPage();
            hoversPage.hoverOverImage(i);
            hoversPage.getUserName(i).should.be.equal(`user${i + 1}`);
        }
    });
});
