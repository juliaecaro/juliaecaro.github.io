/* 
 * FUNCTIONS:
 *
 * 0. Functions are reusable blocks of code that we can use to accept and process
 * inputs, and return a new data value. The inputs are the datatype being passed
 * into the function, the outputs are what the function is returning, the constraints
 * are the specifics in the given instructions that involve how the function will
 * be built, and any edge cases are the conditions taht must be met to make sure the 
 * proper output is being offered.
 * 
 * 1. To create a function we use the keyword, function, followed by a name (id or 
 * alias) for our function. Next is the parameters placed within parenthesis. Next is 
 * the function body and an optional return statement within the curly braces.
 * 
 * 2. There are two phases to using functions: declaration and invoking/calling a 
 * function. 
 */
 
 // 1. declaration //
 
 function myFirstFunction() { // Declaring a function called myFirstFunction.
 }
 
 console.log(myFirstFunction); // Should print [Function: myFirstFunction] to the console.
 
// 2. initialization or assignment //

 function myFirstFunction(param1, param2) { // Declaring a function named myFirstFunction
 // and giving it the PARAMETERS param1 and param2 in parenthesis. Next is a curly brace!
     return param1 + param2; // The OPTIONAL return statement 
 } // The final curly brace to close the function body!
 
 // 3. invocation or calling the function //
 
 myFirstFunction(1, 2); // CALLING the function myFirstFunction and FINALLY giving it some
 // actual parameters. These numbers, for example, are called ARGUMENTS, and are different
 // from parameters! This should make 3 print to the console.
 
 // 4. Difference between function parameters and arguments //
 
 // Functions OPTIONALLY take parameters and arguments. In actuality, parameters are just a
 // place for arguments to go into which are later given to the function at call time! NOTE:
 // Arguments are the ACTUAL DATA going into the function at call time, outside of the function
 // itself! Parameters are just a PLACEHOLDER for those arguments to go into inside of the function!
 
 // 5. Syntax for a NAMED function //
 
 // Functions can OPTIONALLY have a name, in which case they are known as an ANONYMOUS function.
 // However, there is syntax for a NAMED function. 
 
 // function nameOfFunction(param1, param2) { // Declaring a function named nameOfFunction and
 // giving it the parameters of param1 and param2.
     // <function body> // An example of a function body within curly braces
     // return statement // The OPTIONAL return statement!
// }

// 6. Assigning functions to variables //

var addition = function addFunc(param1, param2) { // Assigning the function addFunc to a variable
// called addition. We can then use the variable addition later and change it. NOTE: You can change
// the variable the function is called to, but not the function name itself! The function name can
// ONLY be used within the function body!
    return param1 + param2;
};

// 7. Optional Inputs, Optional Returns //

// Functions can OPTIONALLY take inputs and OPTIONALLY return a single value. We
// specify inputs by calling the function name (outside of the function body!)
// and assigning it with arguments, as we did before. We specify OUTPUTS by giving
// anonymous parameters in the function name's parenthesis, and having a return 
// statement within the function body!

// 8. Scope //

// Functions can see and modify variables in parent or global scopes. The inverse
// is NOT true. The variable is available in local scopes, but a locally defined
// variable is only available within the local scope. For example:

var myFirstGlobalVariable = 'Global'; // Declaring a variable named myFirstGlobalVariable
// and assigning it to a string of 'Global'.

function myFirstFunction() { // Declaring a function named myFirstFunction 
    var myFirstLocalVariable = 'Local'; // NOTE: This variable is WITHIN the function body curly braces!
}

console.log(myFirstGlobalVariable); // Will print Global to the console.
// console.log(myFirstLocalVariable); // This would throw a reference error if we printed it since we're 
// calling the variable myFirstLocalVariable outside of the scope it's made in! 

// 9. Closures //

// Closures store references to variables and parameters from the enclosing function inside their own local
// scope! Functions form closures around the data they encase. If an object returned from the
// function and is REFERENCED somewhere else, that closure stays alive and that data can continue 
// to exist!

function myFirstOuterFunctionName () { // Declaring an outer function called myFirstOuterFunctionName
    var myFirstInnerVariableName = "pizza"; // Declaring an outer variable called myFirstInnerVariableName and
    // declaring it a string of "pizza".
    function myFirstInnerFunctionName() { // Declaring an inner variable called myFirstInnerFunctionName
        console.log(myFirstInnerVariableName); // Should print "pizza".
    } myFirstInnerFunctionName();
} myFirstOuterFunctionName();