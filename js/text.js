const score = document.querySelector('.score');
const startscreen = document.querySelector('.startscreen');
const gamearea = document.querySelector('.gamearea');

//console.log('gamearea');


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


    function iscollide(a,b){
        arect = a.getBoundingClientRect();
        brect = b.getBoundingClientRect();

        return !((arect.bottom< brect.top) || (arect.top > brect.bottom) ||
                (arect.right < brect.left) || (arect.left > brect.right))
    }

}
    function movelines(){

        let lines = document.querySelectorAll('.lines');

        lines.forEach(function(item){

            if(item.y >=800){
                item.y -= 880;
            }

            item.y += player.speed;
            item.style.top =item.y + "px";
        })
        
    } 
    


    function moveenemy(car){

        let enemy = document.querySelectorAll('.enemy');

        enemy.forEach(function(item){

           /* if(iscollide(car, item)){

                console.log("boooommmm!");
            }
*/
            if(item.y >=550){
                item.y = -460;
                item.style.left = Math.floor(Math.random() * 350) + "px";
            }

            item.y += player.speed;
            item.style.top =item.y + "px";
        })
        
    } 
    


function gameplay(){
   // console.log("Hey I am clicked.");

    let car = document.querySelector('.car');
    let road = gamearea.getBoundingClientRect();
    console.log(road);

    if(player.start){

        moveenemy(car);
        movelines(); 

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


    for(x=0; x<5; x++)
    {
    let roadline = document.createElement('div');
    roadline.setAttribute('class', 'lines');
    roadline.y =(x*150);
    roadline.style.top =roadline.y + "px";
    gamearea.appendChild(roadline);
    }


    let car = document.createElement('div');
    car.setAttribute('class', 'car');
  //  car.innerText = "Hey I am your car";
    gamearea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    //console.log("tpo position" +car.offsetTop);
    //console.log("left position " + car.offsetLeft);

    for(x=0; x<3; x++)
    {
    let enemycar = document.createElement('div');
    
    enemycar.setAttribute('class', 'enemy');

    enemycar.y =  ( (x+1) * 350) * -1 ;
    enemycar.style.background = 'blue';

    enemycar.style.top =enemycar.y + "px";

    enemycar.style.left = Math.floor(Math.random() * 350) + "px";

    gamearea.appendChild(enemycar);
    }
}


