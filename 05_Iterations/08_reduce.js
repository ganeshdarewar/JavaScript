// myArr=[0,1,2,3,4,5,6]
// const num=myArr.reduce((acc, currVal)=>{
//     console.log(`accumulatir value: ${acc} currentValue: ${currVal} `);
//     return acc+currVal;
// }, 
// 10) 

// const num=myArr.reduce((acc, currVal)=> acc+currVal , 10)
// console.log(num);


const courses=[
    {
        courseName: "Js Course",
        price:2999
    },
    {
        courseName: "py Course",
        price:4999
    },
    {
        courseName: "java Course",
        price:5999
    },
]

const totalPrice=courses.reduce((acc, item)=>(acc+item.price),0 )
console.log(totalPrice); 