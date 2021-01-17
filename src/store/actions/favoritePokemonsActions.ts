import { Pokemon } from '../types';
import { 
  HANDLE_FAVORITE_POKEMON, SET_FAVORITE_POKEMONS,
  FavoritePokemonsActionTypes,} from '../types';

export const handleFavoritePokemon = (pokemon: Pokemon): FavoritePokemonsActionTypes => ({
  type: HANDLE_FAVORITE_POKEMON,
  payload: pokemon,
});

export const setFavoritePokemons = (favoritePokemons: Pokemon[]): FavoritePokemonsActionTypes => ({
  type: SET_FAVORITE_POKEMONS,
  payload: favoritePokemons,
});

