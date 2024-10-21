'use strict';

// Seleccionamos el formulario de inicio de sesión
const form = document.getElementById('inicioSesion');

// Agregamos un evento de submit al formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envíe por defecto
    e.preventDefault();

    // Capturamos los datos del formulario
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    // Recuperar los datos del localStorage
    const formDataString = localStorage.getItem('formData');

    if (formDataString) {
        // Deserializar el objeto
        const formData = JSON.parse(formDataString);

        // Verificar si el email y la contraseña coinciden
        if (formData.userEmail === userEmail && formData.userPassword === userPassword) {
            alert('¡Inicio de sesión exitoso!');
            // Redirigir al usuario a la página principal o a donde desees
            window.location.href = './index.html';
        } else {
            alert('Email o contraseña incorrectos. Inténtalo de nuevo.');
        }
    } else {
        alert('No hay datos de usuario registrados. Por favor, regístrate primero.');
    }
});
