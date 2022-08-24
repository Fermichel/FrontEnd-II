//---------- RULETA------------------
// Crear una función que sortee un numero random ganador, luego haga un ciclo
// desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
// iteración. Pero en el caso del número que sea el ganador, imprimir por consola
// “Numero ganador:” seguido del número.
function generarRandom(min, max){
    let numero = Math.floor( Math.random() * (max - min) + min);
    return numero;
}

let finalRuleta = 25;
let sorteo= generarRandom(1,3);

function tirarRuleta(num){
    for(i=1; i<=finalRuleta; i++){
        let mje= "El numero de iteracion es: "+i;
        if(num === i){
            mje="El numero ganador es: "+i;
        }
        console.log(mje);
        }
}
tirarRuleta(finalRuleta);

//-----------TRAGAMONEDAS-------------------
// Crear una función que reciba un número que será la cantidad de aciertos del
// usuario sobre el total de casillas disponibles. La función deberá devolver el
// monto del premio, el cual es proporcional al número de aciertos.

const premioTotal = 2500;
const casilla = 10;
let aciertos= generarRandom(0,10);
function calcular(aciertos){
    return premioTotal*(aciertos/casilla);
}
console.log("Con "+aciertos+ " aciertos el premio es de: "+ calcular(aciertos));



//-----------LOTERIA----------
// Crear un programa que consista en una apuesta donde el usuario tenga que
// ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
// en pantalla y se calcule aleatoriamente un resultado numérico con 4 posibles
// casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1,
// gana $10000; si es 2 gana $10000, y si es 3 gana $100000.

let ingresoUsuario= prompt("Ingrese lo que soño el dia de hoy y le diremos cuanto dinero ganó: ");

function resultadoLoteria() { 
    let loteria= generarRandom(0,3);
    let premio=0;
    switch(loteria){
        case 0:
            premio=1000;
        break;
        case 1:
            premio=10000;
        break;
        case 2:
            premio=10000;
        break;
        case 3:
            premio= 100000;
        break;
    } 
    return premio         
}
console.log("El premio para el sueño: "+ ingresoUsuario+" es de $"+resultadoLoteria());
