// const myArr = []
// %DebugPrint(myArr)


//JS Array Type
// - continous i.e [1,2,3,4]
// - Holey i.e [1,2, ,4]

// Optimisations texhnics in JS Language
// - SMI (Small integer)  best technique but it can only handles number type not event decimals
// - Packed Elements(string, number)
// - Double Elements (float, string, decimals, functions, etc)

const arrTwo = [1,2,3,4] // Packed SMI Elements (continous array)
arrTwo.push(6.0) // change optimization technicue ---> PACKED-DOUBLE-ELEMENTS
arrTwo.push("7") // change optimization technicue ---> PACKED-ELEMENTS
arrTwo[10] = 11 // change optimization technicue ---> HOLEY-ELEMENTS(EMPTY POSITIONS)

// NOTE: once it change techniuqe it cant be reverse even after after deletion of elements

console.log(arrTwo); // [ 1, 2, 3, 4, 6, '7', <4 empty items>, 11 ]
console.log(arrTwo.length);// 11
console.log(arrTwo[9]);// undefined

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Objects.prototype, 9)


// hasOwnProperty() is most expensive operations
// holes are very expensive in JS



// Highest optimizations levels
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED



const arrFour = new Array(3)//[ , , ]
// just 3 holes. HOLEY_SMI
arrFour[0] = "1" // HOLEY_ELEMENTS
arrFour[1] = "2" // HOLEY_ELEMENTS
arrFour[2] = "3" // HOLEY_ELEMENTS


// better technicuqe
const arrFive =[] // SMI_ELEMENTS
arrFive.push("1") // PACKED_ELEMENTS
arrFive.push("2") // PACKED_ELEMENTS
arrFive.push("3") // PACKED_ELEMENTS


const arrSix = [1,2,3] // SMI_ELEMENTs
arrSix.push(NaN) //   PACKED_DOUBLE
arrSix.push(Infinity) //   PACKED_DOUBLE
