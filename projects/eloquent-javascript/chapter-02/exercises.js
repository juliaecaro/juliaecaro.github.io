
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) { // Declaring a function called triangles and assigning it with a parameter of number
  for (var i = "#"; i.length <= number; i += "#") { // Declaring a for loop, giving it a starting condition of #, a stopping condition of 
  // the length of i being less than or equal to the input/parameter number, and the stopping condition of i plus # each loop. 
    console.log(i); // Should print i to the console each time the loop loops.
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for (let i = 1; i <= 15; i++) { // Using a for loop to put a starting condition of 1, a stopping condition of 15, and an increment
// of +1. 
    if (i % 3 == 0 && i % 5 == 0) { // Using an if statement to check for numbers that are multiples of BOTH 5 AND 3. 
        console.log("fizzbuzz"); // Numbers that are multiples of both 5 and 3 should print fizzbuzz.
    } else if (i % 3 == 0) { // Using an else if statement to check for numbers that are multiples of just 3.
        console.log("fizz"); // Numbers that are multiples of just 3 should print fizz.
    } else if (i % 5 == 0) { // Using an else if statement to check for numbers that are multiples of just 5.
        console.log("buzz"); // Numbers that are multiples of just 5 should print buzz.
    } else { // Using an else statement to check for nothing. 
        console.log(i); // Numbers that are NOT multiples of 3 OR 5 should print the number itself.
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
var size = number; // Declaring a variable called size and assigning it with the value of number.
var board = ""; // Declaring a variable called board and assigning it with the value of an empty string.

for (var a = 0; a < size; a++){ // Declaring a for loop, with a starting condition of 0, a stopping condition of a being less than the value of size,
// and going up at an increment of plus 1.
  for (var b = 0; b < size; b++) { // Declaring an INNER for loop, with a starting condition of 0, a stopping condition of b being less than the value of size,
  // and going up at an increment of plus 1.
    if ((a + b) % 2 == 0) { // An if statement; if the remainder of the value of a plus b is even, this code should run
      board += " "; // Board equals board plus " ";
    } else { // if the value of a plus b is NOT even (odd), this code should run
      board += "#"; // Board equals board plus "#";
    }
  } board += "\n"; // Each instance of board should have a line break after it.
}
    console.log(board); // Should print board to the console.
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
