// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i <= array.length; i++){ // Using a for loop, I will start the loop at 0, end when i is less than
  // the printArrayValues.length, and going up at an increment of 1. This will loop through the array from 0 to the length of 
  // printArrayValues at an increment of 1.
    console.log(array[i]); // printing the values of the printArrayValues array
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length-1; i >= 0; i--) { // Using a for loop, I will start the loop at the end of the 
  // array minus 1, end when the loop is greater than or equal to 0, and go down at an increment of 1.
    console.log(array[i]); // printing the values of the printArrayValuesInReverse array
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var keys = Object.keys(object); // Declaring a new variable called keys and assigning it to the Object.keys method of turning
  // the object keys into an array
    return keys; // Should return keys to the console.
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) { // Using a for in loop on the object to return the object keys
    console.log(key); // Should print the object keys to the console
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var values = Object.values(object); // Declaring a new variable called variables and assigning it to the Object.values method 
  // of turning the object keys into an array
    return values; // Should return the values to the console as an array
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var keys in object) { // Using a for in loop on the object to return the object values
    console.log(object[keys]); // Should print the object VALUES to the console.
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var lengths = Object.keys(object).length; // Declaring a new variable called lengths and assigning it to the Object.keys method
  // of turning the object keys into an array AND getting the length of that array's elements
    return lengths; // Should return lengths variable to the console.
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var myArray = []; // Declaring a new variable called myArray for later
  for(var keys in object) { // Declaring a for in loop to loop through the properties of the object
        myArray.push(object[keys]); // Should push the object keys into the empty array
    } 
  for(var i = myArray.length-1; i >= 0; i--) { // A for loop that starts at the myArray's length -1, ends when i is greater than
  // or equal to 0, and going down at an increment of 1. 
        console.log(myArray[i]); // Should print myArray[i] to the console.
    }

  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
