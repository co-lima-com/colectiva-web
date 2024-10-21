'use strict';

// Función para cargar todos los datos de los viajes desde el local storage y actualizar el HTML
function cargarDatosViajes() {
  const titulosSection = document.getElementById("titulos");
  const cuerpoSection = document.getElementById("cuerpo");

  // Limpiar secciones antes de agregar nuevos elementos
  titulosSection.innerHTML = "";
  cuerpoSection.innerHTML = "";

  // Obtener los datos del vehículo desde localStorage
  const datosVehiculo = JSON.parse(localStorage.getItem('datosVehiculo'));

  if (datosVehiculo) {
    // Actualizar el título
    const h2 = document.createElement("h2");
    h2.textContent = `${datosVehiculo.marca} ${datosVehiculo.year} ${datosVehiculo.modelo}`;
    titulosSection.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = `Origen: ${datosVehiculo.distritoInicio || "Desconocido"}, Destino: ${datosVehiculo.distritoLlegada || "Desconocido"}`;
    titulosSection.appendChild(h3);

    const caracteristicasList = document.createElement("ul");
    
    // Actualizar la lista de características
    const placaItem = document.createElement("li");
    placaItem.textContent = `Número de placa: ${datosVehiculo.placa}`;
    caracteristicasList.appendChild(placaItem);

    const asientosItem = document.createElement("li");
    asientosItem.textContent = `Número de asientos: ${datosVehiculo.numeroAsientos}`;
    caracteristicasList.appendChild(asientosItem);

    // Actualizar la sección del cuerpo con la imagen
    const img = document.createElement("img");
    img.src = datosVehiculo.foto1; // Cambiado de foto a foto1
    img.alt = `Foto de ${datosVehiculo.marca} ${datosVehiculo.modelo}`;
    
    // Añadir la imagen y la lista de características al cuerpo
    cuerpoSection.appendChild(img);
    cuerpoSection.append(caracteristicasList);
  } else {
    console.error(`No se encontraron datos para el vehículo.`);
  }
}
// Llamar a la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  cargarDatosViajes();

  // Agregar el evento de clic al botón reservarViaje
  const botonReservar = document.getElementById('reservarViajeColectivo');
  if (botonReservar) {
    botonReservar.addEventListener('click', () => {
      alert("Hiciste tu reserva de asientos con éxito, te enviaremos los datos por correo");
    });
  } else {
    console.log("El botón 'reservarViajeColectivo' no existe en el DOM");
  }
});