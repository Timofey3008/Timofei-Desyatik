var Saisons = require('../PageObject/saisons.js'),
    Open = require('../util/Open.js'),
    Header = require('../PageObject/Header.js'),
    Value = require('../Value/Test2.data.json');
describe('Protractor Demo App', function () {

    var page = new Saisons(),
        header = new Header(),
        EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.stammdaten, Value.saisons);
        expect(header.headerName.getText()).toEqual('PuC.Marketing ' + Value.saisons);
    });
    it('Select 34', function () {
        Open.selectSesion(Value.name);
        expect(page.name.getAttribute('value')).toEqual(Value.name);
        expect(page.itemName.getAttribute('value')).toEqual(Value.itemName);
        expect(page.dataItem.getAttribute('value')).toEqual('01.09.2012');
        expect(page.endDate.getAttribute('value')).toEqual('28.02.2013');
    });
});