'use strict';

// Función para cargar todos los datos de los viajes desde el local storage y actualizar el HTML
function cargarDatosViajes() {
  const titulosSection = document.getElementById("titulos");
  const cuerpoSection = document.getElementById("cuerpo");

  // Limpiar secciones antes de agregar nuevos elementos
  titulosSection.innerHTML = "";
  cuerpoSection.innerHTML = "";

  // Iterar sobre todas las claves en el local storage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // Verificar si la clave comienza con "viaje"
    if (key.startsWith("viaje")) {
      const viajeData = JSON.parse(localStorage.getItem(key));

      console.log(viajeData);

      if (viajeData) {
        // Actualizar el título
        const h2 = document.createElement("h2");
        h2.textContent = `${viajeData.marca} ${viajeData.año} ${viajeData.modelo}`;
        titulosSection.appendChild(h2);

        const h3 = document.createElement("h3");
        h3.textContent = `Origen: ${
          viajeData.origen || "Desconocido"
        }, Destino: ${viajeData.destino || "Desconocido"}`;
        titulosSection.appendChild(h3);

        const caracteristicasList = document.createElement("ul");
        // Actualizar la lista de características
        const fechaItem = document.createElement("li");
        fechaItem.textContent = `Fecha del viaje: ${viajeData.fechaViaje}`;
        console.log(fechaItem);
        caracteristicasList.appendChild(fechaItem);

        const horaItem = document.createElement("li");
        horaItem.textContent = `Hora del viaje: ${viajeData.horaViaje}`;
        caracteristicasList.appendChild(horaItem);

        const placaItem = document.createElement("li");
        placaItem.textContent = `Número de placa: ${viajeData.placa}`;
        caracteristicasList.appendChild(placaItem);

        const asientosItem = document.createElement("li");
        asientosItem.textContent = `Número de asientos: ${viajeData.numeroAsientos}`;
        caracteristicasList.appendChild(asientosItem);

        // Actualizar la sección del cuerpo con la imagen
        const img = document.createElement("img");
        img.src = viajeData.foto;
        img.alt = `Foto de ${viajeData.marca} ${viajeData.modelo}`;
        // esta es la imagen
        cuerpoSection.appendChild(img);
        // esta es la lista de características
        cuerpoSection.append(caracteristicasList);
      } else {
        console.error(`No se encontraron datos para la clave: ${key}`);
      }
    }
  }
}

// Llamar a la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  cargarDatosViajes();

  // Agregar el evento de clic al botón reservarViaje
  const botonReservar = document.getElementById('reservarViaje');
  if (botonReservar) {
    botonReservar.addEventListener('click', () => {
      alert("Hiciste tu reserva de asientos con éxito, te enviaremos los datos por correo");
    });
  } else {
    console.log("El botón 'reservarViaje' no existe en el DOM");
  }
});