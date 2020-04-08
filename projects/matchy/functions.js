/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) { // Declaring a function called search and giving it the parameters of array and string
  for (var i = 0; i <= array.length - 1; i++) { // Declaring a for loop, with a starting condition of 0, a stopping condition
  // of i being less than or equal to array.length - 1, and the increment of plus 1.
      if (array[i].name === string) { // Declaring an inner if statement, if array[i].name is strictly equal to a string, do this
          return array[i]; // Return the object of array
      }
     } return null; // Else return null
  }   
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) { // Declaring a function called replace and giving it the parameters
// of animals array, the name, and the replacement object
    for (var i = 0; i <= animals.length - 1; i++) { // A for loop; the starting condition is i equals 0, the stopping 
    // condition is i being less than or equal to the length of animals.length - 1, and the increment is plus 1.
        if (animals[i].name === name) { // If the name of the random animal equals the given name parameter, 
        // this code should run 
            animals.splice(1, animals[i], replacement); // The animals array should splice and remove 1 element index
            // of the animals[i], and replaces it with whatever is in the replacement element (another object).
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) { // Declaring a function called remove and giving it the parameters of the animals
// array and the name of an animal
    for (var i = 0; i <= animals.length - 1; i++) { // Declaring a for loop; the starting condition is i equals 0, 
    // the stopping condition is i is less than or equal to animals.length - 1, and an incremement of plus 1. 
        if (animals[i].name === name) { // IF the animals name at the i index equals the name that is given, this 
        // code should run.
            animals.splice(i, 1); // The animals array should splice at the i index and delete one element
        } 
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) { // Declaring a function called add and giving it the parameters of the animals array 
// and the object of the new animal to be added
for (var i = 0; i <= animals.length - 1; i++) { // Declaring a for loop, with a starting condition of i = 0, a stopping
// condition of i being less than or equal to animals.length - 1, and an increment of plus 1
    if (animal.name.length > 0 && animal.species.length > 0) { // An if statement; if the length of the animal name is
    // greater than 0 AND the length of the animal species is greater than 0, this code should run
            if (animal.name === animals[i].name) { // An if statement; if the animal name is strictly equal to the name of
            // one of the animals names, this code should run
                break; // Break out of the loop 
            } else { // An else statement; default, needs no condition. If all other conditions are false, this code should run
                animals.push(animal); // Push animal into animals.
            }
        } 
}
}
/**
 * You did it! You're all done with Matchy!
 */
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}