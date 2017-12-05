var LeftMenu = require('../PageObject/LeftMenu.js'),
    Header = require('../PageObject/Header.js'),
    Center = require('../PageObject/Center.js'),
    Value = require('../fixtures/Test1.data.json'),
    util = require('../util/common.js'),
    Open = require('../util/Open.js'),
    RightMenu = require('../PageObject/RightMenu.js');
describe('Protractor Demo App', function() {
    var leftMenu = new LeftMenu(),
        header = new Header(),
        center = new Center(),
        rightMenu = new RightMenu(),
        that = this,
        elem = rightMenu.nummer,
        value = 'letiableInScope',
        EC = protractor.ExpectedConditions;



    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.seasonsMenuSubElement);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.seasonsMenuSubElement);
    });
   // it('Open page Publikationspflege', function() {
        //leftMenu.menuPublikationspflege.click();
        //expect(header.headerName.getText()).toEqual('PuC.Marketing Publikationspflege');
    //});
    it('Select 6556 Schwarzpreis ET: 02.03.2017', function() {
        Open.openTree(Value.nameTree);
        Open.openTree(Value.nameProspect);
         //  browser.actions().doubleClick(center.nameTree).perform().then(function() {
        //    return  browser.wait(EC.visibilityOf(center.nameProspekt));
       // });
        //browser.actions().doubleClick(center.nameProspekt).perform();
       // browser.wait(EC.visibilityOf(center.name6556));
        //center.name6556.click();
        Open.click(Value.name6556);
        expect(rightMenu.nummer.getAttribute('value')).toEqual(Value.nummer);
        expect(rightMenu.typ.getAttribute('value')).toEqual(Value.typ);
        expect(rightMenu.ET.getAttribute('value')).toEqual(Value.ET);
        expect(rightMenu.Preise.getAttribute('value')).toEqual(Value.preise);
    });
    it('New input', function() {
        rightMenu.nummer.clear().then(function(){
            return rightMenu.nummer.sendKeys(Value.nummerEdit);
        });
         rightMenu.typEdit.click();
         rightMenu.ET.clear().then(function() {
             return rightMenu.ET.sendKeys(Value.ETedit);
         });

        rightMenu.PreiseEdit.click();
        rightMenu.countryEdit.click();
        rightMenu.kommentar.sendKeys(Value.komentar);
        expect(rightMenu.nummer.getAttribute('value')).toEqual(Value.nummerEdit);
        expect(rightMenu.typ.getAttribute('value')).toEqual(Value.typEdit);
        expect(rightMenu.ET.getAttribute('value')).toEqual(Value.ETedit);
        expect(rightMenu.Preise.getAttribute('value')).toEqual(Value.preiseEdit);
        expect(rightMenu.country.getAttribute('value')).toEqual(Value.country);
        expect(rightMenu.kommentar.getAttribute('value')).toEqual(Value.komentar);
    });
    it('Cancel', function()  {
        rightMenu.button.click();
        expect(rightMenu.textmessage.getText()).toEqual('Wurde gespeichert');
    });
});
