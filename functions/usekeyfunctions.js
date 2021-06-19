window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }  
    switch (event.key) { 
      // le joueur bouge     
      case "ArrowLeft":
        player.x -= player.speed;
        player.draw();
        if(player.x <= 0){
          player.speed = 0;
        }
        break;
      case "ArrowRight":     
        player.x += player.speed;
        player.draw();
        break;
        
      case "Enter":
        switch (game){
          case true:
            //pass;
          break;
          case false:
            game = true;
            drawBattle();
          break;

        }
        break;

      //le joueur tire
      case " ":       
          playerShoot();
          fireSound();
      break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
     }
})