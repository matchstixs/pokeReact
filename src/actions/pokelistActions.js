// PART III
// MADE AFTER REDUCER

import axios from 'axios';
import { FETCH_POKEMON } from './types';
// import { FETCH_POKEMON, FETCH_POKEMON_FAILED } from './types';
// IMPORT ACTION TYPES ^

// ACTION CREATORS
export const fetchPokemonType = 'FETCH_POKEMON_SUCCESS'

export const fetchPokemon = () => {
    console.log('fetching api')
    return function (dispatch) {
        dispatch ({ type: FETCH_POKEMON})
        axios.get('https://pokeapi.co/api/v2/pokemon-species/')
        .then(function(response) {
            dispatch ({ type: fetchPokemonType, payload: response.data})
        })     
    }
}

// export const fetchPokemonType = (pokemon) => {
//     return {
//         type: FETCH_POKEMON,
//         payload: {pokemon}
//     }
// }
    
// export const fetchPokemon = () => {
//     return (dispatch) => {
//         return axios.get('https://pokeapi.co/api/v2/pokemon-species/')
//             .then(response => {
//                 dispatch(fetchPokemonSuccess(response.data))
//             })
//             .catch(error => {
//                 throw(error)
//             })
//     }
// }
    
// return function (dispatch){
//     return API.fetchComments(postId).then(comments => {
//     // dispatch
//       dispatch( {
//         type: BIND_COMMENTS,
//         comments,
//         postId
//       })
//     })
//   }

// DISPATCH IS UNDEFINED




// CLICK ON POKEMON NAME