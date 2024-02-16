// conversion and operation

// let score="3"
// console.log(typeof score);
// console.log(typeof(score));// => string

// let valueInnumber=Number(score);  // typecasting
// console.log(typeof valueInnumber);

let score="3abc"
// console.log(typeof score);
// console.log(typeof(score)); // both ways we can find type

// let valueInnumber=Number(score);  // typecasting
// console.log(typeof valueInnumber);
// console.log(valueInnumber); // => NaN(not a number)


// let score=null
// console.log(typeof score);
// console.log(typeof(score));

// let valueInnumber=Number(score);  // typecasting
// console.log(typeof valueInnumber);
// console.log(valueInnumber); // => 0


// let score=undefined
// console.log(typeof score);
// console.log(typeof(score));

// let valueInnumber=Number(score);  // typecasting
// console.log(typeof valueInnumber);
// console.log(valueInnumber); // => Nan

// let score=true
// console.log(typeof score);
// console.log(typeof(score));

// let valueInnumber=Number(score);  // typecasting
// console.log(typeof valueInnumber);
// console.log(valueInnumber); // => 1

// let score="Ganesh"
// console.log(typeof score);
// console.log(typeof(score));

// let valueInnumber=Number(score);  // typecasting
// console.log(typeof valueInnumber);
// console.log(valueInnumber); // => Nan
/*
typecasting to number from different data
"33"=> 33
"33abc"=>NaN
true=>1

*/

// let loggedIn=0
// let isLoggedIn=Boolean(loggedIn);
// console.log(isLoggedIn);
// let loggedIn=""
// let isLoggedIn=Boolean(loggedIn);
// console.log(,isLoggedIn);  //=>false

// let loggedIn="Ganesh"//true
// let isLoggedIn=Boolean(loggedIn);
// console.log(isLoggedIn);

// let someNumber=23
// let stringNumber=String(someNumber);
// console.log(someNumber);


// operation 
// console.log(2**2); //2 power 2
// console.log(2%2);

// let mySum="1"+2
// console.log(`${mySum} ${typeof mySum}`); //treat as string

let mySum=1+"2"
// console.log(`${mySum} ${typeof mySum}`); //treat as string


// console.log("1"+2+3); //treat as string
// console.log(1+"2"+3); //treat as string
// console.log(typeof(1+2+"3")); //treat as interger then it convert it into string (1+2)+"3" => 33


// console.log(+true); //=>1
// console.log(-true); //=>-1
// console.log(+""); //=>0
// console.log(typeof(-"")); //=>-0

// console.log("02">1); //true it change type automatically
// console.log(2>"1"); //true

//  console.log(null==0); //false
//  console.log(null!=0);//true
//  console.log(null>0);//false
//  console.log(null>=0); // js tries to convert null to num i.e 0 thats why => true
 
 // strict check => ===

 



// chatgpt mcqs

//  console.log(typeof(+"5"));
// console.log(typeof(-"5"));

// let checkBoolean=Boolean(undefined)
// console.log(checkBoolean); //false

// let checkBoolean=Boolean(null)
// console.log(checkBoolean);//false

// let checkBoolean=String(null)
// console.log(checkBoolean); //null
// console.log(typeof checkBooleans); // undefined

// let checkBoolean=Boolean(undefined)
// console.log(checkBoolean); //false

// let checkBoolean=Boolean(NaN)
// console.log(checkBoolean); //false

// let checkBoolean=Boolean([])
// console.log(checkBoolean); //true

// let checkBoolean=Boolean({})
// console.log(checkBoolean); //true

// let checkBoolean=Boolean(-0)
// console.log(checkBoolean); //false

// let checkBoolean=Boolean("0")
// console.log(checkBoolean); //true



// let checkBoolean=Boolean(Infinity)
// console.log(checkBoolean); //true

let checkString=String(Infinity)
console.log(checkString);
console.log(typeof(checkString));


/*
notes


typecasting
string--> number => NaN
Null ---> number => 0
undefined --> number => Nan
Boolean --> number => 1 or 0

number --> Boolean => true (except number is 0)
string --> Boolean => true
null ---> Boolean => false
undefined --> Boolean => false
NaN ---> Boolean => false
Infinity --> Boolean =>true

null ----> string => "null"
undefined ----> string => "undefined"
Infinity ----> string => "Infinity"




{}----> Boolean => true
[]----> Boolean => true


null---> string => null (but typeof=> undefined)

""----> Boolean => false




"1"+2+3 => "123"
1+"2"+3 => "123"
1+2+"3"=> "33"

+true => 1
-true => -1
+"" => 0
-"" => -0

"02">1 => true
2>"1" => true

null==0 => false
null!=0 => false
null>0 => false
null <0 =>false
null <=0 => true


*/