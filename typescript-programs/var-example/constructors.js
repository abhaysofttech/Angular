var dataPoints = /** @class */ (function () {
    function dataPoints(x, y) {
        this.x = x;
        this.y = y;
    }
    dataPoints.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    dataPoints.prototype.getDistance = function (another) {
    };
    return dataPoints;
}());
//let point: dataPoints = new dataPoints();
var datapoint = new dataPoints(1, 2);
datapoint.draw();
