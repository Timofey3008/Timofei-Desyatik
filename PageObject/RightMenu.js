module.exports = RightMenu;

function RightMenu() {
    var rightMenu = $('#eastLayout'),
        that = this;

    that.nummer = rightMenu.element(by.cssContainingText('.row.smallspacer', 'Nummer:')).$('.form-control');
    that.typEdit = rightMenu.element(by.cssContainingText('.row.smallspacer', 'Typ:')).$("[label='Inszenierungspunkt']");
    that.typ = rightMenu.element(by.model('publication.type'));
    that.ET = rightMenu.element(by.cssContainingText('.row.smallspacer', 'ET:')).$('.form-control');
    that.Preise = rightMenu.element(by.model('publication.priceType'));
    that.PreiseEdit = rightMenu.element(by.cssContainingText('.row.smallspacer', 'Preise:')).$("[label='Reduziert']");
    that.country = rightMenu.element(by.model('publication.country'));
    that.countryEdit = rightMenu.element(by.cssContainingText('.row.smallspacer', 'Land:')).$("[label='Nicht definiert']");
    that.kommentar = rightMenu.$("[placeholder='Kommentar']");
    that.button = rightMenu.$('.btn.fa-undo');
    that.textmessage = rightMenu.$('.cp-text-color.ng-binding');
    that.Numer = rightMenu.element(by.cssContainingText('.row.smallspacer.col-def', 'EShop-Nr.')).$('.input-sm.form-control');
}