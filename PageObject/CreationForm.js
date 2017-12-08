module.exports = CreationForm;

function CreationForm() {
    var created = $('.modal-content'),
        that = this;
    that.anlegen = created.$('.ng-scope').element(by.cssContainingText('button', 'Anlegen'));
    that.buttonJa = created.element(by.cssContainingText('.btn.btn-default.ng-binding', 'Ja'));
    that.Publikationsteil = created.element(by.cssContainingText('.row.smallspacer', 'Publikationsteil')).$('.form-control.input-sm').$("[value='1352']");
    that.Und = created.element(by.cssContainingText('.row.smallspacer', 'und der Seite')).$('.form-control.input-sm').$("[value='1591']");
    that.Anlegen = created.element(by.cssContainingText('.btn.btn-default', 'Anlegen'));
}