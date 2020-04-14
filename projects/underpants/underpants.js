// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) { // Calling the _ array and giving it a function name of identity, and 
// assigning it to a function keyword that takes in the parameter of value
    return value; // Should return value
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) { // Calling the _ array and giving it the function name of typeOf, and 
// assigning it to a function keyword that takes in the parameter of value
    if (typeof value === "string") { // If statement; if the type of value is strictly equal to
    // string, this code should run
        return "string"; // Should return "string"
    } else if (Array.isArray(value) === true) { // Else if statement; if the value is an array, this 
    // code should run
        return "array"; // Should return "array"
    } else if (typeof value === "undefined") { // Else if statement; if the type of value is strictly
    // equal to "undefined", this code should run
        return "undefined"; // Return "undefined"
    } else if (typeof value === "number") { // Else if statement; if the type of value is strictly equal
    // to "number", this code should run
        return "number"; // Return "number"
    } else if (typeof value === "boolean") { // Else if statement; if the type of value is strictly equal
    // to "boolean", this code should run
        return "boolean"; // Return "boolean"
    } else if (value === null) { // Else if statement; if the type of value is strictly equal to null,
    // this code should run
        return "null"; // Return null
    } else if (typeof value === "function") { // Else if statement; if the type of value is strictly equal
    // to "function", this code should run
        return "function"; // Return "function"
    } else if (typeof value === "object") { // Else if statement; if the type of value is strictly equal to
    // "object", this code should run
        return "object"; // Return "object"
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) { // Calling the _ array and giving it the function name of first, and
// assigning it to a function keyword that takes in an array and a number as the parameters
    let myArray = []; // Declaring a new variable called myArray and assigning it to an empty array
    
    if (Array.isArray(array) === false) { // If statement; if array is not an array, run this code
        return []; // Return an empty array
    } else if (typeof number !== "number") { // Else if statement; if the type of number is not strictly
    // equal to "number", run this code
        return array[0]; // Return the first index of array's array
    } else if (number < 0) { // Else if statement; if number is less than 0, run this code
        return []; // Return an empty array
    } else if (number > array.length) { // Else if statement; if number is greater than array.length, 
    // run this code
        return array; // Return the value of array
    } else { // Else statement; needs no conditional, run this code if all others fail
        for (let i = 0; i < number; i++){ // For loop; starting condition is 0, stopping condition is i
        // is less than number, and the increment is plus 1.
            myArray.push(array[i]); // Push the index of array into myArray
        }
        return myArray; // Return myArray
            }
        };

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) { // Calling the _ array and giving it the function name of last, and
// assigning it to a function keyword that takes in an array and a number as the parameters
    let myArray = []; // Declaring a new variable called myArray and assigning it to an empty array
    
    if (Array.isArray(array) === false) { // If statement; if array is not an array, run this code
        return []; // Return an empty array
    } else if (typeof number !== "number") { // Else if statement; if the type of number is not strictly
    // equal to "number", run this code
        return array[array.length - 1]; // Return the last index of array's array
    } else if (number < 0) { // Else if statement; if number is less than 0, run this code
        return []; // Return an empty array
    } else if (number > array.length) { // Else if statement; if number is greater than array.length, 
    // run this code
        return array; // Return the value of array
    } else { // Else statement; needs no conditional, run this code if all others fail
        for (let i = 1; i <= number; i++){ // For loop; starting condition is 1, stopping condition is i
        // is less than or equal to number, and the increment is plus 1.
            myArray.push(array[i]); // Push the index of array into myArray
        }
        return myArray; // Return myArray
            }
        };

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) { // Calling the _ array and giving it the function name 
// of indexOf. Then, we assign it to the function keyword that takes in an array and a value
// as the parameters
    for (let i = 0; i < array.length; i++) { // For loop; starting condition is i equals 0, 
    // stopping condition is i is less than the array length, and the increment is plus 1
        if (array[i] === value) { // If statement; if the index of array is strictly equal to
        // value, this code will run
            return i; // Return the index
        }
    } return -1; // Return negative 1.
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) { // Calling the _ array and giving it the function name
// of contains. Then, we assign it to the function keyword that takes in an array and a value as 
// the parameters
    for (let i = 0; i < array.length; i++) { // For loop; the starting condition is i equals 0, 
// the stopping condition is i is less than the length of array, and the increment is plus 1.
        if (array[i] === value) { // If the index of array is strictly equal to value, this code
        // should run
            return true; // Return true;
        }
    } return false; // Return false if the loop did not return true.
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) { // Calling the _ array and giving it the function name
// of each. Then, we assign it to the function keyword that takes in a collection and a function
// as the parameters
    if (Array.isArray(collection) === true) { // If collection is an array, this code will run
        for (var i = 0; i < collection.length; i++) { // For loop; starting condition is i = 0, 
        // the stopping condition is i is less than the length of collection, and the
        // increment is plus 1.
            func(collection[i], i, collection); // Calling the func function; collection[i] is
            // the element we are modifiying, the i is the index, and collection is the list
        } 
    } else { // Else statement; default, needs no conditional
        for (var key in collection) { // For-in loop; run this code if the collection is an object
            func(collection[key], key, collection); // Calling the func function; collection[key]
            // is the value, key is the key, and collection is the list
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
