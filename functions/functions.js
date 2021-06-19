// AVANT QUE LA PARTIE COMMENCE
function begining(){
    document.getElementById('music').play();
    document.getElementById('music').volume = 0.2;
    ctx.font = '4rem serif';
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = "white";
    let text = 'ASCII-ROID : PUSH "ENTER" FOR PLAY !!!';
    let width = howbig(text).width;
    let halfWidth = width/2;
    ctx.fillText(text, middleWidth - halfWidth, middleHeight);
    ctx.strokeText(text, middleWidth - halfWidth, middleHeight);
}

// LA PARTIE EST FINIE
function gameOver(){
    drawMessage('!!! GAME OVER !!!',middleWidth)
    ctx.font = '35px serif';
    ctx.fillStyle = 'lime';
    ctx.fillText('!!! GAME OVER !!!', middleWidth-200, middleHeight);
}
// FONCTION QUI RETOURNE LA TAILLE D'UN TEXTE
function howbig(text){
    let size = ctx.measureText(text);
    return size;
}

// FONCTION QUI AFFICHE UN TEXTE
function drawMessage(message,x,y,sizeFont,colorFill,colorStroke){
    ctx.font = sizeFont + ' serif';
    ctx.fillStyle = colorFill;
    ctxStrokeStyle = colorStroke;
    ctx.fillText(message,x,y);
    ctx.strokeText(message,x,y);
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