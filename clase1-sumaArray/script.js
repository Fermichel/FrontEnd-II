
// let sumaArray = [1,2,4,8];
// function suma(sumaArray){
//     let contador = sumaArray[0];
//     for (let j = 1; j < sumaArray.length; j++) {
//         contador += sumaArray[j];
//         console.log(contador);
//     }
// }

// suma(sumaArray)

function sumarElementosArray(array, cb) {
    console.log("\n---\tArray ---");
    array.reduce((acumulador, e) => {
        acumulador += e;
        cb("Elemento actual: " + e + "\nEl acumulador va: " + acumulador);
        return acumulador;
    }, 0);
}

let array1 = [1,2,4,8];

// Console.log()
sumarElementosArray(array1, console.log);

