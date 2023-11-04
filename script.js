alert('E ai')

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);
  
    // Asignar posición y tamaño aleatorio a la burbuja
    const position = Math.random() * window.innerWidth; // Altura aleatoria entre 0 y 100%
    bubble.style.left = `${position}px`;
    
         // Variables para controlar el movimiento y eliminación de la burbuja
    const startTime = Date.now();
    const duration = 3000; // Duración de vida de la burbuja (3 segundos)
    const bottomLimit = -20; // Altura en la que la burbuja desaparece en la parte superior
  
  // Función de actualización para mover la burbuja
  function updateBubble() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;
  
    if (progress < 1) {
        const bottomPosition = window.innerHeight * progress; // Movimiento hacia arriba
        bubble.style.bottom = `${bottomPosition}px`;
        requestAnimationFrame(updateBubble);
    } else {
      document.body.removeChild(bubble); // Eliminar la burbuja cuando termine el tiempo de vida
    }
  }
  
  requestAnimationFrame(updateBubble);
  }   
  
  // Generar burbujas periódicamente
  setInterval(createBubble, 1000); // Cambiar 1000 a un valor menor para más