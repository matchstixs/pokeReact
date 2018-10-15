// FUNCTIONAL COMPONENT

import React from 'react';
import { connect } from 'react-redux';
// ^allows provider to connect this component to store
import {fetchPokemon} from '../../actions/pokelistActions';
import { bindActionCreators } from 'redux';

class PokeList extends React.Component {
    render() {
        return(
        <div>
            <p>~pokelist component~</p>
            <li
                // key={pokemon.id}
                onClick={fetchPokemon}
            >
            </li>
        </div>
        )};
};

// MAP DISPATCH TO PROPS
const mapDispatchToProps = (dispatch) => {
    return {
        pokelistActions : bindActionCreators({ fetchPokemon : fetchPokemon()}, dispatch)
    }
}

// MAP STATE TO PROPS
const mapStateToProps = (state) => {
    return{
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PokeList);
