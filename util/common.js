module.exports = new CommonUtil();

function CommonUtil() {
    var that = this,
        EC = protractor.ExpectedConditions;

    /**
     * Ожидает прорисовку элемента и кликает на него
     * @param {ElementFinder} elem - элемент, на который необходимо нажать
     */

    that.waitVisibilityAndClick = function (elem) {

        return browser
            .wait(
                EC.visibilityOf(elem),
                browser.params.visibilityWaitingTime.elementDrawing,
                'cant click, element is not visible.'
            )
            .then(function () {
                return elem.click();
            });
    };
    that.doubleClick = function (elem) {
        return browser
            .wait(
                EC.visibilityOf(elem),
                browser.params.visibilityWaitingTime.elementDrawing,
                'cant click, element is not visible.'
            )
            .then(function () {
                return browser.actions().doubleClick(elem).perform()
            });
    };

    that.clearAndInput = function (elem, value) {
        return browser.wait(EC.visibilityOf(elem))
            .then(function () {
                return elem.clear()
            })
            .then(function () {
                return elem.sendKeys(value)
            })
    };
    that.checkExistFile = function (path) {
        var fs = require('fs');
        return browser
            .driver
            .wait(function () {
                return fs.existsSync(path);
            }, browser
                .params
                .visibilityWaitingTime
                .fileDownloading);
    };
    that.removeFile = function (path) {
        return Promise.resolve()
            .then(function () {
                var fs = require('fs');
                if (fs.existsSync(path)) {
                    return fs.unlink(path);
                }
            });
    };
}