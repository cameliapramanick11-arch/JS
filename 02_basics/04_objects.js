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

