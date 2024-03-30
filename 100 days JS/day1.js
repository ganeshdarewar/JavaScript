
function findLongestWord(s){
    if(s.trim().length===0){
        return false
    }
    words = s.split(" ")
    words.sort((a,b)=>{
        return a.length-b.length
    })
    return words.at(-1)

    // reduce logic
    // return words.reduce((accum, curWord)=>(curWord.length > accum.length ? curWord : accum), "")
}

console.log(findLongestWord("hello world Ganesh"))

console.log(findLongestWord("hello world Ganeshsfdfs sfsf sfgs"))
