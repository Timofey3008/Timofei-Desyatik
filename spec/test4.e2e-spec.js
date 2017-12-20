var Random = require('../PageObject/Random.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Center = require('../PageObject/CentralTree.js'),
    method = require('../util/Open.js'),
    Value = require('../Value/Test4.data.json');
describe('Test4', function () {

    var random = new Random(),
        center = new Center(),
        header = new Header(),
        created = new CreationForm(),
        EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        method.openMenu(Value.marketing, Value.PublikationFlage);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.PublikationFlage);
    });
    it('Input data', function () {
        center.buttonNew.click();
        method.creationSelect(Value.saison);
        method.InputInCreationForm(Value.Nummer, random.getRandomValue());
        method.creationSelect(Value.Typ);
        method.InputInCreationForm(Value.Haupt, Value.date);
        method.creationSelect(Value.Preise);
        method.InputInCreationForm(Value.Warenabgabe, Value.date);
        method.creationSelect(Value.Land);
        method.InputInCreationForm(Value.Komment, Value.test);
        created.anlegen.click();
        browser.wait(EC.visibilityOf(center.newEntry));
        expect(center.newEntry.isPresent()).toBe(true, 'new record was not created');
    });
    it('Delete data', function () {
        method.click(Value.newEntry);
        center.deleteButton.click();
        created.buttonJa.click();
        expect(center.newEntry.isPresent()).toBe(false, 'new record was not deleted');
        method.toggleTree(Value.closeTree);
    });
});