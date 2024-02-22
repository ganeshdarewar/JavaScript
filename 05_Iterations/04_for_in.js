// for in


/*
Note:
In general, if you're dealing with arrays or iterable objects, use for...of. If you need 
to iterate over object properties (enumerable ones), use for...in. However, be cautious 
when using for...in with arrays due to the potential for unexpected behavior with non-index properties.
*/

const myObj={ 
    js:"Javascript",
    cpp:"c++",
    rb:"ruby"
}
// for (const key in myObj) {
//     console.log(key); // gives keys
// }
// for (const value in myObj) {
//     console.log(myObj[value]);// gives val
// }

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// myArray=["js", "py", "cpp"]
// for (const key in myArray) {
//  console.log(key);// it gives index of every
// }
// myArray=["js", "py", "cpp"]
// for (const key in myArray) {
//  console.log(myArray(key));// it gives item
// }

// const map=new Map()
// map.set("IN", "India")
// map.set("USA", "America")
// map.set("FR", "France")
// map.set("FR", "France")

// for (const key in map) {  //for in not uesd for map and 
//     console.log(map[key]);
// }


