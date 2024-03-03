// const promiseOne = new Promise((resolve, reject)=>{
//     // do an async task
//     // db callls, network calls, cryptography
//     setTimeout(()=>{
//         console.log('async task completed');
//         resolve()
//     },2000)
// })

// promiseOne.then(()=>{
//     console.log('promise consume');
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("async task completed");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("promise 2 consume");
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({
//             username:"ganesh",
//             rollNo:24
//         })
//     },1000)
// }).then((user)=>{
//     console.log(user);
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = false;
//     if (!error) {
//       resolve({
//         userName: "ganesh",
//         rollNo: 24,
//       });
//     } else {
//       reject("error: something went wrong");
//     }
//   }, 1000);
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



//   const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//             resolve({
//                 userName:"ganesh"
//             })
//         }
//         else{
//             reject("erroe something wrong")
//         }
//     },1000)
//   })

// async function consumePromiseFive(){ 
//     const response =await promiseFive
//     console.log(response);
// } // async doesnt handle error case

// consumePromiseFive()

// async function consumePromiseFive(){
//     try{
//         const response =await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/todo/").then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})