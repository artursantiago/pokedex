import { createStore, Store } from 'redux';

import { Pokemon } from './actions';
import rootReducer from './reducers';

export interface PokedexState {
  favoritePokemons: {[id: string]: Pokemon}
}

const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
export default store;