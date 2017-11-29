module.exports = Vorteile;
function Vorteile() {
    var menu = $('#westLayout'),
        header = $('#header'),
        center = $('#center');
    rightMenu = $('#eastLayout');
    var that = this;
    that.menuStammdaten = menu.element(by.cssContainingText(".text-justify.ng-binding", "STAMMDATEN"));
    that.menuVorteile = menu.element(by.cssContainingText(".list-group-item", "Vorteile"));
    that.headerVorteile = header;
    that.selectVR4 = center.element(by.cssContainingText('span', 'VR_4'));
    that.nameVR4 = rightMenu.$('.form-control');
    that.buttonAdd = center.$('.glyphicon.glyphicon-plus');
    that.inpuName = $('.modal-content').$('.form-control');
    that.buttonAnlegen = element(by.cssContainingText('.btn.btn-default', 'Anlegen'));
    that.testName = center.element(by.cssContainingText('span', 'Test_create'));
    that.testCreate = rightMenu.$('.form-control');
    that.testEdit = center.element(by.cssContainingText('span', 'Test_edit'));
    that.buttonSave = rightMenu.$('.fa.fa-floppy-o');
    that.buttodDelete = center.$('.glyphicon.glyphicon-minus');
    that.buttonJa = element(by.cssContainingText('.btn.btn-default.ng-binding', 'Ja'));

};