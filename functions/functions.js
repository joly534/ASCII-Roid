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
    drawAlienShoot();
    requestAnimationFrame(drawBattle);
}

function prepareShoot(){
    for (i=0;i<=escadron.length;i++){
        if (escadron[i].x == player.x){
            console.log(escadron[i].x);
            alienRank.push(escadron[i]);
            // console.log(alienRank.length);
            let projectile = new Element(escadron[i].x, escadron[i].y, 1,3, '.', '', ''); 
            salve.push(projectile);
        }
    }
}

function drawAlienShoot(){  
    for (let j=0;j< salve.length;j++){
        salve[j].draw('lime'); 
        salve[j].verticalDownMove();
    }
}

function playerShoot(){
    let tir = new Element(player.x, player.y,' ',50, '+','','');
    tir.draw('orange');
    tir.verticalUpMove();

}

function fireSound(){
    let fire = document.getElementById('laser');
    fire.play();
}