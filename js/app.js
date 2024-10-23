"use strict";

const busquedaViaje = document.getElementById("formViaje");
const resultadosViaje = document.getElementById("catalogoViaje");
const selectParaderos = document.getElementById("selectParaderos");

const trips = [
  {
    origen: "Aviacion",
    destino: "Huarochiri",
  },
  {
    origen: "Navarrete",
    destino: "San Luis",
  },
  {
    origen: "Salaverry",
    destino: "Jockey Plaza",
  },
  {
    origen: "La Marina",
    destino: "Universidad de Lima",
  },
];

const viajes = [
  {
    origen: "Aviacion",
    destino: "Huarochiri",
    fechaViaje: "2024-11-18",
    horaViaje: "06:00",
    marca: "Mercedes-Benz",
    año: 2015,
    modelo: "Sprinter",
    placa: "KLM-123",
    numeroAsientos: 20,
    foto: "https://place-hold.it/450x375/aaa/black.png&text=450*375",
  },
  {
    origen: "Aviacion",
    destino: "Huarochiri",
    fechaViaje: "2024-11-18",
    horaViaje: "08:00",
    marca: "Toyoya Rush",
    año: 2020,
    modelo: "Sprinter",
    placa: "KLM-123",
    numeroAsientos: 20,
    foto: "https://place-hold.it/450x375/aaa/black.png&text=450*375",
  },
  {
    origen: "Navarrete",
    destino: "San Luis",
    fechaViaje: "2024-11-19",
    horaViaje: "07:00",
    marca: "Toyota",
    año: 2018,
    modelo: "Hiace",
    placa: "ABC-456",
    numeroAsientos: 15,
    foto: "https://place-hold.it/450x375/aaa/black.png&text=450*375",
  },
  {
    origen: "Salaverry",
    destino: "Jockey Plaza",
    fechaViaje: "2024-11-19",
    horaViaje: "08:20",
    marca: "Ford",
    año: 2012,
    modelo: "Transit",
    placa: "DEF-789",
    numeroAsientos: 25,
    foto: "https://place-hold.it/450x375/aaa/black.png&text=450*375",
  },
  {
    origen: "La Marina",
    destino: "Universidad de Lima",
    fechaViaje: "2024-11-17",
    horaViaje: "09:00",
    marca: "Hyundai",
    año: 2010,
    modelo: "H1",
    placa: "GHI-012",
    numeroAsientos: 18,
    foto: "https://place-hold.it/450x375/aaa/black.png&text=450*375",
  },
];

for (let trip of trips) {
  const option = document.createElement("option");
  option.value = `${trip.origen}-${trip.destino}`;
  option.textContent = `${trip.origen} ➡ ${trip.destino}`;

  selectParaderos.appendChild(option);
}

busquedaViaje.addEventListener("submit", (e) => {
  e.preventDefault();

  const [origen, destino] = selectParaderos.value.split("-");

  mostrarResultados(origen, destino);
});

function mostrarResultados(origen, destino) {
  resultadosViaje.innerHTML = "";

  viajes.forEach((viaje, index) => {
    if (viaje.origen === origen && viaje.destino === destino) {
      const container = document.createElement("div");
      container.classList.add("viaje");

      const title = document.createElement("h2");
      title.textContent = `${viaje.origen} ➡ ${viaje.destino}`;

      const img = document.createElement("img");
      img.src = viaje.foto;
      img.width = 100;

      const buttonElement = document.createElement("button");
      buttonElement.textContent = "Reservar viaje";

      container.appendChild(title);
      container.appendChild(img);
      container.appendChild(buttonElement);

      resultadosViaje.appendChild(container);

      // Almacenar los datos del viaje en local storage solo cuando se hace clic en el elemento anchor
      buttonElement.addEventListener("click", () => {
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
          foto: viaje.foto,
        };
        localStorage.clear();
        localStorage.setItem(`viaje${index}`, JSON.stringify(viajeData));
        window.location.href = "./Pages/fichaColectivo.html";
      });
    }
  });
}
