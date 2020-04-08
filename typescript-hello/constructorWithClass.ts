// Class differs from an interface. One way is that the class can contain functions or methods not just
// properties or fields

class PointConstructor {
  // In object-oriented programming properties are fields and functions are methods
  x: number;
  y: number;

  // Each class should have a constructor which is executed automatically when the class is used
  // Constructors determine the parameters passed
  constructor(x?: number, y?: number) {
    // adding '?' after the parameter makes the parameter optional
    // doing so allows the initialization of the new object without requiring parms to be passed
    this.x = x;
    this.y = y;
  }

  draw() {
    // ...
    console.log("this.X: " + this.x + " this.Y: " + this.y);
  }
}

// Outside the class

// let point: PointConstructor; won't define point
// when declaring a custom type, you must explicitly allocate memory.
// memory is allocated via the 'new' keyword
// let point: PointConstructor = new PointConstructor(); ...verbose, can be shortened in TS
let pointConst = new PointConstructor(1);
pointConst.draw();
