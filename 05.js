// // myclasses.js
// // Class constructor and static _ chai aur

// // after ES6  classes introduced

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email =email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}1232`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const testUser = new User("Ganesh", "g.com", "ksajbd")

// console.log(testUser.encryptPassword());
// console.log(testUser.changeUsername());

// behind the scence

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
            return `${this.password}1232`
}
User.prototype.changeUsername = function(){
                   return `${this.username.toUpperCase()}`
}

const testUser = new User("ganesh", "g.com", "238163")

console.log(testUser.changeUsername());
console.log(testUser.encryptPassword());
