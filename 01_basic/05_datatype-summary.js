// Primitive

// 7 categries : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol

// console.log( id === anotherId);

// const bigNumber = 3423423423432234234424n

// Reference (Non Primitive)

// Arrays, Objects, Functions

// const heros = ["Shaktiman", "Maagraj", "doga"]
// let myObj = {
//     name : "Shivam",
//     age : 22,
// }

const myFunction = function(){
    console.log("Hello Javacript");
}
console.log(typeof bigNumber);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "shashwatmaurya12.com"
let anotherName = myYoutubeName
anotherName = "Chaiaurcode"
console.log(myYoutubeName)
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@sbl"
}

let userTwo  = userOne 
userTwo.email = "shashwatmaurya12@gmail.com"
console.log(userOne.email);
console.log(userTwo.email)
