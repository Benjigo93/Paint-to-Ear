const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

/* Canvas takes full screen size, respective to the device */

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

/* Declarations of all variables */

const mousePos = { x: 0, y: 0 }
const circlePos = { x: 0, y: 0 }
const mouseCircle = { x: 0, y: 0 }
const mouseCircle2 = { x: 0, y: 0 }
const mouseCircle3 = { x: 0, y: 0 }
const mouseCircle4 = { x: 0, y: 0 }
const mouseCircle5 = { x: 0, y: 0 }
const mouseCircle6 = { x: 0, y: 0 }
var pause = true
var start = 0
var stop = true
var size = 30
var newSize = 0
var delSize = 30 * 1.45
const allMusic = document.querySelectorAll('audio')
const music1 = document.querySelector('#music1')
const music2 = document.querySelector('#music2')
const music3 = document.querySelector('#music3')
const music4 = document.querySelector('#music4')
const music5 = document.querySelector('#music5')
const music6 = document.querySelector('#music6')
var changeI = true
var changeT = true

/* Tracking the position of the mouse */

document.addEventListener('mousemove', (event) => {
    mousePos.x = event.clientX
    mousePos.y = event.clientY
})

/* Loading Animation  */

const loop = () => {

    if (pause) {
        window.requestAnimationFrame(loop)
    }

    circlePos.x = Math.floor((Math.random() * (context.canvas.width - 100)) + 50)
    circlePos.y = Math.floor((Math.random() * (context.canvas.height - 100)) + 50)

    context.beginPath()
    context.arc(circlePos.x, circlePos.y, 100, 0, Math.PI * 2, false)

    context.fillStyle = 'orange'
    context.fill()
}

/* Loading the circles/brushes with diffeent colors */

const showMouseCircle = () => {

    pause = false
    stop = true

    mouseCircle.x = Math.floor((Math.random() * (context.canvas.width - 200)) + 100)
    mouseCircle.y = Math.floor((Math.random() * (context.canvas.height - 200)) + 100)

    mouseCircle2.x = Math.floor((Math.random() * (context.canvas.width - 200)) + 100)
    mouseCircle2.y = Math.floor((Math.random() * (context.canvas.height - 200)) + 100)

    mouseCircle3.x = Math.floor((Math.random() * (context.canvas.width - 200)) + 100)
    mouseCircle3.y = Math.floor((Math.random() * (context.canvas.height - 200)) + 100)

    mouseCircle4.x = Math.floor((Math.random() * (context.canvas.width - 200)) + 100)
    mouseCircle4.y = Math.floor((Math.random() * (context.canvas.height - 200)) + 100)

    mouseCircle5.x = Math.floor((Math.random() * (context.canvas.width - 200)) + 100)
    mouseCircle5.y = Math.floor((Math.random() * (context.canvas.height - 200)) + 100)

    mouseCircle6.x = Math.floor((Math.random() * (context.canvas.width - 200)) + 100)
    mouseCircle6.y = Math.floor((Math.random() * (context.canvas.height - 200)) + 100)

    context.beginPath()
    context.arc(mouseCircle.x, mouseCircle.y, size, 0, Math.PI * 2, false)
    context.fillStyle = 'red'
    context.fill()
    context.lineWidth = size / 3;
    context.stroke()

    context.beginPath()
    context.arc(mouseCircle2.x, mouseCircle2.y, size, 0, Math.PI * 2, false)
    context.fillStyle = 'blue'
    context.fill()
    context.lineWidth = size / 3;
    context.stroke()

    context.beginPath()
    context.arc(mouseCircle3.x, mouseCircle3.y, size, 0, Math.PI * 2, false)
    context.fillStyle = 'green'
    context.fill()
    context.lineWidth = size / 3;
    context.stroke()

    context.beginPath()
    context.arc(mouseCircle4.x, mouseCircle4.y, size, 0, Math.PI * 2, false)
    context.fillStyle = 'yellow'
    context.fill()
    context.lineWidth = size / 3;
    context.stroke()

    context.beginPath()
    context.arc(mouseCircle5.x, mouseCircle5.y, size, 0, Math.PI * 2, false)
    context.fillStyle = 'black'
    context.fill()
    context.lineWidth = size / 3;
    context.stroke()

    context.beginPath()
    context.arc(mouseCircle6.x, mouseCircle6.y, size, 0, Math.PI * 2, false)
    context.fillStyle = 'white'
    context.fill()
    context.lineWidth = size / 3;
    context.stroke()

    document.querySelector('.prevent').style.display ="none"
    document.querySelector('#countdown').style.display = "none"
    canvas.style.pointerEvents = "auto"
}

/* Detect the mouse position and comparing it with the position of each circle/brush */

canvas.onmousemove = (e) => {

    var canvas = e.target
    var context = canvas.getContext('2d')


    context.beginPath();
    context.arc(mouseCircle.x, mouseCircle.y, size, 0, Math.PI * 2, false)

    if (context.isPointInPath(mousePos.x, mousePos.y)) {
        start = 1
        stop = false
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).play();
        }
        return;
    }

    context.beginPath();
    context.arc(mouseCircle2.x, mouseCircle2.y, size, 0, Math.PI * 2, false)

    if (context.isPointInPath(mousePos.x, mousePos.y)) {
        start = 2
        stop = false
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).play();
        }
        return;
    }

    context.beginPath();
    context.arc(mouseCircle3.x, mouseCircle3.y, size, 0, Math.PI * 2, false)

    if (context.isPointInPath(mousePos.x, mousePos.y)) {
        start = 3
        stop = false
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).play();
        }
        return;
    }

    context.beginPath();
    context.arc(mouseCircle4.x, mouseCircle4.y, size, 0, Math.PI * 2, false)

    if (context.isPointInPath(mousePos.x, mousePos.y)) {
        start = 4
        stop = false
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).play();
        }
        return;
    }

    context.beginPath();
    context.arc(mouseCircle5.x, mouseCircle5.y, size, 0, Math.PI * 2, false)

    if (context.isPointInPath(mousePos.x, mousePos.y)) {
        start = 5
        stop = false
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).play();
        }
        return;
    }

    context.beginPath();
    context.arc(mouseCircle6.x, mouseCircle6.y, size, 0, Math.PI * 2, false)

    if (context.isPointInPath(mousePos.x, mousePos.y)) {
        start = 6
        stop = false
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).play();
        }
        return;
    }
}

/* Drawing function, by moving the mouse and stop it by a click */

document.addEventListener('mousemove', function draw() {

    document.querySelector('.instruction').style.display = "block"
    if (stop == false) {
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).muted = true;
        }
        canvas.style.cursor = "crosshair"
        if (start == 1) {
            context.beginPath()
            context.arc(mousePos.x, mousePos.y, size, 0, Math.PI * 2, false)
            context.fillStyle = 'red'
            context.fill()
            music1.muted = false
            canvas.addEventListener('click', function () {
                for (let i = 0; i < allMusic.length; i++) {
                    (allMusic[i]).pause();
                }
                canvas.style.cursor = "auto"
                stop = true
            })
        } else if (start == 2) {
            context.beginPath()
            context.arc(mousePos.x, mousePos.y, size, 0, Math.PI * 2, false)
            context.fillStyle = 'blue'
            context.fill()
            music2.muted = false
            canvas.addEventListener('click', function () {
                for (let i = 0; i < allMusic.length; i++) {
                    (allMusic[i]).pause();
                }
                canvas.style.cursor = "auto"
                stop = true
            })
        } else if (start == 3) {
            context.beginPath()
            context.arc(mousePos.x, mousePos.y, size, 0, Math.PI * 2, false)
            context.fillStyle = 'green'
            context.fill()
            music3.muted = false
            canvas.addEventListener('click', function () {
                for (let i = 0; i < allMusic.length; i++) {
                    (allMusic[i]).pause();
                }
                canvas.style.cursor = "auto"
                stop = true
            })
        } else if (start == 4) {
            context.beginPath()
            context.arc(mousePos.x, mousePos.y, size, 0, Math.PI * 2, false)
            context.fillStyle = 'yellow'
            context.fill()
            music4.muted = false
            canvas.addEventListener('click', function () {
                for (let i = 0; i < allMusic.length; i++) {
                    (allMusic[i]).pause();
                }
                canvas.style.cursor = "auto"
                stop = true
            })
        } else if (start == 5) {
            context.beginPath()
            context.arc(mousePos.x, mousePos.y, size, 0, Math.PI * 2, false)
            context.fillStyle = 'black'
            context.fill()
            music5.muted = false
            canvas.addEventListener('click', function () {
                for (let i = 0; i < allMusic.length; i++) {
                    (allMusic[i]).pause();
                }
                canvas.style.cursor = "auto"
                stop = true
            })
        } else if (start == 6) {
            context.beginPath()
            context.arc(mousePos.x, mousePos.y, size, 0, Math.PI * 2, false)
            context.fillStyle = 'white'
            context.fill()
            music6.muted = false
            canvas.addEventListener('click', function () {
                for (let i = 0; i < allMusic.length; i++) {
                    (allMusic[i]).pause();
                }
                canvas.style.cursor = "auto"
                stop = true
            })
        }
    } else {
        document.querySelector('.instruction').style.display = "none"
        return;
    }
})

/* Reset function, which will clear the circles/brushes and initiate their positions by spawn them randomly */

const reset = () => {
    context.clearRect(mouseCircle.x - size - 1, mouseCircle.y - size - 1,
        size * 2 + 2, size * 2 + 2)
    context.clearRect(mouseCircle2.x - size - 1, mouseCircle2.y - size - 1,
        size * 2 + 2, size * 2 + 2)
    context.clearRect(mouseCircle3.x - size - 1, mouseCircle3.y - size - 1,
        size * 2 + 2, size * 2 + 2)
    context.clearRect(mouseCircle4.x - size - 1, mouseCircle4.y - size - 1,
        size * 2 + 2, size * 2 + 2)
    context.clearRect(mouseCircle5.x - size - 1, mouseCircle5.y - size - 1,
        size * 2 + 2, size * 2 + 2)
    context.clearRect(mouseCircle6.x - size - 1, mouseCircle6.y - size - 1,
        size * 2 + 2, size * 2 + 2)
    context.beginPath()
    context.arc(mouseCircle.x, mouseCircle.y, delSize, 0, Math.PI * 2, false)
    context.fillStyle = 'orange'
    context.fill()
    context.beginPath()
    context.arc(mouseCircle2.x, mouseCircle2.y, delSize, 0, Math.PI * 2, false)
    context.fillStyle = 'orange'
    context.fill()
    context.beginPath()
    context.arc(mouseCircle3.x, mouseCircle3.y, delSize, 0, Math.PI * 2, false)
    context.fillStyle = 'orange'
    context.fill()
    context.beginPath()
    context.arc(mouseCircle4.x, mouseCircle4.y, delSize, 0, Math.PI * 2, false)
    context.fillStyle = 'orange'
    context.fill()
    context.beginPath()
    context.arc(mouseCircle5.x, mouseCircle5.y, delSize, 0, Math.PI * 2, false)
    context.fillStyle = 'orange'
    context.fill()
    context.beginPath()
    context.arc(mouseCircle6.x, mouseCircle6.y, delSize, 0, Math.PI * 2, false)
    context.fillStyle = 'orange'
    context.fill()

    showMouseCircle()
}

/* Calling the Reset function by clicking the reset button */

document.querySelector('.reset').addEventListener('click', reset)

/* Clear function, which will clear the entire canvas and initiate the background and the circles/brushes */
/* Calling the Clear function by clicking the clear button */

document.querySelector('.clear').addEventListener('click', function clear() {
    canvas.style.pointerEvents = "none"
    context.clearRect(0, 0, canvas.width, canvas.height)
    pause = true
    stop = true
    size = 30
    delSize = 30 * 1.45
    loop()
    setTimeout(showMouseCircle, 4800)
})

/* Size it function, which will resize the circles/brushes */

function sizeIt() {
    newSize = document.getElementById("size").value
    if (newSize < size) {
        delSize = size * (size / newSize + 15)
        size = newSize
        reset()
    } else {
        size = newSize
        delSize = size * 1.45
        reset()
    }
}

/* Calling the Size It function by clicking the size It button and also by pressing the Enter button */

document.querySelector('.sizeIt').addEventListener('click', sizeIt)
document.getElementById('size').onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        sizeIt()
        return false;
    }
}

/* Download function which will allows the user to download his canvas as a png picture, thanks to fileSaver.js framework */

const download = () => {
    canvas.toBlob(function (blob) {
        saveAs(blob, "My painting.png");
    });
}

/* Calling the download function by clicking the save It button */

document.querySelector('.save').addEventListener('click', download);


/* Attributing the flip class by toggle for the flip animation */

document.querySelector('#infos').addEventListener('click', function () {
    document.querySelector('#infoContainer').classList.toggle("flip")
    if (changeT){
        setTimeout(function () {
            document.querySelector('.prevent').style.display ="block"
            changeT = false
        },200)
    }else{
        document.querySelector('.prevent').style.display ="none"
        changeT = true
    }
})

/* Change the volume logo and Mute function */

document.querySelector('.mute').addEventListener('click',function(){
    const button = document.querySelector('#idButton')
    if (changeI){
        button.classList= "fa fa-volume-off"
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).volume = 0
        }
        changeI = false
    } else{
        button.classList= "fa fa-volume-up"
        for (let i = 0; i < allMusic.length; i++) {
            (allMusic[i]).volume = 1
        }
        changeI = true
    }
})

/* Calling the loop and showMouseCircle functions */

loop()
setTimeout(showMouseCircle, 4800)