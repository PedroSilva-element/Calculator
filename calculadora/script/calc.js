const dice = window.document.getElementById('dados')
const result = window.document.getElementById('result')
const music = new Audio('../audio/0000171.mp3')

function back() {
    let dices = window.document.getElementById('dados').innerHTML
    dice.innerHTML =  dices.substring(0, dices.length -1)
    dices.innerHTML = music.play()
}

function clean() {
    dice.innerHTML = '', music.play()
    result.innerHTML = '', music.play()
    
}

function insert(num) {

    dice.innerHTML += `${num}`, music.play()

}

function calculo(){
    
    if (dice) { 
        result.innerHTML = eval(dice.textContent), music.play()
    }
    
}