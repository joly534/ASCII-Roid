//prototype Element du jeu 
let Element=function(x,y,speed,size,content){
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.size = size,
    this.middle = this.size/4;
    this.mesure = 'px',
    this.content = content,
    // on dessine l'élément
    this.draw= function(color){
        ctx.font = this.size + this.mesure +' serif';
        ctx.fillStyle = color;
        ctx.fillText(this.content, this.x, this.y);
    },
    // l'élément se deplace
    this.elementMove=function(){
        this.x -= this.speed;
        if ((this.x <= 0)||(this.x+this.size >= canvas.width)){
            this.y += this.size;
            this.speed = -this.speed;
        }         
    }
    //dessin de la balle d'un élément
    this.drawShoot = function(sizeShoot, color, contentShoot, posYShoot){
        ctx.font = sizeShoot + this.mesure + 'serif';
        ctx.fillStyle = color;
        ctx.fillText(contentShoot, this.x+this.middle,posYShoot);        
    }
    this.shoot = function(sizeShoot, color, contentShoot, status){
        this.posXShoot = posXShoot;
        this.posYShoot = posYShoot;
        this.status = status;
        ctx.font = sizeShoot + this.mesure + 'serif';
        ctx.fillStyle = color;
        ctx.fillText(contentShoot, this.posXShoot, this.posYShoot);   

    }
}