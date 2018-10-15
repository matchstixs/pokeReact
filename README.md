 TO DO-
-get api action response to show up

TypeError: Cannot read property 'map' of undefined
  25 |     {this.props.fetchPokemon.map((pokemon) => (
  26 |         <li key = {pokemon.url}>
  27 |             {pokemon.name}

fetchPokemon is undefined??









<!-- FIXED ERRORS -->

TypeError: _this.props.fetchPokemon is not a function
-----------------------------------------------
FIXED BY JUST PASSING FUNCTION AS onClick={functionName}

