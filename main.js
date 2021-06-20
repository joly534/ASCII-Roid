let canvas = document.getElementById('earth');
let ctx=canvas.getContext('2d');

canvas.width=1000;
canvas.height=600;

let middleWidth = canvas.width/2;
let middleHeight = canvas.height/2;


let escadron = [];
let salveEnnemy = [];
let salveEPlayer = [];
let alienRank = [];
let posX = 80;
let posY = 50;
let game = false;

let wallSound = document.getElementById('touchWall');

for (let i=1;i<=6;i++) {
    for (let j=1; j<=10; j++){
        let alien = new Element(posX,posY, 1, 1, "╬",'',"");
        escadron.push(alien);
        posX += 80;
    };
    posY+= 30;
    posX = 80;
}


let player = new Element(middleWidth, canvas.height - 50, 20, 3, "ψ", "", "");
let middlePlayer = player.size/2;


begining();

// fonction MAIN
function play(){
    switch (game){
        case true:
          //pass;
        break;
        case false:
          game = true;
          drawBattle();
          prepareShoot();
          console.log(salve);
        break;  
    }
    
window.requestAnimationFrame(play);
}
