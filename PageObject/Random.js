module.exports = Random;

function Random() {
    var that = this;
    that.getRandomValue = function () {
        return Math.round(Math.random() * 8999 + 1000);

    };

}


