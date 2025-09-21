// singleton

// object literals

// Object.create  

const mySym = Symbol("key1")


const JsUser = {
    name: "Shashwat",
    "full name": "Shashwat Maurya",
    [mySym]: "mykey1",
    age: 22,
    location: "Greater Noida",
    email: "shashwatmaurya12@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// JsUser.email = "shashwat@12.com"
// Object.freeze(JsUser)
// JsUser.email = "mshashwat467@gmail.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting);


JsUser.greeting1 = function(){
    console.log(`Hello JS User", ${this.name}`);
}

console.log(JsUser.greeting1());

