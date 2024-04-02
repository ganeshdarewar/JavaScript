function countChar(str, char){
    // let count =0;
    // for (let i = 0; i < str.length; i++) {
    //     if(str[i] === char || str[i] === char.toUpperCase() || str[i] === char.toLowerCase() ){
    //         count++
    //     }
    // }

    str = str.toUpperCase()
    char = char.toUpperCase()
    // return str.split('').reduce((acc,elem)=>{
    //     return elem === char ? acc+1 : acc
    //  },0) 

    // let count=0
    // str.split("").map((s)=>{
    //     if(s === char ) count++
    // })
    // return count

    return str.split("").filter((elem)=>{
        return elem === char
    }).length
}

console.log(countChar("Ganeshganesh", "g"));