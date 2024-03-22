// // Prototype

// let myName = "Ganesh     "
// // console.log(myName.trim().length);

// console.log(myName.truelength);

let myHero = ["thor", "spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:()=>{
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// it gives ganesh as prototype to the top level of every element
// Object.prototype.Ganesh = ()=>{
//     console.log(`Ganesh is present in all object`);
// }

// heroPower.Ganesh()
// myHeros.Ganesh() // evry goes through object


// Array.prototype.Ganesh = ()=>{
//     console.log(`Ganesh is present in only array`);
// }

// myHero.Ganesh()
// heroPower.Ganesh()// because it only check array



// inheritance

const user={
    name:"ganesh",
    email:"gaens@gm.com"

}
const Teacher={
    makeVideo :true
}

const TeachingSupport= {
    isAvailable : false
}

const TASupport ={
    makeAssignment: "js Assignment",
    fullTime: true,
    __proto__ : TeachingSupport // it can inherit teachingsupport property
}

Teacher.__proto__ = user // it can inherit user property


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // teachingsupport inherit techer


let anotherUser = "Ganesh           "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(` Actual lenght is ${this.trim().length}`);
}

anotherUser.trueLength()
"Ganu ".trueLength()