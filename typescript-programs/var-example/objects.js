var Points = /** @class */ (function () {
    function Points() {
    }
    Points.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Points.prototype.getDistance = function (another) {
    };
    return Points;
}());
//let point: Points = new Points();
var point = new Points();
point.x = 1;
point.y = 2;
point.draw();
