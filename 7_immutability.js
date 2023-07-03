/* 
    IMMUTABILITY
    -> Once we created variable or string or object or array, it cannot be changed
    -> If you want to change that, we have to make copy first of that variables or string or object or array 
        and then we can update that copy
    -> Increase the predictablility
    -> Faster change detection
 */

//example 1
let name = "   Harley   ";
let newName = name.trim();

//example 2
let person = { name: "Martin", age: 20 };
person.name = "Harley";

/* 
note: In javascript , objects and arrays are immutable because javascript is not designed for only functional
    language. In functional languages, we can directly change or mutate data, but we can still apply functional
    programming concepts when writing Javascript code.
 */
