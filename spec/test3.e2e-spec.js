var Vorteile = require('../PageObject/vorteile.js'),
    Open = require('../util/Open.js'),
    Header = require('../PageObject/Header.js'),
    Value = require('../Value/Test3.data.json');
describe('Protractor Demo App', function() {

    var page = new Vorteile();
    var header = new Header();
    var EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.stammdaten);
        Open.openMenu(Value.headerVorteile);
        expect(header.headerName.getText()).toEqual('PuC.Marketing ' + Value.headerVorteile);
    });
   // it('Open page Vorteile', function () {
      //  browser.wait(EC.visibilityOf(page.menuStammdaten));
      //  page.menuStammdaten.click();
      //  browser.wait(EC.visibilityOf(page.menuVorteile));
      //  page.menuVorteile.click();
      //  expect(page.headerVorteile.getText()).toEqual(Value.headerVorteile);
  //  });
    it('Select string', function () {
       page.selectVR4.click();
       expect(page.nameVR4.getAttribute('value')).toEqual(Value.nameVR4);
    });
    it('Create new name', function () {
        page.buttonAdd.click();
        page.inpuName.sendKeys(Value.imputName);
        page.buttonAnlegen.click();
        expect(page.testName.getText()).toEqual(Value.imputName);
    });
    it('Edit name', function () {
        page.testName.click();
        page.testCreate.clear();
        page.testCreate.sendKeys(Value.testEdit);
        page.buttonSave.click();
        browser.wait(EC.visibilityOf(page.testEdit));
        expect(page.testEdit.getText()).toEqual(Value.testEdit);
    });
    it('Delete name', function () {
       page.testEdit.click();
       page.buttodDelete.click();
       page.buttonJa.click();
       expect(page.testEdit.isPresent()).toBe(false);
    });
});