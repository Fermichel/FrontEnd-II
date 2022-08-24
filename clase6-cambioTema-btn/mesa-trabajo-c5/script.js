document.querySelector("#cambioTema").onclick = () =>{
    document.querySelector("body").classList.toggle("dark");
}

let felinos=[
    {
        titulo: "El tigre",
        urlImg: "imagenes/tiger.jpg",
        contenido: "El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño."
    },
    {
        titulo: "El leon",
        urlImg: "imagenes/leon.jpg",
        contenido: "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India"
    },
    {
        titulo: "El leopardo",
        urlImg: "imagenes/leopardo.jpg",
        contenido: "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico)."
    },
    {
        titulo: "La pantera negra",
        urlImg: "imagenes/pantera-negra.jpg",
        contenido: "La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales."
    },
    {
        titulo: "El jaguar",
        urlImg: "imagenes/jaguar.jpg",
        contenido: "El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo)."
    },
    {
        titulo: "El guepardo",
        urlImg: "imagenes/chita.jpg",
        contenido: "El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros."
    }
]

let cont = document.querySelector('.contenedor');

//-------- primera opcion -------------

// function crearDatos(array,cont){
//     let card =`
//     <div class= "item">
//         <img src= '${array.urlImg}'>
//         <h2>${array.titulo}</h2>
//         <p>${array.contenido}</p>
//     </div>`;
//     cont.innerHTML+=card;
// }

//------- segunda opcion-----------

function crearDatos(array,cont){
    //--creamos las card con su clase y la colocamos en el contenedor correspondiente---
    let card= document.createElement('div');
    card.setAttribute('class','item');
    cont.appendChild(card);
    //--creamos el img ---
    let img= document.createElement('img');
    img.setAttribute('src',array.urlImg);
    card.appendChild(img);
    //--creamos el titulo--
    let titulo=document.createElement('h2');
    titulo.innerText= array.titulo;
    card.appendChild(titulo);
    //--creamos el contenido--
    let contenido= document.createElement('p');
    contenido.innerText=array.contenido;
    card.appendChild(contenido);

}
//-- comentar para usar un tipo de for--
// for (const array of felinos) {
//     crearDatos( array, cont )
// }

//--usando un forEach--
// felinos.forEach(function(array) {
//     crearDatos(array,cont)
// });

//-- usando un for comun--
for(i=0;i<felinos.length;i++){
   crearDatos(felinos[i],cont)
}
