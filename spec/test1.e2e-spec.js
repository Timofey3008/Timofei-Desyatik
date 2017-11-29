var
LeftMenu = require('../PageObject/LeftMenu.js'),
Header = require('../PageObject/Header.js'),
Center = require('../PageObject/Center.js'),
RightMenu = require('../PageObject/RightMenu.js');
describe('Protractor Demo App', function() {

    var
     leftMenu = new LeftMenu(),
     header = new Header(),
        center = new Center(),
        rightMenu = new RightMenu(),
        EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    it('Open page Publikationspflege', function() {
        leftMenu.menuPublikationspflege.click();
        expect(header.headerName.getText()).toEqual('PuC.Marketing Publikationspflege');
        browser.wait(EC.visibilityOf(center.nameTree));
    });
    it('Select 6556 Schwarzpreis ET: 02.03.2017', function() {
        browser.actions().doubleClick(center.nameTree).perform();
        browser.wait(EC.visibilityOf(center.nameProspekt));
        browser.actions().doubleClick(center.nameProspekt).perform();
        browser.wait(EC.visibilityOf(center.name6556));
        center.name6556.click();
        expect(rightMenu.nummer.getAttribute('value')).toEqual('6556');
        expect(rightMenu.typ.getAttribute('value')).toEqual('1');
        expect(rightMenu.ET.getAttribute('value')).toEqual('02.03.2017');
        expect(rightMenu.Preise.getAttribute('value')).toEqual('0');
    });
    it('New input', function() {
        rightMenu.nummer.clear();
        rightMenu.nummer.sendKeys('letiableInScope');
        rightMenu.typEdit.click();
        rightMenu.ET.clear();
        rightMenu.ET.sendKeys('11.11.2011');
        rightMenu.PreiseEdit.click();
        rightMenu.countryEdit.click();
        rightMenu.kommentar.sendKeys('comment');
        expect(rightMenu.nummer.getAttribute('value')).toEqual('letiableInScope');
        expect(rightMenu.typ.getAttribute('value')).toEqual('21');
        expect(rightMenu.ET.getAttribute('value')).toEqual('11.11.2011');
        expect(rightMenu.Preise.getAttribute('value')).toEqual('1');
        expect(rightMenu.country.getAttribute('value')).toEqual('0');
        expect(rightMenu.kommentar.getAttribute('value')).toEqual('comment');
    });
    it('Cancel', function()  {
        rightMenu.button.click();
        expect(rightMenu.textmessage.getText()).toEqual('Wurde gespeichert');
    });
});
