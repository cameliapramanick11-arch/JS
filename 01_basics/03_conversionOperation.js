let score = "33abc" 
let score2 = null 
let score3 = undefined 
let score4 = true
let score5 = false
let score6 = "Camelia"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)
let valueInNumber6 = Number(score6)


console.log(typeof valueInNumber);
console.log(valueInNumber); // output of score let "33abc": NaN => Not a Number

console.log(valueInNumber2); // output of let score2 null: 0

console.log(valueInNumber3); // output of score3 undefined: NaN => Not a Number

console.log(valueInNumber4); // output of let score4 true: 1

console.log(valueInNumber5); // output of let score5 false: 0

console.log(valueInNumber6); // output of let score6 "Camelia": NaN 



// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // output: true

let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); // output: false

let isLoggedIn3 = "Camelia"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3); // output: true

// 1 => true; 0 => false
// "" => false
// "Camelia" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************** Operations ********************

let value = 3
let negValue = -value
console.log(negValue); // output: -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // output 2^2: 4
console.log(2**3); // output 2^3: 8
console.log(2/3);
console.log(2%3); // output of remainder or modulus: 2

let str1 = "hello"
let str2 = " Camelia"

let str3 = str1 + str2
console.log(str3); // output: hello Camelia

console.log("1"+ 2); // output: 12
console.log(1 + "2"); // output: 12
console.log("1" + "2"); //output: 12
console.log("1" + 2 + 2); // output: 122
console.log(1 + 2 + "2"); // output: 32; Don't write this type of code
console.log(3 + 4 * 5 % 3); // output: 5; Don't write this type of code

console.log(true); // output: true
console.log(+true); // output: 1
// console.log(true+); // Error!!
console.log(+""); // output: 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++
console.log(gameCounter); // output: 101
let gameCounter2 = 100
++gameCounter2
console.log(gameCounter2); // output: 101

//Link to study:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
