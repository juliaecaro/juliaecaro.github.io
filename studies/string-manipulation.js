/* 
 * STRING MANIPULATION:
 *
 * Strings are a collection of characters or symbols surrounded by either single
 * or double quotes (' '' or " "). We can manipulate these strings with a series
 * of methods that will allow us to manipulate them in various ways. 
 */
 
 // 1. With Operators //
 
 // You can use the + operator to concatenate two or more strings into a single 
 // string. Use += for shorthand!
 
 var myFirstString = "google"; // Declaring a variable called myFirstString and
 // assigning it to a value of "google".
 var mySecondString = ".com"; // Declaring a variable called mySecondString and 
 // assigning it to a value of ".com".
 
 console.log(myFirstString += mySecondString); // This is shorthand for myFirstString = myFirstString + mySecondString. 
 // Should print "google.com" to the console.
 
 // 2. With String Methods //
 
 var string1 = "Hi World!";
 var string2 = " How are you?";
 
 console.log(string1.charAt(0)); // Using the .charAt() method, we should be able
 // to print H to the console.
 console.log(string1.concat(string2)); // Using the .concat() method, we should be
 // able to print "Hi World! How are you?" to the console.
 console.log(string1.endsWith("World!")); // Using the .endsWith() method, we should
 // be able to check if the first string ends with "World!". Should print TRUE
 // to the console.
 console.log(string1.slice(0, 2)); // Using the .slice() method, we should be 
 // able to extract the first two letters of the first string and print "Hi" in
 // a new string. NOTE: The starting parameter is 0, and the ending parameter is 2.
 console.log(string1.startsWith("Hi")); // Using the .startsWith() method, we should
 // be able to check if the first string starts with "Hi". Should print TRUE
 // to the console.
 console.log(string1.toLowerCase()); // Using the .toLowerCase() method, we should
 // be able to completely lowercase the entire first string! Should print "hi world"
 // to the console.
 console.log(string1.toString()); // Using the .toString() method, we should be 
 // able to print Hi World! to the console. 
 console.log(string1.toUpperCase()); // Using the .toUpperCase() method, we should
 // be able to completely uppercase the entire first string! Should print "HI
 // WORLD" to the console.
 console.log(string1.length); // Using the .length method, we should be able to 
 // print the length of the first string to the console! Should print 9 to the 
 // console.
 