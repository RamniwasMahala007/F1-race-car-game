const score = document.querySelector('.score');
const startscreen = document.querySelector('.startscreen');
const gamearea = document.querySelector('.gamearea');

console.log('gamearea');


startscreen.addEventListener('click',start);

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
    window.requestAnimationFrame(gameplay);
}

function start(){
    window.requestAnimationFrame(gameplay);
}


