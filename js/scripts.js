console.log('¡El archivo JS se ha cargado correctamente!');
// Obtenemos el botón con el id "miBoton"
document.getElementById('miBoton').addEventListener('click', function() {
    // Cambiar el texto del botón cuando se hace clic
    document.getElementById('miBoton').innerText = '¡Gracias por hacer clic!';
    document.getElementById('miBoton').style.transition = 'transform 0.5s';
    document.getElementById('miBoton').style.transform = 'scale(1.3)'; // Aumenta el tamaño del botón
    // Después de la animación, vuelve al tamaño normal
    setTimeout(function() {
        document.getElementById('miBoton').style.transform = 'scale(2)';
    
setTimeout(function() {
    window.location.href = "reserva-tu-evento.html";  // Redirige a la página de reservas
    }, 500); // Espera 500ms después de escalar a 2
    }, 300);
   });