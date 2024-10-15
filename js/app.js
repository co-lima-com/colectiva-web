'use strict';

const busquedaViaje = document.getElementById('formViaje');
const resultadosViaje = document.getElementById('catalogoViaje');

const viajes = [{
  origen: 'Aviacion',
  destino: 'Huarochiri',
  fechaViaje: '2024-11-18',
  horaViaje: '06:00'
},{
  origen: 'Navarrete',
  destino: 'San Luis',
  fechaViaje: '2024-11-19',
  horaViaje: '07:00'
},{
  origen: 'Salaverry',
  destino: 'Jockey Plaza',
  fechaViaje: '2024-11-19',
  horaViaje: '08:20'
},{
  origen: 'La Marina',
  destino: 'Universidad de Lima',
  fechaViaje: '2024-11-17',
  horaViaje: '09:00'
}];

busquedaViaje.addEventListener('submit', (e) => {
  e.preventDefault();

  const origen = document.getElementById('queryInicio').value.trim();
  const destino = document.getElementById('queryLlegada').value.trim();
  const fechaViaje = document.getElementById('date').value;
  const horaViaje = document.getElementById('time').value;

  mostrarResultados(origen, destino, fechaViaje, horaViaje);
});

function mostrarResultados(origen, destino, fechaViaje, horaViaje) {
  resultadosViaje.innerHTML = '';

  viajes.forEach((viaje, index) => {
    if (viaje.origen === origen && viaje.destino === destino && viaje.fechaViaje === fechaViaje) {
      const listaElement = document.createElement('li');
      listaElement.textContent = `Viaje ${index + 1}: ${viaje.origen} -> ${viaje.destino}, ${viaje.fechaViaje} - ${viaje.horaViaje}`;
      resultadosViaje.appendChild(listaElement);
    }
  });
}