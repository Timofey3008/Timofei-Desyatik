module.exports = saisons;
function saisons() {
    var menu = $('#westLayout'),
        header = $('#header'),
        center = $('#center');
    rightMenu = $('#eastLayout');
    var that = this,
        menuStammdaten = menu.element(by.cssContainingText(".text-justify.ng-binding", "STAMMDATEN"));
     menuSaisons = menu.element(by.cssContainingText(".list-group-item.ng-binding", "Saisons"));
     headerSaisons = header.$('.ng-binding');
     select34 = center.element(by.cssContainingText('.col-md-2.ng-binding', '34'));


    that.menuStammdaten = menuStammdaten;
    that.menuSaisons = menuSaisons;
    that.headerSaisons = headerSaisons;
    that.select34 = select34;
};