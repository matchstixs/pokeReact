// PART III
// MADE AFTER REDUCER

import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON'
export const FETCH_POKEMON_FAILED = 'FETCH_POKEMON_FAILED';
// EXPORT ACTION TYPES

// ACTION CREATORS
export const fetchPokemon = () => {
    console.log('fetching data')
    return dispatch => {
        const pApi = axios.get('https://pokeapi.co/api/v2/pokemon-species/')
        console.log(pApi)
        .then(response => dispatch ({ 
            type : fetchPokemon, payload: response.data
            })
        .catch(error => {
            throw(error)
            })
        )}
};



// CLICK ON POKEMON NAME