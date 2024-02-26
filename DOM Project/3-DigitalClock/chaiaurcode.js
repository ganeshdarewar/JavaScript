const clock = document.getElementById("clock");

// imp
setInterval(()=>{
    let date = new Date(); // Create new Date object inside setInterval
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
