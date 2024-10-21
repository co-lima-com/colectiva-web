'use strict';

// Seleccionamos el formulario
const form = document.getElementById('registrationForm');

// Agregamos un evento de submit al formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envíe por defecto
    e.preventDefault();

    // Capturamos los datos del formulario
    const userNombre = document.getElementById('userNombre').value;
    const userApellidoPaterno = document.getElementById('userApellidoPaterno').value;
    const userApellidoMaterno = document.getElementById('userApellidoMaterno').value;
    const userFechaNacimiento = document.getElementById('userFechaNacimiento').value;
    const userDNI = document.getElementById('userDNI').value;
    const userDireccion = document.getElementById('userDireccion').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    // Creamos un objeto con los datos del formulario
    const formData = {
        userNombre,
        userApellidoPaterno,
        userApellidoMaterno,
        userFechaNacimiento,
        userDNI,
        userDireccion,
        userEmail,
        userPassword
    };

    // Almaceno el objeto en un localstorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Para imprimir y ver errores
    console.log(formData);

    alert('¡Registro exitoso! Puedes iniciar sesión.');

    // Redirigir al usuario a la página index.html
        window.location.href = '../index.html';
});