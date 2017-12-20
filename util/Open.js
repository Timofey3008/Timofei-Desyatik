module.exports = new Open();

var common = require('../util/common.js'),
    created = $('.modal-content'),
    center = $('#content'),
    field = '.row.smallspacer',
    centr = $('#center'),
    value = '.form-control.input-sm',
    rightMenu = $('#eastLayout');

function Open() {
    var that = this;

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} textTab - текст элемента вкладки
     * @param {string} textMenu - текст элемента меню
     */
    that.openMenu = function (textTab, textMenu) {
        var elemMenu = element(by.partialLinkText(textTab));
        return elemMenu.$('.glyphicon.pull-right').getAttribute('class')
            .then(function (string) {
                var arr = string.split(/\s+/);
                return arr.indexOf('glyphicon-chevron-down') !== -1;
            })
            .then(function (isOpened) {
                if (!isOpened) {
                    return common.waitVisibilityAndClick(element(by.partialLinkText(textTab)));
                }
            })
            .then(function () {
                return common.waitVisibilityAndClick(element(by.partialLinkText(textMenu)));
            })
    };
    that.openTree = function (treeText, brunchText, leafText) {
        var elemTree = $("[aria-selected='true']");
        return common.waitVisibilityAndClick(element(by.cssContainingText('.aciTreeText', treeText)))
            .then(function () {
                return elemTree.getAttribute('aria-expanded')
            })
            .then(function (isExpanded) {
                if (isExpanded === "false") {
                    return common.doubleClick(element(by.cssContainingText('.aciTreeText', treeText)));
                }
            })
            .then(function () {
                return common.waitVisibilityAndClick(element(by.cssContainingText('.aciTreeText', brunchText)))
                    .then(function () {
                        return elemTree.getAttribute('aria-expanded')
                    })
                    .then(function (expanded) {
                        if (expanded === "false") {
                            return common.doubleClick(center.element(by.cssContainingText('.aciTreeText', brunchText)));
                        }
                    })
            })
            .then(function () {
                return common.waitVisibilityAndClick(element(by.cssContainingText('.aciTreeText', leafText)));
            });
    };


    that.toggleTree = function (treeName) {
        return common.doubleClick(element(by.cssContainingText('.aciTreeText', treeName)));
    };
    that.click = function (text) {
        return common.waitVisibilityAndClick(element(by.cssContainingText('.aciTreeText', text)));
    };
    that.InputInCreationForm = function (text, value2) {
        return common.clearAndInput(created.element(by.cssContainingText(field, text)).$(value), value2);
    };
    that.inputInRightCreationForm = function (text, value2) {
        return common.clearAndInput(rightMenu.element(by.cssContainingText(field, text)).$(value), value2);
    };
    that.select = function (value) {
        return common.waitVisibilityAndClick(rightMenu.element(by.cssContainingText('option', value)));
    };
    that.creationSelect = function (value) {
        return common.waitVisibilityAndClick(created.element(by.cssContainingText('option', value)));
    };
    that.selectSesion = function (name) {
        return common.waitVisibilityAndClick(centr.element(by.cssContainingText('.col-md-2', name)));
    };
}
