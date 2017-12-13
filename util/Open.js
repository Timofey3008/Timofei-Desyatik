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
     * @param {string} Text - текст элемента меню
     */
    that.openMenu = function (TextTab, TextMenu) {
        var checkOpenMenu = element(by.partialLinkText(TextTab));
        return checkOpenMenu.$('.glyphicon.pull-right').getAttribute('class')
            .then( function (Expended) {
                if (Expended === "glyphicon pull-right glyphicon-chevron-right") {
                return common.waitVisibilityAndClick(element(by.partialLinkText(TextTab)));
                }
            })
            .then( function () {
                return common.waitVisibilityAndClick(element(by.partialLinkText(TextMenu)));
            })
    };
    that.openTree = function (TreeText, BrunchText, LeafText) {
        var checkIfOpen = $("[aria-selected='true']");
        common.click(element(by.cssContainingText('.aciTreeText', TreeText)));
        return checkIfOpen.getAttribute('aria-expanded')
            .then(function (isExpanded) {
                if (isExpanded === "false") {
                    return common.doubleClick(element(by.cssContainingText('.aciTreeText', TreeText)));
                }
            })
            .then(function () {
                common.click(element(by.cssContainingText('.aciTreeText', BrunchText)));
                return checkIfOpen.getAttribute('aria-expanded')
                    .then(function (Expanded) {
                        if (Expanded === "false") {
                            return common.doubleClick(center.element(by.cssContainingText('.aciTreeText', BrunchText)));
                        }
                    })
            })
            .then(function () {
                return common.click(element(by.cssContainingText('.aciTreeText', LeafText)));
            });
    };

    that.toggleTree = function (TreeName) {
        return common.doubleClick(element(by.cssContainingText('.aciTreeText', TreeName)));
    };
    that.click = function (Text) {
        return common.click(element(by.cssContainingText('.aciTreeText', Text)));
    };
    that.InputInCreationForm = function (Text, Value) {
        return common.clearAndInput(created.element(by.cssContainingText(field, Text)).$(value), Value);
    };
    that.inputInRightCreationForm = function (Text, Value) {
        return common.clearAndInput(rightMenu.element(by.cssContainingText(field, Text)).$(value), Value);
    };
    that.select = function (Value) {
        return common.click(rightMenu.element(by.cssContainingText('option', Value)));
    };
    that.creationSelect = function (Value) {
        return common.click(created.element(by.cssContainingText('option', Value)));
    };
    that.selectSesion = function (Name) {
        return common.click(centr.element(by.cssContainingText('.col-md-2',Name)));
    }
}