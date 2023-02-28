let min = 0;
let sec = 0;
let milSec = 0;
let hour = 0
var i;


function start(){
    let btn = document.getElementById('start')
    if(btn.innerHTML == 'Start'){
        i = setInterval(timer , 10)
        btn.innerHTML = 'Pause'
    }
    else{
        clearInterval(i)
        btn.innerHTML = 'Start'
    }
}

function timer(){
    milSec++
    if(milSec == 100){
        milSec = 0
        sec++
    }
    if(sec == 60){
        sec = 0;
        min++
    }
    if(min == 60){
        min = 0
        hour++
    }

    document.getElementById('hours').value = hour
    document.getElementById('minutes').value = min
    document.getElementById('seconds').value = sec
    document.getElementById('milliseconds').value = milSec
}

function reset(){
    clearInterval(i)
    clearInterval(i)
    document.getElementById('hours').value = 00
    document.getElementById('minutes').value = 00
    document.getElementById('seconds').value = 00
    document.getElementById('milliseconds').value = 0000
    document.getElementById('start').innerHTML = 'Start'
    document.getElementById('list').innerHTML = ""
    
}

function cast(){
    let castTime = `${hour} : ${min} : ${sec} : ${milSec}`
    console.log(castTime)
    let castItemEl = document.createElement("li")
    castItemEl.innerText = castTime
    document.getElementById('list').appendChild(castItemEl)
    
}