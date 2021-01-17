import { Pokemon } from '../types';
import { SET_POKEMONS, PokedexActionTypes } from '../types';

export const setPokemons = (pokemons: Pokemon[]): PokedexActionTypes => ({
  type: SET_POKEMONS,
  payload: pokemons,
});
