var Header = require('../PageObject/Header.js'),
    Open = require('../util/Open.js'),
    Value = require('../Value/Test5.data.json'),
    Center = require('../PageObject/CentralTree.js');
describe('Protractor Demo App', function () {

    var center = new Center(),
        header = new Header();
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.PublikationFlage);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.PublikationFlage);
    });
    it('Open 39, Frühling/Sommer 2015', function () {
        Open.openTree(Value.name39, Value.Inszenierungspunkt, Value.name3911);
    });
    it('Open Streuplan', function () {
        Open.openMenu(Value.Streuplan);
        expect(header.headerName.getText()).toEqual('PuC.Marketing ' + Value.Streuplan);
    });
    it('lab 5, step 4 - should save file', function () {
        center.saveButton.click();
    });
});