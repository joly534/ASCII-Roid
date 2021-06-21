//prototype projectle du jeu 
let Projectile = function(x,y,size){
    this.x = x,
    this.y = y,
    this.size = size,
    this.middleX = this.x + this.size/2, 
    this.middleY= this.y + this.size/2, 
    this.centerCoord = [this.middleX,this.middleY],
    // on dessine l'élément
    this.draw= function(){
        ctx.font = this.size + 'rem serif';
        ctx.fillStyle = 'orange';
        ctx.strokeStyle = 'red';
        ctx.fillText('.', this.x, this.y);
        ctx.strokeText('.', this.x, this.y);
    },


    // l'élément descent
    this.verticalDownMove=function(dir){
        this.y += dir*5;  
    },

    // L'élément monte 
    this.verticalUpMove = function(dir){
        this.y -= dir*5;
    }

    
}