import { 
  HandleFavoritePokemonAction, 
  SetFavoritePokemonsAction,
  FavoritePokemonsActionTypes } from '../actions';
import { PokedexState } from '../';

const initialState: PokedexState = {
  favoritePokemons: {},
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
  const favPokemon = state.favoritePokemons[action.payload.id.toString()];
  if (favPokemon) {
    delete state.favoritePokemons[action.payload.id.toString()]
  } else {
    state.favoritePokemons[action.payload.id.toString()] = action.payload;
  }
  return state
}

const setFavoritePokemons = (state = initialState, action: SetFavoritePokemonsAction): PokedexState => {
  state.favoritePokemons = action.payload;
  return state;
}