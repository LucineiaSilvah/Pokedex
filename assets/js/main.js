const listaPokemons = document.querySelector(".pokemons");
const modal = document.querySelector('.modal')
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const maxRecords = 11;
const limit = 5;
let offset = 0;



function loadPokemonItens(offset, limit) {
  api
    .buscaPokemon(offset, limit)
    .then((pokemons = []) => {
      
      const ListaNaTela = pokemons.map((pokemon) =>
      
            `
    <li class="pokemon ${pokemon.type}" id="${pokemon.name}" >
    <span class="number">#${pokemon.number}</span>
    <span class="name"> ${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
      ${pokemon.types
        .map((type) => `<li class="type  ${type}">${type} </li>`)
        .join('')}
        
      </ol>
      <img src="${pokemon.photo}" alt=" ${pokemon.name}">
    </div>
  </li>
    ` )
    .join('')
    listaPokemons.innerHTML += ListaNaTela;
    let poke = document.querySelectorAll('.pokemon')
    
     poke.forEach((item)=> {
      
      item.addEventListener('click', ()=>{
    

    
      showDetails(pokemons[0])

      })
     })
    })
    
}

loadPokemonItens(offset, limit)

loadMoreBtn.addEventListener("click", () => {
  offset += limit
   const qtdRecords = offset + limit
  if(qtdRecords >=  maxRecords){
  const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)
    loadMoreBtn.parentElement.removeChild(loadMoreBtn)
  }else{

    loadPokemonItens(offset, limit);
  }

});


function showDetails(pokemon, id){

  listaPokemons.innerHTML = ''
  modal.style.visibility = 'visible'
   modal.innerHTML = `
   
    <a href="index.html"><i class="fa-solid fa-left-long" style="color: #f7f7f8;"></i></a>
   
 <li class="pokemon ${pokemon.type}" id="${pokemon.id}" >
 <span class="number">#${pokemon.number}</span>
 <span class="name"> ${pokemon.name}</span>
 <div class="detail">
   <ol class="types">
   ${pokemon.types
     .map((type) => `<li class="type  ${type}">${type} </li>`)
     .join('')}
     
   </ol>
   <img src="${pokemon.photo}" alt=" ${pokemon.name}">
   <div class="fullDetails">
   <nav>
     <ul>
       <li>About</li>
       <li>Bass Stats</li>
       <li>Evolution</li>
       <li>Movies</li>
     </ul>
   </nav>
</div>
</div>

</li>
 

   `
  }

  



