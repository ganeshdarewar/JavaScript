
function secondLargestString(str){
    let myString = str.split(" ")
    if(str=""){
        return false
    }
    else{
        // myString.sort((a,b)=>{
        //     return a.length - b.length
        // })


        myString.reduce((acc, curWord)=>{
            return acc.length > curWord.length ? acc : curWord
        }, "")
    }
    return myString.at(-1)
}



console.log(secondLargestString("hello my name is Ganesh Darewar"));