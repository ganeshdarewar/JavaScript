// singleton object using constructer
const tinderUser=new Object()

// console.log(tinderUser);
tinderUser.id="123"
tinderUser.name="ganesh"
// console.log(tinderUser); //{ id: '123', name: 'ganesh' }

// const regularUser={
//     email:"ganesh@gmailcom",
//     userName:{
//         fullName:{
//             firstName:"Ganesh",
//             lastName:"Darewar"
//         }
//     }
// }
// console.log(regularUser.userName.fullName.firstName);

const obj1={
    1:"a",
    2:'b'
}
const obj2={
    3:"c",
    4:'d'
}
const onj3=(obj1, obj2);
// console.log(onj3);

// const obj3=Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b' }
// console.log(obj3);

// const obj3={...obj1, ...obj2}//spread
// console.log(obj3);

const userName=[
    {
        id1:1,
        name:"Ganesh"
    },
    {
        id2:2,
        name:"Ganesh"
    },
    {
        id3:3,
        name:"Ganesh"
    },   
]
// console.log(userName[0].id1);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//[ 'id', 'name' ]
// console.log(Object.values(tinderUser)); //[ '123', 'ganesh' ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123' ], [ 'name', 'ganesh' ] ]
// console.log(tinderUser.hasOwnProperty("id")); //true





// object destructuring

const course={
    courseName:"malware analysis",
    price:"1000",
    courseInstructor:"neeta"
}

// course.courseName

// const{courseInstructor}=course;
// console.log(courseInstructor);

const{courseInstructor:instructor}=course;
// console.log(instructor);

// api concept

// json format
// {
//     "name":"ganesh",
//     "lastName":"darewar"
// }

// Array Format
[
    {},
    {},
    {}
]

/*
Which method is used to add properties to an existing object in JavaScript
Object.assign()


Object.seal() prevents new properties from being added, while Object.freeze()
 prevents any changes to existing properties

*/

const obj = {};
console.log(obj.hasOwnProperty('toString'));
