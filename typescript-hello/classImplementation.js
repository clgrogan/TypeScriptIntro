// Class differs from an interface. One way is that the class can contain functions or methods not just
// properties or fields
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        // ...
        console.log("this.X: " + this.x + " this.Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // .. method that can return the distance between this Point object and another
        // point object
    };
    return Point;
}());
// Outside the class
// let point: Point; won't define point
// when declaring a custom type, you must explicitly allocate memory.
// memory is allocated via the 'new' keyword
// let point: Point = new Point(); ...verbose, can be shortened in TS
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
