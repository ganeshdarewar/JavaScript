// staticprop.js (static properties)

// properties cant access 

class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`username is ${this.userName}`);
    }

    static createId(){
        return `123`
    }
}

const ganesh = new User("ganu")

// console.log(ganesh.createId()); // cant because of static keyword


class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@.com")

iphone.logMe()
// iphone.createId() // cant because of static keyword

