// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
if (start < end) { // If the starting condition is lesser than the ending condition, this code will run!
    var answer = []; // Creating a new array to collect the returned output

for (let i = start; i <= end; i++) { // The start condition is start, the ending condition is end, and the increment is 1.
    answer.push(i); // Pushing the i into the answer variable array
}
} else if (start > end) { // If the starting condition is GREATER than the ending condition, this code will run!
   var answer = []; // Creating a new array to collect the returned output

    for (let i = start; i >= end; i--) { // The start condition is end, the ending condition is start, and the increment is minus 1.
        answer.push(i); // Pushing the i into the answer variable array
    } 
}
    return answer; // Returning the answer array

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}