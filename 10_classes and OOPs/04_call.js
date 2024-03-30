// call
// current execution context is passed to another function
function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // it doesnt holds current context of function when parent function, it only passes refernce not called
    // SetUsername.call(username) // it passes the reference to the outer function
    SetUsername.call(this, username) // it passes the reference to the outer function and current context using this
    this.email = email
    this.password = password
}

const test = new createUser("ganesh", "g@gmailcom", "1223")
console.log(test);