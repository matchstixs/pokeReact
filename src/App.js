import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// SWITCH DISPLAYS SINGLE COMPONENTS

// IMPORT ALL COMPONENTS 
import Pokedex from './components/Pokedex'
import PokeStats from './components/Pokedex/PokeStats'

// IMPORT PROVIDER
// GIVES ACCESS TO ALL COMPONENTS TO ACCESS THE STORE
import { Provider } from 'react-redux'

// IMPORT STORE
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Route path='/' component={Pokedex } />
          <Route path='/idStats' component={PokeStats}/>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
