// datatype summery

// 1.primitive datatype
// 7 type => number, string, Boolean, null, undefined, Symbol, BigInt 

// let score=12;
// let score1=12.3;
// let name="ganesh"
// let isLogged=true;
// let temp=null
// let test=undefined

//symbols
// const id= Symbol('123')
// const otherId=Symbol('123')
// console.log(id===otherId); // => false

// const bigNumber=12435466765434567845621n;
// console.log(bigNumber);
// console.log(typeof bigNumber);






// 2. non premitive(reference type)
// array, object function

// JavaScript is a dynamically typed language,

// let myArray=[0,1,2];

// let myObj={
//     id:1,
//     name:"ganesh"
// }
// console.log(myObj);


const myFunction=function(){
    console.log("ganesh");
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object





// ******************Stack(primitive datatype) Heap(non premitive datatype)

// let userOne=12;
// let userTwo=userOne;
// userTwo=13;
// console.log(userOne);
// console.log(userTwo);// becauese copy is passed not actual value


let myUser={
    name:"ganesh",
    email:"ganesh@gmail.com"
}
let myUser2=myUser;
myUser2.email="daewar@gmail.com"
console.log(myUser.email);
console.log(myUser2.email); // because reference is pass so both value will chaneg


