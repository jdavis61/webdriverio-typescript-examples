import NavigationMenu from '../pages/NavigationMenu';
import HoversPage from '../pages/HoversPage';

describe('Hovers test', () => {
    it('Hover over image test', () => {
        for (let i = 0; i < 3; i += 1) {
            const navMenu = new NavigationMenu();
            const hoversPage = new HoversPage();
            navMenu.loadNavigationMenu();
            navMenu.clickHoversPage();
            hoversPage.hoverOverImage(i);
            hoversPage.getUserName(i).should.be.equal(`user${i + 1}`);
            hoversPage.clickViewProfile(i);
            hoversPage.returnToHoversPage();
        }
    });
});
