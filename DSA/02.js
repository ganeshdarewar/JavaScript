// sum of digit of a num

// 1278 = 1+2+7+8

// function sumOfDigit(num){
//     let sum =0
//     for (let i = 0; i <num.toString().length; i++) {
//         sum = sum + Number(num.toString()[i])
//     }
//     return sum
// }
// console.log(sumOfDigit(128));


function sumOfDigit(num){
    let sum=0;
    while(num>0){
        sum = sum + num%10
        num= Math.floor(num/10)
    }
    return sum
}

console.log(sumOfDigit(1278));