window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }  
    switch (event.key) { 
      // le joueur bouge     
      case "ArrowLeft":
        player.setDir(-1);        
        break;

      case "ArrowRight":     
       player.setDir(1);
        break;
        
      //le joueur tire
      case " ":      
      let tir = new Projectile(player.x, player.y,1,1, '+','','');
      salvePlayer.push(tir);
      break;

      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
     }
})

window.addEventListener("keyup", function (event){
  player.setDir(0);
})