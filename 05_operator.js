const greaterNumber = (num1, num2) => (num1 > num2 ? num1 : num2);

// Testing greaterNumber function
const result1 = greaterNumber(10, -10);
const result2 = greaterNumber(800, 899);
console.log("-----------------------------Step 1--------------------------------");
console.log(`The greater number amongst 10 or -10 is: ${result1}`);
console.log(`The greater number amongst 800 or 899is: ${result2}`);

// Task 2
const isEvenOrOddNum = (num) => (num % 2 === 0 ? true : false);

// Testing isEvenOrOddNum function
console.log("-----------------------------Step 2--------------------------------");
const numbers = [29, 44, 0, 101];
numbers.forEach((num) => {
  const isEven = isEvenOrOddNum(num);
  console.log(`The number ${num} is ${isEven ? "even" : "odd"}.`);
});

// Task 3
console.log("-----------------------------Step 3--------------------------------");
const wordLengthEvenOrOdd = (word) => (word.length % 2 === 0 ? "EVEN" : "ODD");

// Testing wordLengthEvenOrOdd function
const words = ["JavaScript", "developer", "Google"];
words.forEach((word) => {
  const lengthStatus = wordLengthEvenOrOdd(word);
  console.log(`The word  of "${word}" is ${lengthStatus}.`);
});