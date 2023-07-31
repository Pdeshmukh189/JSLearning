let result = '3' + 2;
console.log(" __________________________ implicit conversion of string to number ___________________________");
console.log("2 is number type is implicitly converted to string");
console.log(result); // Output: "32"


// Boolean value 'true' converted to a string and then concatenated
result = '3' + true;
console.log("true is aboolean value is implicitly converted to string");

console.log(result); // Output: "3true"

// 'undefined' converted to a string and then concatenated
result = '3' + undefined;
console.log("undefined is implicitly converted to string ");
console.log(result); // Output: "3undefined"


// 'null' converted to a string and then concatenated
result = '3' + null;
console.log("null is implicitly converted to string");
console.log(result); // Output: "3null"





// Implicit conversion of boolean 'true' to 1, then subtracted from '4'
result = '4' - true;
console.log(" _________________________________ implicit conversion to string _______________________________");
console.log("4 is a string type converted to number and true is boolean converted to number double conversion implicity");
console.log(result); // Output: 3


// Implicit conversion of the result of the 'console.log' statement (which is 'undefined') to NaN, then added to '4'
result = 4 + console.log (true);
console.log("true is boolean type and it is implicity to number type here true means 1");
console.log(result); // Output: 5


// Implicit conversion of boolean 'false' to 0, then added to '4'
result = 4 + false;
console.log("false  is boolean type and it is implicity to number type here true means 0");
console.log(result); // Output: 4





result = '4' - '2';
console.log(" __________________________ implicit conversion of boolean to number ___________________________");
console.log("Implicit conversion of numeric strings '4' and '2' to numbers and then subtracted");
console.log(result); // Output: 2


// Implicit conversion of numeric string '4' to a number, then subtracted from the number 2
result = '4' - 2;
console.log("Implicit conversion of numeric string '4' to a number, then subtracted from the number 2");
console.log(result); // Output: 2


// Implicit conversion of numeric string '4' to a number, then multiplied by the number 2
result = '4' * 2;
console.log("Implicit conversion of numeric string '4' to a number, then multiplied by the number 2");
console.log(result); // Output: 


// Implicit conversion of numeric string '4' to a number, then divided by the number 2
result = '4' / 2;
console.log("Implicit conversion of numeric string '4' to a number, then divided by the number 2");
console.log(result); // Output: 2






console.log("___________________________some other few interesting facts using '==' operator__________________--");

console.log(0 == "");         // Output: true

console.log(" Result is : true and type of result is : Boolean");
console.log(0 == " 0");       // Output: true
console.log(" Result is : true and type of result is : Boolean");
console.log(0 == false);      // Output: true
console.log(" Result is : true and type of result is : Boolean");
console.log( null == undefined);  // Output: true
console.log(" Result is : true and type of result is : Boolean");
console.log( 1 == [1]);        // Output: true
console.log(" Result is : true and type of result is : Boolean");
console.log( 1 == true);       // Output: true
console.log(" Result is : true and type of result is : Boolean");
console.log(1 == "1");        // Output: true
console.log(" Result is : true and type of result is : Boolean");
console.log("because, same values that is 1 and 1");



