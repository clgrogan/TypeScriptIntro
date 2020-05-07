var PropPoint = /** @class */ (function () {
    function PropPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PropPoint.prototype.draw = function () {
        console.log("X:", this._x, "Y:", this._y);
    };
    Object.defineProperty(PropPoint.prototype, "x", {
        // Properties function like fields from the outside,
        // but are methods inside that perform an action such as setting the
        // value of a field or returning a value
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value cannot be less than 0.");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PropPoint;
}());
var propPoint = new PropPoint(1, 2);
var x = propPoint.x;
propPoint.x = 10;
propPoint.draw();
