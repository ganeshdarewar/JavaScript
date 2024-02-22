const user={
    userName:"ganesh",
    price:99,
    welcmeMessage:function(){
        console.log(`${this.userName} , welcome to website`);
        //yaha pe this current context ko refer karta hai
        // console.log(this);
    }
}
// user.welcmeMessage()
// user.userName="sam"
// user.welcmeMessage()

// console.log(this); //{} because currently not holding any contextt

/*
Note
In browser this holds window as object
*/

// function chai(){
//     let userName='ganesh'
//     console.log(this);
// }
// chai()

// function chai(){
//     let userName='ganesh'
//     console.log(this.userName); // undefined(we cant use this keyword in functoin)
// }
// chai()


// const chai=function(){
//     let userName='ganesh'
//     console.log(this.userName); // undefined(we cant use this keyword in functoin)
// }
// chai()


// arrow function

const chai=()=>{
    let userName='ganesh'
    console.log(this);//{}
    console.log(this.userName); // undefined(we cant use this keyword in functoin)
}
chai()


//basic arrow function 
// const addTwo=(num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,3));

// implicit return(if u have single line of return)
// const addTwo=(num1, num2)=> num1+num2
// console.log(addTwo(2,3));

// const addTwo=(num1, num2)=> (num1+num2)

// const addTwo=(num1, num2)=> ({userName:'ganesh'})

// console.log(addTwo(2,3));
