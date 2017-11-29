module.exports = Random;
function Random() {
var that = this;
var a;
    that.getRandomValue = function (a) {
      a = Math.round(Math.random(a) * 8999 + 1000);
        return a;
    };

};


