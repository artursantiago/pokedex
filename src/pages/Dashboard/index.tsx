import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css'
import pokeball from '../../assets/pokeball.svg'
import Header from '../../components/Header';
import Search from '../../components/Search';
import GridPokemons from '../../components/GridPokemons';
import { getPokemonsDynamically } from '../../services/pokemon';
import { Pokemon } from '../../store/actions';
import { setFavoritePokemons } from '../../store/actions';
import { AppState } from '../../store';

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const { favoritePokemons } = useSelector((state: AppState) => state.favoritePokemonReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const favoritePokemonsLocalStorage = localStorage.getItem('favorite-pokemons-list');
    
    if (favoritePokemonsLocalStorage) {
      dispatch(setFavoritePokemons(JSON.parse(favoritePokemonsLocalStorage)));
    }

    async function loadPokemons(limit: number, offset?: number) {
      const newPokemons =  await getPokemonsDynamically(limit, offset);
      setPokemons(newPokemons);
    }
    loadPokemons(20);
  }, [])
  
  useEffect(() => {
    localStorage.setItem('favorite-pokemons-list', JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <Search />
          <GridPokemons pokemons={pokemons} />
        </main>
        <img className="pokeball" src={pokeball} alt=""/>
      </div>
    </>
  );
}

export default Dashboard;