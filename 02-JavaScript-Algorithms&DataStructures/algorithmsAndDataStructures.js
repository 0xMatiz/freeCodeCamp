/* Basic JavaScript
JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.
In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more. */

//Manipulate Arrays With unshift Method - 42% Complete

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);



/* Shopping List - 42% Complete

Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
["Chocolate Bar", 15]

There should be at least 5 sub-arrays in the list. */
const myList = [];
myList.unshift(["Chocolate Bar", 15],["Cereal Bar", 10],["Yogurt Bar", 20],["White Chocolate Bar", 5],["Water Bottle", 40]);



/*Write Reusable JavaScript with Functions - 43% Complete

In JavaScript, we can divide up our code into reusable parts called functions.
Here's an example of a function:

function functionName() {
  console.log("Hello World");
}

1.You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.

2. Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function. */

function reusableFunction() {
    console.log("Hi World");
  }

  reusableFunction();



/* Passing Values to Functions with Arguments - 44% Complete

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
Here is a function with two parameters, param1 and param2:
function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments. */
function functionWithArgs(argOne, argTwo) {
    console.log(argOne + argTwo);
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);



/* Return a Value from a Function with Return - 45% Complete

We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

1. Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/
function timesFive (arg) {
    return arg * 5;
  }
  
  timesFive(5);
  timesFive(2);
  timesFive(0);



/* Global Scope and Functions - 46% Complete

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

1. Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

2. Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords. */
// Declare the myGlobal variable below this line
let myGlobal = 10;
oopsGlobal;

function fun1() {
  oopsGlobal = 5;// Assign 5 to oopsGlobal here
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



/* Local Scope and Functions - 47% Complete

Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail. */
function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  
  myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);



/* Global vs. Local Scope in Functions - 48% Complete
  It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
  
  In this example:
  
  const someVar = "Hat";
  
  function myFun() {
    const someVar = "Head";
    return someVar;
  }
  The function myFun will return the string Head because the local version of the variable is present.
  
  Add a local variable to myOutfit function to override the value of outerWear with the string sweater. */
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();



/* Understanding Undefined Value returned from a Function - 49% Complete

A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined. */
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();



/* Assignment with a Returned Value - 50% Complete
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function sum which adds two numbers together.

ourSum = sum(5, 12);
Calling the sum function with the arguments of 5 and 12 produces a return value of 17. This return value is assigned to the ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.

 */

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);



/* Stand in Line - 50% Complete
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */
function nextInLine(arr, item) {
    // Only change code below this line
    let queue = arr.push(item);
    let removeItem = arr.shift()
    return removeItem;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



  /* Understanding Boolean Values - 51% Complete
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false. */
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }



/* Use Conditional Logic with If Statements - 52% Complete
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise. */
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue == true) {
      return 'Yes, that was true';
    } else {
      return 'No, that was false';
    }
  
  
    // Only change code above this line
  
  }



/* Comparison with the Equality Operator - 53% Complete
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12. */
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);



/* Comparison with the Strict Equality Operator - 54% Complete
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7. */
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);



  /* Practice comparing different values - 55% Complete
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.

The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal. */

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");



/*  */