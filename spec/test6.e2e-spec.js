var RightMenu = require('../PageObject/RightMenu.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Open = require('../util/Open.js'),
    Value = require('../Value/Test6.data.json'),
    Center = require('../PageObject/CentralTree.js');
describe('Protractor Demo App', function () {

    var rightMenu = new RightMenu(),
        center = new Center(),
        header = new Header(),
        created = new CreationForm(),
        EC = protractor.ExpectedConditions;

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
    it('should set title value like menus element', function () {
        Open.openMenu(Value.einkauf);
        Open.openMenu(Value.Artikelzuordnung);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.Artikelzuordnung);
    });
    it('Add new Artikelzuordnung', function () {
        center.buttonNew.click();
        browser.wait(EC.visibilityOf(created.Publikationsteil));
        created.Publikationsteil.click();
        created.Und.click();
        created.Anlegen.click();
        expect(center.Eshop.isPresent()).toBe(true);
    });
    it('Add Eshop', function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
        expect(rightMenu.Numer.getAttribute('value')).toEqual('11010051');
    });
    it('Cancel table', function () {
        center.refreshButton.click();
        expect(center.Eshop2.isPresent()).toBe(false);
    });
});

