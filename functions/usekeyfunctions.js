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
        game === 'Jouez';
        console.log('entrée appuyée');
        break;

      //le joueur tire
      case " ":       
          console.log('shoot');
          playerShoot();
      break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
     }
})