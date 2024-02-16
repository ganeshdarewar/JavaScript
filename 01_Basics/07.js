// dates in js

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.getDate());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate);

// console.log(typeof myDate);


// let myCreatedDate=new Date(2024,0,12);
// console.log(myCreatedDate.toString());
// let myCreatedDate=new Date(2024,0,12, 5,7,5);
// console.log(myCreatedDate.toLocaleString());

// // let myCreatedDate=new Date("2024-01-02");
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate=new Date("01-02-2024");
// console.log(myCreatedDate.toLocaleDateString());


let myTime=Date.now()
// console.log(myTime);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // mili second to second

let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString("default", {
    weekday:"long",
    day:"2-digit"
}));