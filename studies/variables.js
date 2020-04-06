/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; // Declaring a variable called myName and ending with a semicolon.

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints --> undefined

// 2. initialization or assignment //
myName = 'julia'; // Assigning the variable myName to a string of my first name.
console.log(myName); // prints --> julia

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints --> bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. Var - Global Scope // 
var friendsName = "Sami"; // A globally scoped reference to the var friendsName variable and assigning it with my 
// friend's name. Since the variable is outside of a function body, it can be used by the whole screen and is thus 
// globally scoped.
console.log(friendsName);

// 5. Var - Function/Locally scoped //
function firstFunction() { // Declaring a function called firstFunction and assigning it with the variable friendsName2,
// which is assigned with one of my friends' names. 
    var friendsName2 = "Gabriel"; // Since the variable is inside the function body, it can only be used by this 
    // specific function that it is named in.
    return friendsName2;
}

/* 
 * NOTE: variables only need to be declared once! Typing out the name of the variable, calling it, will
 * reference the value the variable contains. ALSO, var variables can be reassigned and redeclared within
 * the respective scope. Var variables are initialized with undefined.
 */
 
// 5. Let - Block Scope //
// Let is surrounded by curly braces, {}, or block scoped. Variables declared within these curly braces with let can
// ONLY be used within those specific curly braces. They can be used to reassign a variable within the scope, but 
// NOT redeclared. They are NOT initialized.

var y = 5; { // Declaring a variable called y and assigning it with the value of 5 OUTSIDE the curly braces. 
    let y = 0; // Though y is assigned the value of 5 OUTSIDE the curly braces, {}, y has a value of 0 INSIDE the 
 }   // curly braces
 
 var variableName; { // Another example of let being block scope. 
    let variableName = 5; // The let variable assigns the variableName as 5.
}

// 6. Const //
// Like let, const is surrounded by curly braces, {}, or block scoped. The variable CANT be reassigned or redeclared.
// They are NOT initialized, and MUST be initialized during the initial declaration.

var variableName2; { // An example of const being block scoped. 
    const variableName2 = 5; // Initializing the variable during the inital declaration.
}

// 7. Hoisting //
// Hoisting moves variables and function declarations to the top of their respective scopes, global or 
// function/local. This happens before the code is run!

console.log(myLastName); // Printing the variable of myLastName to the console before the variable is declared.
var myLastName = "Caro"; // Finally declaring the variable of myLastName and assigning it with the value of my 
// last name. Even though I declared the variable, this will come out as undefined because only var myLastName 
// was moved to the top of the scope. myLastName = "Caro"; did not move to the top of the scope.