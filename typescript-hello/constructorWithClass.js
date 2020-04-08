// Class differs from an interface. One way is that the class can contain functions or methods not just
// properties or fields
var PointConstructor = /** @class */ (function () {
    // Each class should have a constructor which is executed automatically when the class is used
    // Constructors determine the parameters passed
    function PointConstructor(x, y) {
        // adding '?' after the parameter makes the parameter optional
        // doing so allows the initialization of the new object without requiring parms to be passed
        this.x = x;
        this.y = y;
    }
    PointConstructor.prototype.draw = function () {
        // ...
        console.log("this.X: " + this.x + " this.Y: " + this.y);
    };
    return PointConstructor;
}());
// Outside the class
// let point: PointConstructor; won't define point
// when declaring a custom type, you must explicitly allocate memory.
// memory is allocated via the 'new' keyword
// let point: PointConstructor = new PointConstructor(); ...verbose, can be shortened in TS
var pointConst = new PointConstructor(1);
pointConst.draw();
