export interface Pokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: string[]
}

/** Favorite Pokemons Actions Types */

export const HANDLE_FAVORITE_POKEMON = 'HANDLE_FAVORITE_POKEMON';
export const SET_FAVORITE_POKEMONS = 'SET_FAVORITE_POKEMONS';

export type HandleFavoritePokemonAction = {
  type: typeof HANDLE_FAVORITE_POKEMON,
  payload: Pokemon
}

export type SetFavoritePokemonsAction = {
  type: typeof SET_FAVORITE_POKEMONS,
  payload: Pokemon[]
}

export type FavoritePokemonsActionTypes = HandleFavoritePokemonAction | SetFavoritePokemonsAction;

/** Pokedex Actions Types */

export const SET_POKEMONS = 'SET_POKEMONS';

export type setPokemonsAction = {
  type: typeof SET_POKEMONS,
  payload: Pokemon[]
}


export type PokedexActionTypes = setPokemonsAction;

/** States */

export interface PokedexState {
  pokemons: Pokemon[],
}

export interface FavoritePokemonsState {
  favoritePokemons: Pokemon[],
}