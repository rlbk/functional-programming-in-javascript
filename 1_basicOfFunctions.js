/* 
  BASIC OF FUNCTION
    In Javascript, functions are first-class citizens. So we treat the functions as any other variables.
    For example, we cand assign them in variable. We can pass them as an argument, or we can even return
    them from other function.
 */

function greeting() {
  return "Good Morning";
}

let message = greeting;

function PrintMessage(anFunction) {
  console.log(anFunction());
}

PrintMessage(message);

function greeting2() {
  return function () {
    return "Good Evening";
  };
}

let anFunction = greeting2();
let message2 = anFunction();
console.log(message2);
