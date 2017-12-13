module.exports = Center;

function Center() {
    var center = $('#center'),
        that = this;

    that.nameTree = center.element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    that.buttonNew = center.$('.glyphicon.glyphicon-plus');
    that.newEntry = center.element(by.cssContainingText('.aciTreeText', 'Schwarzpreis ET: 05.05.2017'));
    that.deleteButton = center.$('.btn.btn-default.glyphicon.glyphicon-trash');
    that.saveButton = center.$('.btn.glyphicon-file.pull-left');
    that.eshop = center.$('#artikelzuordnungTable').$('.htRight.tBold.htMiddle');
    that.refreshButton = center.$('.btn.fa.fa-undo');
    that.eshop2 = center.$('#artikelzuordnungTable').element(by.cssContainingText('.htRight.tBold.htMiddle', '11010051'));
    that.visible = center.$('.aciTreeLine');

}