'use strict'

//Seleccionamos el formulario
const form = document.getElementById('registrationForm');
const storeButton = document.getElementById('storeButton');

// Agregamos un evento de submit al formulario
storeButton.addEventListener('click', (e) => {
    // Evitamos que el formulario se envíe por defecto
    e.preventDefault();

    //Capturamos los datos del formulario
    const userNombre = document.getElementById('userNombre').value;
    const userApellidoPaterno = document.getElementById('userApellidoPaterno').value;
    const userApellidoMaterno = document.getElementById('userApellidoMaterno').value;
    const userFechaNacimiento = document.getElementById('userFechaNacimiento').value;
    const userDNI = document.getElementById('userDNI').value;
    const userDireccion = document.getElementById('userDireccion').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const userDniCara = document.getElementById('userDniCara').value;
    const userDniContraCara = document.getElementById('userDniContraCara').value;


    // Creamos un objeto con los datos del formulario
    const formData = {
        userNombre,
        userApellidoPaterno,
        userApellidoMaterno,
        userFechaNacimiento,
        userDNI,
        userDireccion,
        userEmail,
        userPassword,
        userDniCara,
        userDniContraCara
    };
  


    // Almaceno el objeto en un localstorage
    localStorage.setItem('formData', JSON.stringify(formData));

    //Recuperar del localstorage
    const formDataString = localStorage.getItem('formData');

    //Deserializar el objeto
    JSON.parse('formdata',formDataString);

    // Para imprimir y ver errores
    console.log(formData);

}
);