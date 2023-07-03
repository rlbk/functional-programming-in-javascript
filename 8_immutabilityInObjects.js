/* 
    2 ways to update immutable objects
 */

const employee = {
  name: "Harley",
  age: 22,
  company: {
    country: "Canada",
    city: "Toronto",
  },
};
console.log(employee);

// 1. Object.assign method
const newEmployee = Object.assign({}, employee, { name: "Martin" });
console.log(newEmployee);

// 2. Using spread operator
const anotherEmpoyee = {
  ...employee,
  name: "Harry",
  company: {
    ...employee.company,
    city: "Calgary",
  },
};
console.log(anotherEmpoyee);
