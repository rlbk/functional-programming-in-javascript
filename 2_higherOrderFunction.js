/*
    HIGHER ORDER FUNCITON
    A higher-order function is a function that takes a function as a parameter or which returns
    the function or both, then we call them a higher-order function
 */

//expmple 1
setTimeout(() => {
  console.log("Runs after 5s");
}, 5000);

//expmple 2
let numbers = [1, 2, 3, 4];

let newNumbers = numbers.map((number) => number * 10);
console.log(newNumbers);
