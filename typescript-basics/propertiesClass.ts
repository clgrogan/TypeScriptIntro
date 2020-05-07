class PropPoint {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log("X:", this._x, "Y:", this._y);
  }

  // Properties function like fields from the outside,
  // but are methods inside that perform an action such as setting the
  // value of a field or returning a value
  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) throw new Error("Value cannot be less than 0.");
    this._x = value;
  }
}
let propPoint = new PropPoint(1, 2);
let x = propPoint.x;
propPoint.x = 10;
propPoint.draw();
