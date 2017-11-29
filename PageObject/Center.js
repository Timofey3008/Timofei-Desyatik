module.exports = Center;
function Center() {
    var center = $('#center'),
        that = this;

    that.nameTree = center.element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'));
    that.nameProspekt = center.element(by.cssContainingText('.aciTreeText', 'Prospekt'));
    that.name6556 = center.element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017'));
    that.buttonNew = center.$('.glyphicon.glyphicon-plus');
    that.newEntry = center.element(by.cssContainingText('.aciTreeText',  'Schwarzpreis ET: 05.05.2017'));
    that.deleteButton = center.$('.btn.btn-default.glyphicon.glyphicon-trash');
    that.name39 = center.element(by.cssContainingText('.aciTreeText', '39, Frühling/Sommer 2015'));
    that.nameInszenierungspunkt = center.element(by.cssContainingText('.aciTreeLi.aciTreeOdd.aciTreeOpen', '39, Frühling/Sommer 2015')).element(by.cssContainingText('.aciTreeText', 'Inszenierungspunkt'));
    that.name3911 = center.element(by.cssContainingText('.aciTreeText', '3911 Schwarzpreis ET: 04.03.2016'));
    that.saveButton = center.$('.btn.glyphicon-file.pull-left');
    that.Eshop = center.$('#artikelzuordnungTable').$('.htRight.tBold.htMiddle');
    that.refreshButton = center.$('.btn.fa.fa-undo');
    that.Eshop2 = center.$('#artikelzuordnungTable').element(by.cssContainingText('.htRight.tBold.htMiddle', '11010051'));
};