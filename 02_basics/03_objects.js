// singleton
// Object.create

const { jsx } = require("react/jsx-runtime");

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Camelia",
    "full name": "Camelia Pramanick",
    [mySym]: "mykey1", // Correct way to declare a Symbol key.
    age: 19,
    location: "Howrah",
    email: "camelia@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // output: camelia@google.com
console.log(JsUser["email"]); // output: camelia@google.com
console.log(JsUser["full name"]); // output: Camelia Pramanick; We cannot access it in any other way we have to use square brackets([]) only because, there is a space between the object. 
console.log(JsUser[mySym]); // output: mykey1
console.log(typeof JsUser[mySym]); // output: string

JsUser.email = "camelia@chatgpt.com" // Overwriting an object
console.log(JsUser["email"]); // output: camelia@chatgpt.com
// Object.freeze(JsUser) // It freezes the object so that we cannot change any values.
// JsUser.email = "camelia@microsoft.com" // Doesn't change after using freeze.
// console.log(JsUser); // output: { name: 'Camelia', 'full name': 'Camelia Pramanick', age: 19, location: 'Howrah', email: 'camelia@chatgpt.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Saturday' ], [Symbol(key1)]: 'mykey1' }

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // `` ----> String Interpolation.   
}

console.log(JsUser.greeting); // output: [Function (anonymous)]

console.log(JsUser.greeting()); // output: Hello JS user
console.log(JsUser.greetingTwo()); // output: Hello JS user, Camelia

