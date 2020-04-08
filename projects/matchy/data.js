/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // Declaring a variable called animal and assigning it to an empty object;
    animal.species = "dog"; // Using dot notation, giving the animal variable a key of species and assigning it with a string of "dog".
    animal['name'] = "Hunter"; // Using bracket notation, giving the animal variable a key of name and assigning it with a string of "Hunter".
    animal.noises = []; // Using dot notation again, giving the animal variable a key of noises and assigning it to an empty array.
    console.log(animal); // Should print the animal object to the console.
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; // Declaring a variable called noises and assigning it to an empty array.
noises[0] = "woof"; // Using bracket notation, giving the noises variable an index of 0 and assigning it with a string of "woof".
noises.unshift("meow"); // Using the unshift method, pushing "meow" to the front of the noises array
noises.push("quack"); // Using the push method, adding "quack" to the end of the noises array
noises[noises.length] = "roar"; // Using bracket notation, adding "roar" to the end of the noises array
console.log(noises.length); // Should print out the length of the noises array to the console.
console.log(noises[noises.length-1]); // Should print out the last element of the noises array to the console.
console.log(noises); // Should print the noises array to the console.
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises; // Using bracket notation, assiging the 'noises' array in the animal variable to the noises variable.
animal['noises'].push('woof');  // Using the push method, pushing "woof" to the end of the noises array.
console.log(animal); // Should print the animal variable to the console.
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! : * *******************************************************************
 */
//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; // Declaring a variable called animals and assigning it to an empty array.
animals.push(animal); // Using the push method, we will push the animal array objects to the animals array.
console.log(animals); // Should print the animals variable to the console.
var duck = {}; // Declaring a new variable called duck and assigning it to an empty object. 
duck.species = "duck"; // Using dot notation, giving the animal variable a key of species and assigning it with a string of "duck".
duck['name'] = "Jerome"; // Using bracket notation, giving the animal variable a key of name and assigning it with a string of "Jerome".
duck.noises = ['quack', 'honk', 'sneeze', 'woosh']; // Using dot notation again, giving the duck variable a key of noises and assigning it to a filled array.
animals.push(duck); // Using the push method, we will push the duck variable to the end of the animals array.
console.log(animals); // Should print the animals variable to the console.
var horse = {}; // Declaring a new variable called horse and assigning it to an empty object.
horse.species = "horse"; // Using dot notation, giving the animal variable a key of species and assigning it with a string of "horse".
horse['name'] = "Sassy"; // Using bracket notation, giving the animal variable a key of name and assigning it with a string of "Sassy".
horse.noises = ['roar', 'hiss', 'neigh', 'bark']; // Using dot notation again, giving the horse variable a key of noises and assigning it to a filled array.
animals.push(horse); // Using the push method, we will push the horse variable to the end of the animals array.
console.log(animals); // Should print the animals variable to the console.
var eagle = {}; // Declaring a new variable called eagle and assigning it to an empty object. 
eagle.species = "eagle"; // Using dot notation, giving the animal variable a key of species and assigning it with a string of "eagle".
eagle['name'] = "Freddy"; // Using bracket notation, giving the animal variable a key of name and assigning it with a string of "Freddy".
eagle.noises = ['roar', 'honk', 'neigh', 'woosh']; // Using dot notation again, giving the eagle variable a key of noises and assigning it to a filled array.
animals.push(eagle); // Using the push method, we will push the eagle variable to the end of the animals array.
console.log(animals); // Should print the animals variable to the console.
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// We are choosing an array because the order of the friends isn't asked to
// be specified. Arrays are also known as a list of things and can hold multiple
// values in an unspecified order.
var friends = []; // Declaring a new variable called friends and assigning it to an empty array.
function getRandom(animals){ // Declaring a new function called getRandom and the parameter of the animals variable
    return animals[Math.floor(Math.random() * animals.length - 1)]; // Using the Math.random() function, we will return a random animal from the animals array.
}
console.log(getRandom(animals));
var randomIndex = getRandom(animals); // Assigning the getRandom(animals) function into a randomIndex variable
    friends.push(randomIndex.name); // Should push friends into a random index
    animals[2].friends = friends; // Using bracket notation, we will give the second variable a key of friends and assigning it to the friends variable.
    console.log(animals[2]); // Should print the second animals element to the console.
// console.log(getRandom()); // Should print a random number between 0 and the length of the animal variable to the console.
console.log(friends); // Should print the friends array to the console.
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}