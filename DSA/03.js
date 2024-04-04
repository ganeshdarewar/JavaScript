//  count the number of digit
// 123 => 3

// function countDigit(num){
//     return num>0 ? Number(num.toString().length) : Number(num.toString().length)-1
// }
// console.log(countDigit(-123));



function countDigit(num){
    num = Math.abs(num)
    let count=0
    do {
        count++
        num = Math.floor(num/10)
    } while (num>0);

    return count
}
console.log(countDigit(-123));