// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.0

const isLoggedIn = false 
const outsideTemp = null
let userEmail; // You can write it like this also let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// const bigNumber2 = 3334456543576654356754n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Camelia",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); // output: bigint
console.log(typeof outsideTemp); // output: object
console.log(typeof scoreValue); // output: number 
console.log(typeof myFunction); // output: function; But it is actually called 'object function'
console.log(typeof heroes); // output: object; But it is actually called 'function object'
console.log(typeof bigNumber2); // output: undefined
console.log(typeof anotherId); // output: symbol

// Link to study:
// https://262.ecma-international.org/5.1/#sec-11.4.3



 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (Primitive), Heap (Non-Primitive)

 let myYoutubename = "cameliapramanickdotcom" // string datatype

 let anothername = myYoutubename
 anothername = "cameliaheredotcom"

 console.log(anothername);  // output: cameliaheredotcom
 console.log(myYoutubename);  // output: cameliapramanickdotcom; Not changed original one because it makes a copy in stack memory.
 
 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 } // object datatype
 
 let userTwo = userOne
 
 userTwo.email = "camelia@google.com"

 console.log(userOne.email);  // output: camelia@google.com; Changed the original one also because it takes reference (original) from the same heap memory space.
 console.log(userTwo.email);  // output: camelia@google.com
 