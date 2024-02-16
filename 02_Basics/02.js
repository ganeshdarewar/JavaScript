const marvel_heros=["thor", "spiderman", "ironman"]
const dc_heros=["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//flash

// console.log(marvel_heros.concat(dc_heros)); // it return new array
// console.log(marvel_heros);

// spread operator imp
const all_heros=[...marvel_heros, ...dc_heros]  // it stores in single array
// console.log(all_heros);

const anotherArr=[0,1,2,[2,3,4,[1,2,3,5]]]
// console.log(anotherArr.flat(Infinity)) // it also work as spread operator


console.log(Array.isArray("ganesh")); // find inarray
// console.log(Array.from("ganesh")); // it store evrry character as individual items
console.log(Array.from({name:"Ganesh"}));  //intresting

let score1 = 100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3, "ga")); // it stores every element as item
