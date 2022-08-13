const score = document.querySelector('.score');
const startscreen = document.querySelector('.startscreen');
const gamearea = document.querySelector('.gamearea');

console.log('gamearea');


startscreen.addEventListener('click',start);

let player = { speed : 5};

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
    let car = document.querySelector('.car');
    let road = gamearea.getBoundingClientRect();
    console.log(road);

    if(player.start){
   
        if(keys.ArrowUp && player.y>(road.top + 70)) {player.y -= player.speed}
        if(keys.ArrowDown && player.y < (road.bottom - 70)) {player.y += player.speed}
        if(keys.ArrowLeft && player.x>0) {player.x -= player.speed}
        if(keys.ArrowRight && player.x<(road.width-50)) {player.x += player.speed}

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

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
  //  car.innerText = "Hey I am your car";
    gamearea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    console.log("tpo position" +car.offsetTop);
    console.log("left position " + car.offsetLeft);
}


