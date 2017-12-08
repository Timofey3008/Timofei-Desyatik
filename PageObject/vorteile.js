module.exports = Vorteile;

function Vorteile() {
    var center = $('#center'),
        rightMenu = $('#eastLayout'),
        that = this;
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
}