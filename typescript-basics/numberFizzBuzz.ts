// Solve Kata:
// Write a function that prints from 1 to x,
// where x is the input of your function and is an integer less than 1501.
// Print from 1 to x where x is an integer less than 1501.

// If the number you are printing is evenly divisible by 3,
// print the string “fizz” instead of the number.

// If the number you are printing is evenly divisible by 5,
// print the string “buzz” instead of the number.

// If the number you are printing is evenly divisible by 3 AND evenly divisible by 5,
// print the string “fizzbuzz” instead of the number.
const numberFizzBuzz = (x: number) => {
  if (x < 1 || x >= 1501) {
    console.log(
      "Oops! The parameter passed, '",
      x,
      "' is not an integer from 1 to 1500"
    );
    return null;
  }

  for (let i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

console.log();
console.log("numberFizzBuzz(-1)");
numberFizzBuzz(-1);

console.log();
console.log("numberFizzBuzz(15)");
numberFizzBuzz(15);

console.log();
console.log("numberFizzBuzz(1501)");
numberFizzBuzz(1501);
