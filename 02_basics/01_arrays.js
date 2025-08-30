// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHers = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);
console.log(myArr[1]);

// Array methods

myArr.push(6) // With push or pop method we can push new array elements in an array even in a const array but, we cannot change any values of an const variable.

myArr.push(7)
myArr.pop() // No arguements just removes the last value of the array.

myArr.unshift(9) // output: [ 9, 0, 1, 2, 3, 4, 5, 6 ]
myArr.shift() // output: [ 0, 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(9)); // output: false
console.log(myArr.indexOf(9)); // output: -1
console.log(myArr.indexOf(19)); // output: -1
console.log(myArr.indexOf(3)); // output: 3

const newArr = myArr.join() // Converts the array into string.

console.log(myArr);  // output: [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(newArr); // output: 0,1,2,3,4,5,6
console.log(typeof newArr); // output: string

// slice, splice

console.log("A ", myArr); // output: A  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // output: [ 1, 2 ]
console.log("B ", myArr); // output: B  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1, 3) // As we can see splice() method manipulates the original array.
console.log("C ", myArr); // output: C  [ 0, 4, 5, 6 ]
console.log(myn2); // output: [ 1, 2, 3 ]

