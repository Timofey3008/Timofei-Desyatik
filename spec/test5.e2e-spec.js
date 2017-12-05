var RightMenu = require('../PageObject/RightMenu.js'),
    LeftMenu = require('../PageObject/LeftMenu.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Open = require('../util/Open.js'),
    Value = require('../fixtures/Test5.data.json');
    Center = require('../PageObject/Center.js');
describe('Protractor Demo App', function() {

    var rightMenu = new RightMenu(),
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
    it('Open 39, Frühling/Sommer 2015', function () {
        Open.openTree(Value.name39);
        browser.wait(EC.visibilityOf(center.nameInszenierungspunkt));
        browser.actions().doubleClick(center.nameInszenierungspunkt).perform();
        //Open.openTree(Value.nameInszenierungspunkt);
        Open.click(Value.name3911)
        //browser.actions().doubleClick(center.name39).perform();
        //browser.wait(EC.visibilityOf(center.nameInszenierungspunkt));
       // browser.actions().doubleClick(center.nameInszenierungspunkt).perform();
        //browser.wait(EC.visibilityOf(center.name3911));
       // center.name3911.click();
        });
    it('Open Streuplan', function () {
        Open.openMenu(Value.Streuplan);
        expect(header.headerName.getText()).toEqual('PuC.Marketing ' + Value.Streuplan);
    });
    it('lab 5, step 4 - should save file', function () {
            center.saveButton.click();
        });
});