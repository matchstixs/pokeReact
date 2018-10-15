// PART II
// MADE AFTER STORE

import { combineReducers } from 'redux';

import { pokemonFailed, pokemonLoad, pokemon} from './pokeList-reducer';

export default combineReducers ({
  pokemonFailed,
  pokemonLoad,
  pokemon
});