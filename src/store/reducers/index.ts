import { combineReducers } from 'redux';

import { favoritePokemonReducer } from './favoritePokemonsReducer';
import { pokedexReducer } from './pokedexReducer';

const rootReducer = combineReducers({ favoritePokemonReducer, pokedexReducer });

export default rootReducer;