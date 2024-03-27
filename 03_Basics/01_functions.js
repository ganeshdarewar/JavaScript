 function myFunction(){
    console.log("Ganesh");
 }
//  myFunction//reference
//  myFunction()// execution

function add2Num(num1, num2){// parameters
    console.log(num1+num2);
}
// add2Num();// => Nan (because it needs an parameter in function)
// add2Num(2,4);//arguments
// add2Num(3, "4") //=> 34
// add2Num(3, "a") //=> 3a
// add2Num(3, null) //=> 3

// function loginUserName(userName) {
//     return `${userName} just login`
// }
// console.log(loginUserName("Ganesh"));
// console.log(loginUserName(""));//just login
// console.log(loginUserName());//undefined just login

// function loginUserName(userName) {
//    if(!userName){
//     console.log("pls enter a username");
//    }
//     return `${userName} just login`
// }
// console.log(loginUserName());// undefined just login

function loginUserName(userName="sam") { // here sam is alternative  parameter arg is not passed
    if(!userName){
     console.log("pls enter a username");
    }
     return `${userName} just login`
 }
//  console.log(loginUserName());
//  console.log(loginUserName("ganesh"));


// function calculateCarPrice(...num1){ //rest operator used to passed infinite paramter
//     return num1
// }
// console.log(calculateCarPrice(2,2,3,4));//[ 2, 2, 3, 4 ]/
function calculateCarPrice(val1, val2,...num1){ //rest operator used to passed infinite paramter
    return num1
}
// console.log(calculateCarPrice(2,2,3,4));//[ 3, 4 ]




// function with obj

const user={
    userName:'ganesh',
    price:22
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user)
// handleObject({
//     userName:"sam",
//     price:233
// })

// Array

const myNewArray=[200,400,100,600]
function returnArray(getArray){
    return getArray[1]
}
console.log(returnArray(myNewArray));
console.log(returnArray([0,1]));