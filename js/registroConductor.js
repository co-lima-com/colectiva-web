'use strict';

//Seleccionamos el formulario
const form = document.getElementById('registrationForm');
const buttonSubmit = document.getElementById('storeButton');

buttonSubmit.disabled = true;

// Agregamos un evento de submit al formulario
form.addEventListener('submit', (e) => {
    // Evitamos que el formulario se envíe por defecto
    e.preventDefault();

    //Capturamos los datos del formulario
    const driverNombre = document.getElementById('driverNombre').value;
    const driverApellidoPaterno = document.getElementById('driverApellidoPaterno').value;
    const driverApellidoMaterno = document.getElementById('driverApellidoMaterno').value;
    const driverFechaNacimiento = document.getElementById('driverFechaNacimiento').value;
    const driverDNI = document.getElementById('driverDNI').value;
    const driverDireccion = document.getElementById('driverDireccion').value;
    const driverEmail = document.getElementById('driverEmail').value;
    const driverPassword = document.getElementById('driverPassword').value;
    const driverDniCara = document.getElementById('driverDniCara').value;
    const driverDniContraCara = document.getElementById('driverDniContraCara').value;
    const driverSoatCara = document.getElementById('driverSoatCara').value;
    const driverSoatContraCara = document.getElementById('driverSoatContraCara').value;


    // Creamos un objeto con los datos del formulario
    const formData = {
        driverNombre,
        driverApellidoPaterno,
        driverApellidoMaterno,
        driverFechaNacimiento,
        driverDNI,
        driverDireccion,
        driverEmail,
        driverPassword,
        driverDniCara,
        driverDniContraCara,
        driverSoatCara,
        driverSoatContraCara
    };

    let allFieldsFilled = true;
    [driverNombre, driverApellidoPaterno, driverApellidoMaterno, driverFechaNacimiento, driverDNI, driverDireccion, driverEmail, driverPassword, driverDniCara, driverDniContraCara, driverSoatCara, driverSoatContraCara].forEach((value) => {
      if (value.trim() === '') {
        allFieldsFilled = false;
      }
    });
  
    // Si todos los campos están llenos, habilitamos el botón
    if (allFieldsFilled) {
      buttonSubmit.disabled = false;
      
    } else {
      // De lo contrario, deshabilitamos el botón
      buttonSubmit.disabled = true;
      
    }

    localStorage.setItem('formData', JSON.stringify(formData));

    // Almaceno el objeto en un localstorage
    

    // //Recuperar del localstorage
    // const formDataString = localStorage.getItem('formData');

    // //Deserializar el objeto
    // JSON.parse('formdata',formDataString);

    // Para imprimir y ver errores
    console.log(formData);
    alert('¡Registro exitoso! Te contactaremos a la brevedad.');

}
);