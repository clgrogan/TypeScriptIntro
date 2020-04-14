// Useful for functions that use many parameters
// Pass an object instead of a bunch of parms

// Function using multiple parms
let multipleParms = (x, y) => {
  console.log("let multipleParms = (x, y) =>: ", x, " ", y);
};
// Function using a custom type with inline annotation
let inlineAnnotation = (point: { x: string; y: string }) => {
  console.log(
    "Inline Annotation is a bit verbose, not much better than multiparms:"
  );
  console.log(
    "let inlineAnnotation = (point: { x: string, y: string}) => : ",
    point.x,
    " ",
    point.y
  );
};

// Function using an interface for the type
// first, define the interface
interface AnInterface {
  // Pascal naming convention for Interfaces
  x: string;
  y: string;
}

const interfaceFunction = (anInterface: AnInterface) => {
  console.log("Using an Interface is super clean:");
  console.log(
    "const interfaceFunction = (anInterface: AnInterface) =>: ",
    anInterface.x,
    " ",
    anInterface.y
  );
};

console.log();
multipleParms("firstParm", "secondParm");

console.log();
inlineAnnotation({
  x: "string x",
  y: "string y",
});
console.log();
interfaceFunction({
  x: "string x",
  y: "string y",
});
console.log();
