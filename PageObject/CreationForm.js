module.exports = CreationForm;

function CreationForm() {
    var created = $('.modal-content'),
        that = this;
    that.anlegen = created.$('.ng-scope').element(by.cssContainingText('button', 'Anlegen'));
    that.buttonJa = created.element(by.cssContainingText('.btn.btn-default.ng-binding', 'Ja'));
    that.publikationsteil = created.element(by.cssContainingText('.row.smallspacer', 'Publikationsteil')).$('.form-control.input-sm').$("[label='3911']");
    that.und = created.element(by.cssContainingText('.row.smallspacer', 'und der Seite')).$('.form-control.input-sm').$("[label='Titel']");
    that.anlegen = created.element(by.cssContainingText('.btn.btn-default', 'Anlegen'));
}