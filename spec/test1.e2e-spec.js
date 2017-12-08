var Header = require('../PageObject/Header.js'),
    Value = require('../Value/Test1.data.json'),
    Open = require('../util/Open.js'),
    RightMenu = require('../PageObject/RightMenu.js');
describe('Protractor Demo App', function () {
    var header = new Header(),
        rightMenu = new RightMenu();

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('should set title value like menus element', function () {
        Open.openMenu(Value.seasonsMenuSubElement);
        expect(header.headerName.getText()).toEqual("PuC.Marketing " + Value.seasonsMenuSubElement);
    });
    it('Select 6556 Schwarzpreis ET: 02.03.2017', function () {
        Open.openTree(Value.nameTree, Value.nameProspect, Value.name6556);
        expect(rightMenu.nummer.getAttribute('value')).toEqual(Value.nummer);
        expect(rightMenu.typ.getAttribute('value')).toEqual(Value.typ);
        expect(rightMenu.ET.getAttribute('value')).toEqual(Value.ET);
        expect(rightMenu.Preise.getAttribute('value')).toEqual(Value.preise);
    });
    it('New input', function () {
        Open.rightCreationForm(Value.Nummer, Value.nummerEdit);
        Open.select(Value.TypSelect);
        Open.rightCreationForm(Value.et, Value.ETedit);
        Open.select(Value.Reduziert);
        Open.select(Value.CountrySelect);
        Open.rightCreationForm(Value.Kommentar, Value.komentar);
        expect(rightMenu.nummer.getAttribute('value')).toEqual(Value.nummerEdit);
        expect(rightMenu.typ.getAttribute('value')).toEqual(Value.typEdit);
        expect(rightMenu.ET.getAttribute('value')).toEqual(Value.ETedit);
        expect(rightMenu.Preise.getAttribute('value')).toEqual(Value.preiseEdit);
        expect(rightMenu.country.getAttribute('value')).toEqual(Value.country);
        expect(rightMenu.kommentar.getAttribute('value')).toEqual(Value.komentar);
    });
    it('Cancel', function () {
        rightMenu.button.click();
        expect(rightMenu.textmessage.getText()).toEqual('Wurde gespeichert');
    });
});
