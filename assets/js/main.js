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
 
    poke.forEach((pokemon)=> {
      
      pokemon.addEventListener('click', (e)=>{
        let click = e.currentTarget.id
  
      console.log(pokemons);
      

        if (click === pokemons[0].name) {
          console.log(pokemons[0].name);
          showDetails(pokemons[0])
        }else if(click === pokemons[1].name){
          console.log(pokemons[1].name);
          showDetails(pokemons[1])
        }else if(click === pokemons[2].name){
          console.log(pokemons[2].name);
          showDetails(pokemons[2])
        }else if(click === pokemons[3].name){
          console.log(pokemons[3].name);
          showDetails(pokemons[3])
        }else if(click === pokemons[4].name){
          console.log(pokemons[4].name);
          showDetails(pokemons[4])
        }else if(click === pokemons[5].name){
          console.log(pokemons[5].name);
          showDetails(pokemons[5])
        }else if(click === pokemons[6].name){
          console.log(pokemons[6].name);
          showDetails(pokemons[6])
        }else if(click === pokemons[7].name){
          console.log(pokemons[7].name);
          showDetails(pokemons[7])
        }else if(click === pokemons[8].name){
          console.log(pokemons[8].name);
          showDetails(pokemons[8])
        }else if(click === pokemons[9].name){
          console.log(pokemons[9].name);
          showDetails(pokemons[9])
        }else if(click === pokemons[10].name){
          console.log(pokemons[10].name);
          showDetails(pokemons[10])
        }else if(click === pokemons[11].name){
          console.log(pokemons[11].name);
          showDetails(pokemons[11])
        }
        
       
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


function showDetails(pokemon){

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

  



