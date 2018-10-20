JavaScript
========================================================

NodeJS
========================================================

(NodeJS)[https://nodejs.org/en/]

npm

npm init

npm install -g eslint

Variables
========================================================

**let** can change
**const** unchangeble, use upercase letters

Naming
========================================================

camelCase for variables
snake_case for constants
PascalCase for classes

Values
========================================================

- string, e.g. "HackYourFuture"
- number, e.g. 5, or 10.6
- boolean, e.g. true or false
- array*, e.g. [1, 2, 3] or ['what', 'is', 'your', 'name']
- object, e.g. {name: 'John', age: 24}, or the special object null
- function, e.g. function () { return 4; }
- undefined

typeof

Operators
========================================================

- Equality ==
- Inequality !=
- Identity / strict equality === (preferred)
- Non-identity / strict inequality !== (preferred)
- Greater than operator >
- Greater than or equal operator >=
- Less than operator <
- Less than or equal operator <=
- AND &&
- OR ||
- NOT !



`
1 == 1 // -> true
7 == '7' // -> true
1 != 2  // -> true
5 === 5  // -> true
9 === '9'  // -> false
3 !== 3 // -> false
3 !== '3' // -> true
`

Arithmetic
- Addition +
- Subtraction -
- Multiplication *
- Division /
- Remainder (sometimes called modulo) %

Arrays
========================================================

Fast for ordered items

Declaration
========================================================

let arr = new Array();
let arr = [];
let fruits = ["Apple", "Orange", "Plum"];

Manipulation
========================================================

- push(...items) adds items to the end.
- pop() removes the element from the end and returns it.
- shift() removes the element from the beginning and returns it.
- unshift(...items) adds items to the beginning.

For Loops
========================================================

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

While Loops
========================================================

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

Functions
========================================================

function showMessage() {
  console.log( 'Hello everyone!' );
}

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

showMessage(); // Hello, I'm JavaScript!

console.log( message ); // <-- Error! The variable is local to the function

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John

## Default Values

function showMessage(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

## Return Values

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

Objects
========================================================

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

## Computed properties

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

## Property value shorthand

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
    // ...
  };
}

## in

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

## in loop

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

**When an object variable is copied – the reference is copied, the object is not duplicated.**

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

Conditional Operators
========================================================

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}