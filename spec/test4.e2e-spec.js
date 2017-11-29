var Random = require('../PageObject/Random.js'),
data = require('../fixtures/data.json'),
RightMenu = require('../PageObject/RightMenu.js'),
LeftMenu = require('../PageObject/LeftMenu.js'),
Header = require('../PageObject/Header.js'),
CreationForm = require('../PageObject/CreationForm'),
Center = require('../PageObject/Center.js');
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
    it('Open page Publikationspflege', function () {
        leftMenu.menuPublikationspflege.click();
        expect(header.headerName.getText()).toEqual('PuC.Marketing Publikationspflege');
    });
    it ('Add new entry', function () {
        center.buttonNew.click();
    });
    it ('Input data', function () {
        created.saison.click();
        browser.wait(EC.visibilityOf(created.nummerCreate));
        var a = random.getRandomValue();
        created.nummerCreate.sendKeys(a);
        created.typCreate.click();
        created.hauptCreate.clear();
        created.hauptCreate.sendKeys('05.05.2017');
        created.preiseCreate.click();
        created.warenabgabeCreate.clear();
        created.warenabgabeCreate.sendKeys('05.05.2017');
        created.landCreate.click();
        created.kommentarCreate.sendKeys('test');
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