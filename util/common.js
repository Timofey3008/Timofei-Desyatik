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
    that.click = function (elem) {
        browser.wait(EC.visibilityOf(elem))
            .then(function () {
                return elem.click();
            });
    };
    that.clearAndInput = function (elem, value) {
        browser.wait(EC.visibilityOf(elem))
            .then(function () {
                return elem.clear()
            })
            .then(function () {
                return elem.sendKeys(value)
            })
    }

}