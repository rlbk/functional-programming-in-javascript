const numbers = [10, 20, 30, 40];
console.log(numbers);

//Adding Items in immutable ways using spread operator
const addedNumber = [...numbers, 50];
console.log(addedNumber);

const index = numbers.indexOf(30);
const indexAddedNumber = [
  ...numbers.slice(0, index),
  50,
  ...numbers.slice(index),
];
console.log(indexAddedNumber);

// updating items using map method
const updatedArray = numbers.map((a) => (a === 40 ? 80 : a));
console.log(updatedArray);

//remove items using filter
const removedArray = numbers.filter((a) => a !== 30);
console.log(removedArray);
