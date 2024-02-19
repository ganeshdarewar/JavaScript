// array 
/*
collectoin of multiple item
Js array are resizable i.e u can add item further

Array copy operation creates a shallow copy
shallow copy=> 
A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the 
copy was made. As a result, when you change either the source or the copy, you may 
also cause the other object to change too. 

deeep copy=>
A deep copy of an object is a copy whose properties do not share the same references
*/
// let newArr=["Ganesh", "Darewar"]
// let newArr1=newArr;
// newArr1[0]=["gavati"];
// console.log(newArr); //[ [ 'gavati' ], 'Darewar' ]
// console.log(newArr1); 

// const myArr=[1,2,3, "Ganesh"]
const myArr=[1,2,3,4,5,6]
// const newArr=["Ganesh", "only You"]
// const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);

// methods

// myArr.push(6);
// myArr.pop();


// myArr.unshift(0) // add items from 0th position
// myArr.shift() // delete 1 item from 0th 
// console.log(myArr);

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr); //1,2,3,4,5,6
// console.log(typeof newArr); //string

//slice splice
// console.log("original array", myArr);
// const myArr1=myArr.slice(1,3) // it return 1 to 2 positions item
// console.log("slice array",myArr1);
// console.log("original array after slice", myArr); //same as original

// console.log("original array", myArr);
// let myarr2=myArr.splice(1,3);
// console.log("splice ",myarr2);
// console.log("original array after splice", myArr); // here it deletes portion of splice items in original array

