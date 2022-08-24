let noticias = [
    {   
        id:1,
        titulo: "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
        imgUrl: "img/vacunas.webp",
        descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami.En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea...",
        fecha: "07 de Junio del 2021",
        tipoNacional: true
    },
    {
        id:2,
        titulo: "El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
        imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
        descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor...",
        fecha: "02 de Junio del 2021",
        tipoNacional: false
    },
    {
        id:3,
        titulo: "Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
        descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación.Paso a paso para evitar que se empañen...",
        fecha: "01 de Junio del 2021",
        tipoNacional: true
    },
    {
        titulo: "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
        imgUrl: "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
        descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo...",
        fecha: "04 de Junio del 2021",
        tipoNacional: false
    },
    {
        titulo: "Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl: "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
        descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado...",
        fecha: "07 de Junio del 2021",
        tipoNacional: true

    },
    {
        titulo: "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
        imgUrl: "img/vacunas.webp",
        descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami.En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea...",
        fecha: "07 de Junio del 2021",
        tipoNacional: true
    }
]

const cambiarTema= document.querySelector('#cambioTema');
cambiarTema.addEventListener('click', modoOscuro);

function renderizarNoticias(){
    for (let i = 0; i < noticias.length; i++) {
        let contenedor= document.querySelector('.cards');
        

        let card=document.createElement('div');
        card.setAttribute('class','card');
        contenedor.appendChild(card);

        let nacional = document.createElement("p");
        nacional.setAttribute('class','tipoNoticia')
        if (noticias[i].tipoNacional) {
            nacional.innerText = "Nacional";
            nacional.style.backgroundColor = "#1451AE";
        } else {
            nacional.innerText = "Internacional";
            nacional.style.backgroundColor='#F07C19';
        }
        card.appendChild(nacional);

        let img= document.createElement('img');
        img.setAttribute('src', noticias[i].imgUrl);
        card.appendChild(img);

        let titulo= document.createElement('h2');
        titulo.innerText = noticias[i].titulo; 
        card.appendChild(titulo);   
        
        let fecha= document.createElement('p');
        fecha.setAttribute('class', 'fecha');
        fecha.innerText=noticias[i].fecha;
        card.appendChild(fecha);

        let contenido= document.createElement('p');
        contenido.setAttribute('class','contNoticia');
        contenido.innerText=noticias[i].descripcion;
        card.appendChild(contenido);

        
    }
}
renderizarNoticias();

function modoOscuro(){
    document.querySelector("main").classList.toggle("dark");  
}


