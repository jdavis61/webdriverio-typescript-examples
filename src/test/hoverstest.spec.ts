import { assert } from 'chai';
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
            assert.equal(hoversPage.getUserName(i), `user${i + 1}`);
            hoversPage.clickViewProfile(i);
            hoversPage.returnToHoversPage();
        }
    });
});
