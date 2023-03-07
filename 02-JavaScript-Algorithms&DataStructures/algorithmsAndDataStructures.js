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
