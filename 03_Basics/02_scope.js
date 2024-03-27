// Global and local scope

// let a=10
// const b=20
// var c=30

// console.log(a,b,c);

let a=100
const b=20
var c=30

if(true){
    let a=10
    const b=20
    // console.log(a);
    var c=30 // var is accesible after the scope also
}
// console.log(a);
// // console.log(b);
// console.log(c); 


// Scope level and mini hoisting 

// function one(){
//     const userNmae="Ganesh"
//     function two(){
//         const website="yputube"
//         console.log(userNmae);
//     }
//     // console.log(website);
//     two();
// }

// one();

if(true){
    const userName="Ganesh"
    if(userName=="Ganesh"){
        const website="youtube"
        console.log(`${userName} ${website}`);
    }
    // console.log(website);
}
// console.log(userName);



// intresting discussion(hoisting)

console.log(addOne(5)); //normal function can access before the declaration
function addOne(num){
    return num+1
}

// console.log(addTwo(6));// function variable cant access before the declaration
const addTwo=function(num){
    return num+2
}
console.log(addTwo(6));