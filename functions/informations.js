function drawScore(){
    ctx.font = '30px serif';
    ctx.fillStyle= 'white';
    ctx.fillText('Score : ' + score + ' points', canvas.width/3 * 2,50);
}

function drawHowManyLives(){
    ctx.font = '30px serif';
    ctx.fillStyle= 'white';
    ctx.fillText('Vies restantes : ' + lives, 50 * 2,50);

}