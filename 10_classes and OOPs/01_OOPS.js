// OOPs

// object literal
const user ={
    userName:"Ganesh",
    loginCount:0,
    signedIn:true,
    getUserDetails: function(){
        // console.log("got details from DB")
        console.log(this.userName);
        console.log(this);
    }
}
// console.log(this);
// console.log(user.getUserDetails());


// constructor functions
function User(userName, loginCount, signedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.signedIn = signedIn
    this.greet= function(){
        console.log(this.userName);
    }
    return this
}
// const userOne = User("ganesh", 0, "true") 
// const userTwo = User("darewar", 2, "false") //  overides the existing data

// console.log(userOne);
// console.log(userTwo);

const userOne = new User("ganesh", 0, "true") // create new copy(instance)
const userTwo = new User("darewar", 2, "false") // create new copy(instance)

// console.log(userOne);
// console.log(userTwo);
// console.log(userTwo.greet());
// console.log(userTwo.constructor()); // it creates reference of user object


/*
when we used new ->
- step 1 : it creates empty object
- step 2 : it pass data in object
- step 3 : it adds into the this


*/
