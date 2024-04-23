// First JavaScript Code //




// now will be utilizing camel notation and multiple variables/declarations

//let firstName = 'michele'; //string literal
//let lastName = 'ferrer';
//console.log(firstName);
//console.log(lastName);

// interest rates //

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


//let age = 30; // number literal
let isApproved = true; //boolean literal can be true or false
let firstName = undefined;
let lastName = null; //used to clear the value of a variable
let selectedColor = null; // when the user selectes the color then youd change it to 'color'

// typeof selected color = "object"

// Working with objects
//let name = 'Michele';
let age = 30;
//object//
let person = {
// add key properties
name: 'michele',
age: 30
};

//to change a property of the object one way that is used is DOT Notation
person.name = 'john';

// Bracket Notation- uses square brackets and passes a string that declares target properties 

let selection = 'name';
let mary ='michele'
person[selection]= mary; 
;

console.log(person.name); //changes just the name
console.log(person); //will show the object in console.log

let selectedColors = ['red', 'blue']; //array literal-indicates empty array
//console.log(selectedColors); will show all elements in the array.
/* to access the index of an array you would put square
bracket in the console.log variable and put the index in the bracket */
selectedColors[2] = 'green';
selectedColors[3] = 1;// arrays are not limited to only one kind of element/data types
console.log(selectedColors[0]); //only shows first array which is 'red'

// Performing a task.
function greet(name, lastName) { /*body of the function where we add statements to define the logic of our application.
The "name" is a parameter/input thats only accecible in side of the function. */

console.log('hello ' + name + ' ' + lastName);
}
greet('john', 'smith'); //john is an argument to the great function and name is a parameter to the great function.
greet('mary', 'contreras');

// Functions that calculate a value:
function square(number){
    return number * number;
}

// let number = square(2); dont have to declare like this
console.log(square(2)); // there are two function calls here.expressions are a call to a function