// Barra de navegacion
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});



// Donation
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario de donación
    const form = document.querySelector('form');

    // Añade un evento al enviar el formulario
    form.onsubmit = function() {
        // Muestra un mensaje de agradecimiento
        alert("¡Gracias por invitarme a un café! ☕");
    };
});


// Suscription
document.getElementById('subscribeForm').onsubmit = function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    alert(`¡Gracias por suscribirte con ${email}!`);

    // Aquí podrías enviar el correo a tu servidor o API
    // Puedes usar Fetch API para enviar el correo a tu backend
};



