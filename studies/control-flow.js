/* 
 * CONTROL-FLOW:
 * 0. To control the flow of code, especially the order in which conditional statements are compared,
 * we can use if statements, else-if statements, and if-else-if chains. The conditional statements
 * within these chains can be any BOOLEAN value (true or false), or any boolean EXPRESSION. The code
 * wrapped within the curly braces {} runs ONLY if a conditional statement is true. Only ONE conditional
 * statement can execute per conditional chain, and ONLY if it is TRUE. NOTE: the rest of the code does 
 * NOT run if a conditional statement turns out to be true, and the code reads from top to bottom. NOTE:
 * You would use an if-else-if chain over a switch statement when you want to test for the truthiness of
 * an expression, if you only have a single test, or you need to evaluate different expressions for each
 * branch of the chain.
 *
 * 1.To create an if statement, we use the keyword, if, followed by a pair of parenthesis and in those 
 * parenthesis goes the conditional statement. To the right of the parenthesis goes a curly brace {}, 
 * and within the curly braces goes the code that will run should the conditional statement be true. 
 * There can be ONE if statement at the beginning of an if-else-if chain.
 *
 * 2. To create an else-if statement, we use the keyword, else-if, just behind the closing curly brace of
 * the if statement, and the else-if keyword is followed by a pair of parenthesis. In those parenthesis 
 * goes the conditional statement, just like the if statement. Also just like the if statement, the else-if
 * statement runs the code in its specific curly braces ONLY if the conditional statement inside the 
 * parenthesis is true. NOTE: You can have as many else-if statements as you want!
 * 
 * 3. To create an else statement, we use the keyword, else, behind the final curly brace of the last else-if 
 * statement. The only thing that follows the else statement is another pair of curly braces {}. NOTE: There 
 * is NO conditional statement to check for, so the else statement is the default! That means that the code 
 * within the else statement's curly braces will ONLY run if all other conditional statements are false. There
 * can be ONE else statement at the end of an if-else-if chain.
 *
 * 4. To create a switch statement, we use the keyword, switch, followed by a pair of parenthesis. Inside the
 * parenthesis, we put the EXPRESSION. Next to the parenthesis, we put curly braces {}. Inside the curly braces
 * goes the cases and their clauses, followed by a colon, and then the console.log() statements. Each case and 
 * console.log() pairing are separated by a break statement. The final element within the curly braces is the 
 * default statement and the final console.log() statement. Finally, we use switch statements to evaluate an 
 * expression's value against a case CLAUSE. The switch statement will then execute statements based on whether
 * the value of the variable matches a specific case (true!) or not (false). NOTE: You would use a switch
 * statement over an if-else-if chain to make the code easier to read, when you are comparing multiple possible 
 * conditions of an expression (and the expression itself is non-trivial), when you have multiple values that 
 * require the same code, or when you have some values that require all of another value's execution.
 */
 
// 1. if statement //

if (4 < 5) { // Declaring an if statement and filling it with an example conditional statement, 4 < 5.
    console.log("Happy Day!"); // prints "Happy Day!" if the conditional statement is true.
}

// 2. else-if statement //

if (4 > 5) { // Declaring an if statement and filling it with a FALSE example conditional statement, 4 > 5. NOTE: this
// conditional statement being FALSE means the console.log() CANNOT run. The statement goes on to the next one.
    console.log("Whoops!"); // This will not print!
} else if (4 < 5) { // Declaring an else if statement and filling it with a TRUE example conditional statement, 4 < 5. NOTE:
// This coditional statement is TRUE so the console.log() will print!
    console.log("Happy Day!"); // Prints "Happy Day!" to the console.
}

// 3. else statement //

if (4 > 5) { // Delcaring an if statement and filling it with a FALSE example conditional statement, 4 > 5. NOTE: this
// conditional statement being FALSE means the console.log() CANNOT run. The statement goes on to the next one.
    console.log("Whoops!"); // This does not print!
} else if (2 > 7) { // Declaring a FALSE else if statement and filling it with a FALSE example conditional statement,
// 2 > 7. NOTE: This conditional statement is FALSE so the console.log() will NOT print!
    console.log("Double whoops!"); // This will NOT print!
} else { // Declaring an else statement, the default, and giving it NO conditional statements to check for. NOTE: 
// this is the DEFAULT and ONLY runs if ALL other conditional statements in the chain are FALSE.
    console.log("Happy Day!"); // Prints "Happy Day!" in the console.
}

// 4. switch statement //
var expression = '1'; // This is the variable we are trying to get the switch statement to evaluate.

switch (expression) { // Declaring the switch statement and the EXPRESSION is in parenthesis!
    case '3': // The first case we are comparing the variable to and its clause
        console.log('How did you get this to print?'); // First console.log() statement
        break; // First break statement
    case '2':  // The second case and second clause
        console.log('This should not print!'); // Second console.log() statement
        break; // Second break statement
    case '1': // The third case and third clause. NOTE: Since this case and its CLAUSE match the
    // variable var expression - '1', the console.log('This should print!') will PRINT!
        console.log('This should print!'); // Third console.log() statement, will print 'This should 
    // print!' to the console.
        break; // Third break statement
    default: // The default statement! NOTE: the DEFAULT statement ONLY runs if NO OTHER cases match
    // the value of the variable var expression!
        console.log('Sorry, we do not have that number here.'); // The final console.log() statement. NOTE: 
// There is NO break statement here after the default statement!
}