let canvas = document.getElementById('earth');
let ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let middleWidth = canvas.width/2;
let middleHeight = canvas.height/2;



let escadron = [];
let posX = 80;
let posY = 50;
let state=true;
for (let i=1;i<=6;i++) {
    for (let j=1;j<=9;j++){
        let alien = new Element(posX,posY, 10, 20, "╬", "", "");
        escadron.push(alien);
        posX += 80;
    };
    posY+= 30;
    posX = 80;
}

let player = new Element(middleWidth, canvas.height - 100, 20, 60, "ψ", "", "");
let middlePlayer = player.size/2;


// fonction MAIN
function update(){
    player.draw('red');
    setInterval(() => {
        ctx.clearRect(0,0,canvas.width, 600);
        for (let i=0;i<escadron.length;i++){
            escadron[i].draw('white');
            escadron[i].move();
            escadron[i].drawShoot(10, 'lime', '.',escadron[i].x, escadron[i].y);
        }  
    }, 1000);
}

update();