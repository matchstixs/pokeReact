// PART III - ACTIONS
// MADE AFTER REDUCER INDEX
// AN ACTION TYPE IS THE VALUE FOR TYPE FIELD IN ACTION
// AN ACTION CREATOR IS A FUNCTION THAT RETURNS AN ACTION
// ACTION SIMPLY RETURNS A PLAIN OBJECT LIKE {type : "ADD_TODO", text : "Buy milk"}.

import axios from 'axios'
// I WANT TO USE AXIOS INSTEAD OF FETCH

// ACTION TYPES
export const POKEMON_FAILURE = 'pokeList/POKEMON_FAILURE';
export const POKEMON_LOAD = 'pokeList/POKEMON_LOAD';
export const POKEMON_SUCCESS = 'pokeList/POKEMON_SUCCESS';

// ACTION CREATORS
export const pokemon_failure = (bool) => {
  return {
    type: 'POKEMON_FAILURE',
    failure: bool
  }
}

export const pokemon_load = (bool) => {
  return {
    type: 'POKEMON_LOAD',
    load: bool
  }
}

export const pokemon_sucess = (pokemon) => {
  return {
    type: 'POKEMON_SUCCESS',
    payload: pokemon
  };
}

// API CALL
export const fetchPokemon = () => {
	return (dispatch) => {
    dispatch(POKEMON_LOAD);
    // FETCH REQUEST
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/`)
    .then((response) => response.json())
    .then((pokemon) => dispatch(pokemon_sucess(pokemon))
    )
  }
}