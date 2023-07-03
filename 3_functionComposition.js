/* 
    FUNCTION COMPOSITION
    When we pass one function's output to another function's parameter then it is function composition.
 */

let username = " Harley ";
let message = "Hello " + username.trim() + ", Good Morning";
console.log(message);

// function composing
const trim = (name) => name.trim();
const generateMessage = (name) => `Hello ${name}, Good morning`;
const converToUpperCase = (name) => name.toUpperCase();
const result = generateMessage(converToUpperCase(trim(username)));

console.log(result);
