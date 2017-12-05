module.exports = new Open();

var util = require('../util/common.js');

function Open() {
    var that = this;

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} Text - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.openMenu = function (Text) {
        return util.waitVisibilityAndClick(element(by.partialLinkText(Text)));
    };
    that.openTree = function (Text) {
      return util.doubleClick(element(by.cssContainingText('.aciTreeText', Text)));
    };
    that.click = function (Text) {
        return util.doubleClick(element(by.cssContainingText('.aciTreeText', Text)));
    }
}