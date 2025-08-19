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
