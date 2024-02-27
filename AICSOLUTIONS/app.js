
  document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del menú, excluyendo el enlace del dropdown
    const menuLinks = document.querySelectorAll('.navbar-menu > li > a:not(.dropdown-toggle)');

    // Agregar un evento de clic a cada enlace
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Obtener el checkbox del menú
            const menuCheckbox = document.getElementById('menu');
            // Verificar si el menú está abierto
            if (menuCheckbox.checked) {
                // Cerrar el menú si está abierto
                menuCheckbox.checked = false;
            }
        });
    });


    // Cerrar el menú cuando se desplaza hacia abajo
    window.addEventListener('scroll', function() {
        const menuCheckbox = document.getElementById('menu');
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
        }
    });
});

/*
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 0) { // ajusta la posición según sea necesario
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});
*/
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= lastScrollTop) {
        header.classList.remove('fixed-header');
    } else {
        header.classList.add('fixed-header');
    }
    
    lastScrollTop = currentScroll;
});
