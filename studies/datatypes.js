/* 
 * DATA TYPES: 
 * 
 * 0. There are two main catagories of data types that Javascript can use to store and manipulate
 * data within a program: primitive and complex data types. 
 * 
 * 1. Strings, numbers, booleans (true or false), NaN (Not a Number), undefined, and null are called 
 * PRIMITIVE data types because they are immutable. Being immutable means that these data types
 * can only hold one value at a time; they CANNOT hold any other value! NOTE: Any operation on 
 * primitive data types returns a NEW primitive data type. These primitive data types are also 
 * copy by value, which means that when you assign or pass to a new variable, these primitive data 
 * types are DIRECTLY copied from the first variable.
 * 
 * 2. Objects, arrays, and functions are called COMPLEX data types because they are mutable. This means
 * that these COMPLEX data types can hold any other value, as many as you want! Instead of being copy 
 * by value like primitive data types, COMPLEX data types are instead copy by REFERENCE. This means 
 * that when assigning or passing to a new variable, these complex data types are passed by REFERENCE. 
 * NOTE: complex data types can be of any size you want, infinitely! 
 */
 
 // 1. Simple Data Types - Strings //
 
 // Strings are a collection of characters or symbols surrounded by quotes ('' or ""). Individual 
 // characters within a string can be accessed individually with bracket notation. Strings themselves
 // can be combined using the + operator. Strings have a length property that returns the total
 // number of characters the string contains. 
 
 var myFirstName; // Declaring a variable of myFirstName;
 myFirstName = 'Gabriel'; // Assigning the variable myFirstName to a string of my friend's first name with single quotes
 myFirstName = "Julia"; // Assigning the variable myFirstName to a string of my first name with double quotes
 
 console.log(myFirstName[0]); // Bracket Notation. This should print J to the console.
 
 var myLastName; // Declaring a variable of myLastName.
 myLastName = "Caro"; // Assigning the variable myLastName to a string of my last name with double quotes. 
 var myFullName = myFirstName + " " + myLastName; // Declaring a variable of my full name and assigning it with the values
 // of the variables myFirstName and myLastName respectively.
 console.log(myFullName); // This should print "Julia Caro" to the console.
 console.log(myFullName.length); // This should print 10 to the console.
 
 // 2. Simple Data Types - Numbers // 
 
 // In Javascript, any number is a numerical value, positive, negative, or even with a decimal point.
 // I can add, subtract, divdie, and even multiply using numbers in Javascript. New values can be created
 // with arithmetic expressions. 
 
 var myFavoriteNumber = 5; // Declaring a variable of my favorite number!
 console.log(myFavoriteNumber); // Should print 5 to the console.
 myFavoriteNumber = 2.5; // Re-declaring myFavoriteNumber as a decimal number.
 console.log(myFavoriteNumber); // Should print 2.5 to the console.
 myFavoriteNumber = 2.5 + 5; // Re-declaring myFavoriteNumber again, this time as a mathematical expression.
 console.log(myFavoriteNumber); // Should print 7.5 to the console.
 
 // 3. Simple Data Types - Booleans //
 
 // Put simply, a boolean in Javascript is a true or false value. They are typically used within conditional
 // statements. A boolean can be created with boolean EXPRESSIONS using comparison operators. 
 
 var myFirstBoolean = true; // A boolean value!
 console.log(myFirstBoolean); // Should print true to the console.
 myFirstBoolean = false; // A boolean value!
 console.log(myFirstBoolean); // Should print false to the console.
 myFirstBoolean = 1 === '1'; // Comparing the number 1 and a string of 1.
 console.log(myFirstBoolean); // Shold print false to the console.
 
 // 4. Complex Data Types - Arrays // 
 
 // Arrays are complex data types used to store multiple data types. An array's values have something called
 // an INDEX, which is the numerical position of each value in the list. This INDEX starts at 0 (ZERO), NOT 1 
 // as you might expect. The second value has an INDEX of 1, and so on. Arrays can reference ANY other data
 // type: strings, numbers, booleans, other arrays, objects, and functions! Arrays are written with brackets [].
 // 
 // Arrays have a length property which returns the number of values in the array.
 
 var myFirstArray = []; // <-- This is an array literal ([]) assigned to a variable named myFirstArray.
 myFirstArray = ['a', 2, true, ['b', 3, false], {key1: 'a', key2: 'b'}]; // This is an array with a string data
 // type, a number data type, a boolean data type, another array data type, and an object data type.
 console.log(myFirstArray); // Should print myFirstArray's values to the console.
 console.log(myFirstArray[0]); // Using bracket notation and the correct index to print a to the console!
  // 
  // Arrays have a length property which returns the number of values in the array.
 console.log(myFirstArray.length); // Should print 5 to the console!
 //
 // Arrays have a push method that adds a value to the end of the array!
 myFirstArray.push('z'); // Using the .push method to add 'z' to the end of the array.
 console.log(myFirstArray); // Should print the myFirstArray array to the console with 'z' added at the end!
 //
 // Arrays have an unshift method that adds a value to the beginning of the array!
 myFirstArray.unshift(1); // Using the .unshift method to add 1 to the beginning of the array.
 console.log(myFirstArray); // Should print the myFirstArray array to the console with 1 added at the beginning!
 //
 // Arrays have a pop method that removes a value from the back of the array!
 myFirstArray.pop(); // Using the .pop method to remove 'z' from the back of the array.
 console.log(myFirstArray); // Should print the myFirstArray array to the console WITHOUT 'z' at the end!
 //
 // Arrays have a shift method that removes a value from the front of the array!
 myFirstArray.shift(); // Using the .shift method to remove 1 from the front of the array.
 console.log(myFirstArray); // Should print the myFirstArray array to the console WITHOUT 1 at the beginning!
 //
 // Arrays have a join method that concatenates all of the elements in the array into a string. 
  console.log(myFirstArray.join()); // Should print the myFirstArray array as a string!
 
 
 // 5. Complex Data Types - Objects //
 
 // Objects are complex data types used to store multiple data types, usually a collection of data relating
 // to a single object/identity stored in curly braces {}. Values are stored at keys in objects! Objects can
 // reference any other data type: strings, numbers, booleans, other arrays, objects, and functions!
 
 var myFirstObject = {}; // This is an object literal ({}) assigned to a variable named myFirstObject.
 myFirstObject = {key1: 'a', key2: 'b'}; // This is an object assigned to string data types, assigned to key1
 // and key 2 respectively. 
 console.log(myFirstObject); // This should print myFirstObject's data to the console.
 //
 // You can access any individual part of the data of an object using bracket notation [] or dot notation.
 
console.log(myFirstObject['key1']); // Using bracket notation to give us 'a'; should print a to the console.
console.log(myFirstObject.key2); // Using dot notation to give us 'b'; should print b to the console.

// NOTE: Objects do NOT have a length property! 
// Every value in the object has a corresponding key. Similar to an Array, objects can also grow indefinitely. 
// You can have as many values as you want in an object!
// You CANNOT use unshift, pop, shift, push, or join on an object!

// 6. Complex Data Types - Functions //

// Functions are reusable blocks of code that accept and process inputs, and return a new data value. There are
// FOUR parts to a function declaration: Name, Parameter(s) in parenthesis, the function BODY where the code runs 
// in curly braces, and the return statement (also within the curly braces). 

function myFirstFunction(param1, param2) { // Declaring a function called myFirstFunction and giving it the parameters
// of param1 and param 2. NOTE: We start the function BODY with a curly brace!
    if (param1 === param2) { // Giving an example of a function body with an if statement, comparing param1 and param2.
        return "That's some good code!"; // An OPTIONAL return statement.
    }
}

myFirstFunction(2, 2); // Calling the function and giving the arguments that will go into the parameters.

// NOTE: We called the function by using the function name, followed by parenthesis. This is CALLING the function and
// runs the code inside the function body! ALSO NOTE: functions can hold any number of statements! You can have
// as many as you want!

// 7. Simple Data Types - Undefined //

// Undefined is a PRIMITIVE data type, usually assigned to variables that have just been declared but not assigned
// a value, or to arguments for which there are no actual arguments. 

var myFirstLetter; // Declaring a variable named myFirstLetter but not actually assigning it a value.
console.log(myFirstLetter); // This should print undefined to the console.

// NOTE: like other PRIMITIVE data types, undefined can only hold one value at a time!

// 8. Simple Data Types - Null //

// Null is a PRIMITIVE data type, referencing a variable that points to a nonexistent/invalid object/address. Null is 
// very interesting in that it is marked as an Object even though it is not an object. NOTE: Null can only hold one 
// value at a time!

typeof null === 'object'; // This will print true to the console!

var myFirstNull = null; // Declaring a variable called myFirstNull and assigning it with null.
myFirstNull; // This should print null to the console!

// 9. Simple Data Types - NaN // 

// NaN is a PRIMIIVE data type, a symbolic, numerical data type that means a value which is undefined OR a value 
// that is impossible to represent. The type of NaN is a number, and NaN is a property of the global object. It is 
// returned when math fails or when a function trying to parse a number fails.

// 10. Simple Data Types - Infinity & -Infinity // 

// Infinity and -Infinity are PRIMITIVE data types, a symbolic, numerical data type that represents the concept of 
// infinity and negative infinity, respectively. They are displayed when a number exceeds the upper or lower 
// (respectively) limit of the floating point numbers.

// 11. The Difference Between Primitive/Simple and Complex Data Types //

// There are several differences between PRIMITIVE and COMPLEX data types. PRIMITIVE data types are IMMUTABLE, which
// means that they can only hold one value at a time, and cannot hold any other value. PRIMITIVE data types are also
// copy by value, which means that when you assign or pass to a new variable, these primitive data types are DIRECTLY 
// copied from the first variable. Unlike PRIMITIVE data types, COMPLEX data types ARE MUTABLE, which means that they
// can hold as many values as you want at a time! Complex data types are also copy by reference, which means that when 
// assigning or passing to a new variable, these complex data types are passed by REFERENCE.

// 12. The Difference Between Copy by Value and Copy by Reference //

// Copy by Value means that if and when a PRIMITIVE value is assigned to a variable, the variable holds that primitive
// value. When that variable is assigned to another variable (using =), the VALUE of the first variable is COPIED to 
// the second variable. 

var myFirstCopyByValue = 5; // Declaring a variable called myFirstCopyByValue and assigning it a value of 5.

var mySecondCopyByValue = myFirstCopyByValue; // Declaring a second variable called mySecondCopyByValue and 
// assigning it the value of myFirstCopyByValue. This means that both variables will have the same value, despite
// only assigning a unique value to one of them. 
console.log(mySecondCopyByValue); // Should print 5 to the console.

// Copy by Reference means that when a COMPLEX value is assigned to a variable, the variable does NOT hold that value.
// Instead, it is assigned a REFERENCE to the value. The reference shows the value's location within the computer's 
// memory. 

var arr = []; // Declaring a variable called arr and assigning it to an empty array. The variable arr is assigned the
// LOCATION of the array, not the actual array itself.
arr.push(5); // REFERENCING the arr array and using the push method to push the number 5 into the array. Note that the
// VALUE of the array is not what changes. The array in the MEMORY is what changes.
console.log(arr); // This should print [5] to the console.