"use strict";
// In TypeScript each file can be thought of as a module, but only when
// the class is exported. If not exported, the class is only accessible within
// the file.
// Once exported, the class must be imported into files using the class
exports.__esModule = true;
var ModulePoint = /** @class */ (function () {
    function ModulePoint(x, y) {
        this.x = x;
        this.y = y;
    }
    ModulePoint.prototype.draw = function () {
        console.log("x:", this.x, "y:", this.y);
    };
    return ModulePoint;
}());
exports.ModulePoint = ModulePoint;
