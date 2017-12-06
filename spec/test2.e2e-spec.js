var saisons = require('../PageObject/saisons.js'),
    Open = require('../util/Open.js'),
    Header = require('../PageObject/Header.js'),
    Value = require('../Value/Test2.data.json');
describe('Protractor Demo App', function() {

    var page = new saisons();
    var header = new Header();
    var EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.stammdaten);
        Open.openMenu(Value.saisons);
       expect(header.headerName.getText()).toEqual('PuC.Marketing ' + Value.saisons);
   });
   // it('Open page Saisons', function () {
        //browser.wait(EC.visibilityOf(page.menuStammdaten));
        //page.menuStammdaten.click();
        //browser.wait(EC.visibilityOf(page.menuSaisons));
       //page.menuSaisons.click();
      // expect(page.headerSaisons.getText()).toEqual(Value.saisons);
    //});
    it('Select 34', function () {
        browser.wait(EC.visibilityOf(page.select34));
        page.select34.click();
        expect(page.name.getAttribute('value')).toEqual(Value.name);
        expect(page.itemName.getAttribute('value')).toEqual(Value.itemName);
        expect(page.dataItem.getAttribute('value')).toEqual('01.09.2012');
        expect(page.endDate.getAttribute('value')).toEqual('28.02.2013');
    });
});