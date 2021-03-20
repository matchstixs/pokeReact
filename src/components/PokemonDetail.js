// pokedex info
import React from "react";

const PokemonDetail = ({ pokemon }) => {
  return (
    <div className="pokedex-image">

      {/* Dex # */}
      <h1 className="pokedex-text">
        #{pokemon.id} {pokemon.name}
      </h1>

      {/* Dex image */}
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        className="pokemon-image" 
        alt="pokemon undiscovered"
      />

    </div>
  );
}

export default PokemonDetail;