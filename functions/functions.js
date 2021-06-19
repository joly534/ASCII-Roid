// LA PARTIE EST FINIE
function gameOver(){
    ctx.font = '35px serif';
    ctx.fillStyle = 'lime';
    ctx.fillText('!!! GAME OVER !!!', middleWidth-200, middleHeight);
}


// ON DESSINE LES ALIENS
function drawAliens(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for (let i=0;i<escadron.length;i++){
        
        escadron[i].draw('white');
        escadron[i].horizontalMove(wallSound);
    }
    requestAnimationFrame(drawAliens);
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