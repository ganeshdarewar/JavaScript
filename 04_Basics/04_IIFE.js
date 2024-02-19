// Immediately Invoked Function Expression(IIFE)
// jaise aapne function usko turant hi execute karo

(function chai(){
    console.log("DB Connected");
})();// here must needed semicolon 

(function aurCode(){
    //name IIFE
    console.log("DB COnneected two");
})();

(()=>{
    console.log("DB Connected by arrow function");
})();

((name)=>{
    //Unnameed IIFE
    console.log(`${name} conected `);
})('ganesh');

const add=((num1, num2)=> ({userName:'ganesh'}))(5,6)
console.log(add);