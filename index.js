// document.getElementById("count").innerText = "1"

let counter = 0
let incBtn = document.getElementById("count")
let saveel = document.getElementById("save-el")
function increment(){
    counter+=1
    incBtn.innerText = counter
}

function save(){
    let countStr = " "+counter + " - "
    saveel.textContent += countStr
    counter = 0
    incBtn.textContent = 0
}

function decrement(){
    if(counter>0)
    {
        counter-=1
        incBtn.innerText = counter
    }
}