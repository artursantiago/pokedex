import { 
  HandleFavoritePokemonAction, 
  SetFavoritePokemonsAction,
  FavoritePokemonsActionTypes } from '../types';
import { FavoritePokemonsState } from '../types';

const initialState: FavoritePokemonsState = {
  favoritePokemons: [],
}

export const favoritePokemonReducer = (state = initialState, action: FavoritePokemonsActionTypes): FavoritePokemonsState => {
  switch(action.type) {
    case "HANDLE_FAVORITE_POKEMON": {
      return handleFavoritePokemon(state, action);
    }
    case "SET_FAVORITE_POKEMONS":
      return setFavoritePokemons(state, action);
    default: 
      return state
  }
}

const handleFavoritePokemon = (state = initialState, action: HandleFavoritePokemonAction): FavoritePokemonsState => {
  const favPokemonIndex = state.favoritePokemons.findIndex(pokemon => pokemon.id === action.payload.id);
  
  if (favPokemonIndex !== -1) {
    return {
      ...state,
      favoritePokemons: state.favoritePokemons.filter(pokemon => pokemon.id !== action.payload.id)
    };
  } 
  
  return {
    ...state,
    favoritePokemons: [...state.favoritePokemons, action.payload]
  }
}

const setFavoritePokemons = (state = initialState, action: SetFavoritePokemonsAction): FavoritePokemonsState => {
  state.favoritePokemons = action.payload;
  return {
    favoritePokemons: action.payload
  };
}