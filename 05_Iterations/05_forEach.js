const coding=["js", "cpp", "java"]

// coding.forEach(function(element){
//     console.log(element);
// })
// coding.forEach(element => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"Pytho",
        languageFileName:"Py"
    },

]
myCoding.forEach((item) => {
    console.log(item.languageName);
});