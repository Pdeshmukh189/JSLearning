function monthOfYear(month) {
    switch (month) {
      case 1:
        console.log("January");
        break;
      case 2:
        console.log("February");
        break;
      case 3:
        console.log("March");
        break;
      case 4:
        console.log("April");
        break;
      case 5:
        console.log("May");
        break;
      case 6:
        console.log("June");
        break;
      case 7:
        console.log("July");
        break;
      case 8:
        console.log("August");
        break;
      case 9:
        console.log("September");
        break;
      case 10:
        console.log("October");
        break;
      case 11:
        console.log("November");
        break;
      case 12:
        console.log("December");
        break;
      default:
        console.log("Invalid month number");
    }
  }
  
  // Test cases
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);


  monthOfYear(undefined);







  function isMarriageEligible(gender, age) {
    if (gender === "Male" && age >= 21) {
      return true;
    } else if (gender === "Female" && age >= 18) {
      return true;
    } else if (gender === "Other" && age >= 35) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test cases
  console.log(isMarriageEligible("Male", 17)); // Output: false
  console.log(isMarriageEligible("Female", 28)); // Output: true
  console.log(isMarriageEligible("Other", 35)); // Output: true
  console.log(isMarriageEligible("Male", 25)); // Output: true
  console.log(isMarriageEligible("Female", 16)); // Output: false
  console.log(isMarriageEligible("Other", 41)); // Output: true



  const leapyear = function(year) {
    if (typeof year === 'number' && !isNaN(year)) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Invalid input. Please provide a valid year (a number).");
      return false;
    }
  };
  
  // Test cases
  const yearsToCheck = [2020, 1999, 1600, 2022, 1945, null, "Twenty Twenty", undefined, NaN, 1750];
  
  yearsToCheck.forEach(year => {
    console.log(`${year} is a leap year: ${leapyear(year)}`);
  });