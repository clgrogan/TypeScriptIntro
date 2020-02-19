function varDemonstration() {
  console.log("");
  console.log("for (var i = 0; i < 5; i++)");

  for (var i = 0; i < 5; i++) {
    console.log("var i: ", i);
  }
  console.log("var i outside loop: ", i);
}

const letDemonstration = () => {
  console.log("");
  console.log("for (let i = 0; i < 5; i++)");

  for (let i = 0; i < 5; i++) {
    console.log("let i: ", i);
  }
  console.log(
    "TS compiler gives an error when the variable is used outside the loop, but will transpile the js file using var instead of let.",
    i
  );
};

varDemonstration();

letDemonstration();
