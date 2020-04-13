//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { // Declaring a function called objectValues and giving it a parameter
// of object
    const resultArray = []; // Declaring a const array named resultArray and assigning it with a literal array
    
    for (let key in object) { // Declaring a for-in loop; let key in object
        resultArray.push(object[key]); // Should push the object key into the resultArray
    } return resultArray; // Should return resultArray to the console.
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { // Declaring a function called keysToString and giving it a parameter of object
    var toStrings = []; // Declaring a new variable called toStrings and assigning it with an empty array.
    
    for (let key in object) { // Declaring a for-in loop, let key in object
        toStrings.push(key); // Push the key of the object to the toStrings array
    } return toStrings.join(' '); // Return the joining of the toStrings array as a string, separated with a space
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { // Declaring a function called valuesToString and giving it the parameter of object
    var valuesToStrings = []; // Declaring a new variable called valuesToStrings and assigning it with an empty array
    
    for (let key in object) { // Declaring a for-in loop, let key in object
        if (typeof object[key] === 'string') { // If the type of the object key is equal to a string, we run this code
        valuesToStrings.push(object[key]); // We push the object key into the valuesToStrings array
    }
    } return valuesToStrings.join(' '); // Should return the valuesToStrings array joined into a string
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { // Declaring a function called arrayOrObject and giving it a parameter of 
// collection
    if (Array.isArray(collection) === true) { // If Array.isArray(collection) equals true
        return "array"; // It should return array
    } else { // Else statement; default, needs no conditional
        return "object"; // It should return object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { // Declaring a function called capitalizeWord and giving it a parameter of 
// string
    return string.charAt(0).toUpperCase() + string.slice(1); // Should return the first letter of the word
    // capitalized plus the rest of the string sliced at the second (1) index.
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var myArray = string.split(" "); // Declaring a new array called myArray, and assigning it the value of 
    // string.split(" ");
    let newArr = []; // Declaring a new array called newArr and assigning it the value of an empty array
    
    for (var i = 0; i <= myArray.length - 1; i++) { // A for loop; the starting condition is 0, the stopping
    // condition is i being less than or equal to the length of myArray - 1, and the incremement is plus 1.
        newArr.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1)); // Taking the first character of 
        // the string at the various indexes of myArray and capitalizing it, then adding it to the rest of the 
        // specific index's string, AND pushing the result into the newArr array.
    } return newArr.join(' '); // Should return the array at newArr joined into a string separated by spaces.
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { // Declaring a function called welcomeMessage and giving it the parameter of an object
    
    return 'Welcome' + " " + object.name.charAt(0).toUpperCase().concat(object.name.slice(1)) + '!' // Should return 'Welcome <Name>!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    return object.name.charAt(0).toUpperCase().concat(object.name.slice(1)) + " " + 'is a' + " " + object.species.charAt(0).toUpperCase().concat(object.species.slice(1));
    // Should return the capitalized first letter of the object name concatenated with the rest of the string, a space and then 
    // 'is a' and then another space, and then the capitalized first letter of the object species concatenated with the rest of 
    // the string. 
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) { // Declaring a new function called maybeNoises and giving it a parameter of object
    if (object.hasOwnProperty('noises') === true && object['noises'].length > 0) { // If statement; if object has
    // a property of noises AND that noises property has a length greater than 0, do this
        return object.noises.join(" "); // Return the object noises key joined together into a string with a
        // space separating them
    } else { // Else statement; default, no conditional required
        return 'there are no noises'; // Return 'there are no noises'.
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { // Declaring a new function called hasWord and giving it the parameters
// of string and word
    if (string.includes(word)) { // If string includes the word, do this
        return true; // Return true
    } else { // Else statement; default, has no conditionals
        return false; // Return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) { // Declaring a new function called addFriend and 
// giving it the parameters of name and object
   object['friends'].push(name); // Should push the name into the object's friends array
   return object; // Should return object to the console.
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { // Declaring a new function called isFriend and giving it the
// parameters of name and object
    if (object.hasOwnProperty('friends') && object['friends'].includes(name) === true) { // If the object
    // has a property called friends AND that object property called friends includes name, this code should run
       return true; // Return true
    } else { // Else; default statement, needs no condition to check for
        return false; // Return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { // Declaring a new function called nonFriends and giving it the 
// parameters of name and array
    
    var nameList = []; // Declaring a new variable called nameList and assigning it to an empty array.
    var currentList = null; // Declaring a new variable called currentList and assigning it to null.
    var finalResult = []; // Declaring a new variable called finalResult and assigning it to an empty array.
    
    for (var i = 0; i <= array.length - 1; i++){ // For loop; starting condition is i equals 0, stopping 
    // condition is i is less than or equal to the array length minus 1, and the increment is plus 1.
        if(name === array[i].name){ // If name is strictly equal to the name of array[i], then do this
            currentList = array[i]; // currentList equals array[i].
        } else { // Else statement; default, needs no conditional to check for
            nameList.push(array[i].name); // Push the array[i] name into nameList
        }
    }

    if (currentList === null){ // If currentList is strictly equal to null, then do this
        return nameList; // Return nameList
    }

    for (var i = 0; i <= nameList.length - 1; i++){ // For loop; starting condition is i equals 0, the
    // stopping condition is i is less than or equal to the length of nameList minus 1, and the 
    // increment is plus 1.
        if(currentList.friends.indexOf(nameList[i]) == -1){ // If the index of nameList[i] in friends in 
        // currentList is equal to negative 1, this should run
            finalResult.push(nameList[i]); // Push the nameList[i] into finalResult
        }
    }
    return finalResult; // Should return finalResult
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { // Declaring a new function called updateObject and giving
// it the parameters of object, key, and value
    object[key] = value; // Should reassign the key of object to the value of value.
    return object; // Should return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { // Declaring a new function called removeProperties
// and giving it the parameters of object and array

    for (var i = 0; i <= array.length - 1; i++) // For loop; the starting condition is i = 0, the stopping
    // condition is i is less than or equal to the array's length - 1, and the increment is plus 1
        if (object.hasOwnProperty(array[i])) { // If the object has a property of the index of i in array, this
        // code will run
            delete object[array[i]]; // Delete object's property index of i of array
    } return object; // Return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { // // Declaring a new function called dedup and giving it the parameter of array
    var myNewestArray = []; // Declaring a new variable called myNewestArray and assigning it to an empty array
    
    for (var i = 0; i <= array.length - 1; i++) { // A for loop; starting condition is i equals 0, the stopping
    // condition is i is less than or equal to the length of array, minus 1, and the increment is plus 1.
        if (myNewestArray.includes(array[i]) === false) { // If myNewestArray does NOT include the index of i of
        // array, run this code
            myNewestArray.push(array[i]); // Push the index of i of array into myNewestArray
        }
    } return myNewestArray; // Return myNewestArray.
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}