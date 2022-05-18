var demoElement = document.getElementById('demo')
var imageElement = document.getElementById('img')
var btnonoff = document.getElementById('btntoggle')
console.log(btnonoff);

function turnon() {
    demoElement.style.backgroundColor = "white"
    imageElement.src = "images/pic_bulbon.gif"

    btnonoff.innerHTML = "turn off"

}

function turnoff() {
    demoElement.style.backgroundColor = "white"
    imageElement.src = "images/pic_bulboff.gif"
    btnonoff.innerHTML = "turn on"

}

function toggle() {
    if (btnonoff.innerHTML == "turn off") {
        turnoff()
        btnonoff.innerHTML = "turn on"

    } else {
        turnon()
        btnonoff.innerHTML = "turn off"
    }
}