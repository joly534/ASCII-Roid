let canvas = document.getElementById('earth');
let ctx=canvas.getContext('2d');

canvas.width=1000;
canvas.height=600;

let middleWidth = canvas.width/2;
let middleHeight = canvas.height/2;


let escadron = [];
let salveEnnemy = [];
let salvePlayer = [];
let posX = 80;
let posY = 50;
let game = false;

let wallSound = document.getElementById('touchWall');

// instanciation du joueur
let player = new Player(middleWidth, canvas.height - 50, 20, 3, "ψ", "");
let middlePlayer = player.size/2;

// instanciation des aliens
for (let i=1;i<=6;i++) {
  for (let j=1; j<=10; j++){
    let alien = new Ennemy(posX,posY, 1, 1, "╬");
    escadron.push(alien);
    posX += 80;
  };
posY+= 30;
posX = 80;
}
setInterval(() => {
  for (i=50; i <escadron.length;i++){
      let projectileEnnemy = new Projectile(escadron[i].x, escadron[i].y, 3, 'blue', 'white'); 
      salveEnnemy.push(projectileEnnemy);
      playSound('laserEnnemy');
  }        
}, 3000);





// fonction MAIN
function update(){
    
  ctx.clearRect(0,0,canvas.width, canvas.height);
    
    player.draw('blue','lime');
    player.move();
    
    // prepareShoot();
    for (let i=0;i<escadron.length;i++){        
        escadron[i].draw('white','blue',wallSound);
        escadron[i].move();
    }
    
    for (let m=0;m<salveEnnemy.length;m++){
        salveEnnemy[m].draw(); 
        salveEnnemy[m].verticalDownMove(1);        
    }

    for (let k=0;k<salvePlayer.length; k++){
        salvePlayer[k].draw('lime','orange');
        salvePlayer[k].verticalUpMove(1);
        for (let l=0;l<escadron.length;l++){

            if (salvePlayer[k].x === escadron[l].x&&salvePlayer[k].y === escadron[l].y){
                console.log('touché');
                escadron.splice(l,1);
            }
        }
        
        

    }
    window.requestAnimationFrame(update);
    
}

window.requestAnimationFrame(update); 