let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function start() {
    // keyboard.startGame = true;
    init();
    document.getElementById('start').classList.add('d-none');
    document.getElementById('btnStart').classList.add('d-none');
}


window.addEventListener('keydown', (event) => {
    if(event.code == "ArrowRight" || event.code == "KeyD") {
        keyboard.RIGHT = true;
    }
    if(event.code == "ArrowLeft" || event.code == "KeyA") {
        keyboard.LEFT = true;
    }
    if(event.code == "ArrowUp" || event.code == "KeyW") {
        keyboard.UP = true;
    }
    if(event.code == "ArrowDown" || event.code == "KeyS") {
        keyboard.DOWN = true;
    }
    if(event.code == "Space") {
        keyboard.SPACE = true;
    }
})

window.addEventListener('keyup', (event) => {
    if(event.code == "ArrowRight" || event.code == "KeyD") {
        keyboard.RIGHT = false;
    }
    if(event.code == "ArrowLeft" || event.code == "KeyA") {
        keyboard.LEFT = false;
    }
    if(event.code == "ArrowUp" || event.code == "KeyW") {
        keyboard.UP = false;
    }
    if(event.code == "ArrowDown" || event.code == "KeyS") {
        keyboard.DOWN = false;
    }
    if(event.code == "Space") {
        keyboard.SPACE = false;
    }
});