// strings

let fName="ganesh"
let Lname="darewar"
// console.log("my name is "+fName+" "+Lname)
console.log(`my name is ${fName} ${Lname}`);// use this


// string declaration using obects
const newString=new String("hello-world")
// console.log(newString);
// console.log(newString[0]);
// console.log(newString.__proto__);

// console.log(newString.length);
// console.log(newString.indexOf("e"));
// console.log(newString.charAt(0));


// let newString2=newString.substring(2,5); // minus valuses converted into 0
// console.log(newString2);

// let newString3=newString.slice(-6,-1);
// console.log(newString3);

// const newString="            ganesh         ";
// let anotherString=newString.trim(); //remove whitespace
// console.log(anotherString);

let url="https:/ganeshdarewar.com/malware%20anlysis"
let anotherUrl=url.replace("%20"," ")
console.log(anotherUrl);

console.log(url.includes("ganesh"));//check string in data return true or false


console.log(newString.split("-"));