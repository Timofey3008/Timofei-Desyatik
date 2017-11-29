module.exports = CreationForm;
function CreationForm() {
    var created = $('.modal-content'),
        that = this;
    that.saison = created.element(by.cssContainingText('.row.smallspacer', 'Saison')).$('.form-control.input-sm').$("[value='31']");
    that.nummerCreate = created.element(by.cssContainingText('.row.smallspacer', 'Nummer')).$('.form-control.input-sm');
    that.typCreate = created.element(by.cssContainingText('.row.smallspacer', 'Typ')).$('.form-control.input-sm').$("[value='21']");
    that.hauptCreate = created.element(by.cssContainingText('.row.smallspacer', 'Haupt-ET')).$('.form-control.input-sm');
    that.preiseCreate = created.element(by.cssContainingText('.row.smallspacer', 'Preise')).$('.form-control.input-sm').$("[value='0']");
    that.warenabgabeCreate = created.element(by.cssContainingText('.row.smallspacer', 'Warenabgabe')).$('.form-control.input-sm');
    that.landCreate = created.element(by.cssContainingText('.row.smallspacer', 'Land')).$('.form-control.input-sm').$("[value='43']");
    that.kommentarCreate = created.element(by.cssContainingText('.row.smallspacer', 'Kommentar')).$('.form-control.input-sm');
    that.anlegen = created.$('.ng-scope').element(by.cssContainingText('button', 'Anlegen'));
    that.buttonJa = created.element(by.cssContainingText('.btn.btn-default.ng-binding', 'Ja'));
    that.Publikationsteil = created.element(by.cssContainingText('.row.smallspacer', 'Publikationsteil')).$('.form-control.input-sm').$("[value='1352']");
    that.Und = created.element(by.cssContainingText('.row.smallspacer', 'und der Seite')).$('.form-control.input-sm').$("[value='1591']");
    that.Anlegen = created.element(by.cssContainingText('.btn.btn-default', 'Anlegen'));
};