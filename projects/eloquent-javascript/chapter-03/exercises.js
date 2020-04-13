////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(firstParam, secondParam) { // Declaring a function called min that has two paramters, firstParam and secondParam
  if (firstParam < secondParam) { // An if statement; if the firstParam is LESS than the secondParam, this code will run
    return firstParam; // Return firstParam
  } else { // if firstParam is NOT less than secondParam, this code will run
    return secondParam; // Return secondParam
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(positiveNumber) { // Declaring a function called isEven that has one paramter, positiveNumber
  if (positiveNumber == 0) { // An if statement; if positiveNumber is even and loosely equal to 0, this code will run
      return true; // Return true
  } else if (positiveNumber == 1) { // An else if statement; if positiveNumber is odd and loosely loosely equal to 1, this code will run
      return false; // Return false
  } else if (positiveNumber < 0) { // Another else if statement; if positiveNumber is less than 0, this code will run
      return isEven(-positiveNumber); // Return isEven(-positiveNumber);
  } else { // An else statement; default, no conditional
      return isEven(positiveNumber - 2); // Return isEven(positiveNumber - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) { // Declaring a function called countChars that takes two parameters, string, and char
  let counted = 0; // Declaring a let variable called counted that is equal to 0.
  
  for (let i = 0; i < string.length; i++) { // A for loop; the starting condition is 0, the ending condition is when i is
  // equal to string.length, and the increment is plus 1.
    if (string[i] == char) { // If the index of i of string is loosely equal to char, this code will run
      counted += 1; // counted = counted + 1;
    }
  }
  return counted; // Should return counted to the console.
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) { // Declaring a function called countBs that takes one parameter, a string. 
return countChars(string, "B"); // Return the countChars function with the string, and "B", as the parameters to look for.
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
