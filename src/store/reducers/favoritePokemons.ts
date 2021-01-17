import { 
  HandleFavoritePokemonAction, 
  SetFavoritePokemonsAction,
  FavoritePokemonsActionTypes } from '../actions';
import { PokedexState } from '../';

const initialState: PokedexState = {
  favoritePokemons: [],
}

export const favoritePokemonReducer = (state = initialState, action: FavoritePokemonsActionTypes): PokedexState => {
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

const handleFavoritePokemon = (state = initialState, action: HandleFavoritePokemonAction): PokedexState => {
  const favPokemonIndex = state.favoritePokemons.findIndex(pokemon => pokemon.id === action.payload.id);
  console.log(favPokemonIndex);
  
  if (favPokemonIndex != -1) {
  console.log(1);
    return {
      favoritePokemons: state.favoritePokemons.filter(pokemon => pokemon.id !== action.payload.id)
    };
  } 
  console.log(2);
  
  return {
    favoritePokemons: [...state.favoritePokemons, action.payload]
  }
}

const setFavoritePokemons = (state = initialState, action: SetFavoritePokemonsAction): PokedexState => {
  state.favoritePokemons = action.payload;
  return state;
}