var RightMenu = require('../PageObject/RightMenu.js'),
    LeftMenu = require('../PageObject/LeftMenu.js'),
    Header = require('../PageObject/Header.js'),
    CreationForm = require('../PageObject/CreationForm'),
    Open = require('../util/Open.js'),
    Value = require('../fixtures/Test6.data.json');
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
           // browser.actions().doubleClick(center.name39).perform();
            //browser.wait(EC.visibilityOf(center.nameInszenierungspunkt));
            //browser.actions().doubleClick(center.nameInszenierungspunkt).perform();
            //browser.wait(EC.visibilityOf(center.name3911));
           // center.name3911.click();
            Open.click(Value.name3911);
        });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.einkauf);
        Open.openMenu(Value.Artikelzuordnung);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.Artikelzuordnung);
     //   it('Open Artikelzuordnung', function () {
         //   leftMenu.menuEINKAUF.click();
          //  browser.wait(EC.visibilityOf(leftMenu.menuArtikelzuordnung));
          // leftMenu.menuArtikelzuordnung.click();
          // expect(header.headerName.getText()).toEqual('PuC.Marketing Artikelzuordnung');

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
        }) ;
    });

