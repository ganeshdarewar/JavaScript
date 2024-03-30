
function generateHash(str){
    if(str.length >280 || str.trim().length<1){
       return false
    }
    else{
        let words = str.split(" ")
        // words.forEach((element, index) => {
        //     words[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
        // });
      

        words=words.map((element)=>
            element.replace(element[0], element[0].toUpperCase())
        )
          return `#${words.join("")}`
    }
}



console.log(generateHash("my name is Ganesh Darewar"));

