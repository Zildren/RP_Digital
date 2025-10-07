// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const eventosLink = document.getElementById('eventos');
    const moreEvents = document.getElementById('more-events');
    const plusSign = document.getElementById('plus');

    // Inicialmente ocultamos la lista de eventos
    moreEvents.style.display = 'none';

    // Función para alternar la visibilidad de los eventos
    eventosLink.addEventListener('click', function(e) {
        e.preventDefault();  // Evitar que el enlace realice la acción predeterminada
        // Alternar la visibilidad de los eventos
        if (moreEvents.style.display === 'none') {
            moreEvents.style.display = 'block';  // Mostrar eventos
            plusSign.textContent = '-';  // Cambiar el signo a -
        } else {
            moreEvents.style.display = 'none';  // Ocultar eventos
            plusSign.textContent = '+';  // Cambiar el signo a +
        }
    });
});