function stringHandsOn() {
    const inputString = " Hey you are doing good keep it up ";
  
    // Step 1: Print the string as it is on console
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step One<=<=<=<=<=<=<=<=<=<=<=<=<=")
    console.log("The given string is:", inputString);
  
    // Step 2: Calculate the length of the string
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Two<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const lengthOfString = inputString.length;
    console.log("The Length of the string is:", lengthOfString);
  
    // Step 3: Remove leading and trailing extra spaces and log the string with its length
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Three<=<=<=<=<=<=<=<=<=<=<=<=")
    const trimmedString = inputString.trim();
    const trimmedLength = trimmedString.length;
    console.log("Trimmed string:", trimmedString);
    console.log("The length of the string using TRIM is:", trimmedLength);
  
    // Step 4: Print the total number of extra spaces count removed in step 3
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>Step Four<=<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const extraSpacesCount = lengthOfString - trimmedLength;
    console.log("Total number of extra space is:", extraSpacesCount);
  
    // Step 5: Print the first and last character on the same line after trim()
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Five<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const firstCharacter = trimmedString[0];
    const lastCharacter = trimmedString[trimmedLength - 1];
    console.log("First characters after trim:", firstCharacter,"Last characters after trim:", lastCharacter);
  
    // Step 6: Print the count of total words available in the string after step 3
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Six<=<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const wordsArray = trimmedString.split(" ");
    const totalWordsCount = wordsArray.length;
    console.log("Total number of words are :", totalWordsCount ,"and the words are :-[Hey, you, are, doing, good, keep, it, up]");
  
    // Step 7: Print the index of the word "good" from the given string
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Seven<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const indexOfGood = trimmedString.indexOf("good");
    console.log("Index of  word 'good' is :", indexOfGood);
  
    // Step 8: Print the substring starting from index 22, using substring() and slice()
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Eight<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const substringFromIndex22_1 = trimmedString.substring(22);
    const substringFromIndex22_2 = trimmedString.slice(22);
    console.log("The substring started  from number 22 using  the substring method :",substringFromIndex22_1 );
    console.log("The substring started  from number 22 using  the slice method :",substringFromIndex22_1 );
  
    // Step 9: Check if the string ends with the word "up" after step 3
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>=>Step Nine<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const endsWithUp = trimmedString.endsWith("up");
    console.log("Checking the string end with 'up' of not ", endsWithUp);
  
    // Step 10: Check if the string starts with the word "Hey" after trimming
    console.log("=>=>=>=>=>=>=>=>=>=>=>=>Step Ten<=<=<=<=<=<=<=<=<=<=<=<=<=<=")
    const startsWithHey = trimmedString.startsWith("Hey");
    console.log("Checking the string start with 'Hey' or not", startsWithHey);
  }
  
  // Invoking the function to see the output
  stringHandsOn();