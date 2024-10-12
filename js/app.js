'use strict';

const busquedaViaje = document.getElementById('formViaje')
const resultadosViaje = document.getElementById('catalogoViaje')

let viajes = [];

viajes.push({
  origen: 'Aviacion',
  destino: 'Huarochiri',
  fechaViaje: '2024-11-18',
  horaViaje: '06:00'
});

viajes.push({
  origen: 'Navarrete',
  destino: 'San Luis',
  fechaViaje: '2024-11-19',
  horaViaje: '07:00'
});

viajes.push({
  origen: 'Salaverry',
  destino: 'Jockey Plaza',
  fechaViaje: '2024-11-19',
  horaViaje: '08:20'
});

viajes.push({
  origen: 'La Marina',
  destino: 'Universidad de Lima',
  fechaViaje: '2024-11-17',
  horaViaje: '09:00'
});

busquedaViaje.addEventListener('submit', (e) => {
  e.preventDefault();

  const origen = document.getElementById('queryInicio').value;
  const destino = document.getElementById('queryLlegada').value;
  const fechaViaje = document.getElementById('date').value;
  const horaViaje = document.getElementById('time').value;

  const viajeFormulario = {
    origen,
    destino,
    fechaViaje,
    horaViaje
  };

  mostrarResultados();

});

function mostrarResultados() {
  resultadosViaje.innerHTML = '';

  viajes.forEach((viajeExistente, index) => {

    if (viajeExistente.origen === viaje.origen && viajeExistente.destino === viaje.destino) {
      const listaElement = document.createElement('li');
      listaElement.textContent = 'viaje $(index +1)' ${ viajeExistente.origen } -> ${ viajeExistente.destino }, ${ viajeExistente.fechaViaje } - ${ viajeExistente.fechaRetorno } `; 

      resultadosViaje.appendChild(listaElement);

    }
  });
    
};