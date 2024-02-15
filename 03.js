// objects
/*

*/
// singleton object

// object literals

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

// jsUser.location="bhiwandi"

// Object.freeze(jsUser) // after this object cant be change further

jsUser.isLoggedin=true;
// console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello ");
}
console.log(jsUser.greeting); // function
console.log(jsUser.greeting()); //undefined

jsUser.greeting2=function(){
    console.log(`hello greeting2 ${this.name}`);
}
console.log(jsUser.greeting2());