// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/


// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};


// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(n) {
  return (n+1);
}

// - Write a Function Expression

let addOneN = function addOne(n) {
  return(n+1);

}

// - Write an Arrow Function without curly brackets(if possible)


let addOneN = (n) => n + 1;


// - Write an Arrow Function with curly brackets

let addOneN =  (n) => {
  return(n+1);
}


// - Execute the function
addOneN()

// - Execute the function and store the return value in a variable.
let addOneN = (n) => `return ${n+1}`;



// - What is the typeof returnValue

number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function SubtractOne(n) {
  return (n-1);
}


// - Write a Function Expression

let subtractOne = function (n) {
  return (n-1);
}


// - Write an Arrow Function without curly brackets(if possible)

let subtractOne = (n) => (n-1);

// - Write an Arrow Function with curly brackets

let subtractOne = (n) => {
  return n-1;
}


// - Execute the function
subtractOne(5)

// - Execute the function and store the return value in a variable.

let subtract = subtractOne(5)

// - What is the typeof returnValue

number


/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration


function sum(n1, n2) {
  return(n1 + n2)
}

// - Write a Function Expression

let sumoftwo = function sum(n1, n2) {
  return(n1 + n2)
}

// - Write an Arrow Function without curly brackets(if possible)

let sumoftwo = (n1, n2) => (n1 + n2);

// - Write an Arrow Function with curly brackets

let sumoftwo = (n1, n2) => { 
  return n1 + n2; 
}


// - Execute the function

sumoftwo()

// - Execute the function and store the return value in a variable

let sumOfTwo = sumoftwo(10,9)

// - What is the typeof returnValue

number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(n){
  return n * n;
}

// - Write a Function Expression

let squareN = function square(n){
  return n * n;
}

// - Write an Arrow Function without curly brackets(if possible)

let squareN = (n) => n * n;

// - Write an Arrow Function with curly brackets

let squareN = (n) => {
  return n * n;
}

// - Execute the function

squareN ()


// - Execute the function and store the return value in a variable

let squared = squareN (5)

// - What is the typeof returnValue

number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x , y){
  return Boolean(x > y);
}


// - Write a Function Expression

let greaterFirst = function isGreater(x , y){
  return Boolean(x > y);
}

// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x , y) => Boolean(x > y);

// - Write an Arrow Function with curly brackets

let isGreater = (x , y) => {
  return Boolean(x > y);
}


// - Execute the function

isGreater ()

// - Execute the function and store the return value in a variable

let greaterThan = isGreater(10,6);

// - What is the typeof returnValue

true

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function(n) {
  if (n % 2 == 0) {
    return (`Number is even`)
  } else {
    return (`Number is Odd`)
  }
}


// - Write an anonymous Function Expression

let oddorEven = function(n) {
  if (n % 2 == 0) {
    return (`Number is even`)
  } else {
    return (`Number is Odd`)
  }
}

// - Write an named Function Expression

let oddOrEven = function evenOrOdd(n) {
  if (n % 2 == 0) {
    return (`Number is even`)
  } else {
    return (`Number is Odd`)
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (n) => (n % 2 == 0) ? `Number is even`: `Number is Odd`;

// - Write an Arrow Function with curly brackets

let oddOrEven = (n) => {
    return (n % 2 == 0) ? `Number is even`: `Number is Odd`
}

// - Execute the function

oddOrEven(10)

// - Execute the function and store the return value in a variable

let evenOrOdd = oddOrEven(10)

// - What is the typeof returnValue

string
