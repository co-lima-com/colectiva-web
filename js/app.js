'use strict';

const busquedaViaje = document.getElementById('formViaje');
const resultadosViaje = document.getElementById('catalogoViaje');

const viajes = [{
  origen: 'Aviacion',
  destino: 'Huarochiri',
  fechaViaje: '2024-11-18',
  horaViaje: '06:00',
  marca: 'Mercedes-Benz',
  año: 2015,
  modelo: 'Sprinter',
  placa: 'KLM-123',
  numeroAsientos: 20,
  foto: 'https://example.com/foto1.jpg'
},{
  origen: 'Navarrete',
  destino: 'San Luis',
  fechaViaje: '2024-11-19',
  horaViaje: '07:00',
  marca: 'Toyota',
  año: 2018,
  modelo: 'Hiace',
  placa: 'ABC-456',
  numeroAsientos: 15,
  foto: 'https://example.com/foto2.jpg'
},{
  origen: 'Salaverry',
  destino: 'Jockey Plaza',
  fechaViaje: '2024-11-19',
  horaViaje: '08:20',
  marca: 'Ford',
  año: 2012,
  modelo: 'Transit',
  placa: 'DEF-789',
  numeroAsientos: 25,
  foto: 'https://example.com/foto3.jpg'
},{
  origen: 'La Marina',
  destino: 'Universidad de Lima',
  fechaViaje: '2024-11-17',
  horaViaje: '09:00',
  marca: 'Hyundai',
  año: 2010,
  modelo: 'H1',
  placa: 'GHI-012',
  numeroAsientos: 18,
  foto: 'https://example.com/foto4.jpg'
}];

busquedaViaje.addEventListener('submit', (e) => {
  e.preventDefault();

  const origen = document.getElementById('queryInicio').value.trim();
  const destino = document.getElementById('queryLlegada').value.trim();

  mostrarResultados(origen, destino);
}); 

function mostrarResultados(origen, destino) {
  resultadosViaje.innerHTML = '';

  viajes.forEach((viaje, index) => {
    if (viaje.origen === origen && viaje.destino === destino) {
      const anchorElement = document.createElement('a');
      anchorElement.textContent = `Viaje ${index + 1}: ${viaje.origen} -> ${viaje.destino}`;
      anchorElement.href = './Pages/fichaColectivo.html';
      resultadosViaje.appendChild(anchorElement);

      // Almacenar los datos del viaje en local storage solo cuando se hace clic en el elemento anchor
      anchorElement.addEventListener('click', () => {
        const viajeData = {
          origen: viaje.origen,
          destino: viaje.destino,
          fechaViaje: viaje.fechaViaje,
          horaViaje: viaje.horaViaje,
          marca: viaje.marca,
          año: viaje.año,
          modelo: viaje.modelo,
          placa: viaje.placa,
          numeroAsientos: viaje.numeroAsientos,
          foto: viaje.foto
        };
        localStorage.setItem(`viaje${index}`, JSON.stringify(viajeData));
      });
    }
  });
}
