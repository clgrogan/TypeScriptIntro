// In TypeScript each file can be thought of as a module, but only when
// the class is exported. If not exported, the class is only accessible within
// the file. each file is a module and can export one or more classes.
// Once exported, the class must be imported into files using the class
// Module in TypeScript is not the same as module in Angular.

export class ModulePoint {
  constructor(private x?: number, private y?: number) {}
  draw() {
    console.log("x:", this.x, "y:", this.y);
  }
}
