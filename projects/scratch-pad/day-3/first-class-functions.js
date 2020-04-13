// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
 var bases = base;    // Changing base to a variable we can call later

 function greaterThanFilter(value) { // Creating a new function within the first function,
 // this one is called greaterThanFilter with a parameter of value.
    var givenValue = value;    // Declaring a variable called givenValue and assigning it
    // with the value of value, so we can call upon value later.
    
     if (typeof bases === "string") {   // An if statement that compares the typeof the variable
     // bases to a string
       if (value > base) { // An inner if statement that compares if value is greater than base
           return true; // Should return TRUE if value is greater than base
       } else { // An else statement, doesn't have any conditional
           return false; // Should return FALSE if value is LESS than base
       }
    } else if (typeof bases === "number") { // An else if statement on our OUTER if statement,
    // should be comparing typeof the variable bases to a number
      if (value > base) { // An inner if statement that compares if value is greater than base
          return true; // Should return TRUE if value is greater than base
      } else { // An else statement, doesn't have any conditional
          return false; // Should return FALSE if value is LESS than base
      }
    }
}

return greaterThanFilter; // Should return the greaterThanFilter function.
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
 var bases = base;    // Changing base to a variable we can call later

 function lessThanFilter(value) { // Creating an inner function called lessThanFilter and giving it the paramter of value
    var givenValue = value;    // Declaring a variable called givenValue and assigning it with the value so we can call
    // upon it later
    
     if (typeof bases === "string") {   // An OUTER if statement that compares the typeof bases to a string
       if (value < base) { // An INNER if statement that compares if value is LESS than base
           return true; // Should return TRUE if value is LESS than base
       } else { // An ELSE statement, has no conditional
           return false; // Should return FALSE if value is GREATER than base
       }
    } else if (typeof bases === "number") { // An OUTER else if statement, comparing the typeof bases to a number
      if (value < base) { // An INNER if statement that compares if value is LESS than base
          return true; // Should return TRUE if value is LESS than base
      } else { // An ELSE statement, has no conditional
          return false; // Should return FALSE if value is GREATER than base
      }
    }
}

return lessThanFilter; // Should return the lessThanFilter function.
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

 function startsWithFilter(string) { // Creating an INNER function that is called startsWithFilter and giving it the
 // parameter of a string.
    var givenString = startsWith.toLowerCase(); // Changing startsWith to a variable we can call later and making the value
    // startsWith to lowercase so we can compare it more easily later
    var stringToLowerCase = string.toLowerCase(); // Declaring a variable called stringToLowerCase and making the value
    // string to lowercase so we can compare it more easily later
   
     if (givenString === stringToLowerCase.charAt(0)) { // An IF statement that compares if givenString is equal to 
     //  stringToLowerCase's first character. The .charAt(0) method checks for the stringToLowerCase's first character.
         return true; // Should return TRUE if givenString equals the lower case first character of stringToLowerCase
       } else { // An ELSE statement, with no conditionals
           return false; // Should return FALSE if givenString does NOT equal the lower case first character of stringToLowerCase
       }
    } 


return startsWithFilter; // Should return the startsWithFilter function.
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
   
    function endsWithFilter(string) { // Creating an INNER function called endsWithFilter and giving it the paramter of 
    // a string
    var givenString = endsWith.toLowerCase(); // Changing endsWith to a variable we can call later, and making it lowercase
    // with the .toLowerCase() method.
    var stringToLowerCase = string.toLowerCase(); // Declaring a variable called stringToLowerCase and making the value
    // string to lowercase so we can compare it more easily later
   
     if (givenString === stringToLowerCase.charAt(stringToLowerCase.length-1)) {  // An IF statement that compares the
     // givenString variable to the variable stringToLowerCase. NOTE: the .charAt method allows us to access the last 
     // character of the variable stringToLowerCase by using the .length-1 method.
         return true; // Should return TRUE if the givenString equals the lower case LAST character of stringToLowerCase.
       } else { // An ELSE statement, has no conditionals
           return false; // Should return FALSE if the givenString does NOT equal the lower case LAST character of 
           // stringToLowerCase.
       }
    } 


return endsWithFilter; // Should return the endsWithFilter function.
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var myArray = []; // Declaring a variable called myArray and assigning it with an empty array.
    
for (var i = 0; i <= strings.length-1; i++) { // Declaring a for loop that starts at 0, ends when the loop is less than or equal to the length
// of strings - 1, and goes up at an increment of 1.
    let string = strings[i]; // Declaring a let variable called string and assigning it with the index of the loop of strings
    var newString = modify(string); // Declaring a variable called newString and calling modify onto the string variable.
    myArray.push(newString); // Pushing the newString variable into the myArray array.
}
    
    return myArray; // Should return myArray array.
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // An Array of Strings (strings) and a function designed to TEST the string (test) are the parameters to
    // the function allStringsPass. We should return a boolean if it passed, return TRUE if ALL the strings pass 
    // the test.
    
    
    let passedTheTest = []; // Declaring a variable that is assigned to an empty array. This
    // will hold the strings that actually pass the test


    for (var i = 0; i <= strings.length-1; i++) { // The for loop will loop over all the elements
    // in the strings array
        if (test(strings[i]) === true) { // If statement. If stringsLength equals the length of passedTheTest, 
    // then it should return true.
            passedTheTest.push(strings[i]);
        } 
}

    let stringsLength = strings.length; // Declaring a variable that is assigned the 
    // length of the original strings array
    let passedTheTestLength = passedTheTest.length;

    if (stringsLength === passedTheTestLength) { // If the length of stringsLength strictly
    // equals the length of passedTheTestLength, then return true
        return true; // Should return true
    } else { // An else statement, needs no conditionals
        return false; // Should return false
    }
    


    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}