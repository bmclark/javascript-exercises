const sumAll = function(...inputs) {
  let args = Array.from(inputs);
  args.sort();
  let a = args[0];
  let b = args[1];
  let sum = 0;

  // return errors for negative or non-number inputs
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 ) {
      return "ERROR";
    } else if (typeof args[i] != "number") {
      return "ERROR";
    }
  }

  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
