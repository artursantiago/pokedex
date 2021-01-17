import { combineReducers } from 'redux';

import { favoritePokemonReducer } from './favoritePokemons';

const rootReducer = combineReducers({ favoritePokemonReducer });

export default rootReducer;