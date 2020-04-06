// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
for (let i = 1; i <= 100; i++) { // Using a for loop to put a starting condition of 1, a stopping condition of 100, and an increment
// of +1. 
    if (i % 3 == 0 && i % 5 == 0) { // Using an if statement to check for numbers that are multiples of BOTH 5 AND 3. 
        console.log("FizzBuzz"); // Numbers that are multiples of both 5 and 3 should print FizzBuzz.
    } else if (i % 3 == 0) { // Using an else if statement to check for numbers that are multiples of just 3.
        console.log("Fizz"); // Numbers that are multiples of just 3 should print Fizz.
    } else if (i % 5 == 0) { // Using an else if statement to check for numbers that are multiples of just 5.
        console.log("Buzz"); // Numbers that are multiples of just 5 should print Buzz.
    } else { // Using an else statement to check for nothing. 
        console.log(i); // Numbers that are NOT multiples of 3 OR 5 should print the number itself.
    }
}
}


    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}