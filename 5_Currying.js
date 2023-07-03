/*
    CURRYING
    Currying is a technique that allows us to take a function with multiple arguments and conver it into a function that has a single argument.
 */

function multi(a) {
  return function (b) {
    return a * b;
  };
}
let result1 = multi(2);
let result2 = result1(5);
console.log(result2);

// currying
let result3 = multi(3)(5);
console.log(result3);

// curying in arrow function
const multple = (a) => (b) => a * b;
let result4 = multple(4)(5);
console.log(result4);
