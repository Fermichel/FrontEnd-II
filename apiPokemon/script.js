const contenedorPokemon= document.querySelector('.contenedor-pokemon');


function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/ability/{id or name}/')
    .then(res=> {
        return res.json()})
    .then(data =>{
        console.log(data)})
}
fetchPokemon();