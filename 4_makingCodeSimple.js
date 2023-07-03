import { compose } from "lodash/fp";

let username = " Harley ";
let message = "Hello " + username.trim() + ", Good Morning";
console.log(message);

// function composing
const trim = (name) => name.trim();
const generateMessage = (name) => `Hello ${name}, Good morning`;
const converToUpperCase = (name) => name.toUpperCase();
const result = generateMessage(converToUpperCase(trim(username)));

console.log(result);

// making simple function composing using "compose"
const composeFunction = compose(generateMessage, converToUpperCase, trim);
let result2 = composeFunction(username);

// making simple function composing using "compose"
const pipeFunction = pipe(trim, converToUpperCase, generateMessage);
let result3 = pipeFunction(username);
