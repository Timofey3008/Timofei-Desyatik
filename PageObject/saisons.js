module.exports = saisons;

function saisons() {
    var center = $('#center'),
        rightMenu = $('#eastLayout'),
        that = this;
    that.select34 = center.element(by.cssContainingText('.col-md-2', '34'));
    that.name = rightMenu.element(by.model('item.identity'));
    that.itemName = rightMenu.element(by.model('item.name'));
    that.dataItem = rightMenu.element(by.cssContainingText('.row.smallspacer.col-def', 'Startdatum')).$('.form-control.ng-valid.ng-valid-required');
    that.endDate = rightMenu.element(by.cssContainingText('.row.smallspacer.col-def', 'Enddatum')).$('.form-control.ng-valid.ng-valid-required');

}