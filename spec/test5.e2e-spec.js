var
    RightMenu = require('../PageObject/RightMenu.js'),
    LeftMenu = require('../PageObject/LeftMenu.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Center = require('../PageObject/Center.js');
describe('Protractor Demo App', function() {

    var
        rightMenu = new RightMenu(),
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
    it('Open 39, Frühling/Sommer 2015', function () {
        browser.actions().doubleClick(center.name39).perform();
        browser.wait(EC.visibilityOf(center.nameInszenierungspunkt));
        browser.actions().doubleClick(center.nameInszenierungspunkt).perform();
        browser.wait(EC.visibilityOf(center.name3911));
        center.name3911.click();
        });
    it('Open Streuplan', function () {
        leftMenu.menuStreuplan.click();
        expect(header.headerName.getText()).toEqual('PuC.Marketing Streuplan');
    });

    it('lab 5, step 4 - should save file', function () {
            center.saveButton.click();
        });
});