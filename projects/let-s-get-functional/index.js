// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-juliaecaro");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // Input: array
    // Output: number
    
    let filterOutput = _.filter(array, function(customerObjects){ 
        return customerObjects.gender === "male"; // Filter out all of the male customers
    }); return filterOutput.length; // Return the length of filterOutput
};

var femaleCount = function(array) {
    // Input: array of customer objects
    // Output: number of female customers
    
     return _.reduce(array, function(previousValue, currentValue){
        // When to increment our seed
            // If our customer object has a gender of female
            if(currentValue.gender === "female"){ // If the gender of currentValue
            // is strictly equal to "female"
                previousValue += 1; // previousValue = previousValue plus 1;
            }
        // When to not increment our seed
            // If our customer object does not have a gender of female
            return previousValue; // Return previousValue;
    }, 0);
};

var oldestCustomer = function(array) {
    // Input: array of customer objects
    // Output: string of oldest customer's name
    
    let filterOutput = " "; // Declaring a new variable called filterOutput and assigning it to an empty string
    let ageOfCustomers = 0; // Declaring a new variable called ageOfCustomers and assigning it to 0
    
    for (var i = 0; i < array.length; i++) { // For loop; starting condition is i is equal 0, stopping condition
    // is i is less than the length of array, and the increment is plus 1
        if (array[i].age >= ageOfCustomers) { // If statement; if the age of the array index is greater than
        // or equal to the ageOfCustomers number, this code will run
            filterOutput = array[i].name; // filterOutput will be reassigned to the name of the oldest array index
            ageOfCustomers = array[i].age; // ageOfCustomers will be reassigned to the age of the oldest array index
        }
    } return filterOutput; // Return filterOutput
};

var youngestCustomer = function(array) {
    // Input: array of customer objects
    // Output: string of youngest customer's name
    
    let filterOutput = " "; // Declaring a new variable called filterOutput and assigning it to an empty string
    let ageOfCustomers = 1000; // Declaring a new variable called ageOfCustomers and assigning it to 1000
    
    for (var i = 0; i < array.length; i++) { // For loop; starting condition is i is equal 0, stopping condition
    // is i is less than the length of array, and the increment is plus 1
        if (array[i].age <= ageOfCustomers) { // If statement; if the age of the array index is less than
        // or equal to the ageOfCustomers number, this code will run
            filterOutput = array[i].name; // filterOutput will be reassigned to the name of the youngest array index
            ageOfCustomers = array[i].age; // ageOfCustomers will be reassigned to the age of the youngest array index
        }
    } return filterOutput; // Return filterOutput
};

var averageBalance = function(array) {
    // Input: array of customer objects
    // Output: number of average balance
    
    let filterOutput = 0; // Declaring a new variable called filterOutput and assigning it to 0
    let averageBalances = 0; // Declaring a new variable called averageBalances and assigning it to 0
    
    for (var i = 0; i < array.length; i++) { // For loop; starting condition is i is equal 0, stopping condition
    // is i is less than the length of array, and the increment is plus 1
        averageBalances += Number(array[i].balance.replace('$', ' ').replace(',', "")); // averageBalances = averageBalances
        // plus the sum of all the balances in the array
    } return averageBalances / array.length; // Return averageBalances divided by the length of the array
};

var firstLetterCount = function(array, letter) {
    // Input: array of customer objects and the letter that is to be compared against all the names
    // Output: number of the names starting with the specified letter
    
    let counted = 0; // Declaring a new variable called counted and assigning it to the value of 0;
    
    for (let i = 0; i < array.length; i++) { // For loop; starting condition is i equals 0, stopping 
    // condition is i is less than the length of array, and the increment is plus 1.
        if (array[i].name[0].toUpperCase() === letter.toUpperCase()) { // If statement; if the uppercased letter of the first 
        // index of the name property of the array object is strictly equal to the uppercased given letter, this code should run
            counted += 1; // counted = counted + 1
        }
    } return counted; // Return counted
};
    

var friendFirstLetterCount = function(array, customer, letter) {
    // Input: array of customer objects, the customer name, and the letter that is to be compared to the names of the friends of 
    // the given customer
    // Output: number of the names of the friends of the given customer that start with the specified letter
    
    let count = 0; // Declaring a new variable called count and assigning it to 0
    let customerObject; // Declaring a new variable called customerObject
    
    for(let i = 0; i < array.length; i++){ // For loop; starting condition is i equals 0,
    // stopping condition is i is less than the length of the array, and the increment
    // is plus 1
        if(array[i].name === customer){ // If the index of array has a property called name
        // that matches customer, run this code
            customerObject = array[i]; // customerObject should equal the index of array
        }
    }

    let friendsList = customerObject.friends;  // an array of friend objects for our specific customer
    
    for(let i = 0; i < friendsList.length; i++){ // For loop; starting condition is i equals 0,
    // stopping condition is i is less than the length of the array, and the increment
    // is plus 1
        if(friendsList[i].name[0].toUpperCase() === letter.toUpperCase()){ // If the index of friends list has
        // a capitalized first letter that is strictly equal to the capitalized given letter, this code should run
            count += 1; // count = count + 1
        }
    }
    return count; // Return count
};

var friendsCount = function(array, name) {
    // Input: array of customer objects and the name that is to be compared to the array
    // Output: array of the customer names that have the given name in their friends list
    
    let friendsCount = []; // Declaring a new variable called friendsCount and assigning it to an empty array
    
    for (let i = 0; i < array.length; i++){ // For loop; starting condition is i equals 0,
    // stopping condition is i is less than the length of the array, and the increment
    // is plus 1
        if (_.some(array[i].friends, function(element, index) { return element['name'] === name; })) {
    // If some returns a boolean corresponding to if a single element of the index of array's friends property,
    // and itself has an element with a "name" value that strictly equals name, run this code
            friendsCount.push(array[i].name); // Push the name property of the index of array into the friendsCount array
        }
    } return friendsCount; // Return friendsCount;
};

var topThreeTags = function(array) {
    // Input: array of customer objects
    // Output: array of the three most common tags from all the customer associated tags
    
    var allTags = [];   // initialize a list of all tags, including repeats
    var countTags = []; // initialize an array which will hold objects of form {name:<name>, count: <count>}
    
    for (let i = 0; i<array.length; i++){ //fill allTags with tags from every customer in list
        allTags = allTags.concat(array[i].tags);
    }
    //allTags is an array of every tag that appears including repeats
    
   for (let i = 0; i < allTags.length; i++){            
      //loop through the allTags array to ***REDUCE*** it to a series of objects with the tag name and count.
      //this array of objects is called countTags
       if (i === _.indexOf(allTags,allTags[i])){ //if this element is the first instance of the tag
           countTags.push({name: allTags[i], count:1}); //create a new object for the tag and inititalize its count to 1
       } else {  //if this is a repeat tag,
          //add 1 to the count property of the object already in countTags
          //this is a filter function which finds the tags' object in countTags so we can increment its' count  
           _.filter(countTags, function(element, index, array){ 
              return element.name === allTags[i];
           }) [0].count++;       //increment this objects' count
       }
   }
        //now all thats left to do is sort the countTags array by count property
        countTags = countTags.sort(function(a,b){ return (a.count > b.count ? -1 : 1);});
       //countTags is now sorted based on count value
        return [countTags[0].name, countTags[1].name, countTags[2].name,];   //return the name of the first three tags
};

var genderCount = function(array) {
    
    //initialize result object to values of zero
    var result = {male: 0, female: 0, 'non-binary': 0}; 
    //use reduce to cycle through the customer list array, returning a 3 valued
    //array with counts of male, female, nonbinary in that order
    
    var resultArray =  _.reduce(array, function(previousValue, element, index){
        // the 'combination function for reduce adds one element to each array slot
        // we use an array to avoid having to search an object when incrementing
        if (element.gender === 'male'){ // If the gender property of the element is strictly equal to male, run this code
             previousValue[0]++; // Plus 1 to the first index of previousValue
        } else if (element.gender === 'female'){ // If the gender property of the element is strictly equal to female, 
        // run this code
            previousValue[1]++; // Plus 1 to the second index of previousValue
        } else if (element.gender === "non-binary"){ // If the gender property of the element is strictly equal to non-binary, 
        // run this code
            previousValue[2]++; // Plus 1 to the third index of previousValue
        }
        return previousValue; // Return previousValue
    }, [0,0,0]);
    
   result.male = resultArray[0];
   result.female = resultArray[1];          //assign the values from our resultArray
   result['non-binary'] = resultArray[2];   //to the result object
   return result;   //return that object

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
