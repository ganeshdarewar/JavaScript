// objects
/*

*/
// singleton object

// What is a singleton object?
// An object with only one instance throughout the application

// object literals

// Which method is used to create a singleton object in JavaScript?
// Object.create() // through constructer method aur is ke andar singleton banta hai


const mySym=Symbol("key1")
const jsUser={
    name:"Ganesh",
    "full name": "ganesh darewar",
    [mySym]:"mykey1",
    age:23,
    location:"thane",
    isLoggedin:false,
    lastLoginDays:["mon", "Tues"]
}//object literals

// console.log(jsUser.name);
// console.log(jsUser["full name"]); // we cant access this using dot
// console.log(jsUser[mySym]);
console.log(jsUser.lastLoginDays[0]); // mon
console.log(jsUser.lastLoginDays);
// jsUser.location="bhiwandi"

// Object.freeze(jsUser) // after this object cant be change further

jsUser.isLoggedin=true;
// console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello ");
}
// console.log(jsUser.greeting); // function
// console.log(jsUser.greeting()); //hello undefined(because function return statement)
// jsUser.greeting()//hello

jsUser.greeting2=function(){
    console.log(`hello greeting2 ${this.name}`);
}
// console.log(jsUser.greeting2());

const myObject = {a: 1, b: 2};
console.log('a' in myObject); // Output: true
console.log('c' in myObject); // Output: false
console.log(myObject.hasOwnProperty('a')); // Output: true
console.log(myObject.hasOwnProperty('c')); // Output: false