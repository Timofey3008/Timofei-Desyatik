module.exports = saisons;
function saisons() {
    var menu = $('#westLayout'),
        header = $('#header'),
        center = $('#center'),
        rightMenu = $('#eastLayout');
    var that = this;
   // that.menuStammdaten = menu.element(by.cssContainingText(".text-justify.ng-binding", "STAMMDATEN"));
   // that.menuSaisons = menu.element(by.cssContainingText(".list-group-item.ng-binding", "Saisons"));
  //  that.headerSaisons = header;
    that.select34 = center.element(by.cssContainingText('.col-md-2.ng-binding', '34'));
    that.name = rightMenu.element(by.model('item.identity'));
    that.itemName = rightMenu.element(by.model('item.name'));
    that.dataItem = rightMenu.element(by.cssContainingText('.row.smallspacer.col-def', 'Startdatum')).$('.form-control.ng-valid.ng-valid-required');
    that.endDate = rightMenu.element(by.cssContainingText('.row.smallspacer.col-def', 'Enddatum')).$('.form-control.ng-valid.ng-valid-required');

};