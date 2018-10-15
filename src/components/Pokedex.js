// PRESENTATIONAL COMPONENT
import React from 'react';
import PokeList from './Pokedex/PokeList'

const Pokedex = () => {
    return (
        <div>
            <h1 className="App-title">First Generation Pokedex</h1>
            <h2>main app component</h2>
            < PokeList />
        </div>

    )
}

export default Pokedex