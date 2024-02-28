// genrate random color
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
function changeColor(){
    document.querySelector("body").style.backgroundColor=`${randomColor()}`;
}
function startChangingColor (){
   if(!intervalId){
    intervalId= setInterval(changeColor, 1000)
   }
}
function stopChangingColor (){
   clearInterval(intervalId)
   intervalId=null
}
let intervalId;
document.querySelector("#start").addEventListener("click", startChangingColor)
document.querySelector("#stop").addEventListener("click", stopChangingColor)