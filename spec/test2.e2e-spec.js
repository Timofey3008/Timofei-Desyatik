var saisons = require('../PageObject/saisons.js');
describe('Protractor Demo App', function() {

    var page = new saisons();
    var EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('Open page Saisons', function () {
        browser.wait(EC.visibilityOf(page.menuStammdaten));
        page.menuStammdaten.click();
        browser.wait(EC.visibilityOf(page.menuSaisons));
        page.menuSaisons.click();
        expect(page.headerSaisons.getText()).toEqual('PuC.Marketing Saisons');
    });
    it('Select 34', function () {
        page.select34.click();
        expect(page.name.getAttribute('value')).toEqual('34');
        expect(page.itemName.getAttribute('value')).toEqual('Herbst/Winter 2012/2013');
        expect(page.dataItem.getAttribute('value')).toEqual('01.09.2012');
        expect(page.endDate.getAttribute('value')).toEqual('28.02.2013');
    });
});