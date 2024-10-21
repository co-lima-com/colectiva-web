'use strict';

// Seleccionamos el formulario
const form = document.getElementById('registrationForm');

// Agregamos un evento de submit al formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envíe por defecto
    e.preventDefault();

    // Capturamos los datos del formulario
    const driverNombre = document.getElementById('driverNombre').value;
    const driverApellidoPaterno = document.getElementById('driverApellidoPaterno').value;
    const driverApellidoMaterno = document.getElementById('driverApellidoMaterno').value;
    const driverFechaNacimiento = document.getElementById('driverFechaNacimiento').value;
    const driverDNI = document.getElementById('driverDNI').value;
    const driverDireccion = document.getElementById('driverDireccion').value;
    const driverEmail = document.getElementById('driverEmail').value;
    const driverPassword = document.getElementById('driverPassword').value;

    // Creamos un objeto con los datos del formulario
    const formData = {
        driverNombre,
        driverApellidoPaterno,
        driverApellidoMaterno,
        driverFechaNacimiento,
        driverDNI,
        driverDireccion,
        driverEmail,
        driverPassword
    };

    // Almaceno el objeto en un localstorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Para imprimir y ver errores
    console.log(formData);
    alert('¡Registro exitoso! Te contactaremos a la brevedad.');

    // Redirigir al usuario a la página registroColectivo.html
    window.location.href = '../pages/registroColectivo.html';
});