//prototype Element du jeu 
let Element=function(x,y,speed,size,content,audioFire,audioTouch){
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.size = size,
    this.middle = this.size/4;
    this.mesure = 'rem',
    this.content = content,
    this.audiofire = audioFire,
    this.audioTouch = audioTouch,

    // on dessine l'élément
    this.draw= function(color){
        ctx.font = this.size + this.mesure +' serif';
        ctx.fillStyle = color;
        ctx.fillText(this.content, this.x, this.y);
    },

    // l'élément se deplace horizontalement
    this.horizontalMove=function(audio){
        this.x -= this.speed;
        if ((this.x <= 0)||(this.x+this.size >= canvas.width)){
            this.y += 15;
            this.speed = -this.speed;
            // audio.play();
        }         
    },

    // l'élément monte
    this.verticalDownMove=function(){
        this.y += 1;     
    }

    // L'élément descent
    this.verticalUpMove = function(){
        this.y -= 1;
    }
}