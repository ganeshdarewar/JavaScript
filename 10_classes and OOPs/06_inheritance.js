// inheritance.js

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new courses add by ${this.username}`);
    }
}

const testUser = new Teacher("ganesh", "g.com", "123")
// testUser.logMe()
// testUser.addCourse()

const testUser1 = new User("ganesh")
// testUser1.logMe()
// testUser1.addCourse()  // because useer class does not have function


console.log(testUser1 === testUser); // false because one has parent another child

console.log(testUser instanceof Teacher); 
console.log(testUser instanceof User); 

