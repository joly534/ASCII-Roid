

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
        
      case "Enter":
        game === 'Jouez';
        console.log('entrée appuyée');
        break;

      //le joueur tire
      case "Shift":       
          console.log('shoot');
          let tir = new Element()
          player.drawShoot('lime', '֎', player.x, canvas.height - 100);
      break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
     }
})