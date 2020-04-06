/*
 * OPERATORS: 
 *
 * 0. Operators act on the data they are assigned, performing an operation on 
 * single or multiple operands, and then producing a result. Operators are 
 * classed by what they do and HOW MANY operands they require. Operands are the 
 * values that operators act on. 
 *
 * 1. Arithmetic Operators are used to perform mathematical operations/problems
 * between numeric operands. These are the usual operators we may be familiar
 * with from math class: +, -, *, /, %, ++, and --.
 *
 * 2. Comparison operators are used to compare two operands and return a BOOLEAN
 * value, true or false. Here  are the comparison operators: >, <, >=, <=, ===, 
 * and ==.
 *
 * 3. Assignment operators are used to assign values to variables with shorthand.
 * Here are the assignment operators: =, +=, -=, *=, /=, and %=. 
 *
 * 4. Logical operators are used to combine two or more conditions into one 
 * statement. Here are the logical operators: &&, ||, and !. 
 *
 * 5. Unary operators are operators that take ONE operand and perform an action. 
 * The unary operators we will be looking at are: !, typeOf, and -.
 *
 * 6. The Ternary operator is written like this: a condition followed by a
 * question mark, then an expression to perform if the condition is TRUTHY, then
 * an expression to perform if the condition is FALSY. The two expressions are
 * separated by a colon. NOTE: This is the ONLY operator that takes THREE OPERANDS!
 * It's commonly used as a form of shorthand for an if statement!
 */
 
 // 1. Arithmetic Operators //
 
 var a = 3; // Declaring a variable called a and assigning it a value of 3.
 var b = 5; // Declaring a variable called b and assigning it a value of 5.
 var c = 7; // Declaring a variable called c and assigning it a value of 7.
 
 console.log(a + b); // Prints 8 to the console.
 console.log(b - a); // Prints 2 to the console.
 console.log(c * a); // Prints 21 to the console.
 console.log(c / a); // Prints 2.3333333333333335 to the console.
 console.log(a++); // Prints 4 to the console.
 console.log(a--); // Prints 2 to the console.
 
 // 2. Comparison Operators //
 
 var d = 3; // Declaring a variable called a and assigning it a value of 3.
 var e = 5; // Declaring a variable called b and assigning it a value of 5.
 var f = "5"; // Declaring a variable called c and assigning it a value of 7.
 var g = d; // Declaring a variable called x and assigning it to the variable of a.
 
 console.log(f > d); // should print TRUE to the console.
 console.log(d < e); // Should print TRUE to the console.
 console.log(d >= e); // Should print FALSE to the console.
 console.log(e <= f); // Should print TRUE to the console.
 console.log(e == f); // Should print TRUE to the console.
 console.log(e === f); // Should print FALSE to the console.
 
 // 3. Assignment Operators //
 
 var h = 3; // Declaring a variable called a and assigning it a value of 3.
 var i = 5; // Declaring a variable called b and assigning it a value of 5.
 
 console.log(h = i); // Should print 5 to the console.
 console.log(h += 1); // Should print 4 to the console.
 console.log(h -= 1); // Should print 2 to the console.
 console.log(i *= 5); // Should print 25 to the console.
 console.log(i /= 5); // Should print 1 to the console.
 console.log(i %= 2); // Should print 1 to the console.
 
 // 4. Logical Operators //
 
 var j = 10;
 var k = 20;
 
 console.log((j != k) && (j < k)); // Should print TRUE to the console.
 console.log((j > k) || (j == k)); // Should print FALSE to the console.
 console.log(!(j < k)); // Should print FALSE to the console.
 
 // 5. Unary Operators //
 
 console.log(-(-5)); // Should print 5 to the console. NOTE: NEGATES the number!
 console.log(typeof(2)); // Should print "NUMBER" to the console. NOTE: prints a
 // string of the data type of the operand inside the parenthesis!
 console.log(!false); // Shoold print TRUE to the console. NOTE: flips the 
 // "truthiness" of the operand.
 
 // 6. Ternary Operator //
 
 var isMovieGoer = true; // Declaring a variable called isMovieGoer and assigning it
 // to a boolean value of true.
 
 var priceOfMovie = isMovieGoer ? 10 : 0; // Declaring a new variable called 
 // priceOfMovie and making it equal to the boolean value of isMovieGoer. Since 
 // isMovieGoer is equal to TRUE, the first value of 10 will print to the console.
 console.log(priceOfMovie); // Should print 10 to the console.