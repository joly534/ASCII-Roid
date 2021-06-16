let canvas = document.getElementById('earth');
let ctx=canvas.getContext('2d');

canvas.width=800;
canvas.height=600;
let middleWidth = canvas.width/2;
let middleHeight = canvas.height/2;

//prototype Element du jeu 
let Element=function(x,y,speed,size,content){
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.size = size,
    this.mesure = 'px',
    this.content = content,
    // on dessine l'élément
    this.draw= function(){
        ctx.font = this.size + this.mesure +' serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.content, this.x, this.y);
    },
    // l'élément se deplace
    this.ennemyMove=function(){
        this.x -= this.speed;
        if ((this.x <= 0)||(this.x+this.size >= canvas.width)){
            this.y += this.size;
            this.speed = -this.speed;
        }          
    }
    // dessin de la balle d'un élément
    this.drawShoot = function(sizeShoot, contentShoot, posXShoot, posYShoot){
        ctx.font = sizeShoot + this.mesure + 'serif';
        ctx.fillStyle = 'lime';
        ctx.fillText(contentShoot, posXShoot, posYShoot);        
    }
    this.moveShoot = function(){
        
    }
}

let escadron = [];
let posX = 80;
let posY = 50;
for (let i=1;i<=6;i++) {
    for (let j=1;j<=9;j++){
        let alien = new Element(posX,posY, 10, 20, "╬");
        escadron.push(alien);
        posX += 80;
        console.log(posY)
    };
    posY+= 30;
    posX = 80;
}
// fonction MAIN
function update(){
    setInterval(() => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        for (let i=0;i<escadron.length;i++){
            escadron[i].draw();
            escadron[i].ennemyMove();
            escadron[i].drawShoot(10,'.',escadron[i].x, escadron[i].y);
        }  
    }, 1000);
}

update();