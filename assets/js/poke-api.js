const api = {}

function convertApiDetailToPokemon(pokemonsDetails){
  const pokemon = new Pokemon()

  pokemon.number = pokemonsDetails.id
  pokemon.name = pokemonsDetails.name
 const types = pokemonsDetails.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types  

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokemonsDetails.sprites.other.dream_world.front_default

  return pokemon
}

api.BuscaDetalhes = (pokemon) => {
return  fetch(pokemon.url).then(res => res.json())
.then(convertApiDetailToPokemon)
}
api.buscaPokemon = (offset = 0 , limit = 10)=>{
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

 return fetch(url)
 .then((response) => response.json())
 .then((dados) => dados.results
 )
 .then((pokemons) => pokemons.map( api.BuscaDetalhes))
 .then((requiDetails) => Promise.all(requiDetails))
 .then((pokemonsDetails) => pokemonsDetails)
 
}

