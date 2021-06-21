// AVANT QUE LA PARTIE COMMENCE
function begining(){
    // playSound('music');
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


function playSound(music){
    let sound = document.getElementById(music);
    sound.play();
    sound.volume= 0.2;
}

function stopSound(music){
    let sound = document.getElementById(music);    
    sound.pause();
    sound.currentTime = 0;
}