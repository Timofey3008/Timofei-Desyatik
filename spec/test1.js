var CatalogMenu = require('/Users/timofei.desyatik/WebstormProjects/untitled/PageObject/catalog-planning-menu.Page1.js');
describe('Protractor Demo App', function() {

    var pageMenu = new CatalogMenu();
    var EC = protractor.ExpectedConditions;

    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });

    it('Open page Publikationspflege', function() {



        //browser.wait(EC.visibilityOf(element), 6000);
        pageMenu.menuPublikationspflege.click();

        // browser.sleep(5000);
        //element(by.model('second')).sendKeys(2);
        //element(by.id('gobutton')).click();

        expect(pageMenu.namePublikationspflege.getText()).toEqual('Publikationspflege');
       // page.LearnButton.click();
        browser.wait(EC.visibilityOf(pageMenu.nameTree));
       // page.TutorialButton.click();

    });
    it('Select 6556 Schwarzpreis ET: 02.03.2017', function() {
     // pageMenu.nameTree.doubleClick();
      //pageMenu.nameProspekt.doubleClick();
        //pageMenu.visibilityWaitingAndDoubleClick;
        browser.actions().doubleClick(pageMenu.nameTree).perform();
        browser.wait(EC.visibilityOf(pageMenu.nameProspekt));
        browser.actions().doubleClick(pageMenu.nameProspekt).perform();
        browser.wait(EC.visibilityOf(pageMenu.name6556));
        pageMenu.name6556.click();
        expect(pageMenu.nummer.getAttribute('value')).toEqual('6556');
        expect(pageMenu.typ.getAttribute('value')).toEqual('1');
        expect(pageMenu.ET.getAttribute('value')).toEqual('02.03.2017');
       //expect(pageMenu.ET.getText()).toEqual('02.03.17');
        expect(pageMenu.Preise.getAttribute('value')).toEqual('0');



    });
    it('New input', function() {
        pageMenu.nummer.clear();
        pageMenu.nummer.sendKeys('letiableInScope');
        pageMenu.typ.$("[value='21']").click();
        pageMenu.ET.clear();
        pageMenu.ET.sendKeys('11.11.2011');
        pageMenu.Preise.$("[value='1']").click();
        pageMenu.country.$("[value='0']").click();
        pageMenu.kommentar.sendKeys('comment');
        expect(pageMenu.nummer.getAttribute('value')).toEqual('letiableInScope');
        expect(pageMenu.typ.getAttribute('value')).toEqual('21');
        expect(pageMenu.ET.getAttribute('value')).toEqual('11.11.2011');
        expect(pageMenu.Preise.getAttribute('value')).toEqual('1');
        expect(pageMenu.country.getAttribute('value')).toEqual('0');
        expect(pageMenu.kommentar.getAttribute('value')).toEqual('comment');


    });
    it('Cancel', function()  {
        pageMenu.button.click();
        expect(pageMenu.textmessage.getText()).toEqual('Noch nichts geändert');


        //browser.sleep(5000);
    });

});
