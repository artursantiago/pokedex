import { 
  setPokemonsAction,
  PokedexActionTypes} from '../types';
import { PokedexState } from '../types';

const initialState: PokedexState = {
  pokemons: [],
}

export const pokedexReducer = (state = initialState, action: PokedexActionTypes): PokedexState => {
  switch(action.type) {
    case "SET_POKEMONS": {
      return setPokemons(state, action);
    }
    default: 
      return state
  }
}

const setPokemons = (state = initialState, action: setPokemonsAction): PokedexState => {
  return {
    pokemons: action.payload,
  }
}