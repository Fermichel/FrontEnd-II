/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona=document.querySelector('.card-header');

  datosPersona.nombre = prompt ('Ingresa tu nombre: ');
  datosPersona.edad = 2022 - parseInt(prompt('Ingrese el año en que naciste: '));
  datosPersona.ciudad = prompt('Ingrese la ciudad donde vive: ');
  datosPersona.interesPorJs= confirm ('Te interesa Java Script? ')?'Si':'No';

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector('#nombre');
  let edad= document.querySelector('#edad');
  let ciudad =document.querySelector('#ciudad');
  let interesPorJs= document.querySelector('#javascript');

  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  interesPorJs.innerHTML = datosPersona.interesPorJs;

  profileBtn.removeEventListener('click', renderizarDatosUsuario);
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  for (let i = 0; i < listado.length; i++) {
    let contenedor=document.querySelector('#fila');
    
    let card= document.createElement('div');
    card.setAttribute('class', 'caja');
    contenedor.appendChild(card);

    let img= document.createElement('img');
    img.setAttribute('src',listado[i].imgUrl);
    img.setAttribute('atl',listado[i].lenguajes);
    card.appendChild(img);

    let leguaje= document.createElement('p');
    leguaje.setAttribute ('class', 'lenguajes');
    leguaje.innerText = listado[i].lenguajes;
    card.appendChild(leguaje);
    
    let bimestre = document.createElement('p');
    bimestre.setAttribute ('class','bimestre');
    bimestre.innerText=listado[i].bimestre;
    card.appendChild(bimestre);

    materiasBtn.removeEventListener('click', recorrerListadoYRenderizarTarjetas);
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */ 
    document.querySelector("#sitio").classList.toggle("dark");  
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keydown', function(evento){
  if(evento.key == "f" || evento.key == 'F'){
    document.querySelector('#sobre-mi').classList.remove('oculto');
  }
})

