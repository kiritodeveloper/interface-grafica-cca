/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});




/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*  funcion para el formulario 

MailerLite Universal */

    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '736768');

    document.addEventListener('DOMContentLoaded', function () {
        const darkModeIcon = document.getElementById('darkMode-icon');
        const body = document.body;
    
        // Recupera la preferencia del modo oscuro del localStorage
        const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
        if (isDarkModeSaved) {
            enableDarkMode();
        }
    
        darkModeIcon.addEventListener('click', function () {
            // Cambia entre modo oscuro y claro
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    
        function enableDarkMode() {
            darkModeIcon.classList.add('bx-sun');
            body.classList.add('dark-mode');
    
            // Guarda el modo actual en localStorage para recordar la preferencia del usuario
            localStorage.setItem('darkMode', 'true');
    
            // Aplica los estilos después de cambiar el modo oscuro
            applyDarkModeStyles();
        }
    
        function disableDarkMode() {
            darkModeIcon.classList.remove('bx-sun');
            body.classList.remove('dark-mode');
    
            // Guarda el modo actual en localStorage para recordar la preferencia del usuario
            localStorage.setItem('darkMode', 'false');
    
            // Aplica los estilos después de cambiar el modo oscuro
            applyDarkModeStyles();
        }
    
        // Función para cambiar el estilo de los elementos en función del modo oscuro
        function applyDarkModeStyles() {
            const elementsToStyle = document.querySelectorAll('.dark-mode-affected');
    
            elementsToStyle.forEach(element => {
                // Aquí puedes ajustar los estilos según tus necesidades
                element.style.backgroundColor = body.classList.contains('dark-mode') ? '#1a1a1a' : ''; // Color de fondo en modo oscuro
                element.style.color = body.classList.contains('dark-mode') ? '#ffffff' : ''; // Color del texto en modo oscuro
                // Añade más estilos según sea necesario
            });
        }
    });
    
    