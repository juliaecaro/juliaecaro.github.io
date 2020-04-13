////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = start < end ? 1 : -1) { // Declaring a function called range and giving it the
// arguments of start, end, and the optional step, where if start is less than end, the step goes up by 1.
  var myArray = []; // Declaring a new array called myArray and assigning it to an empty array.
  
  if (start === end) { // If statement; if start is strictly equal to end, this code should run
    return myArray; // Return the empty array
  } else if (step > 0) { // If the value of step is greater than 0, this code should run
      for (let i = start; i <= end; i += step) { // For loop; the starting condition is i is equal to start, the 
    // stopping condition is i is less than or equal to end, and the increment is i = i + step.
        myArray.push(i); // Should push i into the myArray array
      } 
    } else { // Else; default statement, has no conditional
        for (let i = start; i >= end; i += step) { // For loop; the starting condition is i is equal to start, the 
    // stopping condition is i is greater than or equal to end, and the increment is i = i + step.
          myArray.push(i); // Should push i into the myArray array
    }
  }
  return myArray; // Should return the myArray array to the console.
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) { // Declaring a function called sum and giving it the parameter of an array
  var total = 0; // Declaring a new variable called total and making it equal to 0. 
  
  for (let value of array) { // A for-of loop; let value of array
    total += value; // total = total + value
  }
  return total; // Should return the total variable to the console.
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) { // Declaring a function called reverseArray and giving it the parameter of an array
  var myReversedArray = []; // Declaring a new variable called myReversedArray and making it equal to an empty array.
  
  for (let i = array.length - 1; i >= 0; i--) { // For loop; starting condition is i = array.length - 1, stopping 
  // condition is i is greater than or equal to 0, and the increment is minus 1.
    myReversedArray.push(array[i]); // Should push array[i] into myReversedArray
  }
  return myReversedArray; // Should return myReversedArray array.
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // Declaring a function called reverseArrayInPlace and giving it the parameter
// of an array
  
  for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) { // A for loop; starting condition is i = 0, stopping condition
  // is when i is equal to the largest interger less than or equal to the length of array divided by 2, and the 
  // increment is plus 1.
    let myPlaceHolder = array[i]; // Declaring a new let variable called myPlaceHolder and assigning it to the value of 
    // array[i]
      array[i] = array[array.length - 1 - i]; // Array[i] is assigned to array[array.length - 1 - i]
      array[array.length - 1 - i] = myPlaceHolder; // Array[array.length - 1 - i] is assigned to myPlaceHolder
  }
  return array; // Should return array to the console
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { // Declaring a function called arrayToList and giving it the parameter of array
  var myList = null; // Declaring a new variable called myList and assigning it to the value of null.
  
  for (var i = array.length - 1; i >= 0; i--) { // Declaring a for loop; starting condition is i equals the length of
  // array minus 1, the ending condition is i being greater than or equal to 0, and the increment is minus 1.
    myList = { value: array[i], rest: myList }; // Reassigning the  myList variable to equal the value of array[i]
    // and rest: myList
  }
  return myList; // Should return myList to the console.
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) { // Declaring a function called listToArray and giving it the parameter of list
  var myNewArray = []; // Declaring a new array named myNewArray and assigning it to an empty array
  
  for (let i = list; i; i = i.rest) { // Declaring a for loop; starting condition is i = list, 
  // stopping condition is i; increment is i = i.rest
    myNewArray.push(i.value); // Should push the value of i into the myNewArray array
  }
  return myNewArray; // Should print the myNewArray array
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) { // Declaring a function called prepend and giving it the parameters of value and list
  return { value, rest: list }; // Should return the property of value and the property of rest is assigned to list
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) { // Declaring a function called nth and giving it the parameters of list and number
  if (!list) { // If list is not a list, perform this code
    return undefined; // Return undefined;
  } else if (number === 0) { // Else if number is strictly equal to 0, perform this code
     return list.value; // Return the value of list
    } else { // Else; default statement, has no conditional
        return nth(list.rest, number - 1); // Return nth with the list.rest, and minus 1 from the number element
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, z) { // Declaring a function called deepEqual and giving it the parameters of a and z
  if (a === z && a !== null && typeof a !== "object") { // if a is strictly equal to z and a does not equal null, this code will run
    return true; // Return true
} 

  if (typeof a != "object" || typeof z != "object") { // Else if the type of a or z is not an object, 
// this code will run
      return false; // Return false
}

  var firstKey = Object.keys(a); // Declaring a variable called firstKey and assigning it the value of Object.keys(a);
  var secondKey = Object.keys(z); // Declaring a variable called secondKey and assigning it the value of Object.keys(z);

  for (let key of firstKey) { // Declaring a for-in loop; let key of firstKey 
    if (!secondKey.includes(key) || !deepEqual(a[key], z[key])) { // If the second key does NOT include the
    // key of firstKey OR the deepEqual function a does not equal z
      return false; // Return false
    }
  }
  return true; // Return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
