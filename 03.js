// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting="Hello World!"
// for (const greet of greeting) {
//     console.log(greet);
// }




// maps => map cant add duplicates value
const map=new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("FR", "France")
map.set("FR", "France")
// console.log(map);

for (const key of map) {
    console.log(key);
}

// for (const [key, value] of map) {
//     console.log(key, ":", value);
// }

// const myObj={
//     'game1':"NFS",
//     "game2":"spiderman"
// }
// for (const [key, value] of myObj) {
//     console.log(key, ":", value);
// }

