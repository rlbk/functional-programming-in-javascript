/* 
    Immer
    -> It is one of the most popular library for dealing with immutability of objects and arrays.
 */

import { produce } from "immer";

const employee = {
  name: "Harley",
  age: 22,
  company: {
    country: "Canada",
    city: "Toronto",
  },
};

console.log(employee);

const newEmplyee = produce(employee, (draftState) => {
  (draftState.name = "Martin"), (draftState.company.city = "Calgary");
});

console.log(newEmplyee);
