console.log("_________________ASSIGNMENT__________________");





console.log("1. Numbers from 5 to 15 by incrementing:");

for (let i = 5; i <= 15; i++) {
  console.log(i);
  console.log("==============");
}


console.log("\n2. Numbers from 50 to 40 by decremebting:");
for (let i = 50; i >= 40; i--) {
  console.log(i);
  console.log("==============");
}


console.log("\n3. First 15 odd numbers are:");
let oddCount = 0;
for (let i = 1; oddCount < 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    console.log("==============");
    oddCount++;
  }
}


console.log("\n4. First 10 even numbers are:");
let evenCount = 0;
for (let i = 2; evenCount < 10; i += 2) {
  console.log(i);
  console.log("==============");
  evenCount++;
}

console.log("\n5. Table of 5 is:");
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
  console.log("==============");
}


console.log("\n6. Table of 10 is:");
for (let i = 1; i <= 10; i++) {
  console.log(i * 10);
  console.log("==============");
}

console.log("\n7. Table of 10 in reverse order:");
for (let i = 10; i >= 1; i--) {
  console.log(i * 10);
  console.log("==============");
}
