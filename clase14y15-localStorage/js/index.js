
/* --------------------------- variables globales --------------------------- */

const formulario = document.querySelector("form");
const inputComentario = document.querySelector("#comentario");
const historialTexto = document.querySelector(".comentarios");

const botonReset = document.createElement("button");
botonReset.innerText = "RESETEAR";
botonReset.setAttribute("type", "reset");
formulario.appendChild(botonReset);

let listaComentarios = [];

/* --------------------------- leer datos storage --------------------------- */
function leerComentarios(){
  let datos = localStorage.getItem("historialTexto");

  if( datos ){
      listaComentarios = JSON.parse(datos);
      renderidarTexto(listaComentarios);
  }

}

/* ------------------- guardar textos en el local storage ------------------- */

function guardarComentario(listado) {
  localStorage.setItem("historialTexto", JSON.stringify(listado));
}

/* ------------------------------- normalizar ------------------------------- */

function normalizar(input) {
  let texto = input.value.trim();
  return texto;
}

/* -------------------------- renderizar con fecha -------------------------- */

function renderidarTexto(listado) {
  historialTexto.innerHTML = "";

  listado.forEach((texto) => {
    let parrafo = document.createElement("p");
    let fecha = new Date();

    let dia = fecha.getDay()
    let mes = fecha.getMonth();
    let year = fecha.getFullYear();
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    
    parrafo.textContent = `${texto}- ${dia}/${mes}/${year} -  ${hora}:${minutos}`;
    historialTexto.appendChild(parrafo);
  });
}

/* -------------------------- leer datos ingresados ------------------------- */

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let texto = normalizar(inputComentario);

  if (texto != "") {
    listaComentarios.push(texto);
    console.log(texto);
    inputComentario.value = "";

    guardarComentario(listaComentarios);
    renderidarTexto(listaComentarios);
  }
});

/* --------------------------- resetear los datos --------------------------- */

formulario.addEventListener("reset", function (evento) {
  evento.preventDefault;

  historialTexto.innerHTML = "";
  listaComentarios = [];

  localStorage.clear();
});

leerComentarios();