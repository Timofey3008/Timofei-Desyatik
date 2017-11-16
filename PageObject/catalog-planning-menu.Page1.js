module.exports = CatalogMenu;
function CatalogMenu() {
   var menu = $('#westLayout'),
       header = $('#header'),
       center = $('#center');
       rightMenu = $('#eastLayout');
    var that = this,
    menuPublikationspflege = menu.element(by.cssContainingText(".list-group-item.ng-binding.ng-scope.add-active", "Publikationspflege"));
    namePublikationspflege = header.$('.ng-binding');
    nameTree = center.element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    nameProspekt = center.element(by.cssContainingText('.aciTreeText', 'Prospekt'));
    name6556 = center.element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017'));
    nummer = rightMenu.$('.row.smallspacer.col-def.ng-scope').$('.form-control');
    typ = rightMenu.element(by.model('publication.type'));
    //ET = rightMenu.$("[placeholder='ET']");
    ET = rightMenu.element(by.model('dateItem'));
    Preise = rightMenu.element(by.model('publication.priceType'));
    country = rightMenu.element(by.model('publication.country'));
    kommentar = rightMenu.$("[placeholder='Kommentar']");
    button = rightMenu.$('.btn.btn-default.btn-primary.fa.fa-undo');
    textmessage = rightMenu.$('.cp-text-color.ng-binding');

    that.menuPublikationspflege = menuPublikationspflege;
    that.namePublikationspflege = namePublikationspflege;
    that.nameTree = nameTree;
    that.nameProspekt = nameProspekt;
    that.name6556 = name6556;
    that.nummer = nummer;
    that.typ = typ;
    that.ET = ET;
    that.Preise = Preise;
    that.country = country;
    that.kommentar = kommentar;
    that.button = button;
    that.textmessage = textmessage;


    };


