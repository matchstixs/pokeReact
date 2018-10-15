 TO DO-
-get api action response to show up

TypeError: Cannot read property 'map' of undefined
>  25 |     {this.props.fetchPokemon.map((pokemon) => (
  26 |         <li key = {pokemon.url}>
  27 |             {pokemon.name}

fetchPokemon is undefined??

TypeError: this.props.fetchPokemon is not a function
  9 | class PokeList extends React.Component {
  10 |     componentDidMount() {
> 11 |         this.props.fetchPokemon()
  12 |     }
  13 | 








<!-- FIXED ERRORS -->

TypeError: _this.props.fetchPokemon is not a function
-----------------------------------------------
FIXED BY JUST PASSING FUNCTION AS onClick={functionName}

