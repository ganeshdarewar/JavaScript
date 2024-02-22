// const coding=["Js", "cpp", "py"]

// const language= coding.forEach((item)=>{
//     // console.log(item);
//     return item // we cant return in foreach
// })

// console.log(language); //undefined


// filter(it return)

const myNums=[0,1,2,3,4,5,6,7,7,8]

// const newNum=myNums.filter((num)=> num>4)
// console.log(newNum); //[ 5, 6, 7, 7, 8 ]

// const newNum=myNums.filter((num)=>{ // scope needs  return keyword
//     return num>4
// })
// console.log(newNum); //[ 5, 6, 7, 7, 8 ]

// filter using forEach
// const newNum=[]
// myNums.forEach((item)=>{
//     if(item>4){
//         newNum.push(item)
//     }
// })
// console.log(newNum);[ 5, 6, 7, 7, 8 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const newBook=books.filter((book)=>(book.genre==="History"))
const newBook=books.filter((book)=>{
    return book.publish>=1995 && book.genre==="History";
})
  console.log(newBook);