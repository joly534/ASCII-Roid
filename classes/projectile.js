//prototype projectle du jeu 
let Projectile = function(x,y,size,colorFill,colorStroke){
    this.x = x,
    this.y = y,
    this.size = size,
    this.colorFill = colorFill,
    this.colorStroke = colorStroke,
    // on dessine l'élément
    this.draw= function(){
        ctx.font = this.size + 'rem serif';
        ctx.fillStyle = colorFill;
        ctx.strokeStyle = colorStroke
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