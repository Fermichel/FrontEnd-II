//Equipo 5

//URL
// https://images.unsplash.com/photo-1573435567032-ff5982925350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80

// https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80

/* ETAPA 3
- Nodo padre: app
- Nodo hijo repetitivo: card
- Explicación:
    1/utilizamos el template literals dentro de una funcion pasando el parametro de la url, dentro de la funcion el contenido de la card con lo solicitado el trabajo.
    2/generamos una funcion para crear la cantidad de las cards

*/


let app = document.getElementById('app');
let galeria = [];

//----ejemplo02------
function crearDatos(url){
    let card =`
    <div class= "card">
        <a class='ruta-img' href='${url}'>
        <img class='img-responsive' src= '${url}' alt='Gatito'>
        </a>
    </div>`;
    app.innerHTML+=card;
}
for (let i = 1; i <= 3; i++) {
    let url = prompt('Ingrese la URL de la imagen');
    galeria.push(url);
    crearDatos(url);
    
}


//-------- ejemplo 01------
/*function crearCard(url){
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let ruta= document.createElement("a");
    ruta.setAttribute('class', 'ruta-img');
    ruta.setAttribute('href',url);

    let imagen = document.createElement('img');
    imagen.setAttribute('class', 'img-responsive');
    imagen.setAttribute('src', url);
    imagen.setAttribute('alt', 'Gatito y Perrito');

    card.appendChild( ruta );
    ruta.appendChild(imagen);
    app.appendChild(card);
}*/


/*for (let i = 1; i <= 3; i++) {
    let url = prompt('Ingrese la URL de la imagen');
    galeria.push(url);
    crearCard(url);
    
}*/



