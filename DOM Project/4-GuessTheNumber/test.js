let randomNumber = parseInt(Math.random()*100+1)

let inputNumber = document.querySelector("#guessField")
let submit = document.querySelector("#subt")
let guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

playGame=true
prevGuess=[]
numGuess = 1

const p= document.createElement("p")

if(playGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(inputNumber.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("enter a valid number")
    }
    else if(guess<1){
        alert("enter a valid number")
    }
    else if(guess>100){
        alert("enter a valid number")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`game over random num is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`number is too low`)
    }
    
    else if(guess>randomNumber){
        displayMessage(`number is too high`)
    }
    
}

function displayGuess(guess){
    inputNumber.value=''
    guessSlot.innerHTML +=`${guess}`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(guess){
    lowOrHi.innerHTML=`<h2>${guess}</h2>`
}

function endGame(){
    inputNumber.value=''
    userInput.setAttribute('disabled','')
    p.classList.add("button")
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", (e)=>{
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess =1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}