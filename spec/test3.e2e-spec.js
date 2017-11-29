var Vorteile = require('../PageObject/vorteile.js');
describe('Protractor Demo App', function() {

    var page = new Vorteile();
    var EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('Open page Vorteile', function () {
        browser.wait(EC.visibilityOf(page.menuStammdaten));
        page.menuStammdaten.click();
        browser.wait(EC.visibilityOf(page.menuVorteile));
        page.menuVorteile.click();
        expect(page.headerVorteile.getText()).toEqual('PuC.Marketing Vorteile');
    });
    it('Select string', function () {
       page.selectVR4.click();
       expect(page.nameVR4.getAttribute('value')).toEqual('VR_4');
    });
    it('Create new name', function () {
        page.buttonAdd.click();
        page.inpuName.sendKeys('Test_create');
        page.buttonAnlegen.click();
        expect(page.testName.getText()).toEqual('Test_create');
    });
    it('Edit name', function () {
        page.testName.click();
        page.testCreate.clear();
        page.testCreate.sendKeys('Test_edit');
        page.buttonSave.click();
        browser.wait(EC.visibilityOf(page.testEdit));
        expect(page.testEdit.getText()).toEqual('Test_edit');
    });
    it('Delete name', function () {
       page.testEdit.click();
       page.buttodDelete.click();
       page.buttonJa.click();
       expect(page.testEdit.isPresent()).toBe(false);
    });
});