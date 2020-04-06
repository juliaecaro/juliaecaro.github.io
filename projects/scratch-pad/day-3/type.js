// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
if (Array.isArray(value)) { // An if statement, with the condition that IF the array isArray is actually an array, 
// this will happen:
    return true; // Should return true.
} else if (!Array.isArray(value)) { // An else if statement, with the condtion that if the object isArray is NOT an array,
// this will happen: 
    return false; // Should return false.
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
if (value instanceof Object && !(value instanceof Array) && !(value instanceof Date) && (value !== null)) { // Should be checking to see if value equals an object, not null, or array, or date
    return true; // Should return true if the value strictly equals an object
} else { // Should be checking to see if value does NOT equal an object, not null, or array, or date
    return false; // Should return false if the value is not an object
}

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (value instanceof Object && !(value instanceof Date) && (value !== null)) { // Should be checking to see if value equals an object, not null, or array, or date
    return true; // Should return true if the value strictly equals an object
} else { // Should be checking to see if value does NOT equal an object, not null, or array, or date
    return false; // Should return false if the value is not an object
}



    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
let values = value; // Declaring a new let variable and assigning it with the value of the value from the typeOF function

if (typeof values === "number") { // If the type of values equals a number, it should print number
    return "number"; // Should return number
} else if (typeof values === "string") { // If the type of values equals a string, it should print string
    return "string"; // Should return string
} else if (Array.isArray(values)) { // If the type of values equals a Array, it should print array
    return "array"; // Should return array
} else if (values === null) { // If the type of values equals null, it should print null
    return "null"; // Should return null
} else if (values instanceof Date) { // If the type of values equals a date, it should print date
    return "date"; // Should return date
} else if (typeof values === "object") { // If the type of values equals an object, it should print object
    return "object"; // Should return object
} else if (typeof values === undefined) { // If the type of values equals undefined, it should print undefined
    return "undefined"; // Should return undefined
} else if (typeof values === "boolean") { // If the type of values equals a boolean, it should print boolean
    return "boolean"; // Should return boolean
} else if (typeof values === "function") { // If the type of values equals a function, it should print function
    return "function"; // Should return function
} 
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
