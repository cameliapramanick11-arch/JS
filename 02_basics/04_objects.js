// const tinderUser = new Object() // one kind of declaring objects.
const tinderUser = {} // ANother kind of declaring objects.

console.log(tinderUser); // output: {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // output: { id: '123abc', name: 'Sammy', isLoggedIn: false } 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Camelia",
            lastname: "Pramanick"
        }
    }
}

console.log(regularUser.fullname); // output: { userfullname: { firstname: 'Camelia', lastname: 'Pramanick' } }

console.log(regularUser.fullname.userfullname.firstname); // output: Camelia

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={ obj1, obj2 }
// console.log(obj3); // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} ---> target object; obj1, obj2, obj4 ---> source objects
// console.log(obj3); // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3); // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }; Spreading technique.

// From database we will get array of objects:-
const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

const obj5 = users[1].email // We can access array of objects like this.
console.log(obj5); // output: c@gmail.com


console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output: [ 'id', 'name', 'isLoggedIn' ] 
console.log(Object.values(tinderUser)); // output: [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]; [ keys, values ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // output: true
console.log(tinderUser.hasOwnProperty('isLogged')); // output: false


// Destructuring objects

const course = {
    coursename: "Javascript Tutorial",
    price: "999",
    courseInstructor: "AB de Villiers"
}

// console.log(course.courseInstructor); // output: AB de Villiers; One way of access.

// const {courseInstructor} = course // Another way of access.

// console.log(courseInstructor); // output: AB de Villiers

 const {courseInstructor: instructor} = course // Another short form way of access.
 console.log(instructor); // output: AB de Villiers
 
 /* const navbar = ({company}) => {

 }

 navbar(company = "Camelia") */

 /* {
    "name": "Camelia",
    "coursename": "Javascript Tutorial",
    "price": "free"
 } */ // json
// We can get APIs in the form of array of objects also --->
[
    {},
    {},
    {},
    {}
] // json

// *Study*: Google Search - randomuser me api ---> copy a sample api ---> Google search - JSON formatter ---> Format and beautify.