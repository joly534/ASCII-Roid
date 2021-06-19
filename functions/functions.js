// AVANT QUE LA PARTIE COMMENCE
function begining(){
    document.getElementById('music').play();
    document.getElementById('music').volume = 0.2;
    ctx.font = '4rem serif';
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = "white";
    let text = 'ASCII-ROID : PUSH "ENTER" FOR PLAY !!!';
    let size = howbig(text).width;
    let halfSize = size/2;
    ctx.fillText(text, middleWidth - halfSize, middleHeight);
    ctx.strokeText(text, middleWidth - halfSize, middleHeight);
}

// LA PARTIE EST FINIE
function gameOver(){
    ctx.font = '35px serif';
    ctx.fillStyle = 'lime';
    ctx.fillText('!!! GAME OVER !!!', middleWidth-200, middleHeight);
}
// FONCTION QUI RETOURNE LA TAILLE D'UN TEXTE
function howbig(text){
    let metrics = ctx.measureText(text);
    return metrics;
}

// FONCTION QUI AFFICHE UN TEXTE
function drawMessage(message){
    ctx
}

// ON DESSINE LES elements du jeu
function drawBattle(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (let i=0;i<escadron.length;i++){
        
        escadron[i].draw('white');
        escadron[i].horizontalMove(wallSound);
    }
    player.draw('lime');
    requestAnimationFrame(drawBattle);
}

function alienShoot(){  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (let j=50;j< salve.length;j++){
        salve[j].draw('lime'); 
        salve[j].verticalDownMove();
        if ((salve[j].x >= player.x)&&(salve[j].y+salve[j].size >= player.x)){
            ctx.clearRect(0,0,canvas.width, canvas.height);
            gameOver();
            console.log('game over');
        }
    }
    window.requestAnimationFrame(alienShoot);
    let sound = new Audio(); 
    sound.src = "sound/Laser-Fire/laserfire01.mp3";
    sound.play();

}

function playerShoot(){
    let tir = new Element(player.x, player.y,' ',50, '+');
    tir.draw('orange');
    tir.verticalUpMove();

}

function touchWallSound(){
}

function fireSound(){
    let fire = document.getElementById('laser');
    fire.play();
}