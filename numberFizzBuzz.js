var numberFizzBuzz = function (x) {
    if (x < 1 || x >= 1501) {
        console.log("Oops! It appears my code was flawed || My assumption that x would NOT be an integer less than one and  NOT greater than or equal to 1501 was incorrect. Technically, that assumption was wrong after reviewing the verbiage of the problem. On further scrutiny, it appears x could be any integer < 1501 and could include all negative integers. ");
        return null;
    }
    for (var i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        else {
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
