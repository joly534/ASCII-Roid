// AVANT QUE LA PARTIE COMMENCE
function begining(){
    // document.getElementById('music').play();
    // document.getElementById('music').volume = 0.2;
    ctx.font = '4rem serif';
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = "white";
    let text = 'ASCII-ROID';
    let width = howbig(text).width;
    let halfWidth = width/2;
    ctx.fillText(text, middleWidth - halfWidth, middleHeight);
    ctx.strokeText(text, middleWidth - halfWidth, middleHeight);
    
}

// ON ARRETTE LA PARTIE EN COURS
function endGame(){
    for (let i=0;i<=escadron.length;i++){
        escadron[i].destroy();
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    begining();
}

// LA PARTIE EST FINIE
function gameOver(){
    ctx.font = '35px serif';
    ctx.fillStyle = 'lime';
    ctx.fillText('!!! GAME OVER !!!', middleWidth-200, middleHeight);
}

// FONCTION QUI RETOURNE LE WIDTH D'UN TEXTE
function howbig(text){
    let size = ctx.measureText(text);
    return size;
}

// ON DESSINE LE jeu
function drawBattle(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    player.draw('blue','lime');
    player.move();
    for (let i=0;i<escadron.length;i++){        
        escadron[i].draw('white','blue');
        escadron[i].horizontalMove(wallSound);
    }
    prepareShoot();
    for (let j=0;j<=salveEnnemy.length;j++){
        salveEnnemy[j].draw(); 
        salveEnnemy[j].verticalDownMove(1);
        
    }

    for (let k=0;k<=salvePlayer.length; k++){
        salvePlayer[k].draw('lime','orange');
        salvePlayer[k].verticalUpMove(-1);
        firePlayerSound();

    }
    requestAnimationFrame(drawBattle);
}

function prepareShoot(){
    setInterval(() => {
        for (i=50;i<=escadron.length;i++){
            let projectile = new Projectile(escadron[i].x, escadron[i].y,3,'blue', 'white'); 
            salveEnnemy.push(projectile);
            fireEnnemySound();
        }        
    }, 2000);
}

function fireEnnemySound(){
    let fire = document.getElementById('laserEnnemy');
    fire.play();
}

function firePlayerSound(){
    let fire = document.getElementById('laserPlayer');
    fire.play();
}
