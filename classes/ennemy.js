//prototype Element du jeu 
let Ennemy=function(x,y,speed,size,content){
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.size = size,
    this.content = content,
    this.middleX = this.x + this.size/2, 
    this.middleY= this.y + this.size/2, 
    this.centerCoord = [this.middleX,this.middleY];

    // on dessine l'élément
    this.draw= function(colorFill, colorStroke){
        ctx.font = this.size +'px serif';
        ctx.fillStyle = colorFill;
        ctx.strokeStyle = colorStroke;
        ctx.fillText(this.content, this.x, this.y);
        ctx.strokeText(this.content, this.x, this.y);
    },

    // l'élément se deplace horizontalement
    this.move=function(){
        this.x -= this.speed;
        if ((this.x <= 0)||(this.x+10 >= canvas.width)){
            this.y += 15;
            this.speed = -this.speed;
            playSound('touchWall');
        }         
    }

}