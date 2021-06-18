window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }  
    switch (event.key) { 
      // le joueur bouge     
      case "ArrowLeft":
        player.x -= player.speed;
        player.draw();
        break;
      case "ArrowRight":     
        player.x += player.speed;
        player.draw();
        break; 

      //le joueur tire
      case " ":       
          console.log('shoot')
          player.drawShoot(5, 'lime', '֎', player.x + middlePlayer, canvas.height - 100);
      break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
     }
})