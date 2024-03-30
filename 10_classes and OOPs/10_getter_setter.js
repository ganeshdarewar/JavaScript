// getter_setter

// class User{
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         return this._email=value
//     }
//     get password(){
//         return `${this._password.toUpperCase()}abc`// here you represents the data
//     }
//     set password(value){
//         this._password = value // here you storing it in system
//     }
// }

// const ganesh = new User("g.com", "jad")
// console.log(ganesh.password);
// console.log(ganesh.email);
// console.log(ganesh._email);



// function based getter and setter

// function User(email, password){
//     this._email =email
//     this._password = password

//     Object.defineProperty(this, 'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password',{
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const ganesh = new User("g.com", "asb")

// console.log(ganesh.email);
// console.log(ganesh.password);






// object based getter and setter

const User={
    _email:"g.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

console.log(User.email);