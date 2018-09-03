var dataPointsPoperties = /** @class */ (function () {
    function dataPointsPoperties(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    dataPointsPoperties.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(dataPointsPoperties.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return dataPointsPoperties;
}());
//let point: dataPointsPoperties = new dataPointsPoperties();
var datapointproperties = new dataPointsPoperties();
var x = datapointproperties.x;
datapointproperties.x = 10;
datapointproperties.draw();
