var Point = /** @class */ (function () {
    // using access modifiers on the constructor parms, eliminates the need for
    // field declaration here. removed x: number; y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // adding the access modifiers to the parms eliminates need for the ugly assignments
        //          this.x = x;
        //          this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.x = 5; // will
point.draw();
