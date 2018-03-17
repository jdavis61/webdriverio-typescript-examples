import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import HoversPage from '../pages/HoversPage';

describe('Hovers test', () => {
    it('Hover over image test', () => {
        for (let i = 0; i < 3; i += 1) {
            NavigationMenu.loadNavigationMenu();
            NavigationMenu.clickHoversPage();
            HoversPage.hoverOverImage(i);
            assert.equal(HoversPage.getUserName(i), `user${i + 1}`);
            HoversPage.clickViewProfile(i);
            HoversPage.returnToHoversPage();
        }
    });
});
