var Random = require('../PageObject/Random.js'),
    RightMenu = require('../PageObject/RightMenu.js'),
    LeftMenu = require('../PageObject/LeftMenu.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Center = require('../PageObject/CentralTree.js'),
    Open = require('../util/Open.js'),
    Value = require('../Value/Test4.data.json');
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

    it ('Input data', function () {
        center.buttonNew.click();
       // Open.creationForm(Value.Saison, Value.Select31);
        Open.creationSelect(Value.saison);
        //created.saison.click();
       // browser.wait(EC.visibilityOf(created.nummerCreate));
        var a = random.getRandomValue();
        //created.nummerCreate.clear();
       // created.nummerCreate.sendKeys(a);
        Open.creationForm(Value.Nummer, a);
        Open.creationSelect(Value.Typ);
        //  created.typCreate.click();
        Open.creationForm(Value.Haupt, Value.date);
        //created.hauptCreate.clear();
       // created.hauptCreate.sendKeys(Value.date);
        Open.creationSelect(Value.Preise);
        //created.preiseCreate.click();
        Open.creationForm(Value.Warenabgabe, Value.date);
       // created.warenabgabeCreate.clear();
       // created.warenabgabeCreate.sendKeys(Value.date);
        Open.creationSelect(Value.Land);
        //created.landCreate.click();
        Open.creationForm(Value.Komment, Value.test);
        //created.kommentarCreate.sendKeys(Value.test);
        created.anlegen.click();
        browser.wait(EC.visibilityOf(center.newEntry));
        expect(center.newEntry.isPresent()).toBe(true, 'new record was not created');
        });
    it('Delete data', function () {
        Open.click(Value.newEntry);
        center.deleteButton.click();
        created.buttonJa.click();
        expect(center.newEntry.isPresent()).toBe(false, 'new record was not deleted');
        Open.openTree(Value.closeTree);
    });
});