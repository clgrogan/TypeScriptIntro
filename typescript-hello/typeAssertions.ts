let message = "abc";
let endsWithC = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("c");
console.log(message);
console.log(endsWithC);
console.log(alternativeWay);
