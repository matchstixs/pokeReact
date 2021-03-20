import ApiService from "./ApiService";

// getKantoPokemon
export const getKantoPokemon = async () => {
    let response = await ApiService.get(`https://pokeapi.co/api/v2/pokemon`, {
      limit: 151,
    });
    return response.results;
};

// getPokemonData
export const getPokemonData = async (url) => {
    let response = await ApiService.get(url);
    return response;
};

// getPokemonKantoData
export const getPokemonKantoData = async () => {
    //get pokemon list
    let pokemons = await getKantoPokemon();

    //iterate data to get list of all data
    let pokemonPromises = pokemons.map((p) => getPokemonData(p.url));

    //return all the pokemon data
    return await Promise.all(pokemonPromises);
};