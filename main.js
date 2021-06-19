let canvas = document.getElementById('earth');
let ctx=canvas.getContext('2d');

canvas.width=window.innerWidth -50;
canvas.height=window.innerHeight -50;

let middleWidth = canvas.width/2;
let middleHeight = canvas.height/2;


let escadron = [];
let salve = [];
let posX = 80;
let posY = 50;
let game = false;

let wallSound = document.getElementById('touchWall');

for (let i=1;i<=6;i++) {
    for (let j=1; j<=10; j++){
        let alien = new Element(posX,posY, 1, 20, "╬");
        escadron.push(alien);
        posX += 80;
    };
    posY+= 30;
    posX = 80;
}
setInterval(() => {
    for (i=0;i<escadron.length;i++){
        let projectile = new Element(escadron[i].x, escadron[i].y, 100,10, '|', '', ''); 
        salve.push(projectile);
    }

}, 2000); 

let player = new Element(middleWidth, canvas.height - 50, 20, 60, "ψ", "", "");
let middlePlayer = player.size/2;


// fonction MAIN
function update(){
    begining();
    
}
window.requestAnimationFrame(update);