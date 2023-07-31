function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return 'EVEN';
    } else {
      return 'ODD';
    }
  }
  console.log("----------------------------Assignment 1---------------------------");
  console.log("_________TASK 1__________");
  
  console.log("Given number 45 is -",checkEvenOdd(45)); // Output: ODD
  console.log("Given number 70 is -",checkEvenOdd(70)); // Output: EVEN
  console.log("Given number 67 is -",checkEvenOdd(67)); // Output: ODD
  console.log("Given number 98 is -",checkEvenOdd(98)); // Output: EVEN
  
  //  Function to check if a person is eligible to vote or not based on their 
  console.log("_________TASK 2__________");
  function checkEligibilityForVote(age) {
    if (age >= 18) {
      return 'Eligible to vote';
    } else {
      return 'Not eligible to vote';
    }
  }
  console.log("You are Eligible for vote",checkEligibilityForVote(18)); // Output: Eligible to vote
  console.log("You are Eligible for vote",checkEligibilityForVote(20)); // Output: Eligible to vote
  console.log("You are not Eligible for vote age - '17'",checkEligibilityForVote(17)); // Output: Not eligible to vote
  console.log("You are Eligible for vote",checkEligibilityForVote(40)); // Output: Eligible to vote
  
  // 3. Function to check if a string contains more than 10 characters or not
  console.log("_________TASK 3__________");
  function checkStringLength(str) {
    if (str.length > 10) {
      return 'Given string is greater than 10 characters  - JavaScript - ES6';
    } else {
      return 'Given string is less than 10  characters - Angular';
    }
  }
  
  console.log(checkStringLength("JavaScript - ES6")); // Output: String contains more than 10 characters
  console.log(checkStringLength("Angular")); // Output: String contains 10 or fewer characters
  
  // 4. Function to check if a string starts with "Java"
  console.log("_________TASK 4__________");
  function checkStringStartsWithJava(str) {
    if (str.startsWith("Java")) {
      return 'Java script language start with java"';
    } else {
      return 'Python language does not start with java"';
    }
  }
  
  console.log(checkStringStartsWithJava("python Language")); // Output: String does not start with "Java"
  console.log(checkStringStartsWithJava("Java Scripting")); // Output: String starts with "Java"
  
  
  console.log("----------------------------Assignment 2---------------------------");
  
  function checkVotingEligibility(age) {
    if (age <= 0 || age > 130 || isNaN(age)) {
      console.log("Invalid data");
    } else if (age < 18) {
      console.log("Not eligible for vote");
    } else {
      console.log("Eligible for vote");
    }
  }
  
  // Test cases
  checkVotingEligibility(45);
  checkVotingEligibility(17);
  checkVotingEligibility(8);
  checkVotingEligibility(20);
  checkVotingEligibility(-10);
  checkVotingEligibility(200);
  checkVotingEligibility(0);
  checkVotingEligibility(undefined);
  checkVotingEligibility(null);


  
  console.log("----------------------------Assignment 3---------------------------");
  
  function gradeCalculation(marks) {
    if (marks >= 90 && marks <= 100) {
      console.log(`Funtastic marks: ${marks}, Your grade is A+`);
    } else if (marks >= 75 && marks < 90) {
      console.log(`Excellent marks: ${marks}, Your grade is A`);
    } else if (marks >= 50 && marks < 75) {
      console.log(`Good marks: ${marks}, Your grade is B`);
    } else if (marks >= 35 && marks < 50) {
      console.log(`Marks is: ${marks}, Your grade is C, Need improvement`);
    } else {
      console.log("Please provide the valid marks");
    }
  }
  
  // Test cases
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation("91");
  gradeCalculation("Eighty");
  gradeCalculation(undefined);
  gradeCalculation(null);

  
  
  
  