// Dates

let myDate = new Date()
console.log(typeof myDate); // output: object

console.log(myDate); // output: 2025-08-21T17:32:38.043Z
console.log(myDate.toString()); // output: Thu Aug 21 2025 17:34:36 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // output: Thu Aug 21 2025
console.log(myDate.toISOString()); // output: 2025-08-21T17:39:14.384Z
console.log(myDate.toJSON()); // output: 2025-08-21T17:40:13.455Z
console.log(myDate.toLocaleDateString()); // output: 8/21/2025
console.log(myDate.toLocaleString()); // output: 8/21/2025, 5:41:03 PM
console.log(myDate.toTimeString()); // output: 17:42:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // output: Thu, 21 Aug 2025 17:43:10 GMT
console.log(myDate.getTimezoneOffset()); // output: 0

let myCreatedDate = new Date(2025, 0, 23)
console.log(myCreatedDate.toDateString()); // output: Thu Jan 23 2025; It is in an array's form so, month's counting is started from 0, so it printed January -> 0

let myCreatedDate2 = new Date(2025, 0, 23, 5, 3) // Another type of declaring date and time.
console.log(myCreatedDate2.toLocaleString()); // output: 1/23/2025, 5:03:00 AM

let myCreatedDate3 = new Date("2025-08-21") // Another type of declaring date and time. When you write it as YYYY-MM-DD form it will start count from January -> 1
console.log(myCreatedDate3.toLocaleString()); // output: 8/21/2025, 12:00:00 AM

let myCreatedDate4 = new Date("08-21-2025")
console.log(myCreatedDate4.toLocaleString()); // output: 8/21/2025, 12:00:00 AM; In India we also sometimes follow MM-DD-YYYY form. DD-MM-YYYY form is invalid.

let myTimeStamp = Date.now()
console.log(myTimeStamp); // output: 1755799223485; It is in milisecond form.
console.log(myCreatedDate4.getTime()); // output: 1755734400000; By using this we can easily compare times and dates in milisecond.
console.log(Date.now());  // output: 1755799599480; Current time in miliseconds.
console.log(Math.round(Date.now()/1000));  // output: 1755799766; Convert current time from miliseconds to seconds to compare easily by dividing 1000 with Date.now() and use Math.round() to make the number in rounded off number.

let newDate = new Date()
console.log(newDate);  // output: 2025-08-21T18:13:13.338Z
console.log(newDate.getDate());  // output: 21; Today's Date.
console.log(newDate.getMonth());  // output: 7; Starting from 0 so, August -> 7
console.log(newDate.getDay());  // output: 4; Starting from Sunday -> 0 so, Thursday -> 4
console.log(newDate.getMonth() + 1);  // output: 8; So that the user doesn't get confused...

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
})); // output: Thursday; More customize the toLocalestring....
