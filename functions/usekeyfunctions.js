window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }  
    switch (event.key) { 
      // le joueur bouge     
      case "ArrowLeft":
        player.setDir(-1);
        if (player.x<=0){
          player.setDir(0);
        }        
        break;

      case "ArrowRight":     
       player.setDir(1);
       
       if (player.x+34>=canvas.width){
         player.setDir(0);
       }       
        break;
        
      //le joueur tire
      case " ":      
      let tir = new Projectile(player.x, player.y,3);
      salvePlayer.push(tir);
      playSound('laserPlayer');
      break;

      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
     }
})

window.addEventListener("keyup", function (event){
  if (event.key != ' ') {
    player.setDir(0);
  }
})