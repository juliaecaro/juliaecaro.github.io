// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) { // Declaring a new function called flatten and giving it the parameter of array
  return array.reduce(function (accumulator, currentValue) { // Should return the array with the reduce method, 
  // which calls upon the accumulator and currentValue parameters
    return accumulator.concat(currentValue); // Should return the accumulator concatenated with currentValue
  }, []); // Should concatenate into the empty array
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) { // Declaring a function called loop and giving it the parameters
// of start, test, update, and body
  for (let i = start; test(i); i = update(i)) { // Declaring a for loop; the starting condition is i equals start, 
  // the stopping condition is the i of test, and the increment is i equals update(i)
    body(i); // the body is i
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) { // Declaring a function called every and giving it the parameters of array and test
  
  for (let element of array) { // For-of loop; 
    if (!test(element)) { // If the side effect of element in test is false, run this code
      return false; // Return false
    }
  }
  return true; // Return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) { // Declaring a new function called dominantDirection and giving it the 
// parameter of text
  
  let counted = countBy(text, char => { // Declaring a new variable called counted and using it to call the
  // countBy function in the helpers.js file with the text and char parameters
  let script = characterScript(char.codePointAt(0)); // Declaring a new variable called script and assigning it to
  // the characterScript function in the helpers.js file, and finding the position of char to return the code point 
  // value from
  return script ? script.direction : "none"; // Ternary operator; if script exists, return the script.direction. If 
  // script does not exist, return "none";
   }).filter(({name}) => name != "none"); // Should filter the countBy function to check if the object name does not 
   // equal none

  if (counted.length == 0) return "ltr"; // If the length of counted loosely equals 0, return "ltr"

  return counted.reduce((a, b) => a.count > b.count ? a : b).name; // Otherwise, return the reduce method on the
  // counted variable, with a and b as the parameters. If the .count of a is greater than the .count of b, return a,
  // otherwise if it is greater than or equal to the .count of b, return the name of b
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
