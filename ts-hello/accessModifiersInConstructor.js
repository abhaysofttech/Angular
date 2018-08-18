var PointB = /** @class */ (function () {
    function PointB(x, y) {
        this.x = x;
        this.y = y;
    }
    PointB.prototype.drew = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    PointB.prototype.getX = function () {
        return this.x;
    };
    PointB.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');
        this.x = value;
    };
    return PointB;
}());
var pointB = new PointB(1, 2);
var x = pointB.getX();
pointB.setX(10);
pointB.drew();
