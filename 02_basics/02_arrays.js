const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heroes[3]); // output: [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heroes[3][2]); // output: Batman

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes); // output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator ---> ...

console.log(all_new_heroes); // output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Camelia")); // output: false
console.log(Array.from("Camelia")); // output: [ 'C', 'a', 'm', 'e', 'l', 'i', 'a' ]; Converts it into an array.
console.log(Array.from({name: "Camelia"})); // output: []; Interesting; Because, it cannot convert it into an array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // output: [ 100, 200, 300 ]
