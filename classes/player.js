//prototype Element du jeu 
let Player=function(x,y,speed,size,content,audioFire){
    this.x = x,
    this.y = y,
    this.xDir = 0;
    this.speed = speed,
    this.size = size,
    this.middle = this.size/4;
    this.mesure = 'rem',
    this.state = true;
    this.content = content,
    this.audiofire = audioFire,

    // on dessine l'élément
    this.draw= function(colorFill, colorStroke){
        ctx.font = this.size + this.mesure +' serif';
        ctx.fillStyle = colorFill;
        ctx.strokeStyle = colorStroke
        ctx.fillText(this.content, this.x, this.y);
        ctx.strokeText(this.content, this.x, this.y);
    },
    this.setDir = function(dir) {
        this.xDir = dir;
    }
    this.move = function(){
        this.x += this.xDir * 5;
    }

    this.explode = function(){
        
    }
}