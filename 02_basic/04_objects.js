// const tinderUser = new Object();
const tinderUser = {}
console.log(tinderUser);

tinderUser.id = "1234abcd"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             fistname: "aryan",
//             lastname: "maurya"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.fistname);

// const object1 = {
//     1:"a",2:"b"
// }
// const object2 = {
//     3: "a", 4:"b"
// }
// const object3 = {
//     object1, object2
// }
// console.log(object3);

// const object4= Object.assign({}, object1, object2)
// console.log(object4);

// const object5 = {...object1, ...object2}
// console.log(object5);


// const users = [
//     {
//         id: 1,
//         email: "shivam@gmail.com"
//     }
// ]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "shashwat"
// }

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);


const {courseInstructor: instructor} = course

console.log(instructor);


// Destructure

// const navbar = ({company}) => {

// }
// navbar{company = "Shashwat"}


// JSON
// {
//     "name": "Shashwat",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {}
]



