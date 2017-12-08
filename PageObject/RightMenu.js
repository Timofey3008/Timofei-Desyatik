module.exports = RightMenu;

function RightMenu() {
    var rightMenu = $('#eastLayout'),
        that = this;

    that.nummer = rightMenu.$('.row.smallspacer.col-def.ng-scope').$('.form-control');
    that.typ = rightMenu.element(by.model('publication.type'));
    that.typEdit = rightMenu.element(by.model('publication.type')).$("[value='21']");
    that.ET = rightMenu.element(by.model('dateItem'));
    that.Preise = rightMenu.element(by.model('publication.priceType'));
    that.PreiseEdit = rightMenu.element(by.model('publication.priceType')).$("[value='1']");
    that.country = rightMenu.element(by.model('publication.country'));
    that.countryEdit = rightMenu.element(by.model('publication.country')).$("[value='0']");
    that.kommentar = rightMenu.$("[placeholder='Kommentar']");
    that.button = rightMenu.$('.btn.fa-undo');
    that.textmessage = rightMenu.$('.cp-text-color.ng-binding');
    that.Numer = rightMenu.element(by.cssContainingText('.row.smallspacer.col-def', 'EShop-Nr.')).$('.input-sm.form-control');
}