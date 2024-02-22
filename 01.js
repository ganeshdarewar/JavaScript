// For loop with break and continue 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);   
// }
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element==5) {
//         console.log("5 is best numbers");
//     }
//     console.log(element);  
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop ${j}`);
        // console.log(i+"*"+j+ " = "+i*j);
    }
}

// let myArray=["flash", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];   
//     console.log(`${element}`);
// }





// break and continue
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log("5 is detected");
        continue
    }
    console.log(`value of i is ${index}`);
}