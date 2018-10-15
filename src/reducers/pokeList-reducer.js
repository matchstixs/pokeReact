// reducers/index.js
// IMPORT ACTIONS
import {POKEMON_FAILURE, POKEMON_LOAD, POKEMON_SUCCESS} from '../actions/pokelistActions';

const initialState = {
    pokemon: [],
    error: null
}

export const pokemonFailed = (state = false, action) => {
    switch(action.type) {
        case POKEMON_FAILURE:
            return action.failure;
        default:
            return state;
    }
}

export const pokemonLoad = (state = false, action) => {
    switch(action.type) {
        case POKEMON_LOAD:
            return action.load;
        default:
            return state;
    }
}

export const pokemon = (state = initialState, action) => {
    switch(action.type){
        case POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.pokemon
            }
        default:
            return state;
    }
}