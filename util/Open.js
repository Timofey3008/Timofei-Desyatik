module.exports = new Open();

var util = require('../util/common.js');
created = $('.modal-content');
rightMenu = $('#eastLayout');
    //Center = require('../PageObject/Center.js');
//var Vis = element(by.css(".aciTreeLine"));

function Open() {
    var that = this;

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} Text - текст элемента меню
     */
    that.openMenu = function (Text) {
        return util.waitVisibilityAndClick(element(by.partialLinkText(Text)));
    };
    that.openTree = function (Text) {
        return util.doubleClick(element(by.cssContainingText('.aciTreeText', Text)));
        };

    that.click = function (Text) {
        return util.click(element(by.cssContainingText('.aciTreeText', Text)));
    };
    that.creationForm = function (Text, Value) {
        return util.clearAndInput(created.element(by.cssContainingText('.row.smallspacer', Text)).$('.form-control.input-sm') , Value)
    };
    that.rightCreationForm = function (Text, Value) {
        return util.clearAndInput(rightMenu.element(by.cssContainingText('.row.smallspacer', Text)).$('.form-control.input-sm') , Value)
     };
     that.select =  function (Text) {
         return util.click(rightMenu.element(by.cssContainingText('option', Text)))
     };
     that.creationSelect = function (Text) {
         return util.click(created.element(by.cssContainingText('option', Text)))
     }
}