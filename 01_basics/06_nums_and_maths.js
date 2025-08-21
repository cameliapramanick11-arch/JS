const score = 400
console.log(score); // output: 400

const balance = new Number(100)
console.log(balance); // output: [Number: 100]

console.log(balance.toString()); // output: 100; Converts it into a string
console.log(balance.toString().length); // output: 3; '100' string's length = 3
console.log(balance.toFixed(2)); // output: 100.00; Approximates the value upto 2 decimal places.

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // output: 23.9; Round off upto three numbers including numbers before points.

const otherNumber2 = 123.8966

console.log(otherNumber2.toPrecision(3)); // output: 124

const otherNumber3 = 1123.8966

console.log(otherNumber3.toPrecision(3)); // output: 1.12e+3

const otherNumber4 = 123.8966

console.log(otherNumber4.toPrecision(4)); // output: 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // output: 1,000,000; USA Standards.

const hundreds2 = 1000000
console.log(hundreds2.toLocaleString('en-IN')); // output: 10,00,000; Indian Standards.


// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // output: Object [Math] {}; To see the object values go to google -> right click -> inspect -> console and run this.

console.log(Math.abs(-4)); // output: 4; Absolute Value of -4 is 4; Negative values become positive values.

console.log(Math.round(4.3)); // output: 4; Round off value.
console.log(Math.ceil(4.2)); // output: 5; If it is even .1 more than 4 then it will take the ceiling value 5
console.log(Math.floor(4.9)); // output: 5; If it is even .9 more than 4 then it will take the floor value 4
console.log(Math.max(4, 3, 6, 8)); // output: 8; Maximum value of an array.
console.log(Math.min(4, 3, 6, 8)); // output: 3; Minimum value of an array.
console.log(Math.random()); // output: 0.33569813447594155; Prints any random value between 0-1
console.log(Math.random()*10); // output: 4.777419200793521
console.log((Math.random()*10)+1); // output: 5.521645396213789; Add 1 to avoid 0.5 or something values like that.
console.log(Math.floor(Math.random()*10)+1); // output: 9


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // output: 11/17/19.... // Summarization...
