let canvas = document.getElementById('earth');
let ctx=canvas.getContext('2d');

canvas.width=800;
canvas.height=600;
let middleWidth = canvas.width/2;
let middleHeight = canvas.height/2;
//prototype player (hero ou alien)

let Player=function(x,y,speed,size,content){
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.size = size,
    this.mesure = 'px',
    this.content = content,
    // on dessine le joueur (hero ou alien)
    this.draw= function(){
        ctx.font = this.size + this.mesure +' serif';
        ctx.fillStyle = 'lime';
        ctx.fillText(this.content, this.x, this.y);
    },
    // le joueur se deplace
    this.move=function(){
        this.x += this.speed;
    }
}

let alien = new Player(middleWidth,100, 10, "20", "╬");
// fonction MAIN
function update(){
    alien.draw();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    setInterval(alien.move(), 100);
}

update();