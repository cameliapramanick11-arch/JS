const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // output: [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heroes[3]); // output: [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heroes[3][2]); // output: Batman

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes); // output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

