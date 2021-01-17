export const HANDLE_FAVORITE_POKEMON = 'HANDLE_FAVORITE_POKEMON';
export const SET_FAVORITE_POKEMONS = 'SET_FAVORITE_POKEMONS';

export interface Pokemon {
  id: number,
  name: string,
  imageUrl: string,
  types: string[]
}

export type HandleFavoritePokemonAction = {
  type: typeof HANDLE_FAVORITE_POKEMON,
  payload: Pokemon
}

export type SetFavoritePokemonsAction = {
  type: typeof SET_FAVORITE_POKEMONS,
  payload: Pokemon[]
}

export type FavoritePokemonsActionTypes = HandleFavoritePokemonAction | SetFavoritePokemonsAction;

export const handleFavoritePokemon = (pokemon: Pokemon): FavoritePokemonsActionTypes => ({
  type: HANDLE_FAVORITE_POKEMON,
  payload: pokemon,
});

export const setFavoritePokemons = (favoritePokemons: Pokemon[]): FavoritePokemonsActionTypes => ({
  type: SET_FAVORITE_POKEMONS,
  payload: favoritePokemons,
});

