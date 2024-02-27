const buttons=document.querySelectorAll(".button")
const body= document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener("click", function(e){
        // console.log(e); // event object
        // console.log(e.target); // returns a html code related queryselector
        
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor=e.target.id
                break;
            case "white":
                body.style.backgroundColor=e.target.id
                break;
            case "blue":
                body.style.backgroundColor=e.target.id
                break;
            case "yellow":
                body.style.backgroundColor=e.target.id
                break;
            default:
                break;
        }
    })
})