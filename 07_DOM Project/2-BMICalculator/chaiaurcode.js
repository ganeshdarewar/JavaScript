const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault() // it stops send the response on the server

    const height= parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === "" || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`
    }
    else if(weight === "" || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid height ${weight}`
    }
    else{
        const bmi=(weight / ((height * height)/ 10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>` 
        // <h3>BMI Weight Guide</h3>
        // <p>Under Weight = Less than 18.6</p>
        // <p>Normal Range = 18.6 and 24.9</p>
        // <p>Overweight = Greater than 24.9</p>
        const weightGuide = document.querySelector("#weight-guide")
        if (bmi<18.6) {
            const weightStatus= document.createElement("p")
            weightStatus.innerText=`You are Under Weight`
            weightGuide.appendChild(weightStatus)
        }
        else if(bmi<24.9){
            const weightStatus= document.createElement("p")
            weightStatus.innerText=`You are Normal`
            weightGuide.appendChild(weightStatus)
        }
        else{
            const weightStatus= document.createElement("p")
            weightStatus.innerText=`You are Overweight`
            weightGuide.appendChild(weightStatus)
        }

    }
})