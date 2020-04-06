// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
     var contacts = [];  // Declaring a new variable called contacts and assigning it with the value of an array.
         return    { id: id, nameFirst: nameFirst, nameLast: nameLast}; // Should return an object that manages contacts
} 


function makeContactList(id, nameFirst, nameLast) { // Declaring a function called makeContactList that will encapsulate all of
// the following API
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // Declaring a new variable called contacts and assigning it with the value of an array.
         return { id: id, nameFirst: nameFirst, nameLast: nameLast, // Should return an object that manages contacts



    // we implemented the length api for you //
    length: function() { // Declaring a function called length
        return contacts.length; // Should return the length of the contacts array

    },
    addContact: function(contact){ // Declaring a function called addContact
      return contacts.push(contact); // Should push the contacts into the contacts array
    },
    
    findContact: function(fullName) { // Declaring a function called findContact and giving it a value of fullName
        for (var i = 0; i <= contacts.length-1; i++) { // Declaring a for function and giving it a starting value of 0,
        // an ending condition of i <= contacts.length-1, and an increment if i++ (plus 1)
            if (fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { // An if statement; if fullName
            // equals the first and last name of a contact
            return contacts[i]; // Should return the contact
            } else { // IF NOT
                return undefined; // Return undefined
            } 
        }
    }, 
    
    removeContact: function(contact){ // Declaring a function called removeContact to remove a contact
        for (var i = 0; i <= contacts.length-1; i++){ // Declaring a for function and giving it a starting value of 0,
        // an ending condition of i <= contacts.length-1, and an increment if i++ (plus 1)
           if (contacts[i] === contact) { // If the contacts[i] equals a contact
             return contacts.splice(i, 1); // Return contacts spliced with an index of i and the howmany value set to 1.
           }
        }
    },
    
    printAllContactNames: function(){ // printAllContactNames API going into a function()
    var allContacts = ""; // Declaring a variable called allContacts to hold all the contacts
    
    for (var i = 0; i < contacts.length; i++) { // Loop starting at 0, ending at contacts.length-1, and going up 
    // at an increment of 1.
            if (i < contacts.length-1) { // If i is LESS THAN the length of contacts - 1
             allContacts += contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] + "\n"; // This code should run
                 }  else { // IF NOT 
             allContacts += contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]; // This code should run
                 }
    }
        return allContacts; // Return the allContacts string
        
        
            
        }
        };
    }
 




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
