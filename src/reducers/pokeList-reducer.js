// reducers/index.js
import { FETCH_POKEMON} from '../actions/types';

const initialState = {
    pokemon: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state;
    }
}