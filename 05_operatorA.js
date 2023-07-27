function squareOfWordLength(word) {
    const length = word.length;
    return length * length;
  }
  
  // Invoking the function for each value
   console.log("---------------------Step 1----------------------");
  const words = ["JavaScript", "Google Chrome", "Developer Smart"];
  words.forEach((word) => {
    const result = squareOfWordLength(word);
   
    console.log(`The square of the length of  "${word}" is ${result}.`);
  });
 
  // Task 2
  const stringOperation = () => {
    const str = "I am Angular Developer";
    const words = str.split(" ");
    const totalWords = words.length;
    const totalLength = str.length;
  
    const averageLength = totalLength / totalWords;
    const multipliedLength = totalLength * totalWords;
    console.log("---------------------Step 2----------------------");
  console.log("Given string length is 22 and total words are 4");
    console.log(`Division of 22 / 4 is: ${averageLength}`);
    console.log("Given string length is 22 and total words are 4");
    console.log(`Multiplication of 22 * 4: ${multipliedLength}`);
  };
  
  // Invoke the functional expression
  stringOperation();
  
  
  
  
  
  
  