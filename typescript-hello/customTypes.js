// Useful for functions that use many parameters
// Pass an object instead of a bunch of parms
// Function using multiple parms
var multipleParms = function (x, y) {
    console.log("let multipleParms = (x, y) =>: ", x, " ", y);
};
// Function using a custom type with inline annotation
var inlineAnnotation = function (point) {
    console.log("Inline Annotation is a bit verbose, not much better than multiparms:");
    console.log("let inlineAnnotation = (point: { x: string, y: string}) => : ", point.x, " ", point.y);
};
var interfaceFunction = function (anInterface) {
    console.log("Using an Interface is super clean:");
    console.log("const interfaceFunction = (anInterface: AnInterface) =>: ", anInterface.x, " ", anInterface.y);
};
console.log();
multipleParms("firstParm", "secondParm");
console.log();
inlineAnnotation({
    x: "string x",
    y: "string y"
});
console.log();
interfaceFunction({
    x: "string x",
    y: "string y"
});
console.log();
