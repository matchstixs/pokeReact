// PART I

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// ^ALLOWS DISPATCH TO BE CALLED IN ACTIONS
import reducers from './reducers';

const initialState = { pokemon: undefined };

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
    );

export default store;
