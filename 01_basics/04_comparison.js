//console.log(2 > 1); // output: true
//console.log(2 >= 1); // output: true
//console.log(2 < 1); // output: false
//console.log(2 == 1); // output: false
//console.log(2 != 1); // output: true


//Don't do these types of conversions:-
console.log("2" > 1); // output: true
console.log("02" > 1); // output: true

console.log(null > 0); // output: false
console.log(null == 0); // output: false
console.log(null >= 0); // output: true

console.log(undefined == 0); // output: false
console.log(undefined > 0); // output: false
console.log(undefined < 0); // output: false

// === "Strict Check: Not only values but also checks data types."

console.log("2" === 2); // Output: false; Because different data types ("2" is string data type and 2 is number so false.).
