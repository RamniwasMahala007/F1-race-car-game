const score = document.querySelector('.score');
const startscreen = document.querySelector('.startscreen');
const gamearea = document.querySelector('.gamearea');

console.log('gamearea');


startscreen.addEventListener('click',start);

let player = {};

let keys = {ArrowUp : false, ArrowDown : false, ArrowLeft : false, ArrowRight : false}


window.addEventListener('keyup',keyUp);
window.addEventListener('keydown',keyDown);

function keyDown(e){
    //e.preventDefault();
    keys[e.key]=true; 
    //console.log(e.key);
    //console.log(keys);
    //document.getElementsByClassName("gamearea");
}

function keyUp(e){
    //e.preventDefault();
    keys[e.key]=false;
    //console.log(e.key);
    
}
function gameplay(){
    console.log("Hey I am clicked.");
    if(player.start){
    window.requestAnimationFrame(gameplay);
    }
}

function start(){
     
    gamearea.classList.remove('hide');
    startscreen.classList.add('hide');
    player.start = true;
    window.requestAnimationFrame(gameplay);

    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    car.innerText = "Hey I am your car";
    gamearea.appendChild(car)
}


