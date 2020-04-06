// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    return string.length; // Should return the length of string.


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase(); // Should return the string forced to lowercase.


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase(); // Should return the string forced to uppercase.


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    return string.replace(/[" "]/g,"-").toLowerCase(); // Should return the string forced to lowercase AND with the spaces
    // replaced with dashes.

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    if (string.charAt(0).toLowerCase() === char.toLowerCase()) { 
    // Using toLowerCase to normalize the casing of the words, then using bracket notation to find the first letter of 
    // the string. 
        return true; // Should return true if the first letter of string equals the char
    } else {
        return false; // Should return false if otherwise
    }
    
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
   
    if (string.charAt(string.length-1).toLowerCase() === char.toLowerCase()) { 
    // Using toLowerCase to normalize the casing of the words, then using bracket notation to find the first letter of 
    // the string.
        return true; // Should return true if the last letter of string equals char
    } else {
        return false; // Should return false if otherwise
    }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   return stringOne + stringTwo; // Should return stringOne + stringTwo


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE//
    var args = []; // An array called args, will be used to store the arguments from the join function
    var joined = args.join(); // Declaring a new var called join and assigning it with the variable args
    // joined together with the .join() method.
    
    args = Array.from(arguments);
    var variables = args.join('');
    return variables;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) { // Declaring an if statement and saying that if the length of stringOne is 
    // greater than the length of stringTwo, this should happen
        return stringOne; // Return stringOne
    } else { // An else statement, needs no conditioanl
        return stringTwo; // Return stringTwo
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo) { // An if statement with the condition statement that if stringOne is greater than
    // stringTwo, this should happen
        return -1; // Return -1
    } else if (stringTwo > stringOne) { // An else if statement with the condtion statement that if stringTwo is
    // greater than stringOne, this should happen
        return 1; // Return 1
    } else if (stringOne === stringTwo) { // Another else if statement with the condtion statement that if stringOne is 
    // strictly equal to stringTwo, this should happen
        return 0; // Return 0.
    }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne < stringTwo) { // An if statement with the condition statement that if stringOne is less than
    // stringTwo, this should happen
        return -1; // Return -1
    } else if (stringOne > stringTwo) { // An else if statement with the condtion statement that if stringTwo is
    // less than stringOne, this should happen
        return 1; // Return 1
    } else if (stringOne === stringTwo) { // Another else if statement with the condtion statement that if stringOne is 
    // strictly equal to stringTwo, this should happen
        return 0; // Return 0.
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending;
    module.exports.sortDescending = sortDescending;
}
