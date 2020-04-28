class Point {
  // using access modifiers on the constructor parms, eliminates the need for
  // field declaration here. removed x: number; y: number;

  constructor(private x?: number, private y?: number) {
    // adding the access modifiers to the parms eliminates need for the ugly assignments
    //          this.x = x;
    //          this.y = y;
  }

  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }
}
let point = new Point(1, 2);
// point.x = 5; // will throw a compile error if x is private. js is still created.
point.draw();
