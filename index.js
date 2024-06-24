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
  } catch (error) {
    console.log(error);
  }
};

fetchPokemons();
