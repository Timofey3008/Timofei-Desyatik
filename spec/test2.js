var saisons = require('/Users/timofei.desyatik/WebstormProjects/untitled/PageObject/saisons.js');
describe('Protractor Demo App', function() {

    var page = new saisons();
    var EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('Open page Saisons', function () {
        browser.wait(EC.visibilityOf(page.menuStammdaten));
        page.menuStammdaten.click();
        browser.wait(EC.visibilityOf(page.menuSaisons));
        page.menuSaisons.click();
        expect(page.headerSaisons.getText()).toEqual('Saisons');
        //browser.wait(EC.visibilityOf(pageMenu.nameTree));

    });
    it('Select 34', function () {
        //browser.wait(EC.visibilityOf(page.select34));
        page.select34.click();
        expect();
        browser.sleep(5000);





    });
});