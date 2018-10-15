// FUNCTIONAL COMPONENT

import React from 'react';
import { connect } from 'react-redux';
// ^allows provider to connect this component to store
import {fetchPokemon} from '../../actions/pokelistActions';
import { bindActionCreators } from 'redux';

class PokeList extends React.Component {
    componentDidMount() {
        this.props.fetchPokemon()
    }

    render() {
        if (this.props.failure) {
            return <p> fetch failed </p>
        }
        if (this.props.load) {
            return <p> fetch load </p>
        }

        return(
        <div>
            <p>~pokelist component~</p>
            {this.props.fetchPokemon.map((pokemon) => (
                <li key = {pokemon.url}>
                    {pokemon.name}
                </li>
            ))}
        </div>
        )
    };
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
        pokemon: state.pokemon,
        load: state.load,
        failure: state.failure
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PokeList);
