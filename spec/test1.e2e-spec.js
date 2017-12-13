var Header = require('../PageObject/Header.js'),
    Value = require('../Value/Test1.data.json'),
    Method = require('../util/Open.js'),
    RightMenu = require('../PageObject/RightMenu.js');
describe('Protractor Demo App', function () {
    var header = new Header(),
        rightMenu = new RightMenu();

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Method.openMenu(Value.marketing, Value.seasonsMenuSubElement);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.seasonsMenuSubElement);
    });
    it('Select 6556 Schwarzpreis ET: 02.03.2017', function () {
        Method.openTree(Value.nameTree, Value.nameProspect, Value.name6556);
        expect(rightMenu.nummer.getAttribute('value')).toEqual(Value.nummer);
        expect(rightMenu.typ.getAttribute('value')).toEqual(Value.typ);
        expect(rightMenu.et.getAttribute('value')).toEqual(Value.ET);
        expect(rightMenu.preise.getAttribute('value')).toEqual(Value.preise);
    });
    it('New input', function () {
        Method.inputInRightCreationForm(Value.Nummer, Value.nummerEdit);
        Method.select(Value.TypSelect);
        Method.inputInRightCreationForm(Value.et, Value.ETedit);
        Method.select(Value.Reduziert);
        Method.select(Value.CountrySelect);
        Method.inputInRightCreationForm(Value.Kommentar, Value.komentar);
        expect(rightMenu.nummer.getAttribute('value')).toEqual(Value.nummerEdit);
        expect(rightMenu.typ.getAttribute('value')).toEqual(Value.typEdit);
        expect(rightMenu.et.getAttribute('value')).toEqual(Value.ETedit);
        expect(rightMenu.preise.getAttribute('value')).toEqual(Value.preiseEdit);
        expect(rightMenu.country.getAttribute('value')).toEqual(Value.country);
        expect(rightMenu.kommentar.getAttribute('value')).toEqual(Value.komentar);
    });
    it('Cancel', function () {
        rightMenu.button.click();
        expect(rightMenu.textmessage.getText()).toEqual('Wurde gespeichert');
    });
});
