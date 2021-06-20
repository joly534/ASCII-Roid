//prototype Element du jeu 
let Ennemy=function(x,y,speed,size,content,audioFire,audioTouch){
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.size = size,
    this.middle = this.size/4;
    this.mesure = 'rem',
    this.state = true;
    this.content = content,
    this.audiofire = audioFire,
    this.audioTouch = audioTouch,

    // on dessine l'élément
    this.draw= function(colorFill, colorStroke){
        ctx.font = this.size + this.mesure +' serif';
        ctx.fillStyle = colorFill;
        ctx.strokeStyle = colorStroke
        ctx.fillText(this.content, this.x, this.y);
        ctx.strokeText(this.content, this.x, this.y);
    },

    // l'élément se deplace horizontalement
    this.horizontalMove=function(audio){
        this.x -= this.speed;
        if ((this.x <= 0)||(this.x+this.size >= canvas.width)){
            this.y += 15;
            this.speed = -this.speed;
            // audio.play();
        }         
    }
}