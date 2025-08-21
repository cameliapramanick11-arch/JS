const name = "camelia"
const repoCount = 3

// console.log(name + repoCount + " Value"); // very outdated syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern way of representation which is called "String Interpolation; Use this syntax always."

const gameName = new String("camelia-cp") // another style to declare string by using String constructor of JS

console.log(gameName); // output: [String: 'camelia'] 
console.log(gameName[0]); // output: c
console.log(gameName.__proto__); // output: {} // object accessed


console.log(gameName.length); // output: 7
console.log(gameName.toUpperCase()); // output: CAMELIA
console.log(gameName.charAt(4)); // output: l
console.log(gameName.indexOf('l')); // output: 4

const newString = gameName.substring(0, 4)
console.log(newString); // output: came; No negative values allowed in substring method.

const anotherString = gameName.slice(-9, 4)
console.log(anotherString); // output: ame

const newStringOne = "    camelia    "
console.log(newStringOne); // output:     camelia    
console.log(newStringOne.trim()); // output: camelia

const url = "https://camelia.com/camelia%20pramanick" // If space is given then url coding will automatically replace that with %20

console.log(url.replace('%20', '-')); //  output: https://camelia.com/camelia-pramanick

console.log(url.includes('camelia')); // output: true; Searches if it includes that string or not then returns true or false accordingly.
console.log(url.includes('dulquer')); // output: false

console.log(gameName.split('-')); // output: [ 'camelia', 'cp' ]

// *****Study all string methods******