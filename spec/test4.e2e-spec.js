var Random = require('../PageObject/Random.js'),
    RightMenu = require('../PageObject/RightMenu.js'),
    LeftMenu = require('../PageObject/LeftMenu.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Center = require('../PageObject/Center.js'),
    Open = require('../util/Open.js'),
    Value = require('../fixtures/Test4.data.json');
describe('Protractor Demo App', function() {

    var random = new Random(),
        center = new Center(),
        leftMenu = new LeftMenu(),
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
    it ('Add new entry', function () {
        center.buttonNew.click();
    });
    it ('Input data', function () {
        created.saison.click();
        browser.wait(EC.visibilityOf(created.nummerCreate));
        var a = random.getRandomValue();
        created.nummerCreate.clear();
        created.nummerCreate.sendKeys(a);
        created.typCreate.click();
        created.hauptCreate.clear();
        created.hauptCreate.sendKeys(Value.date);
        created.preiseCreate.click();
        created.warenabgabeCreate.clear();
        created.warenabgabeCreate.sendKeys(Value.date);
        created.landCreate.click();
        created.kommentarCreate.sendKeys(Value.test);
        created.anlegen.click();
        browser.wait(EC.visibilityOf(center.newEntry));
        expect(center.newEntry.isPresent()).toBe(true, 'new record was not created');
        });
    it('Delete data', function () {
        center.newEntry.click();
        center.deleteButton.click();
        created.buttonJa.click();
        expect(center.newEntry.isPresent()).toBe(false, 'new record was not deleted');
    });
});