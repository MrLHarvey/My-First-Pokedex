const poke_container = document.getElementById("poke-container");
// console.log(poke-container)
const pokemonCount = 150;
const fetchPokemons = async () => {
  for (let id = 1; id <= pokemonCount; id++) {
    //we are going to call a function that makes the api call
    await getPokemon(id);
  }
};
const getPokemon = async (id) => {
  try {
    //api call to the pokeapi
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon);
    createPokemonCard(pokemon); //{}
  } catch (error) {
    console.log(error);
  }
};
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  //console.log(pokemonEl)

  const pokemonInnerHTML = `<div class="pokemon">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">${pokemon.id}</span>
          <h3 class="name">${pokemon.name}</h3>
          <small class="type"> Type: <span>${pokemon.types[0].type.name}</span></small>
        </div>`;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
  // console.log(pokemonEl)
};
fetchPokemons();

/*<div class="pokemon">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">#001</span>
          <h3 class="name">Bulbasaur</h3>
          <small class="type"> Type: <span>grass</span></small>
        </div>*/
