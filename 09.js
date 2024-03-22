// mathpi.js

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// output
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// Math.PI=1.2

// console.log(Math.PI);


// const myNewObject = Object.create(null)
// console.log(myNewObject);

const chai ={
    name: "ginger",
    price:250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name",{
    writable:false,
    enumerable: false,
    configurable: false
} )
// chai.name="ganesh" // not writable 
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`); // not itrable(enumerable)
// }

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`); 
}



