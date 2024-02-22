const myArr=[0,1,2,34,5]
// const newArr=myArr.map((num)=>num+10) // [ 10, 11, 12, 44, 15 ]
// const newArr=myArr.map((num)=>num>4) // [ false, false, false, true, true ]
// console.log(myArr);

// map using forEach
// numArr=[]
// myArr.forEach((num)=>{return numArr.push(num+10)})
// console.log(numArr);

const newArr=myArr.map((num)=> num+10)
                  .map((num)=>num+1)
                  .filter((num)=> num>11)

console.log(newArr); //[ 12, 13, 45, 16 ]