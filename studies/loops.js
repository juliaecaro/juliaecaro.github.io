/*
 * LOOPS:
 *
 * 0. Loops allow us to perform a specific action repeatedly. The three types of loops
 * we will cover are while, for, and for-in loops. 
 * 
 * 1. While loops are useful for when you don't know exactly how many times
 * you want to loop over something. While loops execute the statement as long as the 
 * condition equates to TRUE. To create a while loop, you first declare a variable
 * and assign it a value. Next, write the keyword, while, and write a pair of parenthesis
 * next to it. Within the parenthesis, give a CONDITION that must be followed. To the right
 * of the parenthesis, write the opening curly brace to the loop body, or statement. Then 
 * write the console.log() statement within the curly braces, followed by the increment, 
 * which is then followed by the closing curly brace. 
 *
 * 2. For loops are useful for when you KNOW how many times you want to loop! For loops 
 * execute the statement until the specified condition equates to FALSE. To create a for
 * loop, you first declare the keyword, for, with a pair of parenthesis beside it. Within
 * the parenthesis, you must include a starting condition, stopping condition, and an
 * increment (how much the loop will go up or down by). Then include the curly braces for 
 * the code block. Inside the code block, you place your code. You use for loops for arrays!
 *
 * 3. For-in loops loop over ALL countable properties of an object that are keyed by strings. 
 * You use for-in loops for objects! To create a for-in loop,  you write the keyword, for,
 * followed by parenthesis. In the parenthesis, you write the variable name, the keyword in,
 * and then the object name. Next to the parenthesis, you write the curly braces for the code
 * block. Inside the code block, you place your code that will run during the loop.
 */
 
 // 1. While Loops //
 
 var count = 0; // Declaring a variable called count and assigning it to a value of 0. 
 
 while (count < 5) { // Declaring a while loop and assigning it with the condition that it should loop as long
 // as count is less than 5.
     console.log(count); // Printing count to the console. Should print 0, 1, 2, 3, 4 to the console.
     count++; // Should make count go up by 1.
 }
 
 // 2. For Loops //
 
 for (var i = 0; i < 5; i++) { // Declaring a for loop and assigning it with the starting condition of i = 0, 
 // the stopping condition of i being less than 5, and the increment of plus 1. 
     console.log('Hi!'); // As long as the conditions above hold true, the loop should runa nd print 'Hi!'
 }
 
 // 3. For-in Loops //
 var objects = {key1: 'a', key2: 'b'}; // Declaring a variable called objects and assigning it with an object with
 // several key/value pairs
 
 for (var key in objects) { // The correct syntax for a for-in loop with this example
     console.log(key); // Should print the key of the objects variable
     console.log(objects[key]); // should print the value of the key/value pair of the objects variable
 }
 
 // 4. Looping Forward Any Number of Times //
 
 for (var i = 0; i <= 10; i++) { // Declaring a for loop and assigning it with the starting condition of i = 0, the
 // stopping condition of i being less than or equal to 10, and the increment of going up plus 1.
   console.log(i); // Should print i to the console during each loop. Should print the numbers 0 going up through 10.
 }
 
 // 5. Looping Backward to Zero //
 
 for (var i = 10; i >= 0; i--) { // Declaring a for loop and assigning it with the starting condition of i = 10, the
 // stopping condition of i being greater than or equal to 0, and the increment of going DOWN minus 1.
  console.log(i); // Should print i to the console during each loop. Should print the numbers 10 going down to 0.
 }
 
 // 6. Looping Forward Over an Array //
 
 var myFirstArray = ['1', '2', '3', '4', '5']; // Declaring a variable and assining it an array with five values. 
 
 for (var i = 0; i <= myFirstArray.length - 1; i++) { // Declaring a for loop and assigning it with the starting condition of 
 // i = 0, the stopping condition of i being less than or equal to the length of myFirstArray minus 1, and going up at an increment
 // of 1.
     console.log(myFirstArray[i]); // Should print the values of the myFirstArray index during each loop.
 }
 
 // 7. Looping Backward Over an Array //
 
 var myFirstArray = ['1', '2', '3', '4', '5']; // Declaring a variable and assigning it an array with five values.
 
 for (var i = myFirstArray.length; i >= 0; i--) { // Declaring a for loop and assigning it with the starting condition of 
 // i = the length of myFirstArray, the stopping condition of i being greater than or equal to 0, and the increment of minus 1.
     console.log(myFirstArray[i]); // Should print the values of the myFirstArray index BACKWARDS during each loop.
 }
 
 // 8. Looping Over an Object //
 
 var myFirstObject = {key1: 'a', key2: 'b', key3: 'c'}; // Declaring a variable and assigning it an object with three key/value pairs.
 
 for (var key in myFirstObject) { // Declaring a for-in loop and assigning it with the name of myFirstObject
   if (myFirstObject.hasOwnProperty(key)) { // An inner if statement, checking to see if myFirstObject has a property of the keys
    console.log(key + " " + myFirstObject[key]); // Should print the key name, a space, and then the key VALUE of each key/value pair 
    // in the console.
   }
 }