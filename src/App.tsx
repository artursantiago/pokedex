import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './global.css'
import Routes from './routes';
import { setFavoritePokemons } from './store/actions/favoritePokemonsActions';
import { AppState } from './store';

const App: React.FC = () => {

  const { favoritePokemons } = useSelector((state: AppState)  => state.favoritePokemonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoritePokemonsLocalStorage = localStorage.getItem('favorite-pokemons-list');
    
    if (favoritePokemonsLocalStorage) {
      dispatch(setFavoritePokemons(JSON.parse(favoritePokemonsLocalStorage)));
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('favorite-pokemons-list', JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)}

export default App;
