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

// let url="https:/ganeshdarewar.com/malware%20anlysis"
// let anotherUrl=url.replace("%20"," ")
// console.log(anotherUrl);

// console.log(url.includes("ganesh"));//check string in data return true or false


// console.log(newString.split("-"));



// some more methods of strings

// let str1="ganesh"
// let str2="darewar"
// let str=str1.concat(" ", str2)
// console.log(str);

// let str= "   Hellow World    "
// console.log(str.indexOf("World")); //=7

// console.log(str.slice(-6,9));
// console.log(str.toLowerCase());

// console.log(str.toUpperCase());
// console.log(str.trim())
// console.log(str.split(" "))

// console.log(str.startsWith("hellow"));
// console.log(str.indexOf("H"));

const str = "2";
console.log(str.padStart(3, "0")); // Output: "005"
console.log(str.padEnd(3, "0"));
console.log(str.repeat(4));