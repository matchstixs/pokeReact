// reducers/index.js
// IMPORT ACTIONS
import {POKEMON_FAILURE, POKEMON_LOAD, POKEMON_SUCCESS} from '../actions/pokelistActions';

const initialState = {
    pokemon: [],
    error: null
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case POKEMON_FAILURE:
                return state;
        case POKEMON_LOAD:
                return state;
        case POKEMON_SUCCESS:
            default:
                return {
                    ...state,
                    pokemon: action.payload
                };
    }
};