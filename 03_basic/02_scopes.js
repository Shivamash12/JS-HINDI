// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Shashwat"
    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);
    two()
    
}
one()

if(true){
    const username ="Shashwat"
    if(username=="Shashwat"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++

// Function Declaration
function addOne(num) {
    return num + 1;
}
console.log(addOne(5)); // 6

const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5)); // 7

