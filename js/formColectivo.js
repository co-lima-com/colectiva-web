'use strict';

// Obtener el formulario
const formulario = document.getElementById('registroColectivo');

// Agregar un evento de envío al formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const marca = document.getElementById('poolMarca').value;
  const year = document.getElementById('poolYear').value;
  const modelo = document.getElementById('poolModelo').value;
  const placa = document.getElementById('poolPlaca').value;
  const distritoInicio = document.getElementById('poolParaderoInicio').value;
  const distritoLlegada = document.getElementById('poolParaderoLlegada').value;
  const numeroAsientos = document.getElementById('poolNumeroAsientos').value;
  const foto1 = document.getElementById('poolFoto1').value;

  // Crear un objeto con la información del formulario
  const datosVehiculo = {
    marca,
    year,
    modelo,
    placa,
    distritoInicio,
    distritoLlegada,
    numeroAsientos,
    foto1,
  };

  // Almacenar la información en el local storage
  localStorage.setItem('datosVehiculo', JSON.stringify(datosVehiculo));

  // Mostrar un mensaje de confirmación
  alert('Datos registrados con éxito!');

  
  // Redirigir al usuario a la página fichaColectivoForm.html
  window.location.href = '../pages/fichaColectivoForm.html';
});

